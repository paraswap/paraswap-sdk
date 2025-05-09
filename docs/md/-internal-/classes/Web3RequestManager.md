[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3RequestManager

# Class: Web3RequestManager\<API\>

## Extends

- [`Web3EventEmitter`](Web3EventEmitter.md)\<\{ \[key in Web3RequestManagerEvent\]: SupportedProviders\<API\> \| undefined \}\>

## Type Parameters

• **API** *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = [`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)

## Constructors

### new Web3RequestManager()

> **new Web3RequestManager**\<`API`\>(`provider`?, `useRpcCallSpecification`?, `requestManagerMiddleware`?): [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

#### Parameters

• **provider?**: `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

• **useRpcCallSpecification?**: `boolean`

• **requestManagerMiddleware?**: [`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

#### Returns

[`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`constructor`](Web3EventEmitter.md#constructors)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:14

## Properties

### middleware?

> `optional` **middleware**: [`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:13

## Accessors

### provider

#### Get Signature

> **get** **provider**(): `undefined` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

Will return the current provider.

##### Returns

`undefined` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

Returns the current provider

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:27

***

### providers

#### Get Signature

> **get** **providers**(): `object`

Will return all available providers

##### Returns

`object`

###### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

###### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:31

***

### providers

#### Get Signature

> **get** `static` **providers**(): `object`

Will return all available providers

##### Returns

`object`

###### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

###### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:18

## Methods

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object`\>

#### Parameters

• **eventName**: `K`

• **params**: `object`\[`K`\]

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`emit`](Web3EventEmitter.md#emit)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`eventNames`](Web3EventEmitter.md#eventnames)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`getMaxListeners`](Web3EventEmitter.md#getmaxlisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`): `number`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object`\>

#### Parameters

• **eventName**: `K`

#### Returns

`number`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`listenerCount`](Web3EventEmitter.md#listenercount)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:17

***

### listeners()

> **listeners**\<`K`\>(`eventName`): (...`args`) => `void`[]

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object`\>

#### Parameters

• **eventName**: `K`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`listeners`](Web3EventEmitter.md#listeners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object`\>

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`off`](Web3EventEmitter.md#off)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object`\>

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`on`](Web3EventEmitter.md#on)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:13

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object`\>

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`once`](Web3EventEmitter.md#once)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`removeAllListeners`](Web3EventEmitter.md#removealllisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

***

### send()

> **send**\<`Method`, `ResponseType`\>(`request`): `Promise`\<`ResponseType`\>

Will execute a request

#### Type Parameters

• **Method** *extends* `string`

• **ResponseType** = [`Web3APIReturnType`](../type-aliases/Web3APIReturnType.md)\<`API`, `Method`\>

#### Parameters

• **request**: [`Web3APIRequest`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3APIRequest.md)\<`API`, `Method`\>

[Web3APIRequest](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3APIRequest.md) The request to send

#### Returns

`Promise`\<`ResponseType`\>

The response of the request ResponseType. If there is error
in the response, will throw an error

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:51

***

### sendBatch()

> **sendBatch**(`request`): `Promise`\<[`JsonRpcBatchResponse`](../type-aliases/JsonRpcBatchResponse.md)\<`unknown`\>\>

Same as send, but, will execute a batch of requests

#### Parameters

• **request**: [`JsonRpcBatchRequest`](../type-aliases/JsonRpcBatchRequest.md)

[JsonRpcBatchRequest](../type-aliases/JsonRpcBatchRequest.md) The batch request to send

#### Returns

`Promise`\<[`JsonRpcBatchResponse`](../type-aliases/JsonRpcBatchResponse.md)\<`unknown`\>\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:57

***

### setMaxListenerWarningThreshold()

> **setMaxListenerWarningThreshold**(`maxListenersWarningThreshold`): `void`

#### Parameters

• **maxListenersWarningThreshold**: `number`

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`setMaxListenerWarningThreshold`](Web3EventEmitter.md#setmaxlistenerwarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21

***

### setMiddleware()

> **setMiddleware**(`requestManagerMiddleware`): `void`

#### Parameters

• **requestManagerMiddleware**: [`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:41

***

### setProvider()

> **setProvider**(`provider`?): `boolean`

Use to set provider. Provider can be a provider instance or a string.

#### Parameters

• **provider?**: `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

The provider to set

#### Returns

`boolean`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:40
