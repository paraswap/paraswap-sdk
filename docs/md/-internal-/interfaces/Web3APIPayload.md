[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3APIPayload

# Interface: Web3APIPayload\<API, Method\>

## Extends

- [`Web3APIRequest`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3APIRequest.md)\<`API`, `Method`\>

## Type Parameters

• **API** *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md)

• **Method** *extends* [`Web3APIMethod`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/Web3APIMethod.md)\<`API`\>

## Properties

### id?

> `readonly` `optional` **id**: [`JsonRpcId`](../type-aliases/JsonRpcId.md)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:29

***

### jsonrpc?

> `readonly` `optional` **jsonrpc**: [`JsonRpcIdentifier`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/JsonRpcIdentifier.md)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:28

***

### method

> **method**: `string` \| `Method`

#### Inherited from

[`Web3APIRequest`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3APIRequest.md).[`method`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3APIRequest.md#method)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:24

***

### params?

> `optional` **params**: `object` \| readonly `unknown`[] \| [`Web3APIParams`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/Web3APIParams.md)\<`API`, `Method`\>

#### Inherited from

[`Web3APIRequest`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3APIRequest.md).[`params`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3APIRequest.md#params)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:25

***

### requestOptions?

> `readonly` `optional` **requestOptions**: `unknown`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:30
