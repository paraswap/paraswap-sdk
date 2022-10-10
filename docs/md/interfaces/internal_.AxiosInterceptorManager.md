[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosInterceptorManager

# Interface: AxiosInterceptorManager<V\>

[<internal>](../modules/internal_.md).AxiosInterceptorManager

## Type parameters

| Name |
| :------ |
| `V` |

## Table of contents

### Methods

- [eject](internal_.AxiosInterceptorManager.md#eject)
- [use](internal_.AxiosInterceptorManager.md#use)

## Methods

### eject

▸ **eject**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

___

### use

▸ **use**<`T`\>(`onFulfilled?`, `onRejected?`, `options?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFulfilled?` | (`value`: `V`) => `T` \| `Promise`<`T`\> |
| `onRejected?` | (`error`: `any`) => `any` |
| `options?` | [`AxiosInterceptorOptions`](internal_.AxiosInterceptorOptions.md) |

#### Returns

`number`
