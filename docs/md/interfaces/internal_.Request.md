[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Request

# Interface: Request

[<internal>](../modules/internal_.md).Request

This Fetch API interface represents a resource request.

## Hierarchy

- [`Body`](internal_.Body.md)

  ↳ **`Request`**

## Table of contents

### Properties

- [body](internal_.Request.md#body)
- [bodyUsed](internal_.Request.md#bodyused)
- [cache](internal_.Request.md#cache)
- [credentials](internal_.Request.md#credentials)
- [destination](internal_.Request.md#destination)
- [headers](internal_.Request.md#headers)
- [integrity](internal_.Request.md#integrity)
- [keepalive](internal_.Request.md#keepalive)
- [method](internal_.Request.md#method)
- [mode](internal_.Request.md#mode)
- [redirect](internal_.Request.md#redirect)
- [referrer](internal_.Request.md#referrer)
- [referrerPolicy](internal_.Request.md#referrerpolicy)
- [signal](internal_.Request.md#signal)
- [url](internal_.Request.md#url)

### Methods

- [arrayBuffer](internal_.Request.md#arraybuffer)
- [blob](internal_.Request.md#blob)
- [clone](internal_.Request.md#clone)
- [formData](internal_.Request.md#formdata)
- [json](internal_.Request.md#json)
- [text](internal_.Request.md#text)

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

### cache

• `Readonly` **cache**: [`RequestCache`](../modules/internal_.md#requestcache)

Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11196

___

### credentials

• `Readonly` **credentials**: [`RequestCredentials`](../modules/internal_.md#requestcredentials)

Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11198

___

### destination

• `Readonly` **destination**: [`RequestDestination`](../modules/internal_.md#requestdestination)

Returns the kind of resource requested by request, e.g., "document" or "script".

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11200

___

### headers

• `Readonly` **headers**: `Headers`

Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11202

___

### integrity

• `Readonly` **integrity**: `string`

Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11204

___

### keepalive

• `Readonly` **keepalive**: `boolean`

Returns a boolean indicating whether or not request can outlive the global in which it was created.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11206

___

### method

• `Readonly` **method**: `string`

Returns request's HTTP method, which is "GET" by default.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11208

___

### mode

• `Readonly` **mode**: [`RequestMode`](../modules/internal_.md#requestmode)

Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11210

___

### redirect

• `Readonly` **redirect**: [`RequestRedirect`](../modules/internal_.md#requestredirect)

Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11212

___

### referrer

• `Readonly` **referrer**: `string`

Returns the referrer of request. Its value can be a same-origin URL if explicitly set in init, the empty string to indicate no referrer, and "about:client" when defaulting to the global's default. This is used during fetching to determine the value of the `Referer` header of the request being made.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11214

___

### referrerPolicy

• `Readonly` **referrerPolicy**: [`ReferrerPolicy`](../modules/internal_.md#referrerpolicy)

Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11216

___

### signal

• `Readonly` **signal**: `AbortSignal`

Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11218

___

### url

• `Readonly` **url**: `string`

Returns the URL of request as a string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11220

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

▸ **clone**(): [`Request`](../modules/internal_.md#request)

#### Returns

[`Request`](../modules/internal_.md#request)

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
