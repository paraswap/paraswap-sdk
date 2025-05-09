[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Chain

# Type Alias: Chain\<formatters, custom\>

> **Chain**\<`formatters`, `custom`\>: `object` & [`ChainConfig`](ChainConfig.md)\<`formatters`, `custom`\>

## Type declaration

### blockExplorers?

> `optional` **blockExplorers**: `object`

Collection of block explorers

#### Index Signature

 \[`key`: `string`\]: [`ChainBlockExplorer`](ChainBlockExplorer.md)

### blockExplorers.default

> **default**: [`ChainBlockExplorer`](ChainBlockExplorer.md)

### contracts?

> `optional` **contracts**: [`Prettify`](Prettify.md)\<`object` & `object`\>

Collection of contracts

### id

> **id**: `number`

ID in number form

### name

> **name**: `string`

Human-readable name

### nativeCurrency

> **nativeCurrency**: [`ChainNativeCurrency`](ChainNativeCurrency.md)

Currency used by chain

### rpcUrls

> **rpcUrls**: `object`

Collection of RPC endpoints

#### Index Signature

 \[`key`: `string`\]: [`ChainRpcUrls`](ChainRpcUrls.md)

### rpcUrls.default

> **default**: [`ChainRpcUrls`](ChainRpcUrls.md)

### sourceId?

> `optional` **sourceId**: `number`

Source Chain ID (ie. the L1 chain)

### testnet?

> `optional` **testnet**: `boolean`

Flag for test networks

## Type Parameters

• **formatters** *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

• **custom** *extends* [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined` = [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined`

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:12
