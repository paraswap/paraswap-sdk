[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosInterceptorManager

# Interface: AxiosInterceptorManager\<V\>

## Type Parameters

• **V**

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/axios/index.d.ts:482

***

### eject()

> **eject**(`id`): `void`

#### Parameters

• **id**: `number`

#### Returns

`void`

#### Defined in

node\_modules/axios/index.d.ts:481

***

### use()

> **use**(`onFulfilled`?, `onRejected`?, `options`?): `number`

#### Parameters

• **onFulfilled?**: `null` \| (`value`) => `V` \| `Promise`\<`V`\>

• **onRejected?**: `null` \| (`error`) => `any`

• **options?**: [`AxiosInterceptorOptions`](AxiosInterceptorOptions.md)

#### Returns

`number`

#### Defined in

node\_modules/axios/index.d.ts:480
