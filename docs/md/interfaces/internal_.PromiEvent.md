[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / PromiEvent

# Interface: PromiEvent<T\>

[<internal>](../modules/internal_.md).PromiEvent

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Promise`<`T`\>

  ↳ **`PromiEvent`**

## Table of contents

### Properties

- [[toStringTag]](internal_.PromiEvent.md#[tostringtag])

### Methods

- [catch](internal_.PromiEvent.md#catch)
- [finally](internal_.PromiEvent.md#finally)
- [on](internal_.PromiEvent.md#on)
- [once](internal_.PromiEvent.md#once)
- [then](internal_.PromiEvent.md#then)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@167

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult` \| [`PromiseLike`](internal_.PromiseLike.md)<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.catch

___

### finally

▸ **finally**(`onfinally?`): `Promise`<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | ``null`` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<`T`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.finally

___

### on

▸ **on**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"sending"`` |
| `handler` | (`payload`: `object`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **on**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"sent"`` |
| `handler` | (`payload`: `object`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **on**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"transactionHash"`` |
| `handler` | (`receipt`: `string`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **on**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"receipt"`` |
| `handler` | (`receipt`: [`TransactionReceipt`](internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **on**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"confirmation"`` |
| `handler` | (`confNumber`: `number`, `receipt`: [`TransactionReceipt`](internal_.TransactionReceipt-1.md), `latestBlockHash?`: `string`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **on**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"error"`` |
| `handler` | (`error`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **on**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"sending"`` \| ``"sent"`` \| ``"transactionHash"`` \| ``"receipt"`` \| ``"confirmation"`` \| ``"error"`` |
| `handler` | (`error`: `string` \| `object` \| [`Error`](../modules/internal_.md#error) \| [`TransactionReceipt`](internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

___

### once

▸ **once**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"sending"`` |
| `handler` | (`payload`: `object`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **once**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"sent"`` |
| `handler` | (`payload`: `object`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **once**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"transactionHash"`` |
| `handler` | (`transactionHash`: `string`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **once**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"receipt"`` |
| `handler` | (`receipt`: [`TransactionReceipt`](internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **once**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"confirmation"`` |
| `handler` | (`confirmationNumber`: `number`, `receipt`: [`TransactionReceipt`](internal_.TransactionReceipt-1.md), `latestBlockHash?`: `string`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **once**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"error"`` |
| `handler` | (`error`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

▸ **once**(`type`, `handler`): [`PromiEvent`](internal_.PromiEvent.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"sending"`` \| ``"sent"`` \| ``"transactionHash"`` \| ``"receipt"`` \| ``"confirmation"`` \| ``"error"`` |
| `handler` | (`error`: `string` \| `object` \| [`Error`](../modules/internal_.md#error) \| [`TransactionReceipt`](internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<`T`\>

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| [`PromiseLike`](internal_.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| [`PromiseLike`](internal_.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

Promise.then
