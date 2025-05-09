[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BuildTxInputBaseBUYForOrders

# Type Alias: BuildTxInputBaseBUYForOrders\<K\>

> **BuildTxInputBaseBUYForOrders**\<`K`\>: [`Omit`](Omit.md)\<[`BuildTxInputBase`](BuildTxInputBase.md), `K`\> & [`Omit`](Omit.md)\<[`TxInputAmountsPartBuy`](TxInputAmountsPartBuy.md), `"destAmount"` \| `K`\> \| [`Omit`](Omit.md)\<[`TxInputAmountsPartBuyOrSell`](TxInputAmountsPartBuyOrSell.md), `"destAmount"` \| `K`\>

## Type Parameters

• **K** *extends* keyof [`TxInputAmountsPartBuy`](TxInputAmountsPartBuy.md) \| keyof [`BuildTxInputBase`](BuildTxInputBase.md) = `never`

## Defined in

[src/methods/swap/transaction.ts:103](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/swap/transaction.ts#L103)
