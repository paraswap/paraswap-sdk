[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ContractCallTransactionInput

# Interface: ContractCallTransactionInput<T\>

[<internal>](../modules/internal_.md).ContractCallTransactionInput

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

## Hierarchy

- [`ContractCallInput`](internal_.ContractCallInput.md)<`T`\>

  ↳ **`ContractCallTransactionInput`**

## Table of contents

### Properties

- [abi](internal_.ContractCallTransactionInput.md#abi)
- [address](internal_.ContractCallTransactionInput.md#address)
- [args](internal_.ContractCallTransactionInput.md#args)
- [contractMethod](internal_.ContractCallTransactionInput.md#contractmethod)
- [overrides](internal_.ContractCallTransactionInput.md#overrides)

## Properties

### abi

• **abi**: readonly [`JsonFragment`](internal_.JsonFragment.md)[]

#### Inherited from

[ContractCallInput](internal_.ContractCallInput.md).[abi](internal_.ContractCallInput.md#abi)

#### Defined in

[src/types.ts:88](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L88)

___

### address

• **address**: `string`

#### Inherited from

[ContractCallInput](internal_.ContractCallInput.md).[address](internal_.ContractCallInput.md#address)

#### Defined in

[src/types.ts:87](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L87)

___

### args

• **args**: `any`[]

#### Inherited from

[ContractCallInput](internal_.ContractCallInput.md).[args](internal_.ContractCallInput.md#args)

#### Defined in

[src/types.ts:90](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L90)

___

### contractMethod

• **contractMethod**: `T`

#### Inherited from

[ContractCallInput](internal_.ContractCallInput.md).[contractMethod](internal_.ContractCallInput.md#contractmethod)

#### Defined in

[src/types.ts:89](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L89)

___

### overrides

• **overrides**: [`TxSendOverrides`](TxSendOverrides.md)

#### Defined in

[src/types.ts:100](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L100)
