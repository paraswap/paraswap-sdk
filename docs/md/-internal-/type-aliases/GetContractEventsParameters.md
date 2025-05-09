[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetContractEventsParameters

# Type Alias: GetContractEventsParameters\<abi, eventName, strict, fromBlock, toBlock\>

> **GetContractEventsParameters**\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>: `object` & `object` \| `object`

## Type declaration

### abi

> **abi**: `abi`

Contract ABI.

### address?

> `optional` **address**: [`Address`](Address.md) \| [`Address`](Address.md)[]

The address of the contract.

### args?

> `optional` **args**: [`ContractEventArgs`](ContractEventArgs.md)\<`abi`, `eventName` *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> ? `eventName` : [`ContractEventName`](ContractEventName.md)\<`abi`\>\>

### eventName?

> `optional` **eventName**: `eventName` \| [`ContractEventName`](ContractEventName.md)\<`abi`\>

Contract event.

### strict?

> `optional` **strict**: `strict` \| `boolean`

Whether or not the logs must match the indexed/non-indexed arguments on `event`.

#### Default

```ts
false
```

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **eventName** *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> \| `undefined` = [`ContractEventName`](ContractEventName.md)\<`abi`\> \| `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/getContractEvents.d.ts:12
