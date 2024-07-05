[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ContractCallInput

# Interface: ContractCallInput<T\>

[<internal>](../modules/internal_.md).ContractCallInput

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

## Hierarchy

- **`ContractCallInput`**

  ↳ [`ContractCallStaticInput`](internal_.ContractCallStaticInput.md)

  ↳ [`ContractCallTransactionInput`](internal_.ContractCallTransactionInput.md)

## Table of contents

### Properties

- [abi](internal_.ContractCallInput.md#abi)
- [address](internal_.ContractCallInput.md#address)
- [args](internal_.ContractCallInput.md#args)
- [contractMethod](internal_.ContractCallInput.md#contractmethod)

## Properties

### abi

• **abi**: readonly [`JsonFragment`](internal_.JsonFragment.md)[]

#### Defined in

[src/types.ts:88](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L88)

___

### address

• **address**: `string`

#### Defined in

[src/types.ts:87](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L87)

___

### args

• **args**: `any`[]

#### Defined in

[src/types.ts:90](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L90)

___

### contractMethod

• **contractMethod**: `T`

#### Defined in

[src/types.ts:89](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L89)
