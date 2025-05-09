[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / \_BuildArrayTypes

# Type Alias: \_BuildArrayTypes\<T, Depth\>

> **\_BuildArrayTypes**\<`T`, `Depth`\>: [`ResolvedRegister`](ResolvedRegister.md)\[`"arrayMaxDepth"`\] *extends* `false` ? \`$\{T\}\[$\{string\}\]\` : `Depth`\[`"length"`\] *extends* [`ResolvedRegister`](ResolvedRegister.md)\[`"arrayMaxDepth"`\] ? `T` : `T` *extends* \`$\{any\}\[$\{SolidityFixedArrayRange \| ""\}\]\` ? [`_BuildArrayTypes`](BuildArrayTypes.md)\<`T` \| \`$\{T\}\[$\{SolidityFixedArrayRange \| ""\}\]\`, [`...Depth`, `1`]\> : [`_BuildArrayTypes`](BuildArrayTypes.md)\<\`$\{T\}\[$\{SolidityFixedArrayRange \| ""\}\]\`, [`...Depth`, `1`]\>

Recursively build arrays up to maximum depth
or use a more broad type when maximum depth is switched "off"

## Type Parameters

• **T** *extends* `string`

• **Depth** *extends* readonly `number`[] = []

## Defined in

node\_modules/abitype/dist/types/abi.d.ts:21
