[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableEIP1559

# Type Alias: TransactionSerializableEIP1559\<quantity, index\>

> **TransactionSerializableEIP1559**\<`quantity`, `index`\>: [`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP1559`](FeeValuesEIP1559.md)\<`quantity`\>\> & `object`

## Type declaration

### accessList?

> `optional` **accessList**: [`AccessList`](AccessList.md)

### chainId

> **chainId**: `number`

### type?

> `optional` **type**: `"eip1559"`

### yParity?

> `optional` **yParity**: `number`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:195
