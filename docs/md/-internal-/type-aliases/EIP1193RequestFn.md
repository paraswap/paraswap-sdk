[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP1193RequestFn

# Type Alias: EIP1193RequestFn()\<rpcSchema\>

> **EIP1193RequestFn**\<`rpcSchema`\>: \<`rpcSchemaOverride`, `_parameters`, `_returnType`\>(`args`, `options`?) => `Promise`\<`_returnType`\>

## Type Parameters

• **rpcSchema** *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

## Type Parameters

• **rpcSchemaOverride** *extends* [`RpcSchemaOverride`](RpcSchemaOverride.md) \| `undefined` = `undefined`

• **_parameters** *extends* [`EIP1193Parameters`](EIP1193Parameters.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\> = [`EIP1193Parameters`](EIP1193Parameters.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\>

• **_returnType** = [`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\> *extends* [`RpcSchema`](RpcSchema.md) ? [`Extract`](Extract.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\[`number`\], `object`\>\[`"ReturnType"`\] : `unknown`

## Parameters

• **args**: `_parameters`

• **options?**: [`EIP1193RequestOptions`](EIP1193RequestOptions.md)

## Returns

`Promise`\<`_returnType`\>

## Defined in

node\_modules/viem/\_types/types/eip1193.d.ts:1704
