[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / RequestInit

# Interface: RequestInit

[<internal>](../modules/internal_.md).RequestInit

## Table of contents

### Properties

- [body](internal_.RequestInit.md#body)
- [cache](internal_.RequestInit.md#cache)
- [credentials](internal_.RequestInit.md#credentials)
- [headers](internal_.RequestInit.md#headers)
- [integrity](internal_.RequestInit.md#integrity)
- [keepalive](internal_.RequestInit.md#keepalive)
- [method](internal_.RequestInit.md#method)
- [mode](internal_.RequestInit.md#mode)
- [redirect](internal_.RequestInit.md#redirect)
- [referrer](internal_.RequestInit.md#referrer)
- [referrerPolicy](internal_.RequestInit.md#referrerpolicy)
- [signal](internal_.RequestInit.md#signal)
- [window](internal_.RequestInit.md#window)

## Properties

### body

• `Optional` **body**: ``null`` \| [`BodyInit`](../modules/internal_.md#bodyinit)

A BodyInit object or null to set request's body.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1498

___

### cache

• `Optional` **cache**: [`RequestCache`](../modules/internal_.md#requestcache)

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1500

___

### credentials

• `Optional` **credentials**: [`RequestCredentials`](../modules/internal_.md#requestcredentials)

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1502

___

### headers

• `Optional` **headers**: [`HeadersInit`](../modules/internal_.md#headersinit)

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1504

___

### integrity

• `Optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1506

___

### keepalive

• `Optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1508

___

### method

• `Optional` **method**: `string`

A string to set request's method.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1510

___

### mode

• `Optional` **mode**: [`RequestMode`](../modules/internal_.md#requestmode)

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1512

___

### redirect

• `Optional` **redirect**: [`RequestRedirect`](../modules/internal_.md#requestredirect)

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1514

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1516

___

### referrerPolicy

• `Optional` **referrerPolicy**: [`ReferrerPolicy`](../modules/internal_.md#referrerpolicy)

A referrer policy to set request's referrerPolicy.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1518

___

### signal

• `Optional` **signal**: ``null`` \| `AbortSignal`

An AbortSignal to set request's signal.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1520

___

### window

• `Optional` **window**: ``null``

Can only be null. Used to disassociate request from any Window.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1522
