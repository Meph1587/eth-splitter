import { Signer} from "ethers";
import { impersonateAccount, getAccount} from "../../helpers/accounts";


export async function deployConfig(owner:string): Promise<DeployConfig> {

    let account;
    try{
        account = await getAccount(owner)
    }catch{
        account = await impersonateAccount(owner)
    }
    return new DeployConfig(owner, account)
}

export class DeployConfig {
    public owner: string;
    public ownerAcc: Signer;

    constructor(owner: string, ownerAcc: Signer)
        {
            this.owner = owner;
            this.ownerAcc = ownerAcc;
        }
}