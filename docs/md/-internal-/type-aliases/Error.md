[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Error

# Type Alias: Error\<messages\>

> **Error**\<`messages`\>: `messages` *extends* `string` ? [\`Error: $\{messages\}\`] : \{ \[key in keyof messages\]: messages\[key\] extends infer message extends string ? \`Error: $\{message\}\` : never \}

Prints custom error message

## Type Parameters

• **messages** *extends* `string` \| `string`[]

Error message

## Returns

Custom error message

## Example

```ts
type Result = Error<'Custom error message'>
//   ^? type Result = ['Error: Custom error message']
```

## Defined in

node\_modules/abitype/dist/types/types.d.ts:11
