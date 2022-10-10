[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ReadableStream

# Interface: ReadableStream<R\>

[<internal>](../modules/internal_.md).ReadableStream

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](internal_.ReadableStream.md#locked)

### Methods

- [cancel](internal_.ReadableStream.md#cancel)
- [getReader](internal_.ReadableStream.md#getreader)
- [pipeThrough](internal_.ReadableStream.md#pipethrough)
- [pipeTo](internal_.ReadableStream.md#pipeto)
- [tee](internal_.ReadableStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11128

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/internal_.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/internal_.md#readablestreamdefaultreader)<`R`\>

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/internal_.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](internal_.ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](internal_.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/internal_.md#readablestream)<`T`\>

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/internal_.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](internal_.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/internal_.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules/internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/internal_.md#readablestream)<`R`\>]
