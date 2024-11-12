[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / CommonOpts

# Interface: CommonOpts

Options for instantiating a [Common](../classes/Common.md) instance.

## Extends

- [`BaseOpts`](BaseOpts.md)

## Properties

### chain

> **chain**: `string` \| `number` \| `bigint` \| `object`

Chain name ('mainnet'), id (1), or [Chain](../enumerations/Chain.md) enum,
either from a chain directly supported or a custom chain
passed in via [CommonOpts.customChains](CommonOpts.md#customchains).

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:83

***

### customChains?

> `optional` **customChains**: [`ChainConfig`](ChainConfig.md)[]

Initialize (in addition to the supported chains) with the selected
custom chains. Custom genesis state should be passed to the Blockchain class if used.

Usage (directly with the respective chain initialization via the [CommonOpts.chain](CommonOpts.md#chain) option):

```javascript
import myCustomChain1 from '[PATH_TO_MY_CHAINS]/myCustomChain1.json'
const common = new Common({ chain: 'myCustomChain1', customChains: [ myCustomChain1 ]})
```

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:95

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

### hardfork?

> `optional` **hardfork**: `string`

String identifier ('byzantium') for hardfork or Hardfork enum.

Default: Hardfork.London

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`hardfork`](BaseOpts.md#hardfork)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:63
