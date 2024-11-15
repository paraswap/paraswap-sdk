[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosHeaders

# Class: AxiosHeaders

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AxiosHeaders()

> **new AxiosHeaders**(`headers`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **headers?**: `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:17

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](../interfaces/IterableIterator.md)\<[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)], `any`, `any`\>

#### Returns

[`IterableIterator`](../interfaces/IterableIterator.md)\<[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)], `any`, `any`\>

#### Defined in

node\_modules/axios/index.d.ts:77

***

### clear()

> **clear**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:33

***

### concat()

> **concat**(...`targets`): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• ...**targets**: (`undefined` \| `null` \| `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md))[]

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:37

***

### delete()

> **delete**(`header`, `matcher`?): `boolean`

#### Parameters

• **header**: `string` \| `string`[]

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:31

***

### get()

#### get(headerName, parser)

> **get**(`headerName`, `parser`): `null` \| `RegExpExecArray`

##### Parameters

• **headerName**: `string`

• **parser**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/axios/index.d.ts:26

#### get(headerName, matcher)

> **get**(`headerName`, `matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **headerName**: `string`

• **matcher?**: `true` \| [`AxiosHeaderParser`](../type-aliases/AxiosHeaderParser.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/axios/index.d.ts:27

***

### getAccept()

#### getAccept(parser)

> **getAccept**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/axios/index.d.ts:58

#### getAccept(matcher)

> **getAccept**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/axios/index.d.ts:59

***

### getAuthorization()

#### getAuthorization(parser)

> **getAuthorization**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/axios/index.d.ts:73

#### getAuthorization(matcher)

> **getAuthorization**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/axios/index.d.ts:74

***

### getContentEncoding()

#### getContentEncoding(parser)

> **getContentEncoding**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/axios/index.d.ts:68

#### getContentEncoding(matcher)

> **getContentEncoding**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/axios/index.d.ts:69

***

### getContentLength()

#### getContentLength(parser)

> **getContentLength**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/axios/index.d.ts:53

#### getContentLength(matcher)

> **getContentLength**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/axios/index.d.ts:54

***

### getContentType()

#### getContentType(parser)

> **getContentType**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/axios/index.d.ts:48

#### getContentType(matcher)

> **getContentType**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/axios/index.d.ts:49

***

### getUserAgent()

#### getUserAgent(parser)

> **getUserAgent**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/axios/index.d.ts:63

#### getUserAgent(matcher)

> **getUserAgent**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/axios/index.d.ts:64

***

### has()

> **has**(`header`, `matcher`?): `boolean`

#### Parameters

• **header**: `string`

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:29

***

### hasAccept()

> **hasAccept**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:60

***

### hasAuthorization()

> **hasAuthorization**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:75

***

### hasContentEncoding()

> **hasContentEncoding**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:70

***

### hasContentLength()

> **hasContentLength**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:55

***

### hasContentType()

> **hasContentType**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:50

***

### hasUserAgent()

> **hasUserAgent**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/axios/index.d.ts:65

***

### normalize()

> **normalize**(`format`): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **format**: `boolean`

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:35

***

### set()

#### set(headerName, value, rewrite)

> **set**(`headerName`?, `value`?, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

##### Parameters

• **headerName?**: `string`

• **value?**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaders`](AxiosHeaders.md)

##### Defined in

node\_modules/axios/index.d.ts:23

#### set(headers, rewrite)

> **set**(`headers`?, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

##### Parameters

• **headers?**: `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md)

• **rewrite?**: `boolean`

##### Returns

[`AxiosHeaders`](AxiosHeaders.md)

##### Defined in

node\_modules/axios/index.d.ts:24

***

### setAccept()

> **setAccept**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:57

***

### setAuthorization()

> **setAuthorization**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:72

***

### setContentEncoding()

> **setContentEncoding**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:67

***

### setContentLength()

> **setContentLength**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:52

***

### setContentType()

> **setContentType**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`ContentType`](../type-aliases/ContentType.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:47

***

### setUserAgent()

> **setUserAgent**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:62

***

### toJSON()

> **toJSON**(`asStrings`?): [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

#### Parameters

• **asStrings?**: `boolean`

#### Returns

[`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:39

***

### accessor()

> `static` **accessor**(`header`): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **header**: `string` \| `string`[]

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:43

***

### concat()

> `static` **concat**(...`targets`): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• ...**targets**: (`undefined` \| `null` \| `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md))[]

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:45

***

### from()

> `static` **from**(`thing`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **thing?**: `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/axios/index.d.ts:41
