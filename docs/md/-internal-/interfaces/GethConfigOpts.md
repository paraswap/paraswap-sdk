[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GethConfigOpts

# Interface: GethConfigOpts

## Extends

- [`BaseOpts`](BaseOpts.md)

## Properties

### chain?

> `optional` **chain**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:108

***

### eips?

> `optional` **eips**: `number`[]

Selected EIPs which can be activated, please use an array for instantiation
(e.g. `eips: [ 2537, ]`)

Currently supported:

- [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537) - BLS12-381 precompiles

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`eips`](BaseOpts.md#eips)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:72

***

### genesisHash?

> `optional` **genesisHash**: `Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:109

***

### hardfork?

> `optional` **hardfork**: `string`

String identifier ('byzantium') for hardfork or Hardfork enum.

Default: Hardfork.London

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`hardfork`](BaseOpts.md#hardfork)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:63

***

### mergeForkIdPostMerge?

> `optional` **mergeForkIdPostMerge**: `boolean`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:110
