[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchPendingTransactionsParameters

# Type Alias: WatchPendingTransactionsParameters\<transport\>

> **WatchPendingTransactionsParameters**\<`transport`\>: `object` & [`GetPollOptions`](GetPollOptions.md)\<`transport`\>

## Type declaration

### onError()?

> `optional` **onError**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

• **error**: [`Error`](../interfaces/Error.md)

#### Returns

`void`

### onTransactions

> **onTransactions**: [`OnTransactionsFn`](OnTransactionsFn.md)

The callback to call when new transactions are received.

## Type Parameters

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

## Defined in

node\_modules/viem/\_types/actions/public/watchPendingTransactions.d.ts:11
