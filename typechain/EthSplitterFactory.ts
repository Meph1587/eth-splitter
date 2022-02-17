/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EthSplitter } from "./EthSplitter";

export class EthSplitterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _recipients: string[],
    _shares: BigNumberish[],
    _dao: string,
    overrides?: Overrides
  ): Promise<EthSplitter> {
    return super.deploy(
      _recipients,
      _shares,
      _dao,
      overrides || {}
    ) as Promise<EthSplitter>;
  }
  getDeployTransaction(
    _recipients: string[],
    _shares: BigNumberish[],
    _dao: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _recipients,
      _shares,
      _dao,
      overrides || {}
    );
  }
  attach(address: string): EthSplitter {
    return super.attach(address) as EthSplitter;
  }
  connect(signer: Signer): EthSplitterFactory {
    return super.connect(signer) as EthSplitterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthSplitter {
    return new Contract(address, _abi, signerOrProvider) as EthSplitter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_shares",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_dao",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "getRecipients",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "getShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_shares",
        type: "uint256[]",
      },
    ],
    name: "updateShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526127106003553480156200001757600080fd5b506040516200186f3803806200186f83398181016040528101906200003d91906200058d565b6200005d62000051620000f860201b60201c565b6200010060201b60201c565b60028054905060018054905014620000ac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a390620006e0565b60405180910390fd5b8260019080519060200190620000c492919062000303565b508160029080519060200190620000dd92919062000392565b50620000ef81620001c460201b60201c565b50505062000937565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001d4620000f860201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620001fa620002da60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000253576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200024a90620006be565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002c6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bd906200069c565b60405180910390fd5b620002d7816200010060201b60201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8280548282559060005260206000209081019282156200037f579160200282015b828111156200037e5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000324565b5b5090506200038e9190620003e4565b5090565b828054828255906000526020600020908101928215620003d1579160200282015b82811115620003d0578251825591602001919060010190620003b3565b5b509050620003e09190620003e4565b5090565b5b80821115620003ff576000816000905550600101620003e5565b5090565b60006200041a62000414846200072b565b62000702565b9050808382526020820190508285602086028201111562000440576200043f62000842565b5b60005b85811015620004745781620004598882620004f9565b84526020840193506020830192505060018101905062000443565b5050509392505050565b6000620004956200048f846200075a565b62000702565b90508083825260208201905082856020860282011115620004bb57620004ba62000842565b5b60005b85811015620004ef5781620004d4888262000576565b845260208401935060208301925050600181019050620004be565b5050509392505050565b6000815190506200050a8162000903565b92915050565b600082601f8301126200052857620005276200083d565b5b81516200053a84826020860162000403565b91505092915050565b600082601f8301126200055b576200055a6200083d565b5b81516200056d8482602086016200047e565b91505092915050565b60008151905062000587816200091d565b92915050565b600080600060608486031215620005a957620005a86200084c565b5b600084015167ffffffffffffffff811115620005ca57620005c962000847565b5b620005d88682870162000510565b935050602084015167ffffffffffffffff811115620005fc57620005fb62000847565b5b6200060a8682870162000543565b92505060406200061d86828701620004f9565b9150509250925092565b60006200063660268362000789565b9150620006438262000862565b604082019050919050565b60006200065d60208362000789565b91506200066a82620008b1565b602082019050919050565b600062000684601f8362000789565b91506200069182620008da565b602082019050919050565b60006020820190508181036000830152620006b78162000627565b9050919050565b60006020820190508181036000830152620006d9816200064e565b9050919050565b60006020820190508181036000830152620006fb8162000675565b9050919050565b60006200070e62000721565b90506200071c8282620007d8565b919050565b6000604051905090565b600067ffffffffffffffff8211156200074957620007486200080e565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156200077857620007776200080e565b5b602082029050602081019050919050565b600082825260208201905092915050565b6000620007a782620007ae565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b620007e38262000851565b810181811067ffffffffffffffff821117156200080557620008046200080e565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f496e636f686572656e74206c656e67746873206f6620617267756d656e747300600082015250565b6200090e816200079a565b81146200091a57600080fd5b50565b6200092881620007ce565b81146200093457600080fd5b50565b610f2880620009476000396000f3fe6080604052600436106100745760003560e01c8063d38b194e1161004e578063d38b194e146100f6578063e4fc6b6d14610133578063e5bc026c1461014a578063f2fde38b1461017357610075565b8063715018a6146100775780638da5cb5b1461008e578063d0df00be146100b957610075565b5b005b34801561008357600080fd5b5061008c61019c565b005b34801561009a57600080fd5b506100a3610224565b6040516100b09190610a8f565b60405180910390f35b3480156100c557600080fd5b506100e060048036038101906100db91906109b8565b61024d565b6040516100ed9190610a8f565b60405180910390f35b34801561010257600080fd5b5061011d600480360381019061011891906109b8565b610298565b60405161012a9190610b2a565b60405180910390f35b34801561013f57600080fd5b506101486102c3565b005b34801561015657600080fd5b50610171600480360381019061016c9190610940565b6103e6565b005b34801561017f57600080fd5b5061019a60048036038101906101959190610913565b6104e0565b005b6101a46105d8565b73ffffffffffffffffffffffffffffffffffffffff166101c2610224565b73ffffffffffffffffffffffffffffffffffffffff1614610218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020f90610aca565b60405180910390fd5b61022260006105e0565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060018260ff168154811061026657610265610d60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600060028260ff16815481106102b1576102b0610d60565b5b90600052602060002001549050919050565b600047905060005b6001805490508160ff1610156103e257600060035460028360ff16815481106102f7576102f6610d60565b5b90600052602060002001548461030d9190610c04565b6103179190610bd3565b905060018260ff16815481106103305761032f610d60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050506103ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c590610aea565b60405180910390fd5b5080806103da90610cd8565b9150506102cb565b5050565b6103ee6105d8565b73ffffffffffffffffffffffffffffffffffffffff1661040c610224565b73ffffffffffffffffffffffffffffffffffffffff1614610462576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045990610aca565b60405180910390fd5b600280549050600180549050146104ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a590610b0a565b60405180910390fd5b81600190805190602001906104c49291906106a4565b5080600290805190602001906104db92919061072e565b505050565b6104e86105d8565b73ffffffffffffffffffffffffffffffffffffffff16610506610224565b73ffffffffffffffffffffffffffffffffffffffff161461055c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055390610aca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c390610aaa565b60405180910390fd5b6105d5816105e0565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b82805482825590600052602060002090810192821561071d579160200282015b8281111561071c5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906106c4565b5b50905061072a919061077b565b5090565b82805482825590600052602060002090810192821561076a579160200282015b8281111561076957825182559160200191906001019061074e565b5b509050610777919061077b565b5090565b5b8082111561079457600081600090555060010161077c565b5090565b60006107ab6107a684610b6a565b610b45565b905080838252602082019050828560208602820111156107ce576107cd610dc3565b5b60005b858110156107fe57816107e48882610878565b8452602084019350602083019250506001810190506107d1565b5050509392505050565b600061081b61081684610b96565b610b45565b9050808382526020820190508285602086028201111561083e5761083d610dc3565b5b60005b8581101561086e578161085488826108e9565b845260208401935060208301925050600181019050610841565b5050509392505050565b60008135905061088781610ead565b92915050565b600082601f8301126108a2576108a1610dbe565b5b81356108b2848260208601610798565b91505092915050565b600082601f8301126108d0576108cf610dbe565b5b81356108e0848260208601610808565b91505092915050565b6000813590506108f881610ec4565b92915050565b60008135905061090d81610edb565b92915050565b60006020828403121561092957610928610dcd565b5b600061093784828501610878565b91505092915050565b6000806040838503121561095757610956610dcd565b5b600083013567ffffffffffffffff81111561097557610974610dc8565b5b6109818582860161088d565b925050602083013567ffffffffffffffff8111156109a2576109a1610dc8565b5b6109ae858286016108bb565b9150509250929050565b6000602082840312156109ce576109cd610dcd565b5b60006109dc848285016108fe565b91505092915050565b6109ee81610c5e565b82525050565b6000610a01602683610bc2565b9150610a0c82610de3565b604082019050919050565b6000610a24602083610bc2565b9150610a2f82610e32565b602082019050919050565b6000610a47601483610bc2565b9150610a5282610e5b565b602082019050919050565b6000610a6a601f83610bc2565b9150610a7582610e84565b602082019050919050565b610a8981610c90565b82525050565b6000602082019050610aa460008301846109e5565b92915050565b60006020820190508181036000830152610ac3816109f4565b9050919050565b60006020820190508181036000830152610ae381610a17565b9050919050565b60006020820190508181036000830152610b0381610a3a565b9050919050565b60006020820190508181036000830152610b2381610a5d565b9050919050565b6000602082019050610b3f6000830184610a80565b92915050565b6000610b4f610b60565b9050610b5b8282610ca7565b919050565b6000604051905090565b600067ffffffffffffffff821115610b8557610b84610d8f565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610bb157610bb0610d8f565b5b602082029050602081019050919050565b600082825260208201905092915050565b6000610bde82610c90565b9150610be983610c90565b925082610bf957610bf8610d31565b5b828204905092915050565b6000610c0f82610c90565b9150610c1a83610c90565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c5357610c52610d02565b5b828202905092915050565b6000610c6982610c70565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b610cb082610dd2565b810181811067ffffffffffffffff82111715610ccf57610cce610d8f565b5b80604052505050565b6000610ce382610c9a565b915060ff821415610cf757610cf6610d02565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4661696c656420746f2064697374726962757465000000000000000000000000600082015250565b7f496e636f686572656e74206c656e67746873206f6620617267756d656e747300600082015250565b610eb681610c5e565b8114610ec157600080fd5b50565b610ecd81610c90565b8114610ed857600080fd5b50565b610ee481610c9a565b8114610eef57600080fd5b5056fea264697066735822122012e73bd19ddf60f5a7756c29445a65e2dbcef6621557a781dcce9fb56af9b5f764736f6c63430008070033";
