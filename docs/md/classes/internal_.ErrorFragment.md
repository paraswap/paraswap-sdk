[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ErrorFragment

# Class: ErrorFragment

[<internal>](../modules/internal_.md).ErrorFragment

## Hierarchy

- [`Fragment`](internal_.Fragment.md)

  ↳ **`ErrorFragment`**

## Table of contents

### Constructors

- [constructor](internal_.ErrorFragment.md#constructor)

### Properties

- [\_isFragment](internal_.ErrorFragment.md#_isfragment)
- [inputs](internal_.ErrorFragment.md#inputs)
- [name](internal_.ErrorFragment.md#name)
- [type](internal_.ErrorFragment.md#type)

### Methods

- [format](internal_.ErrorFragment.md#format)
- [from](internal_.ErrorFragment.md#from)
- [fromObject](internal_.ErrorFragment.md#fromobject)
- [fromString](internal_.ErrorFragment.md#fromstring)
- [isErrorFragment](internal_.ErrorFragment.md#iserrorfragment)
- [isFragment](internal_.ErrorFragment.md#isfragment)

## Constructors

### constructor

• **new ErrorFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[Fragment](internal_.Fragment.md).[constructor](internal_.Fragment.md#constructor)

## Properties

### \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[Fragment](internal_.Fragment.md).[_isFragment](internal_.Fragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### inputs

• `Readonly` **inputs**: [`ParamType`](internal_.ParamType.md)[]

#### Inherited from

[Fragment](internal_.Fragment.md).[inputs](internal_.Fragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Fragment](internal_.Fragment.md).[name](internal_.Fragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Fragment](internal_.Fragment.md).[type](internal_.Fragment.md#type)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### format

▸ **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Overrides

[Fragment](internal_.Fragment.md).[format](internal_.Fragment.md#format)

___

### from

▸ `Static` **from**(`value`): [`ErrorFragment`](internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| [`ErrorFragment`](internal_.ErrorFragment.md) |

#### Returns

[`ErrorFragment`](internal_.ErrorFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[from](internal_.Fragment.md#from)

___

### fromObject

▸ `Static` **fromObject**(`value`): [`ErrorFragment`](internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| [`ErrorFragment`](internal_.ErrorFragment.md) |

#### Returns

[`ErrorFragment`](internal_.ErrorFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[fromObject](internal_.Fragment.md#fromobject)

___

### fromString

▸ `Static` **fromString**(`value`): [`ErrorFragment`](internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`ErrorFragment`](internal_.ErrorFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[fromString](internal_.Fragment.md#fromstring)

___

### isErrorFragment

▸ `Static` **isErrorFragment**(`value`): value is ErrorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ErrorFragment

___

### isFragment

▸ `Static` **isFragment**(`value`): value is Fragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Fragment

#### Inherited from

[Fragment](internal_.Fragment.md).[isFragment](internal_.Fragment.md#isfragment)
