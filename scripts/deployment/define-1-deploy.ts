import {DeployConfig} from "./define-0-deploy-config";
import {deployContract} from "../../helpers/deploy"

import {
    EthSplitter, GnosisSafeReceiverProxy
} from "../../typechain";
export async function deploy(c: DeployConfig): Promise<DeployConfig> {

    console.log(`\n --- DEPLOY CONTRACT ---`);


    let dao = "--"

    let weth = "--";
    const proxy = await deployContract('GnosisSafeReceiverProxy',[dao, weth]) as GnosisSafeReceiverProxy;
    console.log(`proxy deployed to: ${proxy.address.toLowerCase()}`);
    console.log(`npx hardhat verify --network rinkeby ${proxy.address} ${dao} ${weth}`)

    let recipients = ["--", proxy.address]
    let shares = [5000, 5000]

    const splitter = await deployContract('EthSplitter',[recipients, shares, dao]) as EthSplitter;
    console.log(`splitter deployed to: ${splitter.address.toLowerCase()}`);

    console.log(`npx hardhat verify --network rinkeby ${splitter.address} --constructor-args arguments.js`)

    return c;
}


