import { ethers } from 'hardhat';
import { BigNumber, Contract, Signer } from 'ethers';
import { expect } from 'chai';
import {GnosisSafeReceiverProxy, WETHMock} from '../typechain';
import * as chain from '../helpers/chain';
import * as deploy from '../helpers/deploy';

describe('EthSplitter', function () {

    let proxy: GnosisSafeReceiverProxy;

    // main characters
    let dao: Signer, daoAddress: string;
    let happyPirate: Signer, happyPirateAddress: string;
    let angryParrot: Signer, angryParrotAddress: string;

    let weth: WETHMock;
   
    let snapshotId: any;

    before(async function () {
        await deployMocks();
        await setupSigners();

        proxy = (await deploy.deployContract('GnosisSafeReceiverProxy',[daoAddress, weth.address])) as GnosisSafeReceiverProxy;

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
            expect(proxy.address).to.not.equal(0);

            // ownership was transferred
            expect(await proxy.owner()).to.be.equal(daoAddress);
            
            // correctly initialized params
            expect(await proxy.getSafe()).to.be.equal(daoAddress);
           
        });

    });

    describe('Forward Eth', function () {
        it('can forward eth correctly', async function () {

            // send funds to splitter for distribution
            await dao.sendTransaction({
                to: proxy.address,
                value: ethers.utils.parseEther("1.0"), // Sends exactly 1.0 ETH
            });

            // forward ETH from proxy to safe as WETH
            await proxy.forward()

            expect(
                await weth.balanceOf(proxy.address)
            ).to.eq(
                0
            );
            expect(
                await weth.balanceOf(daoAddress)
            ).to.eq(
                ethers.utils.parseEther("1.0")
            );
    
        });


    });

    describe('Withdraw ERC20', function () {
        it('can withdraw ERC20 correctly', async function () {

            // fund contract with ERC20 tokens
            await weth.mint(proxy.address, chain.tenPow18.mul(1))


            // withdraw token from proxy to safe
            await proxy.withdraw(weth.address);

            expect(
                await weth.balanceOf(proxy.address)
            ).to.eq(
                chain.tenPow18.mul(0)
            );

             expect(
                await weth.balanceOf(daoAddress)
            ).to.eq(
                chain.tenPow18.mul(1)
            );
        });


    });

    describe('Update Distribution', function () {


        it('can update safe as owner', async function () {

            // update shares
            await proxy.connect(dao).updateSafe(happyPirateAddress);

            expect(await proxy.getSafe()).to.be.equal(happyPirateAddress);
        });

        it('reverts if update not from owner', async function () {

            // revert 
            await expect(proxy.connect(happyPirate).updateSafe(happyPirateAddress)).to.be.revertedWith(
                "Ownable: caller is not the owner"
            );
        });

    });

    async function setupSigners () {
        const accounts = await ethers.getSigners();
        dao = accounts[0];
        happyPirate = accounts[1];

        daoAddress = await dao.getAddress();
        happyPirateAddress = await happyPirate.getAddress();
    }

    async function deployMocks () {
        weth = (await deploy.deployContract('WETHMock',[])) as WETHMock;
    }

});