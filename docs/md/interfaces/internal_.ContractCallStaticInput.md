[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ContractCallStaticInput

# Interface: ContractCallStaticInput<T\>

[<internal>](../modules/internal_.md).ContractCallStaticInput

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

## Hierarchy

- [`ContractCallInput`](internal_.ContractCallInput.md)<`T`\>

  ↳ **`ContractCallStaticInput`**

## Table of contents

### Properties

- [abi](internal_.ContractCallStaticInput.md#abi)
- [address](internal_.ContractCallStaticInput.md#address)
- [args](internal_.ContractCallStaticInput.md#args)
- [contractMethod](internal_.ContractCallStaticInput.md#contractmethod)
- [overrides](internal_.ContractCallStaticInput.md#overrides)

## Properties

### abi

• **abi**: readonly [`JsonFragment`](internal_.JsonFragment.md)[]

#### Inherited from

[ContractCallInput](internal_.ContractCallInput.md).[abi](internal_.ContractCallInput.md#abi)

#### Defined in

[src/types.ts:89](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L89)

___

### address

• **address**: `string`

#### Inherited from

[ContractCallInput](internal_.ContractCallInput.md).[address](internal_.ContractCallInput.md#address)

#### Defined in

[src/types.ts:88](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L88)

___

### args

• **args**: `any`[]

#### Inherited from

[ContractCallInput](internal_.ContractCallInput.md).[args](internal_.ContractCallInput.md#args)

#### Defined in

[src/types.ts:91](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L91)

___

### contractMethod

• **contractMethod**: `T`

#### Inherited from

[ContractCallInput](internal_.ContractCallInput.md).[contractMethod](internal_.ContractCallInput.md#contractmethod)

#### Defined in

[src/types.ts:90](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L90)

___

### overrides

• **overrides**: [`StaticCallOverrides`](internal_.StaticCallOverrides.md)

#### Defined in

[src/types.ts:96](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L96)
