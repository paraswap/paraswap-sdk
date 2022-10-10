[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Contract

# Class: Contract

[<internal>](../modules/internal_.md).Contract

## Hierarchy

- [`BaseContract`](internal_.BaseContract.md)

  ↳ **`Contract`**

## Indexable

▪ [key: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction) \| `any`

## Table of contents

### Constructors

- [constructor](internal_.Contract-1.md#constructor)

### Properties

- [\_deployedPromise](internal_.Contract-1.md#_deployedpromise)
- [\_runningEvents](internal_.Contract-1.md#_runningevents)
- [\_wrappedEmits](internal_.Contract-1.md#_wrappedemits)
- [address](internal_.Contract-1.md#address)
- [callStatic](internal_.Contract-1.md#callstatic)
- [deployTransaction](internal_.Contract-1.md#deploytransaction)
- [estimateGas](internal_.Contract-1.md#estimategas)
- [filters](internal_.Contract-1.md#filters)
- [functions](internal_.Contract-1.md#functions)
- [interface](internal_.Contract-1.md#interface)
- [populateTransaction](internal_.Contract-1.md#populatetransaction)
- [provider](internal_.Contract-1.md#provider)
- [resolvedAddress](internal_.Contract-1.md#resolvedaddress)
- [signer](internal_.Contract-1.md#signer)

### Methods

- [\_checkRunningEvents](internal_.Contract-1.md#_checkrunningevents)
- [\_deployed](internal_.Contract-1.md#_deployed)
- [\_wrapEvent](internal_.Contract-1.md#_wrapevent)
- [attach](internal_.Contract-1.md#attach)
- [connect](internal_.Contract-1.md#connect)
- [deployed](internal_.Contract-1.md#deployed)
- [emit](internal_.Contract-1.md#emit)
- [fallback](internal_.Contract-1.md#fallback)
- [listenerCount](internal_.Contract-1.md#listenercount)
- [listeners](internal_.Contract-1.md#listeners)
- [off](internal_.Contract-1.md#off)
- [on](internal_.Contract-1.md#on)
- [once](internal_.Contract-1.md#once)
- [queryFilter](internal_.Contract-1.md#queryfilter)
- [removeAllListeners](internal_.Contract-1.md#removealllisteners)
- [removeListener](internal_.Contract-1.md#removelistener)
- [getContractAddress](internal_.Contract-1.md#getcontractaddress)
- [getInterface](internal_.Contract-1.md#getinterface)
- [isIndexed](internal_.Contract-1.md#isindexed)

## Constructors

### constructor

• **new Contract**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |
| `signerOrProvider?` | [`Signer`](internal_.Signer.md) \| [`Provider`](internal_.Provider.md) |

#### Inherited from

[BaseContract](internal_.BaseContract.md).[constructor](internal_.BaseContract.md#constructor)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<[`Contract`](internal_.Contract-1.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_deployedPromise](internal_.BaseContract.md#_deployedpromise)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: [`RunningEvent`](internal_.RunningEvent.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_runningEvents](internal_.BaseContract.md#_runningevents)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_wrappedEmits](internal_.BaseContract.md#_wrappedemits)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[address](internal_.BaseContract.md#address)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• `Readonly` **callStatic**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[callStatic](internal_.BaseContract.md#callstatic)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:86

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[deployTransaction](internal_.BaseContract.md#deploytransaction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• `Readonly` **estimateGas**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction)<[`BigNumber`](internal_.BigNumber-1.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[estimateGas](internal_.BaseContract.md#estimategas)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:89

___

### filters

• `Readonly` **filters**: `Object`

#### Index signature

▪ [name: `string`]: (...`args`: `any`[]) => [`EventFilter`](../modules/internal_.md#eventfilter)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[filters](internal_.BaseContract.md#filters)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:95

___

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[functions](internal_.BaseContract.md#functions)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:83

___

### interface

• `Readonly` **interface**: [`Interface`](internal_.Interface.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[interface](internal_.BaseContract.md#interface)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### populateTransaction

• `Readonly` **populateTransaction**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction)<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[populateTransaction](internal_.BaseContract.md#populatetransaction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:92

___

### provider

• `Readonly` **provider**: [`Provider`](internal_.Provider.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[provider](internal_.BaseContract.md#provider)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[resolvedAddress](internal_.BaseContract.md#resolvedaddress)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: [`Signer`](internal_.Signer.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[signer](internal_.BaseContract.md#signer)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](internal_.RunningEvent.md) |

#### Returns

`void`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_checkRunningEvents](internal_.BaseContract.md#_checkrunningevents)

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<[`Contract`](internal_.Contract-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<[`Contract`](internal_.Contract-1.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_deployed](internal_.BaseContract.md#_deployed)

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): [`Event`](../interfaces/internal_.Event-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](internal_.RunningEvent.md) |
| `log` | [`Log`](../interfaces/internal_.Log.md) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Event`](../interfaces/internal_.Event-1.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_wrapEvent](internal_.BaseContract.md#_wrapevent)

___

### attach

▸ **attach**(`addressOrName`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Contract`](internal_.Contract-1.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[attach](internal_.BaseContract.md#attach)

___

### connect

▸ **connect**(`signerOrProvider`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Signer`](internal_.Signer.md) \| [`Provider`](internal_.Provider.md) |

#### Returns

[`Contract`](internal_.Contract-1.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[connect](internal_.BaseContract.md#connect)

___

### deployed

▸ **deployed**(): `Promise`<[`Contract`](internal_.Contract-1.md)\>

#### Returns

`Promise`<[`Contract`](internal_.Contract-1.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[deployed](internal_.BaseContract.md#deployed)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[emit](internal_.BaseContract.md#emit)

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`TransactionRequest`](../modules/internal_.md#transactionrequest) |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[fallback](internal_.BaseContract.md#fallback)

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |

#### Returns

`number`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[listenerCount](internal_.BaseContract.md#listenercount)

___

### listeners

▸ **listeners**(`eventName?`): [`Listener`](../modules/internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |

#### Returns

[`Listener`](../modules/internal_.md#listener)[]

#### Inherited from

[BaseContract](internal_.BaseContract.md).[listeners](internal_.BaseContract.md#listeners)

___

### off

▸ **off**(`eventName`, `listener`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Contract`](internal_.Contract-1.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[off](internal_.BaseContract.md#off)

___

### on

▸ **on**(`event`, `listener`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Contract`](internal_.Contract-1.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[on](internal_.BaseContract.md#on)

___

### once

▸ **once**(`event`, `listener`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Contract`](internal_.Contract-1.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[once](internal_.BaseContract.md#once)

___

### queryFilter

▸ **queryFilter**(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<[`Event`](../interfaces/internal_.Event-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventFilter`](../modules/internal_.md#eventfilter) |
| `fromBlockOrBlockhash?` | [`BlockTag`](../modules/internal_.md#blocktag) |
| `toBlock?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<[`Event`](../interfaces/internal_.Event-1.md)[]\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[queryFilter](internal_.BaseContract.md#queryfilter)

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |

#### Returns

[`Contract`](internal_.Contract-1.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[removeAllListeners](internal_.BaseContract.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Contract`](internal_.Contract-1.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[removeListener](internal_.BaseContract.md#removelistener)

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`string`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[getContractAddress](internal_.BaseContract.md#getcontractaddress)

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): [`Interface`](internal_.Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |

#### Returns

[`Interface`](internal_.Interface.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[getInterface](internal_.BaseContract.md#getinterface)

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

[BaseContract](internal_.BaseContract.md).[isIndexed](internal_.BaseContract.md#isindexed)
