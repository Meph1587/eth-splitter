import { ethers } from 'hardhat';
import { BigNumber, Contract, Signer } from 'ethers';
import { expect } from 'chai';
import { EthSplitter} from '../typechain';
import * as chain from '../helpers/chain';
import * as deploy from '../helpers/deploy';

describe('EthSplitter', function () {

    let splitter: EthSplitter;

    // main characters
    let dao: Signer, daoAddress: string;
    let happyPirate: Signer, happyPirateAddress: string;
    let angryParrot: Signer, angryParrotAddress: string;

    // contract params
    let recipients;
    let shares;

    let snapshotId: any;

    before(async function () {
        await setupSigners();

        // split 50/50
        recipients = [angryParrotAddress, happyPirateAddress];
        shares = [5000,5000];

        // deploy
        splitter = (await deploy.deployContract('EthSplitter',[recipients, shares, daoAddress])) as EthSplitter;
       
        await chain.setTime(await chain.getCurrentUnix());
    });

    beforeEach(async function () {
        snapshotId = await ethers.provider.send('evm_snapshot', []);
    });

    // reset to snapshot
    afterEach(async function () {
        const ts = await chain.getLatestBlockTimestamp();

        await ethers.provider.send('evm_revert', [snapshotId]);

        await chain.moveAtTimestamp(ts + 5);
    });

    describe('General tests', function () {
        it('general checks', async function () {

            // is deployed
            expect(splitter.address).to.not.equal(0);

            // ownership was transferred
            expect(await splitter.owner()).to.be.equal(daoAddress);
            
            // correctly initialized
            expect(await splitter.getRecipients(0)).to.be.equal(recipients[0]);
            expect(await splitter.getShares(0)).to.be.equal(shares[0]);
            expect(await splitter.getRecipients(1)).to.be.equal(recipients[1]);
            expect(await splitter.getShares(1)).to.be.equal(shares[1]);
           
        });

    });

    describe('Split Eth', function () {
        it('can split eth correctly', async function () {

            // fund splitter
            await dao.sendTransaction({
                to: splitter.address,
                value: ethers.utils.parseEther("1.0"), // Sends exactly 1.0 ETH
              });
            
            // check funding 
            expect(await ethers.provider.getBalance(splitter.address)).to.eq(ethers.utils.parseEther("1.0"));

            // balances before split
            let defaultBalance = await ethers.provider.getBalance(recipients[0]);

            //splits ETH balance among recipients
            await splitter.distribute();
            
            // splitter is empty
            expect(await ethers.provider.getBalance(splitter.address)).to.eq(ethers.utils.parseEther("0"));

            // recipients have received ETH
            expect(
                await ethers.provider.getBalance(recipients[0])
            ).to.eq(
                defaultBalance.add(ethers.utils.parseEther("0.5"))
            );
            expect(
                await ethers.provider.getBalance(recipients[1])
            ).to.eq(
                defaultBalance.add(ethers.utils.parseEther("0.5"))
            );
        });


    });

    describe('Update Distribution', function () {


        it('can update distribution as owner', async function () {

            // update shares
            await splitter.connect(dao).updateShares(recipients, [2000,8000]);

            expect(await splitter.getShares(0)).to.be.equal(2000);
            expect(await splitter.getShares(1)).to.be.equal(8000);

            // update addresses
            await splitter.connect(dao).updateShares([happyPirateAddress, angryParrotAddress], [2000,8000]);

            expect(await splitter.getRecipients(0)).to.be.equal(happyPirateAddress);
            expect(await splitter.getRecipients(1)).to.be.equal(angryParrotAddress);
        });

        it('reverts if update not from owner', async function () {

            // revert 
            await expect(splitter.connect(happyPirate).updateShares(recipients, [2000,8000])).to.be.revertedWith(
                "Ownable: caller is not the owner"
            );
        });

    });

    async function setupSigners () {
        const accounts = await ethers.getSigners();
        dao = accounts[0];
        happyPirate = accounts[1];
        angryParrot = accounts[2];

        daoAddress = await dao.getAddress();
        happyPirateAddress = await happyPirate.getAddress();
        angryParrotAddress = await angryParrot.getAddress();
    }

});