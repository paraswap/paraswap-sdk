[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrepareTransactionRequestParameters

# Type Alias: PrepareTransactionRequestParameters\<chain, account, chainOverride, accountOverride, request\>

> **PrepareTransactionRequestParameters**\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`\>: `request` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`, `accountOverride`, `false`, `true`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)\<`request`\> & `object`

## Type declaration

### chainId?

> `optional` **chainId**: `number`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **accountOverride** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined`

• **request** *extends* [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\> = [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/prepareTransactionRequest.d.ts:36
