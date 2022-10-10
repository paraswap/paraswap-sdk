[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FunctionFragment

# Class: FunctionFragment

[<internal>](../modules/internal_.md).FunctionFragment

## Hierarchy

- [`ConstructorFragment`](internal_.ConstructorFragment.md)

  ↳ **`FunctionFragment`**

## Table of contents

### Constructors

- [constructor](internal_.FunctionFragment.md#constructor)

### Properties

- [\_isFragment](internal_.FunctionFragment.md#_isfragment)
- [constant](internal_.FunctionFragment.md#constant)
- [gas](internal_.FunctionFragment.md#gas)
- [inputs](internal_.FunctionFragment.md#inputs)
- [name](internal_.FunctionFragment.md#name)
- [outputs](internal_.FunctionFragment.md#outputs)
- [payable](internal_.FunctionFragment.md#payable)
- [stateMutability](internal_.FunctionFragment.md#statemutability)
- [type](internal_.FunctionFragment.md#type)

### Methods

- [format](internal_.FunctionFragment.md#format)
- [from](internal_.FunctionFragment.md#from)
- [fromObject](internal_.FunctionFragment.md#fromobject)
- [fromString](internal_.FunctionFragment.md#fromstring)
- [isConstructorFragment](internal_.FunctionFragment.md#isconstructorfragment)
- [isFragment](internal_.FunctionFragment.md#isfragment)
- [isFunctionFragment](internal_.FunctionFragment.md#isfunctionfragment)

## Constructors

### constructor

• **new FunctionFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[constructor](internal_.ConstructorFragment.md#constructor)

## Properties

### \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[_isFragment](internal_.ConstructorFragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### constant

• **constant**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:70

___

### gas

• `Optional` **gas**: [`BigNumber`](internal_.BigNumber-1.md)

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[gas](internal_.ConstructorFragment.md#gas)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:62

___

### inputs

• `Readonly` **inputs**: [`ParamType`](internal_.ParamType.md)[]

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[inputs](internal_.ConstructorFragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[name](internal_.ConstructorFragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### outputs

• `Optional` **outputs**: [`ParamType`](internal_.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:71

___

### payable

• **payable**: `boolean`

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[payable](internal_.ConstructorFragment.md#payable)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:61

___

### stateMutability

• **stateMutability**: `string`

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[stateMutability](internal_.ConstructorFragment.md#statemutability)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:60

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[type](internal_.ConstructorFragment.md#type)

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

[ConstructorFragment](internal_.ConstructorFragment.md).[format](internal_.ConstructorFragment.md#format)

___

### from

▸ `Static` **from**(`value`): [`FunctionFragment`](internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| [`FunctionFragment`](internal_.FunctionFragment.md) |

#### Returns

[`FunctionFragment`](internal_.FunctionFragment.md)

#### Overrides

[ConstructorFragment](internal_.ConstructorFragment.md).[from](internal_.ConstructorFragment.md#from)

___

### fromObject

▸ `Static` **fromObject**(`value`): [`FunctionFragment`](internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| [`FunctionFragment`](internal_.FunctionFragment.md) |

#### Returns

[`FunctionFragment`](internal_.FunctionFragment.md)

#### Overrides

[ConstructorFragment](internal_.ConstructorFragment.md).[fromObject](internal_.ConstructorFragment.md#fromobject)

___

### fromString

▸ `Static` **fromString**(`value`): [`FunctionFragment`](internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`FunctionFragment`](internal_.FunctionFragment.md)

#### Overrides

[ConstructorFragment](internal_.ConstructorFragment.md).[fromString](internal_.ConstructorFragment.md#fromstring)

___

### isConstructorFragment

▸ `Static` **isConstructorFragment**(`value`): value is ConstructorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ConstructorFragment

#### Inherited from

[ConstructorFragment](internal_.ConstructorFragment.md).[isConstructorFragment](internal_.ConstructorFragment.md#isconstructorfragment)

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

[ConstructorFragment](internal_.ConstructorFragment.md).[isFragment](internal_.ConstructorFragment.md#isfragment)

___

### isFunctionFragment

▸ `Static` **isFunctionFragment**(`value`): value is FunctionFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is FunctionFragment
