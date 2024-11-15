[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Prettify

# Type Alias: Prettify\<T\>

> **Prettify**\<`T`\>: `{ [K in keyof T]: T[K] }` & `object`

## Type Parameters

• **T**

## Description

Combines members of an intersection into a readable type.

## See

[https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg](https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg)

## Example

```ts
Prettify<{ a: string } & { b: string } & { c: number, d: bigint }>
=> { a: string, b: string, c: number, d: bigint }
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:125
