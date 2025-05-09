[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Event

# Interface: Event

## Extends

- [`Log`](Log.md)

## Properties

### address

> **address**: `string`

#### Inherited from

[`Log`](Log.md).[`address`](Log.md#address)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:59

***

### args?

> `optional` **args**: [`Result`](Result.md)

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:49

***

### blockHash

> **blockHash**: `string`

#### Inherited from

[`Log`](Log.md).[`blockHash`](Log.md#blockhash)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:56

***

### blockNumber

> **blockNumber**: `number`

#### Inherited from

[`Log`](Log.md).[`blockNumber`](Log.md#blocknumber)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:55

***

### data

> **data**: `string`

#### Inherited from

[`Log`](Log.md).[`data`](Log.md#data)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:60

***

### decode()?

> `optional` **decode**: (`data`, `topics`?) => `any`

#### Parameters

• **data**: `string`

• **topics?**: `string`[]

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:51

***

### decodeError?

> `optional` **decodeError**: [`Error`](Error.md)

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:50

***

### event?

> `optional` **event**: `string`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:47

***

### eventSignature?

> `optional` **eventSignature**: `string`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:48

***

### getBlock()

> **getBlock**: () => `Promise`\<[`Block`](Block.md)\>

#### Returns

`Promise`\<[`Block`](Block.md)\>

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:53

***

### getTransaction()

> **getTransaction**: () => `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:54

***

### getTransactionReceipt()

> **getTransactionReceipt**: () => `Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:55

***

### logIndex

> **logIndex**: `number`

#### Inherited from

[`Log`](Log.md).[`logIndex`](Log.md#logindex)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:63

***

### removed

> **removed**: `boolean`

#### Inherited from

[`Log`](Log.md).[`removed`](Log.md#removed)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:58

***

### removeListener()

> **removeListener**: () => `void`

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:52

***

### topics

> **topics**: `string`[]

#### Inherited from

[`Log`](Log.md).[`topics`](Log.md#topics)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:61

***

### transactionHash

> **transactionHash**: `string`

#### Inherited from

[`Log`](Log.md).[`transactionHash`](Log.md#transactionhash)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:62

***

### transactionIndex

> **transactionIndex**: `number`

#### Inherited from

[`Log`](Log.md).[`transactionIndex`](Log.md#transactionindex)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:57
