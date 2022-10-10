[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Fragment

# Class: Fragment

[<internal>](../modules/internal_.md).Fragment

## Hierarchy

- **`Fragment`**

  ↳ [`ConstructorFragment`](internal_.ConstructorFragment.md)

  ↳ [`EventFragment`](internal_.EventFragment.md)

  ↳ [`ErrorFragment`](internal_.ErrorFragment.md)

## Table of contents

### Constructors

- [constructor](internal_.Fragment.md#constructor)

### Properties

- [\_isFragment](internal_.Fragment.md#_isfragment)
- [inputs](internal_.Fragment.md#inputs)
- [name](internal_.Fragment.md#name)
- [type](internal_.Fragment.md#type)

### Methods

- [format](internal_.Fragment.md#format)
- [from](internal_.Fragment.md#from)
- [fromObject](internal_.Fragment.md#fromobject)
- [fromString](internal_.Fragment.md#fromstring)
- [isFragment](internal_.Fragment.md#isfragment)

## Constructors

### constructor

• **new Fragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

## Properties

### \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### inputs

• `Readonly` **inputs**: [`ParamType`](internal_.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### format

▸ `Abstract` **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

___

### from

▸ `Static` **from**(`value`): [`Fragment`](internal_.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`Fragment`](internal_.Fragment.md) \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md) |

#### Returns

[`Fragment`](internal_.Fragment.md)

___

### fromObject

▸ `Static` **fromObject**(`value`): [`Fragment`](internal_.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Fragment`](internal_.Fragment.md) \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md) |

#### Returns

[`Fragment`](internal_.Fragment.md)

___

### fromString

▸ `Static` **fromString**(`value`): [`Fragment`](internal_.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Fragment`](internal_.Fragment.md)

___

### isFragment

▸ `Static` **isFragment**(`value`): value is Fragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Fragment
