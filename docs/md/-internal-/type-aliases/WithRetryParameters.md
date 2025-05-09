[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WithRetryParameters

# Type Alias: WithRetryParameters

> **WithRetryParameters**: `object`

## Type declaration

### delay?

> `optional` **delay**: (`config`) => `number` \| `number`

### retryCount?

> `optional` **retryCount**: `number`

### shouldRetry()?

> `optional` **shouldRetry**: (`{ count, error, }`) => `Promise`\<`boolean`\> \| `boolean`

#### Parameters

• **\{ count, error, \}**

• **\{ count, error, \}.count**: `number`

• **\{ count, error, \}.error**: [`Error`](../interfaces/Error.md)

#### Returns

`Promise`\<`boolean`\> \| `boolean`

## Defined in

node\_modules/viem/\_types/utils/promise/withRetry.d.ts:2
