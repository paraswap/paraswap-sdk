[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransportConfig

# Type Alias: TransportConfig\<type, eip1193RequestFn\>

> **TransportConfig**\<`type`, `eip1193RequestFn`\>: `object`

## Type Parameters

• **type** *extends* `string` = `string`

• **eip1193RequestFn** *extends* [`EIP1193RequestFn`](EIP1193RequestFn.md) = [`EIP1193RequestFn`](EIP1193RequestFn.md)

## Type declaration

### key

> **key**: `string`

The key of the transport.

### name

> **name**: `string`

The name of the transport.

### request

> **request**: `eip1193RequestFn`

The JSON-RPC request function that matches the EIP-1193 request spec.

### retryCount?

> `optional` **retryCount**: `number`

The max number of times to retry.

### retryDelay?

> `optional` **retryDelay**: `number`

The base delay (in ms) between retries.

### timeout?

> `optional` **timeout**: `number`

The timeout (in ms) for requests.

### type

> **type**: `type`

The type of the transport.

## Defined in

node\_modules/viem/\_types/clients/transports/createTransport.d.ts:5
