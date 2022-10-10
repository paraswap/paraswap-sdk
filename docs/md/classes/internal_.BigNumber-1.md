[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BigNumber

# Class: BigNumber

[<internal>](../modules/internal_.md).BigNumber

## Implements

- [`Hexable`](../interfaces/internal_.Hexable.md)

## Table of contents

### Constructors

- [constructor](internal_.BigNumber-1.md#constructor)

### Properties

- [\_hex](internal_.BigNumber-1.md#_hex)
- [\_isBigNumber](internal_.BigNumber-1.md#_isbignumber)

### Methods

- [abs](internal_.BigNumber-1.md#abs)
- [add](internal_.BigNumber-1.md#add)
- [and](internal_.BigNumber-1.md#and)
- [div](internal_.BigNumber-1.md#div)
- [eq](internal_.BigNumber-1.md#eq)
- [fromTwos](internal_.BigNumber-1.md#fromtwos)
- [gt](internal_.BigNumber-1.md#gt)
- [gte](internal_.BigNumber-1.md#gte)
- [isNegative](internal_.BigNumber-1.md#isnegative)
- [isZero](internal_.BigNumber-1.md#iszero)
- [lt](internal_.BigNumber-1.md#lt)
- [lte](internal_.BigNumber-1.md#lte)
- [mask](internal_.BigNumber-1.md#mask)
- [mod](internal_.BigNumber-1.md#mod)
- [mul](internal_.BigNumber-1.md#mul)
- [or](internal_.BigNumber-1.md#or)
- [pow](internal_.BigNumber-1.md#pow)
- [shl](internal_.BigNumber-1.md#shl)
- [shr](internal_.BigNumber-1.md#shr)
- [sub](internal_.BigNumber-1.md#sub)
- [toBigInt](internal_.BigNumber-1.md#tobigint)
- [toHexString](internal_.BigNumber-1.md#tohexstring)
- [toJSON](internal_.BigNumber-1.md#tojson)
- [toNumber](internal_.BigNumber-1.md#tonumber)
- [toString](internal_.BigNumber-1.md#tostring)
- [toTwos](internal_.BigNumber-1.md#totwos)
- [xor](internal_.BigNumber-1.md#xor)
- [from](internal_.BigNumber-1.md#from)
- [isBigNumber](internal_.BigNumber-1.md#isbignumber)

## Constructors

### constructor

• **new BigNumber**(`constructorGuard`, `hex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `hex` | `string` |

## Properties

### \_hex

• `Readonly` **\_hex**: `string`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:5

___

### \_isBigNumber

• `Readonly` **\_isBigNumber**: `boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:6

## Methods

### abs

▸ **abs**(): [`BigNumber`](internal_.BigNumber-1.md)

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### add

▸ **add**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### and

▸ **and**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### div

▸ **div**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### eq

▸ **eq**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

___

### fromTwos

▸ **fromTwos**(`value`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### gt

▸ **gt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

___

### gte

▸ **gte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

___

### isNegative

▸ **isNegative**(): `boolean`

#### Returns

`boolean`

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

___

### lt

▸ **lt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

___

### lte

▸ **lte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

___

### mask

▸ **mask**(`value`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### mod

▸ **mod**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### mul

▸ **mul**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### or

▸ **or**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### pow

▸ **pow**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### shl

▸ **shl**(`value`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### shr

▸ **shr**(`value`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### sub

▸ **sub**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### toBigInt

▸ **toBigInt**(): `bigint`

#### Returns

`bigint`

___

### toHexString

▸ **toHexString**(): `string`

#### Returns

`string`

#### Implementation of

[Hexable](../interfaces/internal_.Hexable.md).[toHexString](../interfaces/internal_.Hexable.md#tohexstring)

___

### toJSON

▸ **toJSON**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`any`

___

### toNumber

▸ **toNumber**(): `number`

#### Returns

`number`

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

___

### toTwos

▸ **toTwos**(`value`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### xor

▸ **xor**(`other`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### from

▸ `Static` **from**(`value`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### isBigNumber

▸ `Static` **isBigNumber**(`value`): value is BigNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is BigNumber
