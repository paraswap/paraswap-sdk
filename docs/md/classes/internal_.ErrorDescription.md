[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ErrorDescription

# Class: ErrorDescription

[<internal>](../modules/internal_.md).ErrorDescription

## Hierarchy

- [`Description`](internal_.Description.md)<[`ErrorDescription`](internal_.ErrorDescription.md)\>

  ↳ **`ErrorDescription`**

## Table of contents

### Constructors

- [constructor](internal_.ErrorDescription.md#constructor)

### Properties

- [args](internal_.ErrorDescription.md#args)
- [errorFragment](internal_.ErrorDescription.md#errorfragment)
- [name](internal_.ErrorDescription.md#name)
- [sighash](internal_.ErrorDescription.md#sighash)
- [signature](internal_.ErrorDescription.md#signature)

## Constructors

### constructor

• **new ErrorDescription**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.args` | [`Result`](../interfaces/internal_.Result.md) |
| `info.errorFragment` | [`ErrorFragment`](internal_.ErrorFragment.md) |
| `info.name` | `string` |
| `info.sighash` | `string` |
| `info.signature` | `string` |

#### Inherited from

[Description](internal_.Description.md).[constructor](internal_.Description.md#constructor)

## Properties

### args

• `Readonly` **args**: [`Result`](../interfaces/internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:26

___

### errorFragment

• `Readonly` **errorFragment**: [`ErrorFragment`](internal_.ErrorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:24

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:25

___

### sighash

• `Readonly` **sighash**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:28

___

### signature

• `Readonly` **signature**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:27
