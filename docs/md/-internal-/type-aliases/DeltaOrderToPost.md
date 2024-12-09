[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / DeltaOrderToPost

# Type Alias: DeltaOrderToPost

> **DeltaOrderToPost**: `object`

## Type declaration

### chainId

> **chainId**: `number`

### order

> **order**: [`DeltaAuctionOrder`](../../type-aliases/DeltaAuctionOrder.md)

### partiallyFillable?

> `optional` **partiallyFillable**: `boolean`

#### Description

designates the Order as being able to partilly filled, as opposed to fill-or-kill

### partner?

> `optional` **partner**: `string`

#### Description

Partner string

### signature

> **signature**: `string`

#### Description

Signature of the order from order.owner address. EOA signatures must be submitted in ERC-2098 Compact Representation.

## Defined in

[src/methods/delta/postDeltaOrder.ts:5](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L5)
