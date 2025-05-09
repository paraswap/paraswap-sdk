[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Branded

# Type Alias: Branded\<T, U\>

> **Branded**\<`T`, `U`\>: `T` & `object`

Creates a branded type of [T](Branded.md) with the brand [U](Branded.md).

## Type declaration

### \[symbol\]

> **\[symbol\]**: `U`

## Type Parameters

• **T**

Type to brand

• **U**

Label

## Returns

Branded type

## Example

```ts
type Result = Branded<string, 'foo'>
//   ^? type Result = string & { [symbol]: 'foo' }
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:13
