[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Subscription

# Class: Subscription<T\>

[<internal>](../modules/internal_.md).Subscription

**`File`**

index.d.ts

**`Author`**

Samuel Furter <samuel@ethereum.org>

**`Date`**

2019

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](internal_.Subscription.md#constructor)

### Properties

- [arguments](internal_.Subscription.md#arguments)
- [callback](internal_.Subscription.md#callback)
- [id](internal_.Subscription.md#id)
- [lastBlock](internal_.Subscription.md#lastblock)
- [options](internal_.Subscription.md#options)

### Methods

- [on](internal_.Subscription.md#on)
- [subscribe](internal_.Subscription.md#subscribe)
- [unsubscribe](internal_.Subscription.md#unsubscribe)

## Constructors

### constructor

• **new Subscription**<`T`\>(`options`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SubscriptionOptions`](../interfaces/internal_.SubscriptionOptions-1.md) |

## Properties

### arguments

• **arguments**: `any`

#### Defined in

node_modules/web3-core-subscriptions/types/index.d.ts:26

___

### callback

• **callback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/web3-core-subscriptions/types/index.d.ts:25

___

### id

• **id**: `string`

#### Defined in

node_modules/web3-core-subscriptions/types/index.d.ts:23

___

### lastBlock

• **lastBlock**: `number`

#### Defined in

node_modules/web3-core-subscriptions/types/index.d.ts:27

___

### options

• **options**: [`SubscriptionOptions`](../interfaces/internal_.SubscriptionOptions-1.md)

#### Defined in

node_modules/web3-core-subscriptions/types/index.d.ts:24

## Methods

### on

▸ **on**(`type`, `handler`): [`Subscription`](internal_.Subscription.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"data"`` |
| `handler` | (`data`: `T`) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<`T`\>

▸ **on**(`type`, `handler`): [`Subscription`](internal_.Subscription.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"changed"`` |
| `handler` | (`data`: `T`) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<`T`\>

▸ **on**(`type`, `handler`): [`Subscription`](internal_.Subscription.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"connected"`` |
| `handler` | (`subscriptionId`: `string`) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<`T`\>

▸ **on**(`type`, `handler`): [`Subscription`](internal_.Subscription.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"error"`` |
| `handler` | (`data`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<`T`\>

___

### subscribe

▸ **subscribe**(`callback?`): [`Subscription`](internal_.Subscription.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `T`) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<`T`\>

___

### unsubscribe

▸ **unsubscribe**(`callback?`): `Promise`<`undefined` \| `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`undefined` \| `boolean`\>
