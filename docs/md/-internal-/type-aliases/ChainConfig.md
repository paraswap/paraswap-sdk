[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainConfig

# Type Alias: ChainConfig\<formatters, custom\>

> **ChainConfig**\<`formatters`, `custom`\>: `object`

## Type Parameters

• **formatters** *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

• **custom** *extends* [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined` = [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined`

## Type declaration

### custom?

> `optional` **custom**: `custom`

Custom chain data.

### fees?

> `optional` **fees**: [`ChainFees`](ChainFees.md)\<`formatters` \| `undefined`\>

Modifies how fees are derived.

### formatters?

> `optional` **formatters**: `formatters`

Modifies how data is formatted and typed (e.g. blocks and transactions)

### serializers?

> `optional` **serializers**: [`ChainSerializers`](ChainSerializers.md)\<`formatters`\>

Modifies how data is serialized (e.g. transactions).

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:45
