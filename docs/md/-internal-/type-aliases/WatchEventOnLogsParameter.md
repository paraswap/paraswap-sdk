[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchEventOnLogsParameter

# Type Alias: WatchEventOnLogsParameter\<abiEvent, abiEvents, strict, eventName\>

> **WatchEventOnLogsParameter**\<`abiEvent`, `abiEvents`, `strict`, `eventName`\>: [`Log`](Log.md)\<`bigint`, `number`, `false`, `abiEvent`, `strict`, `abiEvents`, `eventName`\>[]

## Type Parameters

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **abiEvents** *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`abiEvent`] : `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **eventName** *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>

## Defined in

node\_modules/viem/\_types/actions/public/watchEvent.d.ts:12
