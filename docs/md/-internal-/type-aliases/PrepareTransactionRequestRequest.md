[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / PrepareTransactionRequestRequest

# Type Alias: PrepareTransactionRequestRequest\<chain, chainOverride, _derivedChain\>

> **PrepareTransactionRequestRequest**\<`chain`, `chainOverride`, `_derivedChain`\>: [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`_derivedChain`\>, `"from"`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md) & `object`

## Type declaration

### nonceManager?

> `optional` **nonceManager**: [`NonceManager`](NonceManager.md)

Nonce manager to use for the transaction request.

### parameters?

> `optional` **parameters**: readonly [`PrepareTransactionRequestParameterType`](PrepareTransactionRequestParameterType.md)[]

Parameters to prepare for the transaction request.

#### Default

```ts
['blobVersionedHashes', 'chainId', 'fees', 'gas', 'nonce', 'type']
```

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **_derivedChain** *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/prepareTransactionRequest.d.ts:24
