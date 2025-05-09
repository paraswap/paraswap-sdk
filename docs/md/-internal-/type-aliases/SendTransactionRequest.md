[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionRequest

# Type Alias: SendTransactionRequest\<chain, chainOverride, _derivedChain\>

> **SendTransactionRequest**\<`chain`, `chainOverride`, `_derivedChain`\>: [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`_derivedChain`\>, `"from"`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **_derivedChain** *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/sendTransaction.d.ts:24
