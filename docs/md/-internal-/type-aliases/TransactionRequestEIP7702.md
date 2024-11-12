[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestEIP7702

# Type Alias: TransactionRequestEIP7702\<quantity, index, type\>

> **TransactionRequestEIP7702**\<`quantity`, `index`, `type`\>: [`TransactionRequestBase`](TransactionRequestBase.md)\<`quantity`, `index`, `type`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP1559`](FeeValuesEIP1559.md)\<`quantity`\>\> & `object`

## Type declaration

### accessList?

> `optional` **accessList**: [`AccessList`](AccessList.md)

### authorizationList?

> `optional` **authorizationList**: [`AuthorizationList`](AuthorizationList.md)\<`index`, `boolean`\>

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **type** = `"eip7702"`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:162
