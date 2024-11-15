[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseOpts

# Interface: BaseOpts

## Extended by

- [`CustomCommonOpts`](CustomCommonOpts.md)
- [`GethConfigOpts`](GethConfigOpts.md)
- [`CommonOpts`](CommonOpts.md)

## Properties

### eips?

> `optional` **eips**: `number`[]

Selected EIPs which can be activated, please use an array for instantiation
(e.g. `eips: [ 2537, ]`)

Currently supported:

- [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537) - BLS12-381 precompiles

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:72

***

### hardfork?

> `optional` **hardfork**: `string`

String identifier ('byzantium') for hardfork or Hardfork enum.

Default: Hardfork.London

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:63
