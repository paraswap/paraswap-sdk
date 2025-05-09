[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableEIP7702

# Type Alias: TransactionSerializableEIP7702\<quantity, index\>

> **TransactionSerializableEIP7702**\<`quantity`, `index`\>: [`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP1559`](FeeValuesEIP1559.md)\<`quantity`\>\> & `object`

## Type declaration

### accessList?

> `optional` **accessList**: [`AccessList`](AccessList.md)

### authorizationList

> **authorizationList**: [`SignedAuthorizationList`](SignedAuthorizationList.md)

### chainId

> **chainId**: `number`

### type?

> `optional` **type**: `"eip7702"`

### yParity?

> `optional` **yParity**: `number`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:215
