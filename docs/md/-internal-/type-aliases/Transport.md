[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Transport

# Type Alias: Transport()\<type, rpcAttributes, eip1193RequestFn\>

> **Transport**\<`type`, `rpcAttributes`, `eip1193RequestFn`\>: \<`chain`\>(`{ chain, }`) => `object`

## Type Parameters

• **type** *extends* `string` = `string`

• **rpcAttributes** = [`Record`](Record.md)\<`string`, `any`\>

• **eip1193RequestFn** *extends* [`EIP1193RequestFn`](EIP1193RequestFn.md) = [`EIP1193RequestFn`](EIP1193RequestFn.md)

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

## Parameters

• **\{ chain, \}**

• **\{ chain, \}.chain?**: `chain`

• **\{ chain, \}.pollingInterval?**: [`ClientConfig`](ClientConfig.md)\[`"pollingInterval"`\]

• **\{ chain, \}.retryCount?**: [`TransportConfig`](TransportConfig.md)\[`"retryCount"`\]

• **\{ chain, \}.timeout?**: [`TransportConfig`](TransportConfig.md)\[`"timeout"`\]

## Returns

`object`

### config

> **config**: [`TransportConfig`](TransportConfig.md)\<`type`\>

### request

> **request**: `eip1193RequestFn`

### value?

> `optional` **value**: `rpcAttributes`

## Defined in

node\_modules/viem/\_types/clients/transports/createTransport.d.ts:21
