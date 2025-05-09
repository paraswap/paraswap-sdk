[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FilterByBlockHash

# Interface: FilterByBlockHash

A **FilterByBlockHash** allows searching a specific block for mathcing
 logs.

## Extends

- [`EventFilter`](EventFilter.md)

## Properties

### address?

> `optional` **address**: [`AddressLike`](../type-aliases/AddressLike.md) \| [`AddressLike`](../type-aliases/AddressLike.md)[]

#### Inherited from

[`EventFilter`](EventFilter.md).[`address`](EventFilter.md#address-1)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1003

***

### blockHash?

> `optional` **blockHash**: `string`

The blockhash of the specific block for the filter.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1028

***

### topics?

> `optional` **topics**: [`TopicFilter`](../type-aliases/TopicFilter.md)

#### Inherited from

[`EventFilter`](EventFilter.md).[`topics`](EventFilter.md#topics-1)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1004
