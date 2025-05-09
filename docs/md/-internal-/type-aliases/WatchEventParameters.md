[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchEventParameters

# Type Alias: WatchEventParameters\<abiEvent, abiEvents, strict, transport, _eventName\>

> **WatchEventParameters**\<`abiEvent`, `abiEvents`, `strict`, `transport`, `_eventName`\>: `object` & [`GetPollOptions`](GetPollOptions.md)\<`transport`\> & `object` \| `object` \| `object`

## Type declaration

### address?

> `optional` **address**: [`Address`](Address.md) \| [`Address`](Address.md)[]

The address of the contract.

### fromBlock?

> `optional` **fromBlock**: [`BlockNumber`](BlockNumber.md)\<`bigint`\>

Block to start listening from.

### onError()?

> `optional` **onError**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

• **error**: [`Error`](../interfaces/Error.md)

#### Returns

`void`

### onLogs

> **onLogs**: [`WatchEventOnLogsFn`](WatchEventOnLogsFn.md)\<`abiEvent`, `abiEvents`, `strict`, `_eventName`\>

The callback to call when new event logs are received.

## Type Parameters

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **abiEvents** *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`abiEvent`] : `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

• **_eventName** *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>

## Defined in

node\_modules/viem/\_types/actions/public/watchEvent.d.ts:14
