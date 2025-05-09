[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Pretty

# Type Alias: Pretty\<type\>

> **Pretty**\<`type`\>: `{ [key in keyof type]: type[key] }` & `unknown`

Combines members of an intersection into a readable type.

## Type Parameters

• **type**

## Link

https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg

## Example

```ts
type Result = Pretty<{ a: string } | { b: string } | { c: number, d: bigint }>
//   ^? type Result = { a: string; b: string; c: number; d: bigint }
```

## Defined in

node\_modules/abitype/dist/types/types.d.ts:108
