[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / RpcBlock

# Type Alias: RpcBlock\<blockTag, includeTransactions, transaction\>

> **RpcBlock**\<`blockTag`, `includeTransactions`, `transaction`\>: [`Block`](Block.md)\<[`Quantity`](Quantity.md), `includeTransactions`, `blockTag`, `transaction`\>

## Type Parameters

• **blockTag** *extends* [`BlockTag`](BlockTag.md) = [`BlockTag`](BlockTag.md)

• **includeTransactions** *extends* `boolean` = `boolean`

• **transaction** = [`RpcTransaction`](RpcTransaction.md)\<`blockTag` *extends* `"pending"` ? `true` : `false`\>

## Defined in

node\_modules/viem/\_types/types/rpc.d.ts:14
