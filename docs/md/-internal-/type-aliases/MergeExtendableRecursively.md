[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / MergeExtendableRecursively

# Type Alias: MergeExtendableRecursively\<Accum, Replacements\>

> **MergeExtendableRecursively**\<`Accum`, `Replacements`\>: `Replacements` *extends* [infer Head, infer Tail] ? `Tail` *extends* [`Record`](Record.md)\<`string`, `any`\>[] ? `Head` *extends* [`Record`](Record.md)\<`string`, `any`\> ? [`MergeExtendableRecursively`](MergeExtendableRecursively.md)\<[`MergeExtendableOnce`](MergeExtendableOnce.md)\<`Accum`, `Head`\>, `Tail`\> : `Accum` : `Head` *extends* [`Record`](Record.md)\<`string`, `any`\> ? [`MergeExtendableOnce`](MergeExtendableOnce.md)\<`Accum`, `Head`\> : `Accum` : `Accum`

## Type Parameters

• **Accum** *extends* [`Record`](Record.md)\<`string`, `any`\>

• **Replacements** *extends* [`Record`](Record.md)\<`string`, `any`\>[]

## Defined in

[src/sdk/partial.ts:69](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/partial.ts#L69)
