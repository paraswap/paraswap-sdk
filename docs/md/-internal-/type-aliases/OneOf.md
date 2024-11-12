[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / OneOf

# Type Alias: OneOf\<union, fallback, keys\>

> **OneOf**\<`union`, `fallback`, `keys`\>: `union` *extends* infer item ? [`Prettify`](Prettify.md)\<`item` & `{ [key in Exclude<keys, keyof item>]?: fallback extends object ? key extends keyof fallback ? fallback[key] : undefined : undefined }`\> : `never`

## Type Parameters

• **union** *extends* `object`

• **fallback** *extends* `object` \| `undefined` = `undefined`

• **keys** *extends* [`KeyofUnion`](KeyofUnion.md)\<`union`\> = [`KeyofUnion`](KeyofUnion.md)\<`union`\>

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:169
