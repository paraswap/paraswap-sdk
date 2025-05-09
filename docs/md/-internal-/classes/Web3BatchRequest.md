[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3BatchRequest

# Class: Web3BatchRequest

## Constructors

### new Web3BatchRequest()

> **new Web3BatchRequest**(`requestManager`): [`Web3BatchRequest`](Web3BatchRequest.md)

#### Parameters

• **requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)\>

#### Returns

[`Web3BatchRequest`](Web3BatchRequest.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:8

## Accessors

### requests

#### Get Signature

> **get** **requests**(): [`JsonRpcRequest`](../interfaces/JsonRpcRequest.md)\<`unknown`[]\>[]

##### Returns

[`JsonRpcRequest`](../interfaces/JsonRpcRequest.md)\<`unknown`[]\>[]

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:9

## Methods

### add()

> **add**\<`ResponseType`\>(`request`): [`Web3DeferredPromise`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/Web3DeferredPromise.md)\<`ResponseType`\>

#### Type Parameters

• **ResponseType** = `unknown`

#### Parameters

• **request**: [`JsonRpcOptionalRequest`](../interfaces/JsonRpcOptionalRequest.md)\<`unknown`\>

#### Returns

[`Web3DeferredPromise`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/Web3DeferredPromise.md)\<`ResponseType`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:10

***

### execute()

> **execute**(`options`?): `Promise`\<[`JsonRpcBatchResponse`](../type-aliases/JsonRpcBatchResponse.md)\<`unknown`, `unknown`\>\>

#### Parameters

• **options?**

• **options.timeout?**: `number`

#### Returns

`Promise`\<[`JsonRpcBatchResponse`](../type-aliases/JsonRpcBatchResponse.md)\<`unknown`, `unknown`\>\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:11
