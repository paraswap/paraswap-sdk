[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallParameters

# Type Alias: MulticallParameters\<contracts, allowFailure, options\>

> **MulticallParameters**\<`contracts`, `allowFailure`, `options`\>: [`Pick`](Pick.md)\<[`CallParameters`](CallParameters.md), `"blockNumber"` \| `"blockTag"` \| `"stateOverride"`\> & `object`

## Type declaration

### allowFailure?

> `optional` **allowFailure**: `allowFailure` \| `boolean`

### batchSize?

> `optional` **batchSize**: `number`

### contracts

> **contracts**: [`MulticallContracts`](MulticallContracts.md)\<[`Narrow`](Narrow.md)\<`contracts`\>, `object` & `options`\>

### multicallAddress?

> `optional` **multicallAddress**: [`Address`](Address.md)

## Type Parameters

• **contracts** *extends* readonly `unknown`[] = readonly [`ContractFunctionParameters`](ContractFunctionParameters.md)[]

• **allowFailure** *extends* `boolean` = `true`

• **options** *extends* `object` = `object`

## Defined in

node\_modules/viem/\_types/actions/public/multicall.d.ts:14
