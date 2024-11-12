[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Subscription

# Class: `abstract` Web3Subscription\<EventMap, ArgsType, API, CombinedEventMap\>

## Extends

- [`Web3EventEmitter`](Web3EventEmitter.md)\<`CombinedEventMap`\>

## Extended by

- [`LogsSubscription`](LogsSubscription.md)
- [`NewPendingTransactionsSubscription`](NewPendingTransactionsSubscription.md)
- [`NewHeadsSubscription`](NewHeadsSubscription.md)
- [`SyncingSubscription`](SyncingSubscription.md)
- [`LogsSubscription`](LogsSubscription.md)

## Type Parameters

• **EventMap** *extends* [`Web3EventMap`](../type-aliases/Web3EventMap.md)

• **ArgsType** = `any`

• **API** *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = [`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)

• **CombinedEventMap** *extends* [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md) = `EventMap` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)

## Constructors

### new Web3Subscription()

> **new Web3Subscription**\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>(`args`, `options`): [`Web3Subscription`](Web3Subscription.md)\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>

#### Parameters

• **args**: `ArgsType`

• **options**

• **options.returnFormat?**: [`DataFormat`](../type-aliases/DataFormat.md)

• **options.subscriptionManager**: [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`unknown`, `object`\>

#### Returns

[`Web3Subscription`](Web3Subscription.md)\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`constructor`](Web3EventEmitter.md#constructors)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:16

### new Web3Subscription()

> **new Web3Subscription**\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>(`args`, `options`): [`Web3Subscription`](Web3Subscription.md)\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>

#### Parameters

• **args**: `ArgsType`

• **options**

• **options.requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

• **options.returnFormat?**: [`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

[`Web3Subscription`](Web3Subscription.md)\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>

#### Deprecated

This constructor overloading should not be used

#### Overrides

`Web3EventEmitter<CombinedEventMap>.constructor`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:23

## Properties

### \_id?

> `protected` `optional` **\_id**: `string`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:15

***

### args

> `readonly` **args**: `ArgsType`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:11

## Accessors

### id

#### Get Signature

> **get** **id**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:27

***

### lastBlock

#### Get Signature

> **get** **lastBlock**(): `undefined` \| [`BlockOutput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockOutput.md)

##### Returns

`undefined` \| [`BlockOutput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockOutput.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:28

***

### returnFormat

#### Get Signature

> **get** `protected` **returnFormat**(): [`DataFormat`](../type-aliases/DataFormat.md)

##### Returns

[`DataFormat`](../type-aliases/DataFormat.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:32

***

### subscriptionManager

#### Get Signature

> **get** `protected` **subscriptionManager**(): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `object`\>

##### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `object`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:33

## Methods

### \_buildSubscriptionParams()

> `protected` **\_buildSubscriptionParams**(): [`Web3APIParams`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/Web3APIParams.md)\<`API`, `"eth_subscribe"`\>

#### Returns

[`Web3APIParams`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/Web3APIParams.md)\<`API`, `"eth_subscribe"`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:42

***

### \_processSubscriptionError()

> **\_processSubscriptionError**(`error`): `void`

#### Parameters

• **error**: [`Error`](../interfaces/Error.md)

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:41

***

### \_processSubscriptionResult()

> **\_processSubscriptionResult**(`data`): `void`

#### Parameters

• **data**: `unknown`

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:40

***

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **params**: `CombinedEventMap`\[`K`\]

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

### formatSubscriptionResult()

> `protected` **formatSubscriptionResult**(`data`): `CombinedEventMap`\[`"data"`\]

#### Parameters

• **data**: `CombinedEventMap`\[`"data"`\]

#### Returns

`CombinedEventMap`\[`"data"`\]

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:39

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

• **K** *extends* `string`

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

• **K** *extends* `string`

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

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`CombinedEventMap`\[`K`\]\>

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

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`CombinedEventMap`\[`K`\]\>

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

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`CombinedEventMap`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`once`](Web3EventEmitter.md#once)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

***

### processSubscriptionData()

> **processSubscriptionData**(`data`): `void`

#### Parameters

• **data**: [`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcSubscriptionResultOld`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/JsonRpcSubscriptionResultOld.md)\<[`Log`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md)\> \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<[`Log`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md)\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:30

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`removeAllListeners`](Web3EventEmitter.md#removealllisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

***

### resubscribe()

> **resubscribe**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:36

***

### sendSubscriptionRequest()

> **sendSubscriptionRequest**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:31

***

### sendUnsubscribeRequest()

> **sendUnsubscribeRequest**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:38

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

### subscribe()

> **subscribe**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:29

***

### unsubscribe()

> **unsubscribe**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:37
