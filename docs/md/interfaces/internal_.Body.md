[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Body

# Interface: Body

[<internal>](../modules/internal_.md).Body

## Hierarchy

- **`Body`**

  ↳ [`Response`](internal_.Response.md)

  ↳ [`Request`](internal_.Request.md)

## Table of contents

### Properties

- [body](internal_.Body.md#body)
- [bodyUsed](internal_.Body.md#bodyused)

### Methods

- [arrayBuffer](internal_.Body.md#arraybuffer)
- [blob](internal_.Body.md#blob)
- [formData](internal_.Body.md#formdata)
- [json](internal_.Body.md#json)
- [text](internal_.Body.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/internal_.md#readablestream)<`Uint8Array`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2432

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2433

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

___

### json

▸ **json**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>
