[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / NewHeadsSubscription

# Class: NewHeadsSubscription

## subscribe('newHeads') ( same as subscribe('newBlockHeaders'))

Subscribes to incoming block headers. This can be used as timer to check for changes on the blockchain.

The structure of a returned block header is [BlockHeaderOutput](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockHeaderOutput.md):

## Example

```ts
(await web3.eth.subscribe('newHeads')).on( // 'newBlockHeaders' would work as well
 'data',
console.log
);
>{
parentHash: '0x9e746a1d906b299def98c75b06f714d62dacadd567c7515d76eeaa8c8074c738',
sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
miner: '0x0000000000000000000000000000000000000000',
stateRoot: '0xe0f04b04861ecfa95e82a9310d6a7ef7aef8d7417f5209c182582bfb98a8e307',
transactionsRoot: '0x31ab4ea571a9e10d3a19aaed07d190595b1dfa34e03960c04293fec565dea536',
logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
difficulty: 2n,
number: 21n,
gasLimit: 11738125n,
gasUsed: 830006n,
timestamp: 1678797237n,
extraData: '0xd883010b02846765746888676f312e32302e31856c696e757800000000000000e0a6e93cf40e2e71a72e493272210c3f43738ccc7e7d7b14ffd51833797d896c09117e8dc4fbcbc969bd21b42e5af3e276a911524038c001b2109b63b8e0352601',
nonce: 0n
}
```

## Extends

- [`Web3Subscription`](Web3Subscription.md)\<`object`\>

## Constructors

### new NewHeadsSubscription()

> **new NewHeadsSubscription**(`args`, `options`): [`NewHeadsSubscription`](NewHeadsSubscription.md)

#### Parameters

• **args**: `any`

• **options**

• **options.returnFormat?**: [`DataFormat`](../type-aliases/DataFormat.md)

• **options.subscriptionManager**: [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`unknown`, `object`\>

#### Returns

[`NewHeadsSubscription`](NewHeadsSubscription.md)

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`constructor`](Web3Subscription.md#constructors)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:16

### new NewHeadsSubscription()

> **new NewHeadsSubscription**(`args`, `options`): [`NewHeadsSubscription`](NewHeadsSubscription.md)

#### Parameters

• **args**: `any`

• **options**

• **options.requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)\>

• **options.returnFormat?**: [`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

[`NewHeadsSubscription`](NewHeadsSubscription.md)

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

> **get** **lastBlock**(): `undefined` \| [`BlockOutput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockOutput.md)

##### Returns

`undefined` \| [`BlockOutput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockOutput.md)

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

node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:86

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

> `protected` **formatSubscriptionResult**(`data`): [`BlockHeaderOutput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockHeaderOutput.md)

#### Parameters

• **data**: [`BlockHeaderOutput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockHeaderOutput.md)

#### Returns

[`BlockHeaderOutput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockHeaderOutput.md)

#### Overrides

[`Web3Subscription`](Web3Subscription.md).[`formatSubscriptionResult`](Web3Subscription.md#formatsubscriptionresult)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:87

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

• **data**: [`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcSubscriptionResultOld`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/JsonRpcSubscriptionResultOld.md)\<[`Log`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md)\> \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<[`Log`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`processSubscriptionData`](Web3Subscription.md#processsubscriptiondata)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:30

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

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
