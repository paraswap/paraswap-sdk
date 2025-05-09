[**@velora-dex/sdk**](../../../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../../../globals.md) / [\<internal\>](../../../../../README.md) / [internal](../../../README.md) / [pipeline](../README.md) / \_\_promisify\_\_

# Function: \_\_promisify\_\_()

## \_\_promisify\_\_(source, destination, options)

> **\_\_promisify\_\_**\<`A`, `B`\>(`source`, `destination`, `options`?): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

• **B** *extends* [`WritableStream`](../../../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream.d.ts:1633

## \_\_promisify\_\_(source, transform1, destination, options)

> **\_\_promisify\_\_**\<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `options`?): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

• **T1** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`A`, `any`\>

• **B** *extends* [`WritableStream`](../../../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **transform1**: `T1`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream.d.ts:1638

## \_\_promisify\_\_(source, transform1, transform2, destination, options)

> **\_\_promisify\_\_**\<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `options`?): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

• **T1** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`A`, `any`\>

• **T2** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

• **B** *extends* [`WritableStream`](../../../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **transform1**: `T1`

• **transform2**: `T2`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream.d.ts:1648

## \_\_promisify\_\_(source, transform1, transform2, transform3, destination, options)

> **\_\_promisify\_\_**\<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `options`?): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

• **T1** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`A`, `any`\>

• **T2** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

• **T3** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T2`, `any`\>

• **B** *extends* [`WritableStream`](../../../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **transform1**: `T1`

• **transform2**: `T2`

• **transform3**: `T3`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream.d.ts:1660

## \_\_promisify\_\_(source, transform1, transform2, transform3, transform4, destination, options)

> **\_\_promisify\_\_**\<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `options`?): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Type Parameters

• **A** *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

• **T1** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`A`, `any`\>

• **T2** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

• **T3** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T2`, `any`\>

• **T4** *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T3`, `any`\>

• **B** *extends* [`WritableStream`](../../../../../interfaces/WritableStream.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

• **source**: `A`

• **transform1**: `T1`

• **transform2**: `T2`

• **transform3**: `T3`

• **transform4**: `T4`

• **destination**: `B`

• **options?**: [`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

### Defined in

node\_modules/@types/node/stream.d.ts:1674

## \_\_promisify\_\_(streams, options)

> **\_\_promisify\_\_**(`streams`, `options`?): `Promise`\<`void`\>

### Parameters

• **streams**: readonly ([`ReadableStream`](../../../../../interfaces/ReadableStream.md) \| [`WritableStream`](../../../../../interfaces/WritableStream.md) \| [`ReadWriteStream`](../../../../../interfaces/ReadWriteStream.md))[]

• **options?**: [`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

`Promise`\<`void`\>

### Defined in

node\_modules/@types/node/stream.d.ts:1690

## \_\_promisify\_\_(stream1, stream2, streams)

> **\_\_promisify\_\_**(`stream1`, `stream2`, ...`streams`): `Promise`\<`void`\>

### Parameters

• **stream1**: [`ReadableStream`](../../../../../interfaces/ReadableStream.md)

• **stream2**: [`WritableStream`](../../../../../interfaces/WritableStream.md) \| [`ReadWriteStream`](../../../../../interfaces/ReadWriteStream.md)

• ...**streams**: ([`WritableStream`](../../../../../interfaces/WritableStream.md) \| [`ReadWriteStream`](../../../../../interfaces/ReadWriteStream.md) \| [`PipelineOptions`](../../../interfaces/PipelineOptions.md))[]

### Returns

`Promise`\<`void`\>

### Defined in

node\_modules/@types/node/stream.d.ts:1694
