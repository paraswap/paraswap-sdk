[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WrappedFallback

# Interface: WrappedFallback()

A Fallback or Receive function on a Contract.

> **WrappedFallback**(`overrides`?): `Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

A Fallback or Receive function on a Contract.

## Parameters

• **overrides?**: [`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

## Returns

`Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

## Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:166

## Methods

### estimateGas()

> **estimateGas**(`overrides`?): `Promise`\<`bigint`\>

Estimate the gas to send a transaction to the contract fallback.

 For non-receive fallback, ``data`` may be overridden.

#### Parameters

• **overrides?**: [`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

#### Returns

`Promise`\<`bigint`\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:191

***

### populateTransaction()

> **populateTransaction**(`overrides`?): `Promise`\<[`ContractTransaction`](ContractTransaction.md)\>

Returns a populated transaction that can be used to perform the
 fallback method.

 For non-receive fallback, ``data`` may be overridden.

#### Parameters

• **overrides?**: [`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

#### Returns

`Promise`\<[`ContractTransaction`](ContractTransaction.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:173

***

### send()

> **send**(`overrides`?): `Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

Send a transaction to the contract fallback.

 For non-receive fallback, ``data`` may be overridden.

#### Parameters

• **overrides?**: [`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

#### Returns

`Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:185

***

### staticCall()

> **staticCall**(`overrides`?): `Promise`\<`string`\>

Call the contract fallback and return the result.

 For non-receive fallback, ``data`` may be overridden.

#### Parameters

• **overrides?**: [`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:179
