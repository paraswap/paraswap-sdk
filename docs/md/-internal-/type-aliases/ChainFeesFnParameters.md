[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainFeesFnParameters

# Type Alias: ChainFeesFnParameters\<formatters\>

> **ChainFeesFnParameters**\<`formatters`\>: `object`

## Type Parameters

• **formatters** *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

## Type declaration

### block

> **block**: [`Prettify`](Prettify.md)\<[`FormattedBlock`](FormattedBlock.md)\<[`Omit`](Omit.md)\<[`Chain`](Chain.md), `"formatters"`\> & `object`\>\>

The latest block.

### client

> **client**: [`Client`](Client.md)\<[`Transport`](Transport.md), [`Chain`](Chain.md)\>

### request?

> `optional` **request**: [`PrepareTransactionRequestParameters`](PrepareTransactionRequestParameters.md)\<[`Omit`](Omit.md)\<[`Chain`](Chain.md), `"formatters"`\> & `object`, [`Account`](Account.md) \| `undefined`, `undefined`\>

A transaction request. This value will be undefined if the caller
is outside of a transaction request context (e.g. a direct call to
the `estimateFeesPerGas` Action).

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:55
