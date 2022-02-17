
import {deployConfig} from "./deployment/define-0-deploy-config";
import {deploy} from "./deployment/define-1-deploy";


deployConfig(process.env.DEPLOYER_ADDRESS)
.then(c => deploy(c))
//.then(c => mintQuests(c))
.catch(error => {
    console.error(error);
    process.exit(1);
});


