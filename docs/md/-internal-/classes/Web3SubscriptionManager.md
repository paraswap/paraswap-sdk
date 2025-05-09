[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3SubscriptionManager

# Class: Web3SubscriptionManager\<API, RegisteredSubs\>

## Type Parameters

• **API** *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = [`Web3APISpec`](../type-aliases/Web3APISpec.md)

• **RegisteredSubs** *extends* `object` = `object`

## Constructors

### new Web3SubscriptionManager()

> **new Web3SubscriptionManager**\<`API`, `RegisteredSubs`\>(`requestManager`, `registeredSubscriptions`): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

#### Parameters

• **requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

• **registeredSubscriptions**: `RegisteredSubs`

#### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

#### Example

```ts
const requestManager = new Web3RequestManager("ws://localhost:8545");
const subscriptionManager = new Web3SubscriptionManager(requestManager, {});
```

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:28

### new Web3SubscriptionManager()

> **new Web3SubscriptionManager**\<`API`, `RegisteredSubs`\>(`requestManager`, `registeredSubscriptions`, `tolerateUnlinkedSubscription`): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

#### Parameters

• **requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

• **registeredSubscriptions**: `RegisteredSubs`

• **tolerateUnlinkedSubscription**: `boolean`

#### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

#### Deprecated

This constructor overloading should not be used

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:32

## Properties

### registeredSubscriptions

> `readonly` **registeredSubscriptions**: `RegisteredSubs`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:14

***

### requestManager

> `readonly` **requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:13

## Accessors

### subscriptions

#### Get Signature

> **get** **subscriptions**(): `Map`\<`string`, [`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[keyof `RegisteredSubs`\]\>\>

Will returns all subscriptions.

##### Returns

`Map`\<`string`, [`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[keyof `RegisteredSubs`\]\>\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:49

## Methods

### addSubscription()

> **addSubscription**(`sub`): `Promise`\<`string`\>

Adds an instance of [Web3Subscription](Web3Subscription.md) and subscribes to it

#### Parameters

• **sub**: [`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[keyof `RegisteredSubs`\]\>

A [Web3Subscription](Web3Subscription.md) object

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:56

***

### clear()

> **clear**(): `void`

Clears all subscriptions

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:73

***

### messageListener()

> `protected` **messageListener**(`data`?): `void`

#### Parameters

• **data?**: [`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcSubscriptionResultOld`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/JsonRpcSubscriptionResultOld.md)\<[`Log`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md)\> \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<[`Log`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md)\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:34

***

### removeSubscription()

> **removeSubscription**(`sub`): `Promise`\<`string`\>

Will clear a subscription

#### Parameters

• **sub**: [`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[keyof `RegisteredSubs`\]\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:62

***

### subscribe()

> **subscribe**\<`T`\>(`name`, `args`?, `returnFormat`?): `Promise`\<[`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[`T`\]\>\>

Will create a new subscription

#### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **name**: `T`

The subscription you want to subscribe to

• **args?**: [`ConstructorParameters`](../type-aliases/ConstructorParameters.md)\<`RegisteredSubs`\[`T`\]\>\[`0`\]

Optional additional parameters, depending on the subscription type

• **returnFormat?**: [`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

`Promise`\<[`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[`T`\]\>\>

The subscription object

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:45

***

### supportsSubscriptions()

> **supportsSubscriptions**(): `boolean`

Check whether the current provider supports subscriptions.

#### Returns

`boolean`

`true` or `false` depending on if the current provider supports subscriptions

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:79

***

### unsubscribe()

> **unsubscribe**(`condition`?): `Promise`\<`string`[]\>

Will unsubscribe all subscriptions that fulfill the condition

#### Parameters

• **condition?**: [`ShouldUnsubscribeCondition`](../type-aliases/ShouldUnsubscribeCondition.md)

A function that access and `id` and a `subscription` and return `true` or `false`

#### Returns

`Promise`\<`string`[]\>

An array of all the un-subscribed subscriptions

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:69
