[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / BuildTxInputBaseBUYForOrders

# Type Alias: BuildTxInputBaseBUYForOrders\<K\>

> **BuildTxInputBaseBUYForOrders**\<`K`\>: [`Omit`](Omit.md)\<[`BuildTxInputBase`](BuildTxInputBase.md), `K`\> & [`Omit`](Omit.md)\<[`TxInputAmountsPartBuy`](TxInputAmountsPartBuy.md), `"destAmount"` \| `K`\> \| [`Omit`](Omit.md)\<[`TxInputAmountsPartBuyOrSell`](TxInputAmountsPartBuyOrSell.md), `"destAmount"` \| `K`\>

## Type Parameters

• **K** *extends* keyof [`TxInputAmountsPartBuy`](TxInputAmountsPartBuy.md) \| keyof [`BuildTxInputBase`](BuildTxInputBase.md) = `never`

## Defined in

[src/methods/swap/transaction.ts:102](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L102)
