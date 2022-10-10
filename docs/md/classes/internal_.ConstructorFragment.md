[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ConstructorFragment

# Class: ConstructorFragment

[<internal>](../modules/internal_.md).ConstructorFragment

## Hierarchy

- [`Fragment`](internal_.Fragment.md)

  ↳ **`ConstructorFragment`**

  ↳↳ [`FunctionFragment`](internal_.FunctionFragment.md)

## Table of contents

### Constructors

- [constructor](internal_.ConstructorFragment.md#constructor)

### Properties

- [\_isFragment](internal_.ConstructorFragment.md#_isfragment)
- [gas](internal_.ConstructorFragment.md#gas)
- [inputs](internal_.ConstructorFragment.md#inputs)
- [name](internal_.ConstructorFragment.md#name)
- [payable](internal_.ConstructorFragment.md#payable)
- [stateMutability](internal_.ConstructorFragment.md#statemutability)
- [type](internal_.ConstructorFragment.md#type)

### Methods

- [format](internal_.ConstructorFragment.md#format)
- [from](internal_.ConstructorFragment.md#from)
- [fromObject](internal_.ConstructorFragment.md#fromobject)
- [fromString](internal_.ConstructorFragment.md#fromstring)
- [isConstructorFragment](internal_.ConstructorFragment.md#isconstructorfragment)
- [isFragment](internal_.ConstructorFragment.md#isfragment)

## Constructors

### constructor

• **new ConstructorFragment**(`constructorGuard`, `params`)

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

### gas

• `Optional` **gas**: [`BigNumber`](internal_.BigNumber-1.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:62

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

### payable

• **payable**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:61

___

### stateMutability

• **stateMutability**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:60

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

▸ `Static` **from**(`value`): [`ConstructorFragment`](internal_.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| [`ConstructorFragment`](internal_.ConstructorFragment.md) |

#### Returns

[`ConstructorFragment`](internal_.ConstructorFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[from](internal_.Fragment.md#from)

___

### fromObject

▸ `Static` **fromObject**(`value`): [`ConstructorFragment`](internal_.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| [`ConstructorFragment`](internal_.ConstructorFragment.md) |

#### Returns

[`ConstructorFragment`](internal_.ConstructorFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[fromObject](internal_.Fragment.md#fromobject)

___

### fromString

▸ `Static` **fromString**(`value`): [`ConstructorFragment`](internal_.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`ConstructorFragment`](internal_.ConstructorFragment.md)

#### Overrides

[Fragment](internal_.Fragment.md).[fromString](internal_.Fragment.md#fromstring)

___

### isConstructorFragment

▸ `Static` **isConstructorFragment**(`value`): value is ConstructorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ConstructorFragment

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
