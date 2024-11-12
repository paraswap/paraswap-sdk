[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionResponse

# Interface: TransactionResponse

## Extends

- [`Transaction`](Transaction.md)

## Extended by

- [`ContractTransaction`](ContractTransaction.md)

## Properties

### accessList?

> `optional` **accessList**: [`AccessList`](../type-aliases/AccessList.md)

#### Inherited from

[`Transaction`](Transaction.md).[`accessList`](Transaction.md#accesslist)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:40

***

### blockHash?

> `optional` **blockHash**: `string`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:26

***

### blockNumber?

> `optional` **blockNumber**: `number`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:25

***

### chainId

> **chainId**: `number`

#### Inherited from

[`Transaction`](Transaction.md).[`chainId`](Transaction.md#chainid)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:35

***

### confirmations

> **confirmations**: `number`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:28

***

### data

> **data**: `string`

#### Inherited from

[`Transaction`](Transaction.md).[`data`](Transaction.md#data)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:33

***

### from

> **from**: `string`

#### Overrides

[`Transaction`](Transaction.md).[`from`](Transaction.md#from)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:29

***

### gasLimit

> **gasLimit**: [`BigNumber`](../classes/BigNumber.md)

#### Inherited from

[`Transaction`](Transaction.md).[`gasLimit`](Transaction.md#gaslimit)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:31

***

### gasPrice?

> `optional` **gasPrice**: [`BigNumber`](../classes/BigNumber.md)

#### Inherited from

[`Transaction`](Transaction.md).[`gasPrice`](Transaction.md#gasprice)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:32

***

### hash

> **hash**: `string`

#### Overrides

[`Transaction`](Transaction.md).[`hash`](Transaction.md#hash)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:24

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: [`BigNumber`](../classes/BigNumber.md)

#### Inherited from

[`Transaction`](Transaction.md).[`maxFeePerGas`](Transaction.md#maxfeepergas)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:42

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/BigNumber.md)

#### Inherited from

[`Transaction`](Transaction.md).[`maxPriorityFeePerGas`](Transaction.md#maxpriorityfeepergas)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:41

***

### nonce

> **nonce**: `number`

#### Inherited from

[`Transaction`](Transaction.md).[`nonce`](Transaction.md#nonce)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:30

***

### r?

> `optional` **r**: `string`

#### Inherited from

[`Transaction`](Transaction.md).[`r`](Transaction.md#r)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:36

***

### raw?

> `optional` **raw**: `string`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:30

***

### s?

> `optional` **s**: `string`

#### Inherited from

[`Transaction`](Transaction.md).[`s`](Transaction.md#s)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:37

***

### timestamp?

> `optional` **timestamp**: `number`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:27

***

### to?

> `optional` **to**: `string`

#### Inherited from

[`Transaction`](Transaction.md).[`to`](Transaction.md#to)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:28

***

### type?

> `optional` **type**: `null` \| `number`

#### Inherited from

[`Transaction`](Transaction.md).[`type`](Transaction.md#type)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:39

***

### v?

> `optional` **v**: `number`

#### Inherited from

[`Transaction`](Transaction.md).[`v`](Transaction.md#v)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:38

***

### value

> **value**: [`BigNumber`](../classes/BigNumber.md)

#### Inherited from

[`Transaction`](Transaction.md).[`value`](Transaction.md#value)

#### Defined in

node\_modules/@ethersproject/transactions/lib/index.d.ts:34

***

### wait()

> **wait**: (`confirmations`?) => `Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

#### Parameters

• **confirmations?**: `number`

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:31
