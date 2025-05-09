[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableEIP2930

# Type Alias: TransactionSerializableEIP2930\<quantity, index\>

> **TransactionSerializableEIP2930**\<`quantity`, `index`\>: [`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesLegacy`](FeeValuesLegacy.md)\<`quantity`\>\> & `object`

## Type declaration

### accessList?

> `optional` **accessList**: [`AccessList`](AccessList.md)

### chainId

> **chainId**: `number`

### type?

> `optional` **type**: `"eip2930"`

### yParity?

> `optional` **yParity**: `number`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:189
