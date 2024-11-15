[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchBlockNumberParameters

# Type Alias: WatchBlockNumberParameters\<transport\>

> **WatchBlockNumberParameters**\<`transport`\>: `object` & [`HasTransportType`](HasTransportType.md)\<`transport`, `"webSocket"`\> *extends* `true` ? `object` : `never` \| `object`

## Type declaration

### onBlockNumber

> **onBlockNumber**: [`OnBlockNumberFn`](OnBlockNumberFn.md)

The callback to call when a new block number is received.

### onError()?

> `optional` **onError**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

• **error**: [`Error`](../interfaces/Error.md)

#### Returns

`void`

## Type Parameters

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

## Defined in

node\_modules/viem/\_types/actions/public/watchBlockNumber.d.ts:10
