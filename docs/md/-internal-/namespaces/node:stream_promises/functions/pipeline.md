[**@paraswap/sdk**](../../../../README.md) • **Docs**

***

[@paraswap/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / ["node:stream/promises"](../README.md) / pipeline

# Function: pipeline()

## pipeline(source, destination, options)

> **pipeline**\<`A`, `B`\>(`source`, `destination`, `options`?): [`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../internal/type-aliases/PipelineSource.md)\<`any`\>

• **B** *extends* [`WritableStream`](../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream/promises.d.ts:21

## pipeline(source, transform1, destination, options)

> **pipeline**\<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `options`?): [`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../internal/type-aliases/PipelineSource.md)\<`any`\>

• **T1** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`A`, `any`\>

• **B** *extends* [`WritableStream`](../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **transform1**: `T1`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream/promises.d.ts:26

## pipeline(source, transform1, transform2, destination, options)

> **pipeline**\<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `options`?): [`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../internal/type-aliases/PipelineSource.md)\<`any`\>

• **T1** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`A`, `any`\>

• **T2** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`T1`, `any`\>

• **B** *extends* [`WritableStream`](../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **transform1**: `T1`

• **transform2**: `T2`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream/promises.d.ts:36

## pipeline(source, transform1, transform2, transform3, destination, options)

> **pipeline**\<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `options`?): [`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../internal/type-aliases/PipelineSource.md)\<`any`\>

• **T1** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`A`, `any`\>

• **T2** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`T1`, `any`\>

• **T3** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`T2`, `any`\>

• **B** *extends* [`WritableStream`](../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **transform1**: `T1`

• **transform2**: `T2`

• **transform3**: `T3`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream/promises.d.ts:48

## pipeline(source, transform1, transform2, transform3, transform4, destination, options)

> **pipeline**\<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `options`?): [`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../internal/type-aliases/PipelineSource.md)\<`any`\>

• **T1** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`A`, `any`\>

• **T2** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`T1`, `any`\>

• **T3** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`T2`, `any`\>

• **T4** *extends* [`PipelineTransform`](../../internal/type-aliases/PipelineTransform.md)\<`T3`, `any`\>

• **B** *extends* [`WritableStream`](../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **transform1**: `T1`

• **transform2**: `T2`

• **transform3**: `T3`

• **transform4**: `T4`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../internal/type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream/promises.d.ts:62

## pipeline(streams, options)

> **pipeline**(`streams`, `options`?): `Promise`\<`void`\>

### Parameters

• **streams**: readonly ([`ReadableStream`](../../../interfaces/ReadableStream.md) \| [`WritableStream`](../../../interfaces/WritableStream.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md))[]

• **options?**: [`PipelineOptions`](../../internal/interfaces/PipelineOptions.md)

### Returns

`Promise`\<`void`\>

### Defined in

node\_modules/@types/node/stream/promises.d.ts:78

## pipeline(stream1, stream2, streams)

> **pipeline**(`stream1`, `stream2`, ...`streams`): `Promise`\<`void`\>

### Parameters

• **stream1**: [`ReadableStream`](../../../interfaces/ReadableStream.md)

• **stream2**: [`WritableStream`](../../../interfaces/WritableStream.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md)

• ...**streams**: ([`WritableStream`](../../../interfaces/WritableStream.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md) \| [`PipelineOptions`](../../internal/interfaces/PipelineOptions.md))[]

### Returns

`Promise`\<`void`\>

### Defined in

node\_modules/@types/node/stream/promises.d.ts:82
