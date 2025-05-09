[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / IsNever

# Type Alias: IsNever\<T\>

> **IsNever**\<`T`\>: [`T`] *extends* [`never`] ? `true` : `false`

## Type Parameters

• **T**

Type to check

## Description

Checks if [T](IsNever.md) is `never`

## Example

```ts
type Result = IsNever<never>
//   ^? type Result = true
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:44
