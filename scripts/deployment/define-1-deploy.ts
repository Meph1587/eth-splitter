import {DeployConfig} from "./define-0-deploy-config";
import {deployContract} from "../../helpers/deploy"

import {
    EthSplitter 
} from "../../typechain";
export async function deploy(c: DeployConfig): Promise<DeployConfig> {

    console.log(`\n --- DEPLOY CONTRACT ---`);

    let recipients = []
    let shares = [5000, 5000]
    let dao = ""

    const contract = await deployContract('EthSplitter',[recipients, shares, dao]) as EthSplitter;
    console.log(`contract deployed to: ${contract.address.toLowerCase()}`);

    console.log(`npx hardhat verify --network rinkeby ${contract.address}`)

    return c;
}


