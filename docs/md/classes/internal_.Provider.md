[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Provider

# Class: Provider

[<internal>](../modules/internal_.md).Provider

## Hierarchy

- **`Provider`**

  ↳ [`BaseProvider`](internal_.BaseProvider.md)

## Implements

- [`OnceBlockable`](../interfaces/internal_.OnceBlockable.md)

## Table of contents

### Constructors

- [constructor](internal_.Provider.md#constructor)

### Properties

- [\_isProvider](internal_.Provider.md#_isprovider)

### Methods

- [addListener](internal_.Provider.md#addlistener)
- [call](internal_.Provider.md#call)
- [emit](internal_.Provider.md#emit)
- [estimateGas](internal_.Provider.md#estimategas)
- [getBalance](internal_.Provider.md#getbalance)
- [getBlock](internal_.Provider.md#getblock)
- [getBlockNumber](internal_.Provider.md#getblocknumber)
- [getBlockWithTransactions](internal_.Provider.md#getblockwithtransactions)
- [getCode](internal_.Provider.md#getcode)
- [getFeeData](internal_.Provider.md#getfeedata)
- [getGasPrice](internal_.Provider.md#getgasprice)
- [getLogs](internal_.Provider.md#getlogs)
- [getNetwork](internal_.Provider.md#getnetwork)
- [getStorageAt](internal_.Provider.md#getstorageat)
- [getTransaction](internal_.Provider.md#gettransaction)
- [getTransactionCount](internal_.Provider.md#gettransactioncount)
- [getTransactionReceipt](internal_.Provider.md#gettransactionreceipt)
- [listenerCount](internal_.Provider.md#listenercount)
- [listeners](internal_.Provider.md#listeners)
- [lookupAddress](internal_.Provider.md#lookupaddress)
- [off](internal_.Provider.md#off)
- [on](internal_.Provider.md#on)
- [once](internal_.Provider.md#once)
- [removeAllListeners](internal_.Provider.md#removealllisteners)
- [removeListener](internal_.Provider.md#removelistener)
- [resolveName](internal_.Provider.md#resolvename)
- [sendTransaction](internal_.Provider.md#sendtransaction)
- [waitForTransaction](internal_.Provider.md#waitfortransaction)
- [isProvider](internal_.Provider.md#isprovider)

## Constructors

### constructor

• **new Provider**()

## Properties

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:151

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

___

### call

▸ `Abstract` **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

___

### emit

▸ `Abstract` **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `...args` | `any`[] |

#### Returns

`boolean`

___

### estimateGas

▸ `Abstract` **estimateGas**(`transaction`): `Promise`<[`BigNumber`](internal_.BigNumber-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber-1.md)\>

___

### getBalance

▸ `Abstract` **getBalance**(`addressOrName`, `blockTag?`): `Promise`<[`BigNumber`](internal_.BigNumber-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber-1.md)\>

___

### getBlock

▸ `Abstract` **getBlock**(`blockHashOrBlockTag`): `Promise`<[`Block`](../interfaces/internal_.Block.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`Block`](../interfaces/internal_.Block.md)\>

___

### getBlockNumber

▸ `Abstract` **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

___

### getBlockWithTransactions

▸ `Abstract` **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`<[`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

___

### getCode

▸ `Abstract` **getCode**(`addressOrName`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

___

### getGasPrice

▸ `Abstract` **getGasPrice**(): `Promise`<[`BigNumber`](internal_.BigNumber-1.md)\>

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber-1.md)\>

___

### getLogs

▸ `Abstract` **getLogs**(`filter`): `Promise`<[`Log`](../interfaces/internal_.Log.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../interfaces/internal_.Filter.md) |

#### Returns

`Promise`<[`Log`](../interfaces/internal_.Log.md)[]\>

___

### getNetwork

▸ `Abstract` **getNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

___

### getStorageAt

▸ `Abstract` **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `position` | [`BigNumberish`](../modules/internal_.md#bignumberish) \| `Promise`<[`BigNumberish`](../modules/internal_.md#bignumberish)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

___

### getTransaction

▸ `Abstract` **getTransaction**(`transactionHash`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

___

### getTransactionCount

▸ `Abstract` **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`number`\>

___

### getTransactionReceipt

▸ `Abstract` **getTransactionReceipt**(`transactionHash`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

___

### listenerCount

▸ `Abstract` **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

`number`

___

### listeners

▸ `Abstract` **listeners**(`eventName?`): [`Listener`](../modules/internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`Listener`](../modules/internal_.md#listener)[]

___

### lookupAddress

▸ `Abstract` **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

___

### off

▸ `Abstract` **off**(`eventName`, `listener?`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener?` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

___

### on

▸ `Abstract` **on**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

___

### once

▸ `Abstract` **once**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Implementation of

[OnceBlockable](../interfaces/internal_.OnceBlockable.md).[once](../interfaces/internal_.OnceBlockable.md#once)

___

### removeAllListeners

▸ `Abstract` **removeAllListeners**(`eventName?`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`Provider`](internal_.Provider.md)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

___

### resolveName

▸ `Abstract` **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

___

### sendTransaction

▸ `Abstract` **sendTransaction**(`signedTransaction`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

___

### waitForTransaction

▸ `Abstract` **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider
