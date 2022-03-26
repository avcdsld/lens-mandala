/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  FollowerOnlyReferenceModule,
  FollowerOnlyReferenceModuleInterface,
} from '../FollowerOnlyReferenceModule'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'hub',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'FollowInvalid',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InitParamsInvalid',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'pubId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'initializeReferenceModule',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'profileIdPointed',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'pubIdPointed',
        type: 'uint256',
      },
    ],
    name: 'processComment',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'profileIdPointed',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'pubIdPointed',
        type: 'uint256',
      },
    ],
    name: 'processMirror',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x60a060405234801561001057600080fd5b5060405161064138038061064183398101604081905261002f916100a0565b806001600160a01b038116610057576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b6080516105436100fe6000396000818160a60152818160f90152818161019701526102a001526105436000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806356014afa1461005157806372f247091461008c578063a4c52b86146100a1578063ce3f8dc61461008c575b600080fd5b61007661005f3660046103c3565b505060408051600081526020810190915292915050565b6040516100839190610443565b60405180910390f35b61009f61009a366004610498565b6100e0565b005b6100c87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610083565b6040516331a9108f60e11b8152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015610148573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016c91906104c4565b9050610178838261017e565b50505050565b604051633648f48360e21b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d923d20c90602401602060405180830381865afa1580156101e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020a91906104c4565b90506001600160a01b0381161561028757604051635a30b51560e11b8152600481018490526001600160a01b0383811660248301526000604483015282169063b4616a2a9060640160006040518083038186803b15801561026a57600080fd5b505afa15801561027e573d6000803e3d6000fd5b50505050505050565b60405163a9ec656360e01b8152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ec656390602401602060405180830381865afa1580156102ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031391906104c4565b90506001600160a01b03811661033c57604051636992d36b60e11b815260040160405180910390fd5b6040516370a0823160e01b81526001600160a01b0384811660048301528216906370a0823190602401602060405180830381865afa158015610382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a691906104f4565b61017857604051636992d36b60e11b815260040160405180910390fd5b600080600080606085870312156103d957600080fd5b8435935060208501359250604085013567ffffffffffffffff808211156103ff57600080fd5b818701915087601f83011261041357600080fd5b81358181111561042257600080fd5b88602082850101111561043457600080fd5b95989497505060200194505050565b600060208083528351808285015260005b8181101561047057858101830151858201604001528201610454565b81811115610482576000604083870101525b50601f01601f1916929092016040019392505050565b6000806000606084860312156104ad57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156104d657600080fd5b81516001600160a01b03811681146104ed57600080fd5b9392505050565b60006020828403121561050657600080fd5b505191905056fea26469706673582212208ac7d5e496166df2f8524c0b1001f6d5404d14054b76783ab758c5f9787ee15a64736f6c634300080a0033'

type FollowerOnlyReferenceModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: FollowerOnlyReferenceModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class FollowerOnlyReferenceModule__factory extends ContractFactory {
  constructor(...args: FollowerOnlyReferenceModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FollowerOnlyReferenceModule> {
    return super.deploy(
      hub,
      overrides || {}
    ) as Promise<FollowerOnlyReferenceModule>
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {})
  }
  attach(address: string): FollowerOnlyReferenceModule {
    return super.attach(address) as FollowerOnlyReferenceModule
  }
  connect(signer: Signer): FollowerOnlyReferenceModule__factory {
    return super.connect(signer) as FollowerOnlyReferenceModule__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): FollowerOnlyReferenceModuleInterface {
    return new utils.Interface(_abi) as FollowerOnlyReferenceModuleInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FollowerOnlyReferenceModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FollowerOnlyReferenceModule
  }
}
