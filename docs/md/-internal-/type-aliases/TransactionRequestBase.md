[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestBase

# Type Alias: TransactionRequestBase\<quantity, index, type\>

> **TransactionRequestBase**\<`quantity`, `index`, `type`\>: `object`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **type** = `string`

## Type declaration

### data?

> `optional` **data**: [`Hex`](Hex.md)

Contract code or a hashed method call with encoded args

### from?

> `optional` **from**: [`Address`](Address.md)

Transaction sender

### gas?

> `optional` **gas**: `quantity`

Gas provided for transaction execution

### nonce?

> `optional` **nonce**: `index`

Unique number identifying this transaction

### to?

> `optional` **to**: [`Address`](Address.md) \| `null`

Transaction recipient

### type?

> `optional` **type**: `type`

Transaction type

### value?

> `optional` **value**: `quantity`

Value in wei sent with this transaction

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:131
