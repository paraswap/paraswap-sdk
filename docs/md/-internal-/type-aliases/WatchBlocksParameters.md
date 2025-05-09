[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchBlocksParameters

# Type Alias: WatchBlocksParameters\<transport, chain, includeTransactions, blockTag\>

> **WatchBlocksParameters**\<`transport`, `chain`, `includeTransactions`, `blockTag`\>: `object` & [`HasTransportType`](HasTransportType.md)\<`transport`, `"webSocket"`\> *extends* `true` ? `object` : `never` \| `object`

## Type declaration

### onBlock

> **onBlock**: [`OnBlock`](OnBlock.md)\<`chain`, `includeTransactions`, `blockTag`\>

The callback to call when a new block is received.

### onError()?

> `optional` **onError**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

• **error**: [`Error`](../interfaces/Error.md)

#### Returns

`void`

## Type Parameters

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

• **includeTransactions** *extends* `boolean` = `false`

• **blockTag** *extends* [`BlockTag`](BlockTag.md) = `"latest"`

## Defined in

node\_modules/viem/\_types/actions/public/watchBlocks.d.ts:12
