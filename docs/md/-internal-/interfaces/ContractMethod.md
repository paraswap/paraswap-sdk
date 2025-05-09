[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractMethod

# Interface: ContractMethod()\<A, R, D\>

A contract method on a Contract.

## Extends

- [`BaseContractMethod`](BaseContractMethod.md)\<`A`, `R`, `D`\>

## Type Parameters

• **A** *extends* `any`[] = `any`[]

• **R** = `any`

• **D** *extends* `R` \| [`ContractTransactionResponse`](../classes/ContractTransactionResponse.md) = `R` \| [`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)

> **ContractMethod**(...`args`): `Promise`\<`D`\>

A contract method on a Contract.

## Parameters

• ...**args**: [`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

## Returns

`Promise`\<`D`\>

## Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:130

## Properties

### fragment

> **fragment**: [`FunctionFragment`](../classes/FunctionFragment.md)

The fragment of the Contract method. This will throw on ambiguous
 method names.

#### Inherited from

[`BaseContractMethod`](BaseContractMethod.md).[`fragment`](BaseContractMethod.md#fragment)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:95

***

### name

> **name**: `string`

The name of the Contract method.

#### Inherited from

[`BaseContractMethod`](BaseContractMethod.md).[`name`](BaseContractMethod.md#name)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:90

## Methods

### estimateGas()

> **estimateGas**(...`args`): `Promise`\<`bigint`\>

Estimate the gas to send the contract method with %%args%%.

#### Parameters

• ...**args**: [`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<`bigint`\>

#### Inherited from

[`BaseContractMethod`](BaseContractMethod.md).[`estimateGas`](BaseContractMethod.md#estimategas)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:120

***

### getFragment()

> **getFragment**(...`args`): [`FunctionFragment`](../classes/FunctionFragment.md)

Returns the fragment constrained by %%args%%. This can be used to
 resolve ambiguous method names.

#### Parameters

• ...**args**: [`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

[`FunctionFragment`](../classes/FunctionFragment.md)

#### Inherited from

[`BaseContractMethod`](BaseContractMethod.md).[`getFragment`](BaseContractMethod.md#getfragment)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:100

***

### populateTransaction()

> **populateTransaction**(...`args`): `Promise`\<[`ContractTransaction`](ContractTransaction.md)\>

Returns a populated transaction that can be used to perform the
 contract method with %%args%%.

#### Parameters

• ...**args**: [`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<[`ContractTransaction`](ContractTransaction.md)\>

#### Inherited from

[`BaseContractMethod`](BaseContractMethod.md).[`populateTransaction`](BaseContractMethod.md#populatetransaction)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:105

***

### send()

> **send**(...`args`): `Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

Send a transaction for the contract method with %%args%%.

#### Parameters

• ...**args**: [`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

#### Inherited from

[`BaseContractMethod`](BaseContractMethod.md).[`send`](BaseContractMethod.md#send)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:116

***

### staticCall()

> **staticCall**(...`args`): `Promise`\<`R`\>

Call the contract method with %%args%% and return the value.

 If the return value is a single type, it will be dereferenced and
 returned directly, otherwise the full Result will be returned.

#### Parameters

• ...**args**: [`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`BaseContractMethod`](BaseContractMethod.md).[`staticCall`](BaseContractMethod.md#staticcall)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:112

***

### staticCallResult()

> **staticCallResult**(...`args`): `Promise`\<[`Result`](../classes/Result.md)\>

Call the contract method with %%args%% and return the Result
 without any dereferencing.

#### Parameters

• ...**args**: [`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<[`Result`](../classes/Result.md)\>

#### Inherited from

[`BaseContractMethod`](BaseContractMethod.md).[`staticCallResult`](BaseContractMethod.md#staticcallresult)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:125
