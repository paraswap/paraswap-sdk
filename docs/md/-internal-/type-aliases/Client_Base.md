[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Client\_Base

# Type Alias: Client\_Base\<transport, chain, account, rpcSchema\>

> **Client\_Base**\<`transport`, `chain`, `account`, `rpcSchema`\>: `object`

## Type Parameters

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **rpcSchema** *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

## Type declaration

### account

> **account**: `account`

The Account of the Client.

### batch?

> `optional` **batch**: [`ClientConfig`](ClientConfig.md)\[`"batch"`\]

Flags for batch settings.

### cacheTime

> **cacheTime**: `number`

Time (in ms) that cached data will remain in memory.

### ccipRead?

> `optional` **ccipRead**: [`ClientConfig`](ClientConfig.md)\[`"ccipRead"`\]

[CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration.

### chain

> **chain**: `chain`

Chain for the client.

### key

> **key**: `string`

A key for the client.

### name

> **name**: `string`

A name for the client.

### pollingInterval

> **pollingInterval**: `number`

Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds.

### request

> **request**: [`EIP1193RequestFn`](EIP1193RequestFn.md)\<`rpcSchema` *extends* `undefined` ? [`EIP1474Methods`](EIP1474Methods.md) : `rpcSchema`\>

Request function wrapped with friendly error handling

### transport

> **transport**: [`ReturnType`](ReturnType.md)\<`transport`\>\[`"config"`\] & [`ReturnType`](ReturnType.md)\<`transport`\>\[`"value"`\]

The RPC transport

### type

> **type**: `string`

The type of client.

### uid

> **uid**: `string`

A unique ID for the client.

## Defined in

node\_modules/viem/\_types/clients/createClient.d.ts:61
