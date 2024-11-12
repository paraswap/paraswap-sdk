[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStream

# Variable: ReadableStream()

> **ReadableStream**: (`underlyingSource`, `strategy`?) => [`ReadableStream`](../interfaces/ReadableStream.md)\<`Uint8Array`\>\<`R`\>(`underlyingSource`?, `strategy`?) => [`ReadableStream`](../interfaces/ReadableStream.md)\<`R`\>

## Parameters

• **underlyingSource**: [`UnderlyingByteSource`](../interfaces/UnderlyingByteSource.md)

• **strategy?**: [`QueuingStrategy`](../interfaces/QueuingStrategy.md)\<`Uint8Array`\>

## Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`Uint8Array`\>

## Parameters

• **underlyingSource?**: [`UnderlyingSource`](../interfaces/UnderlyingSource.md)\<`R`\>

• **strategy?**: [`QueuingStrategy`](../interfaces/QueuingStrategy.md)\<`R`\>

## Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`R`\>

## Type declaration

### prototype

> **prototype**: [`ReadableStream`](../interfaces/ReadableStream.md)\<`any`\>

### from()

#### Type Parameters

• **T**

#### Parameters

• **iterable**: [`Iterable`](../interfaces/Iterable.md)\<`T`, `any`, `any`\> \| [`AsyncIterable`](../interfaces/AsyncIterable.md)\<`T`, `any`, `any`\>

#### Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`T`\>

## Defined in

node\_modules/@types/node/stream/web.d.ts:173
