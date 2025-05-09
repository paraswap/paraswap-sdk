[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallBatchOptions

# Type Alias: MulticallBatchOptions

> **MulticallBatchOptions**: `object`

## Type declaration

### batchSize?

> `optional` **batchSize**: `number`

The maximum size (in bytes) for each calldata chunk.

#### Default

```ts
1_024
```

### wait?

> `optional` **wait**: `number`

The maximum number of milliseconds to wait before sending a batch.

#### Default

```ts
0
```

## Defined in

node\_modules/viem/\_types/clients/createClient.d.ts:92
