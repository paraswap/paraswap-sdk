[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchEventOnLogsFn

# Type Alias: WatchEventOnLogsFn()\<abiEvent, abiEvents, strict, _eventName\>

> **WatchEventOnLogsFn**\<`abiEvent`, `abiEvents`, `strict`, `_eventName`\>: (`logs`) => `void`

## Type Parameters

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **abiEvents** *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`abiEvent`] : `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **_eventName** *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>

## Parameters

• **logs**: [`WatchEventOnLogsParameter`](WatchEventOnLogsParameter.md)\<`abiEvent`, `abiEvents`, `strict`, `_eventName`\>

## Returns

`void`

## Defined in

node\_modules/viem/\_types/actions/public/watchEvent.d.ts:13
