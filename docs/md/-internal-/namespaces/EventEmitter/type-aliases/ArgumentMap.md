[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [EventEmitter](../README.md) / ArgumentMap

# Type Alias: ArgumentMap\<T\>

> **ArgumentMap**\<`T`\>: `{ [K in keyof T]: T[K] extends Function ? Parameters<T[K]> : T[K] extends any[] ? T[K] : any[] }`

## Type Parameters

• **T** *extends* `object`

## Defined in

node\_modules/eventemitter3/index.d.ts:109
