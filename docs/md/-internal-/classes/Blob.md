[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Blob

# Class: Blob

A [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) encapsulates immutable, raw data that can be safely shared across
multiple worker threads.

## Since

v15.7.0, v14.18.0

## Constructors

### new Blob()

> **new Blob**(`sources`, `options`?): [`Blob`](Blob.md)

Creates a new `Blob` object containing a concatenation of the given sources.

{ArrayBuffer}, {TypedArray}, {DataView}, and {Buffer} sources are copied into
the 'Blob' and can therefore be safely modified after the 'Blob' is created.

String sources are also copied into the `Blob`.

#### Parameters

• **sources**: (`ArrayBuffer` \| [`Blob`](Blob.md) \| [`BinaryLike`](../type-aliases/BinaryLike.md))[]

• **options?**: [`BlobOptions`](../interfaces/BlobOptions.md)

#### Returns

[`Blob`](Blob.md)

#### Defined in

node\_modules/@types/node/buffer.d.ts:171

## Properties

### size

> `readonly` **size**: `number`

The total size of the `Blob` in bytes.

#### Since

v15.7.0, v14.18.0

#### Defined in

node\_modules/@types/node/buffer.d.ts:157

***

### type

> `readonly` **type**: `string`

The content-type of the `Blob`.

#### Since

v15.7.0, v14.18.0

#### Defined in

node\_modules/@types/node/buffer.d.ts:162

## Methods

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Returns a promise that fulfills with an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing a copy of
the `Blob` data.

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Since

v15.7.0, v14.18.0

#### Defined in

node\_modules/@types/node/buffer.d.ts:177

***

### bytes()

> **bytes**(): `Promise`\<`Uint8Array`\>

The `blob.bytes()` method returns the byte of the `Blob` object as a `Promise<Uint8Array>`.

```js
const blob = new Blob(['hello']);
blob.bytes().then((bytes) => {
  console.log(bytes); // Outputs: Uint8Array(5) [ 104, 101, 108, 108, 111 ]
});
```

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

node\_modules/@types/node/buffer.d.ts:188

***

### slice()

> **slice**(`start`?, `end`?, `type`?): [`Blob`](Blob.md)

Creates and returns a new `Blob` containing a subset of this `Blob` objects
data. The original `Blob` is not altered.

#### Parameters

• **start?**: `number`

The starting index.

• **end?**: `number`

The ending index.

• **type?**: `string`

The content-type for the new `Blob`

#### Returns

[`Blob`](Blob.md)

#### Since

v15.7.0, v14.18.0

#### Defined in

node\_modules/@types/node/buffer.d.ts:197

***

### stream()

> **stream**(): [`ReadableStream`](../interfaces/ReadableStream.md)\<`any`\>

Returns a new `ReadableStream` that allows the content of the `Blob` to be read.

#### Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`any`\>

#### Since

v16.7.0

#### Defined in

node\_modules/@types/node/buffer.d.ts:208

***

### text()

> **text**(): `Promise`\<`string`\>

Returns a promise that fulfills with the contents of the `Blob` decoded as a
UTF-8 string.

#### Returns

`Promise`\<`string`\>

#### Since

v15.7.0, v14.18.0

#### Defined in

node\_modules/@types/node/buffer.d.ts:203
