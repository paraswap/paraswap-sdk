[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3BaseProvider

# Class: `abstract` Web3BaseProvider\<API\>

## Extended by

- [`Eip1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/Eip1193Provider.md)

## Type Parameters

• **API** *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = [`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)

## Implements

- [`LegacySendProvider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/LegacySendProvider.md)
- [`LegacySendAsyncProvider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/LegacySendAsyncProvider.md)
- [`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md)\<`API`\>

## Constructors

### new Web3BaseProvider()

> **new Web3BaseProvider**\<`API`\>(): [`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\>

#### Returns

[`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\>

## Accessors

### \[symbol\]

#### Get Signature

> **get** **\[symbol\]**(): `boolean`

##### Returns

`boolean`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:67

## Methods

### asEIP1193Provider()

> **asEIP1193Provider**(): [`Eip1193Compatible`](../type-aliases/Eip1193Compatible.md)\<`API`\>

Modify the return type of the request method to be fully compatible with EIP-1193

[deprecated] In the future major releases (\>= v5) all providers are supposed to be fully compatible with EIP-1193.
So this method will not be needed and would not be available in the future.

#### Returns

[`Eip1193Compatible`](../type-aliases/Eip1193Compatible.md)\<`API`\>

A new instance of the provider with the request method fully compatible with EIP-1193

#### Example

```ts
const provider = new Web3HttpProvider('http://localhost:8545');
const fullyCompatibleProvider = provider.asEIP1193Provider();
const result = await fullyCompatibleProvider.request({ method: 'eth_getBalance' });
console.log(result); // '0x0234c8a3397aab58' or something like that
```

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:97

***

### connect()

> `abstract` **connect**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:116

***

### disconnect()

> `abstract` **disconnect**(`code`?, `data`?): `void`

#### Parameters

• **code?**: `number`

• **data?**: `string`

#### Returns

`void`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:117

***

### getStatus()

> `abstract` **getStatus**(): [`Web3ProviderStatus`](../type-aliases/Web3ProviderStatus.md)

#### Returns

[`Web3ProviderStatus`](../type-aliases/Web3ProviderStatus.md)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:68

***

### on()

#### on(type, listener)

> `abstract` **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"disconnect"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderRpcError`](../interfaces/ProviderRpcError.md)\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`on`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#on)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:99

#### on(type, listener)

> `abstract` **on**\<`T`\>(`type`, `listener`): `void`

##### Type Parameters

• **T** = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### Parameters

• **type**: `string`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderMessage`](../interfaces/ProviderMessage.md)\> \| [`Web3ProviderMessageEventCallback`](../type-aliases/Web3ProviderMessageEventCallback.md)\<`T`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`on`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#on)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:100

#### on(type, listener)

> `abstract` **on**\<`T`\>(`type`, `listener`): `void`

##### Type Parameters

• **T** = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### Parameters

• **type**: `string`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderMessage`](../interfaces/ProviderMessage.md)\> \| [`Web3ProviderMessageEventCallback`](../type-aliases/Web3ProviderMessageEventCallback.md)\<`T`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`on`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#on)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:101

#### on(type, listener)

> `abstract` **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"connect"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderConnectInfo`](../interfaces/ProviderConnectInfo.md)\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`on`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#on)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:102

#### on(type, listener)

> `abstract` **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"chainChanged"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`on`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#on)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:103

#### on(type, listener)

> `abstract` **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"accountsChanged"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`[]\>

##### Returns

`void`

##### Implementation of

`EIP1193Provider.on`

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:104

***

### once()

#### once(type, listener)

> `abstract` **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"disconnect"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderRpcError`](../interfaces/ProviderRpcError.md)\>

##### Returns

`void`

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:110

#### once(type, listener)

> `abstract` **once**\<`T`\>(`type`, `listener`): `void`

##### Type Parameters

• **T** = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### Parameters

• **type**: `string`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderMessage`](../interfaces/ProviderMessage.md)\> \| [`Web3ProviderEventCallback`](../type-aliases/Web3ProviderEventCallback.md)\<`T`\>

##### Returns

`void`

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:111

#### once(type, listener)

> `abstract` **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"connect"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderConnectInfo`](../interfaces/ProviderConnectInfo.md)\>

##### Returns

`void`

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:112

#### once(type, listener)

> `abstract` **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"chainChanged"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`\>

##### Returns

`void`

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:113

#### once(type, listener)

> `abstract` **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"accountsChanged"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`[]\>

##### Returns

`void`

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:114

***

### removeAllListeners()?

> `abstract` `optional` **removeAllListeners**(`type`): `void`

#### Parameters

• **type**: `string`

#### Returns

`void`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:115

***

### removeListener()

#### removeListener(type, listener)

> `abstract` **removeListener**(`type`, `listener`): `void`

##### Parameters

• **type**: `"disconnect"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderRpcError`](../interfaces/ProviderRpcError.md)\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`removeListener`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#removelistener)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:105

#### removeListener(type, listener)

> `abstract` **removeListener**\<`T`\>(`type`, `listener`): `void`

##### Type Parameters

• **T** = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### Parameters

• **type**: `string`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderMessage`](../interfaces/ProviderMessage.md)\> \| [`Web3ProviderEventCallback`](../type-aliases/Web3ProviderEventCallback.md)\<`T`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`removeListener`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#removelistener)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:106

#### removeListener(type, listener)

> `abstract` **removeListener**(`type`, `listener`): `void`

##### Parameters

• **type**: `"connect"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderConnectInfo`](../interfaces/ProviderConnectInfo.md)\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`removeListener`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#removelistener)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:107

#### removeListener(type, listener)

> `abstract` **removeListener**(`type`, `listener`): `void`

##### Parameters

• **type**: `"chainChanged"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`removeListener`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#removelistener)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:108

#### removeListener(type, listener)

> `abstract` **removeListener**(`type`, `listener`): `void`

##### Parameters

• **type**: `"accountsChanged"`

• **listener**: [`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`[]\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`removeListener`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#removelistener)

##### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:109

***

### request()

> `abstract` **request**\<`Method`, `ResultType`\>(`args`): `Promise`\<[`JsonRpcResponseWithResult`](../interfaces/JsonRpcResponseWithResult.md)\<`ResultType`\>\>

#### Type Parameters

• **Method** *extends* `string`

• **ResultType** = `unknown`

#### Parameters

• **args**: [`Web3APIPayload`](../interfaces/Web3APIPayload.md)\<`API`, `Method`\>

#### Returns

`Promise`\<[`JsonRpcResponseWithResult`](../interfaces/JsonRpcResponseWithResult.md)\<`ResultType`\>\>

#### Implementation of

[`EIP1193Provider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md).[`request`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/EIP1193Provider.md#request)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:98

***

### reset()

> `abstract` **reset**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:118

***

### ~~send()~~

> **send**\<`ResultType`, `P`\>(`payload`, `callback`): `void`

#### Type Parameters

• **ResultType** = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

• **P** = `unknown`

#### Parameters

• **payload**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`P`\>

Request Payload

• **callback**

Callback

#### Returns

`void`

#### Deprecated

Please use `.request` instead.

#### Implementation of

[`LegacySendProvider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/LegacySendProvider.md).[`send`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/LegacySendProvider.md#send)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:75

***

### ~~sendAsync()~~

> **sendAsync**\<`R`, `P`\>(`payload`): `Promise`\<[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`R`, [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)\>\>

#### Type Parameters

• **R** = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

• **P** = `unknown`

#### Parameters

• **payload**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`P`\>

Request Payload

#### Returns

`Promise`\<[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`R`, [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)\>\>

#### Deprecated

Please use `.request` instead.

#### Implementation of

[`LegacySendAsyncProvider`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/LegacySendAsyncProvider.md).[`sendAsync`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/LegacySendAsyncProvider.md#sendasync)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:80

***

### supportsSubscriptions()

> `abstract` **supportsSubscriptions**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:69

***

### isWeb3Provider()

> `static` **isWeb3Provider**(`provider`): `boolean`

#### Parameters

• **provider**: `unknown`

#### Returns

`boolean`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:66
