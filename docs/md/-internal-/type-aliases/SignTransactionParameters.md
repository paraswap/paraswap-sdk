[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SignTransactionParameters

# Type Alias: SignTransactionParameters\<chain, account, chainOverride, request\>

> **SignTransactionParameters**\<`chain`, `account`, `chainOverride`, `request`\>: `request` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)\<`request`\>

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **request** *extends* [`SignTransactionRequest`](SignTransactionRequest.md)\<`chain`, `chainOverride`\> = [`SignTransactionRequest`](SignTransactionRequest.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/signTransaction.d.ts:20
