[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Args

# Type Alias: Args\<Events, EventName\>

> **Args**\<`Events`, `EventName`\>: `EventName` *extends* keyof `Events` ? `Events`\[`EventName`\] \| `EventName` *extends* keyof [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md) ? [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md)\[`EventName`\] : `never` : `EventName` *extends* keyof [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md) ? [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md)\[`EventName`\] : `any`[]

## Type Parameters

• **Events** *extends* [`EventMap`](EventMap.md)\<`Events`\>

• **EventName**

## Defined in

node\_modules/@types/node/events.d.ts:105
