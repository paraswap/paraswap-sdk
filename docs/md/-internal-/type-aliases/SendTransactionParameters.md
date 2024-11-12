[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionParameters

# Type Alias: SendTransactionParameters\<chain, account, chainOverride, request\>

> **SendTransactionParameters**\<`chain`, `account`, `chainOverride`, `request`\>: `request` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`, [`Account`](Account.md) \| [`Address`](Address.md), `true`, `true`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)\<`request`\>

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **request** *extends* [`SendTransactionRequest`](SendTransactionRequest.md)\<`chain`, `chainOverride`\> = [`SendTransactionRequest`](SendTransactionRequest.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/sendTransaction.d.ts:25
