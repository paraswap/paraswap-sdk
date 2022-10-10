[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Response

# Interface: Response

[<internal>](../modules/internal_.md).Response

This Fetch API interface represents the response to a request.

## Hierarchy

- [`Body`](internal_.Body.md)

  ↳ **`Response`**

## Table of contents

### Properties

- [body](internal_.Response.md#body)
- [bodyUsed](internal_.Response.md#bodyused)
- [headers](internal_.Response.md#headers)
- [ok](internal_.Response.md#ok)
- [redirected](internal_.Response.md#redirected)
- [status](internal_.Response.md#status)
- [statusText](internal_.Response.md#statustext)
- [type](internal_.Response.md#type)
- [url](internal_.Response.md#url)

### Methods

- [arrayBuffer](internal_.Response.md#arraybuffer)
- [blob](internal_.Response.md#blob)
- [clone](internal_.Response.md#clone)
- [formData](internal_.Response.md#formdata)
- [json](internal_.Response.md#json)
- [text](internal_.Response.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/internal_.md#readablestream)<`Uint8Array`\>

#### Inherited from

[Body](internal_.Body.md).[body](internal_.Body.md#body)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2432

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

[Body](internal_.Body.md).[bodyUsed](internal_.Body.md#bodyused)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2433

___

### headers

• `Readonly` **headers**: `Headers`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11265

___

### ok

• `Readonly` **ok**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11266

___

### redirected

• `Readonly` **redirected**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11267

___

### status

• `Readonly` **status**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11268

___

### statusText

• `Readonly` **statusText**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11269

___

### type

• `Readonly` **type**: [`ResponseType`](../modules/internal_.md#responsetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11270

___

### url

• `Readonly` **url**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11271

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

[Body](internal_.Body.md).[arrayBuffer](internal_.Body.md#arraybuffer)

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Inherited from

[Body](internal_.Body.md).[blob](internal_.Body.md#blob)

___

### clone

▸ **clone**(): [`Response`](../modules/internal_.md#response)

#### Returns

[`Response`](../modules/internal_.md#response)

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Inherited from

[Body](internal_.Body.md).[formData](internal_.Body.md#formdata)

___

### json

▸ **json**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

[Body](internal_.Body.md).[json](internal_.Body.md#json)

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[Body](internal_.Body.md).[text](internal_.Body.md#text)
