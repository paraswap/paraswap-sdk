[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Authorization

# Type Alias: Authorization\<uint32, signed\>

> **Authorization**\<`uint32`, `signed`\>: `object` & `signed` *extends* `true` ? [`Signature`](Signature.md) : [`ExactPartial`](ExactPartial.md)\<[`Signature`](Signature.md)\>

## Type declaration

### chainId

> **chainId**: `uint32`

Chain ID to authorize.

### contractAddress

> **contractAddress**: [`Address`](Address.md)

Address of the contract to set as code for the Authority.

### nonce

> **nonce**: `uint32`

Nonce of the Authority to authorize.

## Type Parameters

• **uint32** = `number`

• **signed** *extends* `boolean` = `false`

## Defined in

node\_modules/viem/\_types/experimental/eip7702/types/authorization.d.ts:4
