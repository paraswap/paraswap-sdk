[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeData

# Class: FeeData

A **FeeData** wraps all the fee-related values associated with
 the network.

## Constructors

### new FeeData()

> **new FeeData**(`gasPrice`?, `maxFeePerGas`?, `maxPriorityFeePerGas`?): [`FeeData`](FeeData.md)

Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
 %%maxPriorityFeePerGas%%.

#### Parameters

• **gasPrice?**: `null` \| `bigint`

• **maxFeePerGas?**: `null` \| `bigint`

• **maxPriorityFeePerGas?**: `null` \| `bigint`

#### Returns

[`FeeData`](FeeData.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:58

## Properties

### gasPrice

> `readonly` **gasPrice**: `null` \| `bigint`

The gas price for legacy networks.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:30

***

### maxFeePerGas

> `readonly` **maxFeePerGas**: `null` \| `bigint`

The maximum fee to pay per gas.

 The base fee per gas is defined by the network and based on
 congestion, increasing the cost during times of heavy load
 and lowering when less busy.

 The actual fee per gas will be the base fee for the block
 and the priority fee, up to the max fee per gas.

 This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:43

***

### maxPriorityFeePerGas

> `readonly` **maxPriorityFeePerGas**: `null` \| `bigint`

The additional amout to pay per gas to encourage a validator
 to include the transaction.

 The purpose of this is to compensate the validator for the
 adjusted risk for including a given transaction.

 This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:53

## Methods

### toJSON()

> **toJSON**(): `any`

Returns a JSON-friendly value.

#### Returns

`any`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:62
