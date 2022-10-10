[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Event

# Interface: Event

[<internal>](../modules/internal_.md).Event

## Hierarchy

- [`Log`](internal_.Log.md)

  ↳ **`Event`**

## Table of contents

### Properties

- [address](internal_.Event-1.md#address)
- [args](internal_.Event-1.md#args)
- [blockHash](internal_.Event-1.md#blockhash)
- [blockNumber](internal_.Event-1.md#blocknumber)
- [data](internal_.Event-1.md#data)
- [decode](internal_.Event-1.md#decode)
- [decodeError](internal_.Event-1.md#decodeerror)
- [event](internal_.Event-1.md#event)
- [eventSignature](internal_.Event-1.md#eventsignature)
- [getBlock](internal_.Event-1.md#getblock)
- [getTransaction](internal_.Event-1.md#gettransaction)
- [getTransactionReceipt](internal_.Event-1.md#gettransactionreceipt)
- [logIndex](internal_.Event-1.md#logindex)
- [removeListener](internal_.Event-1.md#removelistener)
- [removed](internal_.Event-1.md#removed)
- [topics](internal_.Event-1.md#topics)
- [transactionHash](internal_.Event-1.md#transactionhash)
- [transactionIndex](internal_.Event-1.md#transactionindex)

## Properties

### address

• **address**: `string`

#### Inherited from

[Log](internal_.Log.md).[address](internal_.Log.md#address)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:59

___

### args

• `Optional` **args**: [`Result`](internal_.Result.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:49

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[Log](internal_.Log.md).[blockHash](internal_.Log.md#blockhash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:56

___

### blockNumber

• **blockNumber**: `number`

#### Inherited from

[Log](internal_.Log.md).[blockNumber](internal_.Log.md#blocknumber)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:55

___

### data

• **data**: `string`

#### Inherited from

[Log](internal_.Log.md).[data](internal_.Log.md#data)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:60

___

### decode

• `Optional` **decode**: (`data`: `string`, `topics?`: `string`[]) => `any`

#### Type declaration

▸ (`data`, `topics?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics?` | `string`[] |

##### Returns

`any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:51

___

### decodeError

• `Optional` **decodeError**: [`Error`](../modules/internal_.md#error)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:50

___

### event

• `Optional` **event**: `string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:47

___

### eventSignature

• `Optional` **eventSignature**: `string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:48

___

### getBlock

• **getBlock**: () => `Promise`<[`Block`](internal_.Block.md)\>

#### Type declaration

▸ (): `Promise`<[`Block`](internal_.Block.md)\>

##### Returns

`Promise`<[`Block`](internal_.Block.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:53

___

### getTransaction

• **getTransaction**: () => `Promise`<[`TransactionResponse`](internal_.TransactionResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`TransactionResponse`](internal_.TransactionResponse.md)\>

##### Returns

`Promise`<[`TransactionResponse`](internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:54

___

### getTransactionReceipt

• **getTransactionReceipt**: () => `Promise`<[`TransactionReceipt`](internal_.TransactionReceipt.md)\>

#### Type declaration

▸ (): `Promise`<[`TransactionReceipt`](internal_.TransactionReceipt.md)\>

##### Returns

`Promise`<[`TransactionReceipt`](internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:55

___

### logIndex

• **logIndex**: `number`

#### Inherited from

[Log](internal_.Log.md).[logIndex](internal_.Log.md#logindex)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:63

___

### removeListener

• **removeListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:52

___

### removed

• **removed**: `boolean`

#### Inherited from

[Log](internal_.Log.md).[removed](internal_.Log.md#removed)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:58

___

### topics

• **topics**: `string`[]

#### Inherited from

[Log](internal_.Log.md).[topics](internal_.Log.md#topics)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:61

___

### transactionHash

• **transactionHash**: `string`

#### Inherited from

[Log](internal_.Log.md).[transactionHash](internal_.Log.md#transactionhash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:62

___

### transactionIndex

• **transactionIndex**: `number`

#### Inherited from

[Log](internal_.Log.md).[transactionIndex](internal_.Log.md#transactionindex)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:57
