[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Listener

# Type Alias: Listener\<Events, EventName\>

> **Listener**\<`Events`, `EventName`\>: `EventName` *extends* keyof `Events` ? (...`args`) => `void` \| `EventName` *extends* keyof [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md) ? (...`args`) => `void` : `never` : `EventName` *extends* keyof [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md) ? (...`args`) => `void` : (...`args`) => `void`

## Type Parameters

• **Events** *extends* [`EventMap`](EventMap.md)\<`Events`\>

• **EventName**

## Defined in

node\_modules/@types/node/events.d.ts:116
