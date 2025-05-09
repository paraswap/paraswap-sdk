[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / IsUndefined

# Type Alias: IsUndefined\<T\>

> **IsUndefined**\<`T`\>: [`undefined`] *extends* [`T`] ? `true` : `false`

## Type Parameters

• **T**

Type to check

## Description

Checks if [T](IsUndefined.md) is `undefined`

## Example

```ts
type Result = IsUndefined<undefined>
//   ^? type Result = true
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:72
