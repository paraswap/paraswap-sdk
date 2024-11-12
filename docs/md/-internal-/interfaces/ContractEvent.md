[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEvent

# Interface: ContractEvent()\<A\>

## Type Parameters

• **A** *extends* `any`[] = `any`[]

> **ContractEvent**(...`args`): [`DeferredTopicFilter`](DeferredTopicFilter.md)

## Parameters

• ...**args**: [`ContractEventArgs`](../type-aliases/ContractEventArgs.md)\<`A`\>

## Returns

[`DeferredTopicFilter`](DeferredTopicFilter.md)

## Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:146

## Properties

### fragment

> **fragment**: [`EventFragment`](../classes/EventFragment.md)

The fragment of the Contract event. This will throw on ambiguous
 method names.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:155

***

### name

> **name**: `string`

The name of the Contract event.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:150

## Methods

### getFragment()

> **getFragment**(...`args`): [`EventFragment`](../classes/EventFragment.md)

Returns the fragment constrained by %%args%%. This can be used to
 resolve ambiguous event names.

#### Parameters

• ...**args**: [`ContractEventArgs`](../type-aliases/ContractEventArgs.md)\<`A`\>

#### Returns

[`EventFragment`](../classes/EventFragment.md)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:160
