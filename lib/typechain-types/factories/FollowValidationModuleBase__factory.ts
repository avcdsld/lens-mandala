/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type {
  FollowValidationModuleBase,
  FollowValidationModuleBaseInterface,
} from '../FollowValidationModuleBase'

const _abi = [
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
]

export class FollowValidationModuleBase__factory {
  static readonly abi = _abi
  static createInterface(): FollowValidationModuleBaseInterface {
    return new utils.Interface(_abi) as FollowValidationModuleBaseInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FollowValidationModuleBase {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FollowValidationModuleBase
  }
}
