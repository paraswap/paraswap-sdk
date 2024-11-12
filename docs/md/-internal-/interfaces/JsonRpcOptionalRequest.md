[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonRpcOptionalRequest

# Interface: JsonRpcOptionalRequest\<ParamType\>

Construct a type with the properties of T except for those in type K.

## Extends

- [`Omit`](../type-aliases/Omit.md)\<[`JsonRpcRequest`](JsonRpcRequest.md)\<`ParamType`\>, `"id"` \| `"jsonrpc"`\>

## Type Parameters

• **ParamType** = `unknown`[]

## Properties

### id?

> `readonly` `optional` **id**: [`JsonRpcId`](../type-aliases/JsonRpcId.md)

#### Defined in

node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:55

***

### jsonrpc?

> `readonly` `optional` **jsonrpc**: [`JsonRpcIdentifier`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/JsonRpcIdentifier.md)

#### Defined in

node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:56

***

### method

> `readonly` **method**: `string`

#### Inherited from

`Omit.method`

#### Defined in

node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:51

***

### params?

> `readonly` `optional` **params**: `ParamType`

#### Inherited from

`Omit.params`

#### Defined in

node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:52
