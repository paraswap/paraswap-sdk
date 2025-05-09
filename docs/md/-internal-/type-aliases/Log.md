[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Log

# Type Alias: Log\<quantity, index, pending, abiEvent, strict, abi, eventName\>

> **Log**\<`quantity`, `index`, `pending`, `abiEvent`, `strict`, `abi`, `eventName`\>: `object` & [`GetInferredLogValues`](GetInferredLogValues.md)\<`abiEvent`, `abi`, `eventName`, `strict`\>

## Type declaration

### address

> **address**: [`Address`](Address.md)

The address from which this log originated

### blockHash

> **blockHash**: `pending` *extends* `true` ? `null` : [`Hash`](Hash.md)

Hash of block containing this log or `null` if pending

### blockNumber

> **blockNumber**: `pending` *extends* `true` ? `null` : `quantity`

Number of block containing this log or `null` if pending

### data

> **data**: [`Hex`](Hex.md)

Contains the non-indexed arguments of the log

### logIndex

> **logIndex**: `pending` *extends* `true` ? `null` : `index`

Index of this log within its block or `null` if pending

### removed

> **removed**: `boolean`

`true` if this filter has been destroyed and is invalid

### transactionHash

> **transactionHash**: `pending` *extends* `true` ? `null` : [`Hash`](Hash.md)

Hash of the transaction that created this log or `null` if pending

### transactionIndex

> **transactionIndex**: `pending` *extends* `true` ? `null` : `index`

Index of the transaction that created this log or `null` if pending

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **pending** *extends* `boolean` = `boolean`

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`abiEvent`] : `undefined`

• **eventName** *extends* `string` \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? `abiEvent`\[`"name"`\] : `undefined`

## Defined in

node\_modules/viem/\_types/types/log.d.ts:4
