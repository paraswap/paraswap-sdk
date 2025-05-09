[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Transaction

# Type Alias: Transaction\<quantity, index, isPending\>

> **Transaction**\<`quantity`, `index`, `isPending`\>: [`OneOf`](OneOf.md)\<[`TransactionLegacy`](TransactionLegacy.md)\<`quantity`, `index`, `isPending`\> \| [`TransactionEIP2930`](TransactionEIP2930.md)\<`quantity`, `index`, `isPending`\> \| [`TransactionEIP1559`](TransactionEIP1559.md)\<`quantity`, `index`, `isPending`\> \| [`TransactionEIP4844`](TransactionEIP4844.md)\<`quantity`, `index`, `isPending`\> \| [`TransactionEIP7702`](TransactionEIP7702.md)\<`quantity`, `index`, `isPending`\>\>

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **isPending** *extends* `boolean` = `boolean`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:130
