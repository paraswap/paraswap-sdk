[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / NewPendingTransactionsSubscription

# Class: NewPendingTransactionsSubscription

## subscribe('pendingTransactions')
Subscribes to incoming pending transactions.

You can subscribe to pending transactions by calling web3.eth.subscribe('pendingTransactions').

## Example

```ts
(await web3.eth.subscribe('pendingTransactions')).on('data', console.log);
```

## Extends

- [`Web3Subscription`](Web3Subscription.md)\<`object`\>

## Constructors

### new NewPendingTransactionsSubscription()

> **new NewPendingTransactionsSubscription**(`args`, `options`): [`NewPendingTransactionsSubscription`](NewPendingTransactionsSubscription.md)

#### Parameters

• **args**: `any`

• **options**

• **options.returnFormat?**: [`DataFormat`](../type-aliases/DataFormat.md)

• **options.subscriptionManager**: [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`unknown`, `object`\>

#### Returns

[`NewPendingTransactionsSubscription`](NewPendingTransactionsSubscription.md)

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`constructor`](Web3Subscription.md#constructors)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:16

### new NewPendingTransactionsSubscription()

> **new NewPendingTransactionsSubscription**(`args`, `options`): [`NewPendingTransactionsSubscription`](NewPendingTransactionsSubscription.md)

#### Parameters

• **args**: `any`

• **options**

• **options.requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)\>

• **options.returnFormat?**: [`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

[`NewPendingTransactionsSubscription`](NewPendingTransactionsSubscription.md)

#### Deprecated

This constructor overloading should not be used

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`constructor`](Web3Subscription.md#constructors)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:23

## Properties

### \_id?

> `protected` `optional` **\_id**: `string`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`_id`](Web3Subscription.md#_id)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:15

***

### args

> `readonly` **args**: `any`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`args`](Web3Subscription.md#args)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:11

## Accessors

### id

#### Get Signature

> **get** **id**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`id`](Web3Subscription.md#id)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:27

***

### lastBlock

#### Get Signature

> **get** **lastBlock**(): `undefined` \| [`BlockOutput`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockOutput.md)

##### Returns

`undefined` \| [`BlockOutput`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockOutput.md)

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`lastBlock`](Web3Subscription.md#lastblock)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:28

***

### returnFormat

#### Get Signature

> **get** `protected` **returnFormat**(): [`DataFormat`](../type-aliases/DataFormat.md)

##### Returns

[`DataFormat`](../type-aliases/DataFormat.md)

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`returnFormat`](Web3Subscription.md#returnformat)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:32

***

### subscriptionManager

#### Get Signature

> **get** `protected` **subscriptionManager**(): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `object`\>

##### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `object`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`subscriptionManager`](Web3Subscription.md#subscriptionmanager)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:33

## Methods

### \_buildSubscriptionParams()

> `protected` **\_buildSubscriptionParams**(): `string`[]

#### Returns

`string`[]

#### Overrides

[`Web3Subscription`](Web3Subscription.md).[`_buildSubscriptionParams`](Web3Subscription.md#_buildsubscriptionparams)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:51

***

### \_processSubscriptionError()

> **\_processSubscriptionError**(`error`): `void`

#### Parameters

• **error**: [`Error`](../interfaces/Error.md)

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`_processSubscriptionError`](Web3Subscription.md#_processsubscriptionerror)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:41

***

### \_processSubscriptionResult()

> **\_processSubscriptionResult**(`data`): `void`

#### Parameters

• **data**: `unknown`

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`_processSubscriptionResult`](Web3Subscription.md#_processsubscriptionresult)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:40

***

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

• **eventName**: `K`

• **params**: `object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\[`K`\]

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`emit`](Web3Subscription.md#emit)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`eventNames`](Web3Subscription.md#eventnames)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

***

### formatSubscriptionResult()

> `protected` **formatSubscriptionResult**(`data`): `string`

#### Parameters

• **data**: `string`

#### Returns

`string`

#### Overrides

[`Web3Subscription`](Web3Subscription.md).[`formatSubscriptionResult`](Web3Subscription.md#formatsubscriptionresult)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:52

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`getMaxListeners`](Web3Subscription.md#getmaxlisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`): `number`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

• **eventName**: `K`

#### Returns

`number`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`listenerCount`](Web3Subscription.md#listenercount)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:17

***

### listeners()

> **listeners**\<`K`\>(`eventName`): (...`args`) => `void`[]

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

• **eventName**: `K`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`listeners`](Web3Subscription.md#listeners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`off`](Web3Subscription.md#off)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`on`](Web3Subscription.md#on)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:13

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`once`](Web3Subscription.md#once)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

***

### processSubscriptionData()

> **processSubscriptionData**(`data`): `void`

#### Parameters

• **data**: [`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcSubscriptionResultOld`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/JsonRpcSubscriptionResultOld.md)\<[`Log`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md)\> \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<[`Log`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`processSubscriptionData`](Web3Subscription.md#processsubscriptiondata)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:30

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`removeAllListeners`](Web3Subscription.md#removealllisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

***

### resubscribe()

> **resubscribe**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`resubscribe`](Web3Subscription.md#resubscribe)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:36

***

### sendSubscriptionRequest()

> **sendSubscriptionRequest**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`sendSubscriptionRequest`](Web3Subscription.md#sendsubscriptionrequest)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:31

***

### sendUnsubscribeRequest()

> **sendUnsubscribeRequest**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`sendUnsubscribeRequest`](Web3Subscription.md#sendunsubscriberequest)

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

[`Web3Subscription`](Web3Subscription.md).[`setMaxListenerWarningThreshold`](Web3Subscription.md#setmaxlistenerwarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21

***

### subscribe()

> **subscribe**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`subscribe`](Web3Subscription.md#subscribe)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:29

***

### unsubscribe()

> **unsubscribe**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`unsubscribe`](Web3Subscription.md#unsubscribe)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:37
