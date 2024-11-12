[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / RpcTransaction

# Type Alias: RpcTransaction\<pending\>

> **RpcTransaction**\<`pending`\>: [`OneOf`](OneOf.md)\<[`Omit`](Omit.md)\<[`TransactionLegacy`](TransactionLegacy.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x0"`\>, `"typeHex"`\> \| [`PartialBy`](PartialBy.md)\<[`Omit`](Omit.md)\<[`TransactionEIP2930`](TransactionEIP2930.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x1"`\>, `"typeHex"`\>, `"yParity"`\> \| [`PartialBy`](PartialBy.md)\<[`Omit`](Omit.md)\<[`TransactionEIP1559`](TransactionEIP1559.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x2"`\>, `"typeHex"`\>, `"yParity"`\> \| [`PartialBy`](PartialBy.md)\<[`Omit`](Omit.md)\<[`TransactionEIP4844`](TransactionEIP4844.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x3"`\>, `"typeHex"`\>, `"yParity"`\> \| [`PartialBy`](PartialBy.md)\<[`Omit`](Omit.md)\<[`TransactionEIP7702`](TransactionEIP7702.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x4"`\>, `"authorizationList"` \| `"typeHex"`\> & `object`, `"yParity"`\>\>

## Type Parameters

• **pending** *extends* `boolean` = `boolean`

## Defined in

node\_modules/viem/\_types/types/rpc.d.ts:26
