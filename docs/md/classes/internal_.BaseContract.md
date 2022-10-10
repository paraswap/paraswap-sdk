[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BaseContract

# Class: BaseContract

[<internal>](../modules/internal_.md).BaseContract

## Hierarchy

- **`BaseContract`**

  ↳ [`Contract`](internal_.Contract-1.md)

## Table of contents

### Constructors

- [constructor](internal_.BaseContract.md#constructor)

### Properties

- [\_addEventListener](internal_.BaseContract.md#_addeventlistener)
- [\_deployedPromise](internal_.BaseContract.md#_deployedpromise)
- [\_getRunningEvent](internal_.BaseContract.md#_getrunningevent)
- [\_normalizeRunningEvent](internal_.BaseContract.md#_normalizerunningevent)
- [\_runningEvents](internal_.BaseContract.md#_runningevents)
- [\_wrappedEmits](internal_.BaseContract.md#_wrappedemits)
- [address](internal_.BaseContract.md#address)
- [callStatic](internal_.BaseContract.md#callstatic)
- [deployTransaction](internal_.BaseContract.md#deploytransaction)
- [estimateGas](internal_.BaseContract.md#estimategas)
- [filters](internal_.BaseContract.md#filters)
- [functions](internal_.BaseContract.md#functions)
- [interface](internal_.BaseContract.md#interface)
- [populateTransaction](internal_.BaseContract.md#populatetransaction)
- [provider](internal_.BaseContract.md#provider)
- [resolvedAddress](internal_.BaseContract.md#resolvedaddress)
- [signer](internal_.BaseContract.md#signer)

### Methods

- [\_checkRunningEvents](internal_.BaseContract.md#_checkrunningevents)
- [\_deployed](internal_.BaseContract.md#_deployed)
- [\_wrapEvent](internal_.BaseContract.md#_wrapevent)
- [attach](internal_.BaseContract.md#attach)
- [connect](internal_.BaseContract.md#connect)
- [deployed](internal_.BaseContract.md#deployed)
- [emit](internal_.BaseContract.md#emit)
- [fallback](internal_.BaseContract.md#fallback)
- [listenerCount](internal_.BaseContract.md#listenercount)
- [listeners](internal_.BaseContract.md#listeners)
- [off](internal_.BaseContract.md#off)
- [on](internal_.BaseContract.md#on)
- [once](internal_.BaseContract.md#once)
- [queryFilter](internal_.BaseContract.md#queryfilter)
- [removeAllListeners](internal_.BaseContract.md#removealllisteners)
- [removeListener](internal_.BaseContract.md#removelistener)
- [getContractAddress](internal_.BaseContract.md#getcontractaddress)
- [getInterface](internal_.BaseContract.md#getinterface)
- [isIndexed](internal_.BaseContract.md#isindexed)

## Constructors

### constructor

• **new BaseContract**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |
| `signerOrProvider?` | [`Signer`](internal_.Signer.md) \| [`Provider`](internal_.Provider.md) |

## Properties

### \_addEventListener

• `Private` **\_addEventListener**: `any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:123

___

### \_deployedPromise

• **\_deployedPromise**: `Promise`<[`Contract`](internal_.Contract-1.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_getRunningEvent

• `Private` **\_getRunningEvent**: `any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:120

___

### \_normalizeRunningEvent

• `Private` **\_normalizeRunningEvent**: `any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:119

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: [`RunningEvent`](internal_.RunningEvent.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• `Readonly` **callStatic**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:86

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• `Readonly` **estimateGas**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction)<[`BigNumber`](internal_.BigNumber-1.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:89

___

### filters

• `Readonly` **filters**: `Object`

#### Index signature

▪ [name: `string`]: (...`args`: `any`[]) => [`EventFilter`](../modules/internal_.md#eventfilter)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:95

___

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:83

___

### interface

• `Readonly` **interface**: [`Interface`](internal_.Interface.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### populateTransaction

• `Readonly` **populateTransaction**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/internal_.md#contractfunction)<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:92

___

### provider

• `Readonly` **provider**: [`Provider`](internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: [`Signer`](internal_.Signer.md)

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

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<[`Contract`](internal_.Contract-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<[`Contract`](internal_.Contract-1.md)\>

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

___

### attach

▸ **attach**(`addressOrName`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Contract`](internal_.Contract-1.md)

___

### connect

▸ **connect**(`signerOrProvider`): [`Contract`](internal_.Contract-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Signer`](internal_.Signer.md) \| [`Provider`](internal_.Provider.md) |

#### Returns

[`Contract`](internal_.Contract-1.md)

___

### deployed

▸ **deployed**(): `Promise`<[`Contract`](internal_.Contract-1.md)\>

#### Returns

`Promise`<[`Contract`](internal_.Contract-1.md)\>

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

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`TransactionRequest`](../modules/internal_.md#transactionrequest) |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |

#### Returns

`number`

___

### listeners

▸ **listeners**(`eventName?`): [`Listener`](../modules/internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |

#### Returns

[`Listener`](../modules/internal_.md#listener)[]

___

### off

▸ **off**(`eventName`, `listener`): [`BaseContract`](internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`BaseContract`](internal_.BaseContract.md)

___

### on

▸ **on**(`event`, `listener`): [`BaseContract`](internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`BaseContract`](internal_.BaseContract.md)

___

### once

▸ **once**(`event`, `listener`): [`BaseContract`](internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`BaseContract`](internal_.BaseContract.md)

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

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`BaseContract`](internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |

#### Returns

[`BaseContract`](internal_.BaseContract.md)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`BaseContract`](internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`BaseContract`](internal_.BaseContract.md)

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

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): [`Interface`](internal_.Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |

#### Returns

[`Interface`](internal_.Interface.md)

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed
