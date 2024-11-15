[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / WaitForTransactionReceiptParameters

# Type Alias: WaitForTransactionReceiptParameters\<chain\>

> **WaitForTransactionReceiptParameters**\<`chain`\>: `object`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

## Type declaration

### confirmations?

> `optional` **confirmations**: `number`

The number of confirmations (blocks that have passed) to wait before resolving.

#### Default

```ts
1
```

### hash

> **hash**: [`Hash`](Hash.md)

The hash of the transaction.

### onReplaced()?

> `optional` **onReplaced**: (`response`) => `void`

Optional callback to emit if the transaction has been replaced.

#### Parameters

• **response**: [`ReplacementReturnType`](ReplacementReturnType.md)\<`chain`\>

#### Returns

`void`

### pollingInterval?

> `optional` **pollingInterval**: `number`

Polling frequency (in ms). Defaults to the client's pollingInterval config.

#### Default

```ts
client.pollingInterval
```

### retryCount?

> `optional` **retryCount**: [`WithRetryParameters`](WithRetryParameters.md)\[`"retryCount"`\]

Number of times to retry if the transaction or block is not found.

#### Default

```ts
6 (exponential backoff)
```

### retryDelay?

> `optional` **retryDelay**: [`WithRetryParameters`](WithRetryParameters.md)\[`"delay"`\]

Time to wait (in ms) between retries.

#### Default

`({ count }) => ~~(1 << count) * 200` (exponential backoff)

### timeout?

> `optional` **timeout**: `number`

Optional timeout (in milliseconds) to wait before stopping polling.

#### Default

```ts
180_000
```

## Defined in

node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:21
