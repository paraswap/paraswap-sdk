[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractInitOptions

# Interface: ContractInitOptions

## Properties

### data?

> `readonly` `optional` **data**: [`Bytes`](../type-aliases/Bytes.md)

The byte code of the contract. Used when the contract gets [deployed](../classes/Contract.md#deploy)

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:23

***

### dataInputFill?

> `readonly` `optional` **dataInputFill**: `"data"` \| `"input"` \| `"both"`

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:30

***

### from?

> `readonly` `optional` **from**: `string`

The address transactions should be made from

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:19

***

### gas?

> `readonly` `optional` **gas**: `string`

The maximum gas provided for a transaction (gas limit).

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:10

***

### gasLimit?

> `readonly` `optional` **gasLimit**: `string`

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:11

***

### gasPrice?

> `readonly` `optional` **gasPrice**: `string`

The gas price in wei to use for transactions.

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:15

***

### input?

> `readonly` `optional` **input**: [`Bytes`](../type-aliases/Bytes.md)

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:24

***

### provider?

> `readonly` `optional` **provider**: `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)\>

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:25

***

### syncWithContext?

> `readonly` `optional` **syncWithContext**: `boolean`

If `true`, the defaults of the contract instance will be updated automatically based on the changes of the context used to instantiate the contract.

#### Defined in

node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:29
