[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ParamType

# Class: ParamType

[<internal>](../modules/internal_.md).ParamType

## Table of contents

### Constructors

- [constructor](internal_.ParamType.md#constructor)

### Properties

- [\_isParamType](internal_.ParamType.md#_isparamtype)
- [arrayChildren](internal_.ParamType.md#arraychildren)
- [arrayLength](internal_.ParamType.md#arraylength)
- [baseType](internal_.ParamType.md#basetype)
- [components](internal_.ParamType.md#components)
- [indexed](internal_.ParamType.md#indexed)
- [name](internal_.ParamType.md#name)
- [type](internal_.ParamType.md#type)

### Methods

- [format](internal_.ParamType.md#format)
- [from](internal_.ParamType.md#from)
- [fromObject](internal_.ParamType.md#fromobject)
- [fromString](internal_.ParamType.md#fromstring)
- [isParamType](internal_.ParamType.md#isparamtype)

## Constructors

### constructor

• **new ParamType**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

## Properties

### \_isParamType

• `Readonly` **\_isParamType**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:31

___

### arrayChildren

• `Readonly` **arrayChildren**: [`ParamType`](internal_.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:30

___

### arrayLength

• `Readonly` **arrayLength**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:29

___

### baseType

• `Readonly` **baseType**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:26

___

### components

• `Readonly` **components**: [`ParamType`](internal_.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:28

___

### indexed

• `Readonly` **indexed**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:27

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:24

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:25

## Methods

### format

▸ **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

___

### from

▸ `Static` **from**(`value`, `allowIndexed?`): [`ParamType`](internal_.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`ParamType`](internal_.ParamType.md) \| [`JsonFragmentType`](../interfaces/internal_.JsonFragmentType.md) |
| `allowIndexed?` | `boolean` |

#### Returns

[`ParamType`](internal_.ParamType.md)

___

### fromObject

▸ `Static` **fromObject**(`value`): [`ParamType`](internal_.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ParamType`](internal_.ParamType.md) \| [`JsonFragmentType`](../interfaces/internal_.JsonFragmentType.md) |

#### Returns

[`ParamType`](internal_.ParamType.md)

___

### fromString

▸ `Static` **fromString**(`value`, `allowIndexed?`): [`ParamType`](internal_.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `allowIndexed?` | `boolean` |

#### Returns

[`ParamType`](internal_.ParamType.md)

___

### isParamType

▸ `Static` **isParamType**(`value`): value is ParamType

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ParamType
