[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Utils

# Interface: Utils

[<internal>](../modules/internal_.md).Utils

## Table of contents

### Methods

- [asciiToHex](internal_.Utils.md#asciitohex)
- [bytesToHex](internal_.Utils.md#bytestohex)
- [checkAddressChecksum](internal_.Utils.md#checkaddresschecksum)
- [encodePacked](internal_.Utils.md#encodepacked)
- [fromAscii](internal_.Utils.md#fromascii)
- [fromDecimal](internal_.Utils.md#fromdecimal)
- [fromUtf8](internal_.Utils.md#fromutf8)
- [fromWei](internal_.Utils.md#fromwei)
- [getSignatureParameters](internal_.Utils.md#getsignatureparameters)
- [getUnitValue](internal_.Utils.md#getunitvalue)
- [hexToAscii](internal_.Utils.md#hextoascii)
- [hexToBytes](internal_.Utils.md#hextobytes)
- [hexToNumber](internal_.Utils.md#hextonumber)
- [hexToNumberString](internal_.Utils.md#hextonumberstring)
- [hexToString](internal_.Utils.md#hextostring)
- [hexToUtf8](internal_.Utils.md#hextoutf8)
- [isAddress](internal_.Utils.md#isaddress)
- [isBN](internal_.Utils.md#isbn)
- [isBigNumber](internal_.Utils.md#isbignumber)
- [isBloom](internal_.Utils.md#isbloom)
- [isContractAddressInBloom](internal_.Utils.md#iscontractaddressinbloom)
- [isHex](internal_.Utils.md#ishex)
- [isHexStrict](internal_.Utils.md#ishexstrict)
- [isInBloom](internal_.Utils.md#isinbloom)
- [isTopic](internal_.Utils.md#istopic)
- [isTopicInBloom](internal_.Utils.md#istopicinbloom)
- [isUserEthereumAddressInBloom](internal_.Utils.md#isuserethereumaddressinbloom)
- [jsonInterfaceMethodToString](internal_.Utils.md#jsoninterfacemethodtostring)
- [keccak256](internal_.Utils.md#keccak256)
- [leftPad](internal_.Utils.md#leftpad)
- [numberToHex](internal_.Utils.md#numbertohex)
- [padLeft](internal_.Utils.md#padleft)
- [padRight](internal_.Utils.md#padright)
- [randomHex](internal_.Utils.md#randomhex)
- [rightPad](internal_.Utils.md#rightpad)
- [sha3](internal_.Utils.md#sha3)
- [soliditySha3](internal_.Utils.md#soliditysha3)
- [soliditySha3Raw](internal_.Utils.md#soliditysha3raw)
- [stringToHex](internal_.Utils.md#stringtohex)
- [stripHexPrefix](internal_.Utils.md#striphexprefix)
- [testAddress](internal_.Utils.md#testaddress)
- [testTopic](internal_.Utils.md#testtopic)
- [toAscii](internal_.Utils.md#toascii)
- [toBN](internal_.Utils.md#tobn)
- [toChecksumAddress](internal_.Utils.md#tochecksumaddress)
- [toDecimal](internal_.Utils.md#todecimal)
- [toHex](internal_.Utils.md#tohex)
- [toNumber](internal_.Utils.md#tonumber)
- [toTwosComplement](internal_.Utils.md#totwoscomplement)
- [toUtf8](internal_.Utils.md#toutf8)
- [toWei](internal_.Utils.md#towei)
- [unitMap](internal_.Utils.md#unitmap)
- [utf8ToHex](internal_.Utils.md#utf8tohex)

## Methods

### asciiToHex

▸ **asciiToHex**(`string`, `length?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `length?` | `number` |

#### Returns

`string`

___

### bytesToHex

▸ **bytesToHex**(`bytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number`[] |

#### Returns

`string`

___

### checkAddressChecksum

▸ **checkAddressChecksum**(`address`, `chainId?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`boolean`

___

### encodePacked

▸ **encodePacked**(...`val`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...val` | [`Mixed`](../modules/internal_.md#mixed)[] |

#### Returns

``null`` \| `string`

___

### fromAscii

▸ **fromAscii**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

___

### fromDecimal

▸ **fromDecimal**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

`string`

___

### fromUtf8

▸ **fromUtf8**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

___

### fromWei

▸ **fromWei**(`value`, `unit?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`BN`](../classes/internal_.BN-1.md) |
| `unit?` | [`Unit`](../modules/internal_.md#unit) |

#### Returns

`string`

___

### getSignatureParameters

▸ **getSignatureParameters**(`signature`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `r` | `string` |
| `s` | `string` |
| `v` | `number` |

___

### getUnitValue

▸ **getUnitValue**(`unit`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | [`Unit`](../modules/internal_.md#unit) |

#### Returns

`string`

___

### hexToAscii

▸ **hexToAscii**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

___

### hexToBytes

▸ **hexToBytes**(`hex`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | [`Hex`](../modules/internal_.md#hex) |

#### Returns

`number`[]

___

### hexToNumber

▸ **hexToNumber**(`hex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | [`Hex`](../modules/internal_.md#hex) |

#### Returns

`number`

___

### hexToNumberString

▸ **hexToNumberString**(`hex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | [`Hex`](../modules/internal_.md#hex) |

#### Returns

`string`

___

### hexToString

▸ **hexToString**(`hex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | [`Hex`](../modules/internal_.md#hex) |

#### Returns

`string`

___

### hexToUtf8

▸ **hexToUtf8**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

___

### isAddress

▸ **isAddress**(`address`, `chainId?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`boolean`

___

### isBN

▸ **isBN**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

`boolean`

___

### isBigNumber

▸ **isBigNumber**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BN`](../classes/internal_.BN-1.md) |

#### Returns

`boolean`

___

### isBloom

▸ **isBloom**(`bloom`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bloom` | `string` |

#### Returns

`boolean`

___

### isContractAddressInBloom

▸ **isContractAddressInBloom**(`bloom`, `contractAddress`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bloom` | `string` |
| `contractAddress` | `string` |

#### Returns

`boolean`

___

### isHex

▸ **isHex**(`hex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | [`Hex`](../modules/internal_.md#hex) |

#### Returns

`boolean`

___

### isHexStrict

▸ **isHexStrict**(`hex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | [`Hex`](../modules/internal_.md#hex) |

#### Returns

`boolean`

___

### isInBloom

▸ **isInBloom**(`bloom`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bloom` | `string` |
| `value` | `string` \| `Uint8Array` |

#### Returns

`boolean`

___

### isTopic

▸ **isTopic**(`topic`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |

#### Returns

`boolean`

___

### isTopicInBloom

▸ **isTopicInBloom**(`bloom`, `topic`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bloom` | `string` |
| `topic` | `string` |

#### Returns

`boolean`

___

### isUserEthereumAddressInBloom

▸ **isUserEthereumAddressInBloom**(`bloom`, `ethereumAddress`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bloom` | `string` |
| `ethereumAddress` | `string` |

#### Returns

`boolean`

___

### jsonInterfaceMethodToString

▸ **jsonInterfaceMethodToString**(`abiItem`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `abiItem` | [`AbiItem`](internal_.AbiItem.md) |

#### Returns

`string`

___

### keccak256

▸ **keccak256**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`BN`](../classes/internal_.BN-1.md) |

#### Returns

`string`

___

### leftPad

▸ **leftPad**(`string`, `characterAmount`, `sign?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` \| `number` |
| `characterAmount` | `number` |
| `sign?` | `string` |

#### Returns

`string`

___

### numberToHex

▸ **numberToHex**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| [`BN`](../classes/internal_.BN-1.md) |

#### Returns

`string`

___

### padLeft

▸ **padLeft**(`value`, `characterAmount`, `sign?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `characterAmount` | `number` |
| `sign?` | `string` |

#### Returns

`string`

___

### padRight

▸ **padRight**(`string`, `characterAmount`, `sign?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` \| `number` |
| `characterAmount` | `number` |
| `sign?` | `string` |

#### Returns

`string`

___

### randomHex

▸ **randomHex**(`bytesSize`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesSize` | `number` |

#### Returns

`string`

___

### rightPad

▸ **rightPad**(`string`, `characterAmount`, `sign?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` \| `number` |
| `characterAmount` | `number` |
| `sign?` | `string` |

#### Returns

`string`

___

### sha3

▸ **sha3**(`value`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`BN`](../classes/internal_.BN-1.md) |

#### Returns

``null`` \| `string`

___

### soliditySha3

▸ **soliditySha3**(...`val`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...val` | [`Mixed`](../modules/internal_.md#mixed)[] |

#### Returns

``null`` \| `string`

___

### soliditySha3Raw

▸ **soliditySha3Raw**(...`val`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...val` | [`Mixed`](../modules/internal_.md#mixed)[] |

#### Returns

`string`

___

### stringToHex

▸ **stringToHex**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

___

### stripHexPrefix

▸ **stripHexPrefix**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### testAddress

▸ **testAddress**(`bloom`, `address`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bloom` | `string` |
| `address` | `string` |

#### Returns

`boolean`

___

### testTopic

▸ **testTopic**(`bloom`, `topic`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bloom` | `string` |
| `topic` | `string` |

#### Returns

`boolean`

___

### toAscii

▸ **toAscii**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

___

### toBN

▸ **toBN**(`value`): [`BN`](../classes/internal_.BN-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

[`BN`](../classes/internal_.BN-1.md)

___

### toChecksumAddress

▸ **toChecksumAddress**(`address`, `chainId?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`string`

___

### toDecimal

▸ **toDecimal**(`hex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | [`Hex`](../modules/internal_.md#hex) |

#### Returns

`number`

___

### toHex

▸ **toHex**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| [`BN`](../classes/internal_.BN-1.md) |

#### Returns

`string`

___

### toNumber

▸ **toNumber**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| [`BN`](../classes/internal_.BN-1.md) |

#### Returns

`number`

___

### toTwosComplement

▸ **toTwosComplement**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| [`BN`](../classes/internal_.BN-1.md) |

#### Returns

`string`

___

### toUtf8

▸ **toUtf8**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

___

### toWei

▸ **toWei**(`val`, `unit?`): [`BN`](../classes/internal_.BN-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`BN`](../classes/internal_.BN-1.md) |
| `unit?` | [`Unit`](../modules/internal_.md#unit) |

#### Returns

[`BN`](../classes/internal_.BN-1.md)

▸ **toWei**(`val`, `unit?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |
| `unit?` | [`Unit`](../modules/internal_.md#unit) |

#### Returns

`string`

___

### unitMap

▸ **unitMap**(): [`Units`](internal_.Units.md)

#### Returns

[`Units`](internal_.Units.md)

___

### utf8ToHex

▸ **utf8ToHex**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`
