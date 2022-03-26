/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import { FunctionFragment, Result } from '@ethersproject/abi'
import { Listener, Provider } from '@ethersproject/providers'
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common'

export interface MockReferenceModuleInterface extends utils.Interface {
  functions: {
    'initializeReferenceModule(uint256,uint256,bytes)': FunctionFragment
    'processComment(uint256,uint256,uint256)': FunctionFragment
    'processMirror(uint256,uint256,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'initializeReferenceModule',
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'processComment',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'processMirror',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'initializeReferenceModule',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'processComment',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'processMirror',
    data: BytesLike
  ): Result

  events: {}
}

export interface MockReferenceModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: MockReferenceModuleInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    initializeReferenceModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    processComment(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    processMirror(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  initializeReferenceModule(
    profileId: BigNumberish,
    pubId: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  processComment(
    profileId: BigNumberish,
    profileIdPointed: BigNumberish,
    pubIdPointed: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  processMirror(
    profileId: BigNumberish,
    profileIdPointed: BigNumberish,
    pubIdPointed: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    initializeReferenceModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    processComment(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    processMirror(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    initializeReferenceModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    processComment(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    processMirror(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    initializeReferenceModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    processComment(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    processMirror(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
