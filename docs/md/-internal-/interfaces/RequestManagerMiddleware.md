[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RequestManagerMiddleware

# Interface: RequestManagerMiddleware\<API\>

## Type Parameters

• **API**

## Methods

### processRequest()

> **processRequest**\<`ParamType`\>(`request`, `options`?): `Promise`\<[`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`ParamType`\>\>

#### Type Parameters

• **ParamType** = `unknown`[]

#### Parameters

• **request**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`ParamType`\>

• **options?**

#### Returns

`Promise`\<[`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`ParamType`\>\>

#### Defined in

node\_modules/web3-core/lib/commonjs/types.d.ts:13

***

### processResponse()

> **processResponse**\<`AnotherMethod`, `ResponseType`\>(`response`, `options`?): `Promise`\<[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`ResponseType`\>\>

#### Type Parameters

• **AnotherMethod** *extends* `string`

• **ResponseType** = [`Web3APIReturnType`](../type-aliases/Web3APIReturnType.md)\<`API`, `AnotherMethod`\>

#### Parameters

• **response**: [`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`ResponseType`\>

• **options?**

#### Returns

`Promise`\<[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`ResponseType`\>\>

#### Defined in

node\_modules/web3-core/lib/commonjs/types.d.ts:16
