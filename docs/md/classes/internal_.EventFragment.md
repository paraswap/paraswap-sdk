[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EventFragment

# Class: EventFragment

[<internal>](../modules/internal_.md).EventFragment

## Hierarchy

- [`Fragment`](internal_.Fragment.md)

  ↳ **`EventFragment`**

## Table of contents

### Constructors

- [constructor](internal_.EventFragment.md#constructor)

### Properties

- [\_isFragment](internal_.EventFragment.md#_isfragment)
- [anonymous](internal_.EventFragment.md#anonymous)
- [inputs](internal_.EventFragment.md#inputs)
- [name](internal_.EventFragment.md#name)
- [type](internal_.EventFragment.md#type)

### Methods

- [format](internal_.EventFragment.md#format)
- [from](internal_.EventFragment.md#from)
- [fromObject](internal_.EventFragment.md#fromobject)
- [fromString](internal_.EventFragment.md#fromstring)
- [isEventFragment](internal_.EventFragment.md#iseventfragment)
- [isFragment](internal_.EventFragment.md#isfragment)

## Constructors

### constructor

• **new EventFragment**(`constructorGuard`, `params`)

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

### anonymous

• `Readonly` **anonymous**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:52

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

▸ `Static` **from**(`value`): [`EventFragment`](internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| [`EventFragment`](internal_.EventFragment.md) |

#### Returns

[`EventFragment`](internal_.EventFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[from](internal_.Fragment.md#from)

___

### fromObject

▸ `Static` **fromObject**(`value`): [`EventFragment`](internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| [`EventFragment`](internal_.EventFragment.md) |

#### Returns

[`EventFragment`](internal_.EventFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[fromObject](internal_.Fragment.md#fromobject)

___

### fromString

▸ `Static` **fromString**(`value`): [`EventFragment`](internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`EventFragment`](internal_.EventFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[fromString](internal_.Fragment.md#fromstring)

___

### isEventFragment

▸ `Static` **isEventFragment**(`value`): value is EventFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is EventFragment

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
