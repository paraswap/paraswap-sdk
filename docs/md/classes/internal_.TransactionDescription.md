[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TransactionDescription

# Class: TransactionDescription

[<internal>](../modules/internal_.md).TransactionDescription

## Hierarchy

- [`Description`](internal_.Description.md)<[`TransactionDescription`](internal_.TransactionDescription.md)\>

  ↳ **`TransactionDescription`**

## Table of contents

### Constructors

- [constructor](internal_.TransactionDescription.md#constructor)

### Properties

- [args](internal_.TransactionDescription.md#args)
- [functionFragment](internal_.TransactionDescription.md#functionfragment)
- [name](internal_.TransactionDescription.md#name)
- [sighash](internal_.TransactionDescription.md#sighash)
- [signature](internal_.TransactionDescription.md#signature)
- [value](internal_.TransactionDescription.md#value)

## Constructors

### constructor

• **new TransactionDescription**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.args` | [`Result`](../interfaces/internal_.Result.md) |
| `info.functionFragment` | [`FunctionFragment`](internal_.FunctionFragment.md) |
| `info.name` | `string` |
| `info.sighash` | `string` |
| `info.signature` | `string` |
| `info.value` | [`BigNumber`](internal_.BigNumber-1.md) |

#### Inherited from

[Description](internal_.Description.md).[constructor](internal_.Description.md#constructor)

## Properties

### args

• `Readonly` **args**: [`Result`](../interfaces/internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:18

___

### functionFragment

• `Readonly` **functionFragment**: [`FunctionFragment`](internal_.FunctionFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:16

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:17

___

### sighash

• `Readonly` **sighash**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:20

___

### signature

• `Readonly` **signature**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:19

___

### value

• `Readonly` **value**: [`BigNumber`](internal_.BigNumber-1.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:21
