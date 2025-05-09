[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / NonceManager

# Type Alias: NonceManager

> **NonceManager**: `object`

## Type declaration

### consume()

> **consume**: (`parameters`) => `Promise`\<`number`\>

Get and increment a nonce.

#### Parameters

• **parameters**: [`FunctionParameters`](FunctionParameters.md) & `object`

#### Returns

`Promise`\<`number`\>

### get()

> **get**: (`chainId`) => `Promise`\<`number`\>

Get a nonce.

#### Parameters

• **chainId**: [`FunctionParameters`](FunctionParameters.md) & `object`

#### Returns

`Promise`\<`number`\>

### increment()

> **increment**: (`chainId`) => `void`

Increment a nonce.

#### Parameters

• **chainId**: [`FunctionParameters`](FunctionParameters.md)

#### Returns

`void`

### reset()

> **reset**: (`chainId`) => `void`

Reset a nonce.

#### Parameters

• **chainId**: [`FunctionParameters`](FunctionParameters.md)

#### Returns

`void`

## Defined in

node\_modules/viem/\_types/utils/nonceManager.d.ts:11
