[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AsyncGenerator

# Interface: AsyncGenerator<T, TReturn, TNext\>

[<internal>](../modules/internal_.md).AsyncGenerator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TReturn` | `any` |
| `TNext` | `unknown` |

## Hierarchy

- [`AsyncIterator`](internal_.AsyncIterator.md)<`T`, `TReturn`, `TNext`\>

  ↳ **`AsyncGenerator`**

## Table of contents

### Methods

- [[asyncIterator]](internal_.AsyncGenerator.md#[asynciterator])
- [next](internal_.AsyncGenerator.md#next)
- [return](internal_.AsyncGenerator.md#return)
- [throw](internal_.AsyncGenerator.md#throw)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncGenerator`](internal_.AsyncGenerator.md)<`T`, `TReturn`, `TNext`\>

#### Returns

[`AsyncGenerator`](internal_.AsyncGenerator.md)<`T`, `TReturn`, `TNext`\>

___

### next

▸ **next**(...`args`): `Promise`<[`IteratorResult`](../modules/internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

`Promise`<[`IteratorResult`](../modules/internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Overrides

[AsyncIterator](internal_.AsyncIterator.md).[next](internal_.AsyncIterator.md#next)

___

### return

▸ **return**(`value`): `Promise`<[`IteratorResult`](../modules/internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TReturn` \| [`PromiseLike`](internal_.PromiseLike.md)<`TReturn`\> |

#### Returns

`Promise`<[`IteratorResult`](../modules/internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Overrides

[AsyncIterator](internal_.AsyncIterator.md).[return](internal_.AsyncIterator.md#return)

___

### throw

▸ **throw**(`e`): `Promise`<[`IteratorResult`](../modules/internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Overrides

[AsyncIterator](internal_.AsyncIterator.md).[throw](internal_.AsyncIterator.md#throw)
