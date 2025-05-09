[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SignTransactionRequest

# Type Alias: SignTransactionRequest\<chain, chainOverride, _derivedChain\>

> **SignTransactionRequest**\<`chain`, `chainOverride`, `_derivedChain`\>: [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`_derivedChain`\>, `"from"`\>

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **_derivedChain** *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/signTransaction.d.ts:19
