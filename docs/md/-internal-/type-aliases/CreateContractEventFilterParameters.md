[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateContractEventFilterParameters

# Type Alias: CreateContractEventFilterParameters\<abi, eventName, args, strict, fromBlock, toBlock\>

> **CreateContractEventFilterParameters**\<`abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\>: `object` & `undefined` *extends* `eventName` ? `object` : [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\> *extends* infer eventFilterArgs ? `object` : `object`

## Type declaration

### abi

> **abi**: `abi`

### address?

> `optional` **address**: [`Address`](Address.md) \| [`Address`](Address.md)[]

### eventName?

> `optional` **eventName**: `eventName` \| [`ContractEventName`](ContractEventName.md)\<`abi`\>

### fromBlock?

> `optional` **fromBlock**: `fromBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md)

### strict?

> `optional` **strict**: `strict` \| `boolean`

Whether or not the logs must match the indexed/non-indexed arguments in the event ABI item.

#### Default

```ts
false
```

### toBlock?

> `optional` **toBlock**: `toBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md)

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **eventName** *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> \| `undefined` = `undefined`

• **args** *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\> \| `undefined` = `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/createContractEventFilter.d.ts:12
