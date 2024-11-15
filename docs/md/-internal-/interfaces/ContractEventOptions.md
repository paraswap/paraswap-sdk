[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEventOptions

# Interface: ContractEventOptions

## Properties

### filter?

> `optional` **filter**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

Let you filter events by indexed parameters, e.g. `{filter: {myNumber: [12,13]}}` means all events where `myNumber` is `12` or `13`.

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:13

***

### fromBlock?

> `optional` **fromBlock**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

The block number (greater than or equal to) from which to get events on. Pre-defined block numbers as `earliest`, `latest`, `pending`, `safe` or `finalized` can also be used. For specific range use [Contract.getPastEvents](../classes/Contract.md#getpastevents).

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:17

***

### topics?

> `optional` **topics**: `string`[]

This allows to manually set the topics for the event filter. If given the filter property and event signature, (topic[0]) will not be set automatically. Each topic can also be a nested array of topics that behaves as `or` operation between the given nested topics.

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:21
