[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosHeaders

# Class: AxiosHeaders

[<internal>](../modules/internal_.md).AxiosHeaders

## Table of contents

### Constructors

- [constructor](internal_.AxiosHeaders.md#constructor)

### Properties

- [getAccept](internal_.AxiosHeaders.md#getaccept)
- [getContentEncoding](internal_.AxiosHeaders.md#getcontentencoding)
- [getContentLength](internal_.AxiosHeaders.md#getcontentlength)
- [getContentType](internal_.AxiosHeaders.md#getcontenttype)
- [getUserAgent](internal_.AxiosHeaders.md#getuseragent)
- [hasAccept](internal_.AxiosHeaders.md#hasaccept)
- [hasContentEncoding](internal_.AxiosHeaders.md#hascontentencoding)
- [hasContentLength](internal_.AxiosHeaders.md#hascontentlength)
- [hasContentType](internal_.AxiosHeaders.md#hascontenttype)
- [hasUserAgent](internal_.AxiosHeaders.md#hasuseragent)
- [setAccept](internal_.AxiosHeaders.md#setaccept)
- [setContentEncoding](internal_.AxiosHeaders.md#setcontentencoding)
- [setContentLength](internal_.AxiosHeaders.md#setcontentlength)
- [setContentType](internal_.AxiosHeaders.md#setcontenttype)
- [setUserAgent](internal_.AxiosHeaders.md#setuseragent)

### Methods

- [clear](internal_.AxiosHeaders.md#clear)
- [delete](internal_.AxiosHeaders.md#delete)
- [get](internal_.AxiosHeaders.md#get)
- [has](internal_.AxiosHeaders.md#has)
- [normalize](internal_.AxiosHeaders.md#normalize)
- [set](internal_.AxiosHeaders.md#set)
- [toJSON](internal_.AxiosHeaders.md#tojson)
- [accessor](internal_.AxiosHeaders.md#accessor)
- [from](internal_.AxiosHeaders.md#from)

## Constructors

### constructor

• **new AxiosHeaders**(`headers?`, `defaultHeaders?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | [`AxiosHeaders`](internal_.AxiosHeaders.md) \| [`RawAxiosHeaders`](../modules/internal_.md#rawaxiosheaders) |
| `defaultHeaders?` | [`AxiosHeaders`](internal_.AxiosHeaders.md) \| [`RawAxiosHeaders`](../modules/internal_.md#rawaxiosheaders) |

## Properties

### getAccept

• **getAccept**: [`AxiosHeaderGetter`](../modules/internal_.md#axiosheadergetter)

#### Defined in

node_modules/axios/index.d.ts:57

___

### getContentEncoding

• **getContentEncoding**: [`AxiosHeaderGetter`](../modules/internal_.md#axiosheadergetter)

#### Defined in

node_modules/axios/index.d.ts:65

___

### getContentLength

• **getContentLength**: [`AxiosHeaderGetter`](../modules/internal_.md#axiosheadergetter)

#### Defined in

node_modules/axios/index.d.ts:53

___

### getContentType

• **getContentType**: [`AxiosHeaderGetter`](../modules/internal_.md#axiosheadergetter)

#### Defined in

node_modules/axios/index.d.ts:49

___

### getUserAgent

• **getUserAgent**: [`AxiosHeaderGetter`](../modules/internal_.md#axiosheadergetter)

#### Defined in

node_modules/axios/index.d.ts:61

___

### hasAccept

• **hasAccept**: [`AxiosHeaderTester`](../modules/internal_.md#axiosheadertester)

#### Defined in

node_modules/axios/index.d.ts:58

___

### hasContentEncoding

• **hasContentEncoding**: [`AxiosHeaderTester`](../modules/internal_.md#axiosheadertester)

#### Defined in

node_modules/axios/index.d.ts:66

___

### hasContentLength

• **hasContentLength**: [`AxiosHeaderTester`](../modules/internal_.md#axiosheadertester)

#### Defined in

node_modules/axios/index.d.ts:54

___

### hasContentType

• **hasContentType**: [`AxiosHeaderTester`](../modules/internal_.md#axiosheadertester)

#### Defined in

node_modules/axios/index.d.ts:50

___

### hasUserAgent

• **hasUserAgent**: [`AxiosHeaderTester`](../modules/internal_.md#axiosheadertester)

#### Defined in

node_modules/axios/index.d.ts:62

___

### setAccept

• **setAccept**: [`AxiosHeaderSetter`](../modules/internal_.md#axiosheadersetter)

#### Defined in

node_modules/axios/index.d.ts:56

___

### setContentEncoding

• **setContentEncoding**: [`AxiosHeaderSetter`](../modules/internal_.md#axiosheadersetter)

#### Defined in

node_modules/axios/index.d.ts:64

___

### setContentLength

• **setContentLength**: [`AxiosHeaderSetter`](../modules/internal_.md#axiosheadersetter)

#### Defined in

node_modules/axios/index.d.ts:52

___

### setContentType

• **setContentType**: [`AxiosHeaderSetter`](../modules/internal_.md#axiosheadersetter)

#### Defined in

node_modules/axios/index.d.ts:48

___

### setUserAgent

• **setUserAgent**: [`AxiosHeaderSetter`](../modules/internal_.md#axiosheadersetter)

#### Defined in

node_modules/axios/index.d.ts:60

## Methods

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

___

### delete

▸ **delete**(`header`, `matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` \| `string`[] |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

___

### get

▸ **get**(`headerName`, `parser`): ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName` | `string` |
| `parser` | `RegExp` |

#### Returns

``null`` \| `RegExpExecArray`

▸ **get**(`headerName`, `matcher?`): [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName` | `string` |
| `matcher?` | ``true`` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

___

### has

▸ **has**(`header`, `matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |
| `matcher?` | ``true`` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

___

### normalize

▸ **normalize**(`format`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `boolean` |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

___

### set

▸ **set**(`headerName?`, `value?`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName?` | `string` |
| `value?` | [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) |
| `rewrite?` | `boolean` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

▸ **set**(`headers?`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | [`AxiosHeaders`](internal_.AxiosHeaders.md) \| [`RawAxiosHeaders`](../modules/internal_.md#rawaxiosheaders) |
| `rewrite?` | `boolean` |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

___

### toJSON

▸ **toJSON**(`asStrings?`): [`RawAxiosHeaders`](../modules/internal_.md#rawaxiosheaders)

#### Parameters

| Name | Type |
| :------ | :------ |
| `asStrings?` | `boolean` |

#### Returns

[`RawAxiosHeaders`](../modules/internal_.md#rawaxiosheaders)

___

### accessor

▸ `Static` **accessor**(`header`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` \| `string`[] |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

___

### from

▸ `Static` **from**(`thing?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thing?` | `string` \| [`AxiosHeaders`](internal_.AxiosHeaders.md) \| [`RawAxiosHeaders`](../modules/internal_.md#rawaxiosheaders) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)
