[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractRunner

# Interface: ContractRunner

A **ContractRunner** is a generic interface which defines an object
 capable of interacting with a Contract on the network.

 The more operations supported, the more utility it is capable of.

 The most common ContractRunners are [Providers](Provider) which enable
 read-only access and [Signers](Signer) which enable write-access.

## Extended by

- [`Signer`](Signer.md)
- [`Provider`](Provider.md)

## Properties

### call()?

> `optional` **call**: (`tx`) => `Promise`\<`string`\>

Required for pure, view or static calls to contracts.

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:26

***

### estimateGas()?

> `optional` **estimateGas**: (`tx`) => `Promise`\<`bigint`\>

Required to estimate gas.

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`bigint`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:22

***

### provider

> **provider**: `null` \| [`Provider`](Provider.md)

The provider used for necessary state querying operations.

 This can also point to the **ContractRunner** itself, in the
 case of an [[AbstractProvider]].

#### Defined in

node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:18

***

### resolveName()?

> `optional` **resolveName**: (`name`) => `Promise`\<`null` \| `string`\>

Required to support ENS names

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:30

***

### sendTransaction()?

> `optional` **sendTransaction**: (`tx`) => `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Required for state mutating calls

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:34
