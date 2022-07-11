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

[src/types.ts:68](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/types.ts#L68)

___

### address

• **address**: `string`

#### Defined in

[src/types.ts:67](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/types.ts#L67)

___

### args

• **args**: `any`[]

#### Defined in

[src/types.ts:70](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/types.ts#L70)

___

### contractMethod

• **contractMethod**: `T`

#### Defined in

[src/types.ts:69](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/types.ts#L69)
