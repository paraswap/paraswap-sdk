[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / RpcAccountStateOverride

# Type Alias: RpcAccountStateOverride

> **RpcAccountStateOverride**: `object`

## Type declaration

### balance?

> `optional` **balance**: [`Hex`](Hex.md)

Fake balance to set for the account before executing the call. <32 bytes

### code?

> `optional` **code**: [`Hex`](Hex.md)

Fake EVM bytecode to inject into the account before executing the call.

### nonce?

> `optional` **nonce**: [`Hex`](Hex.md)

Fake nonce to set for the account before executing the call. <8 bytes

### state?

> `optional` **state**: [`RpcStateMapping`](RpcStateMapping.md)

Fake key-value mapping to override all slots in the account storage before executing the call.

### stateDiff?

> `optional` **stateDiff**: [`RpcStateMapping`](RpcStateMapping.md)

Fake key-value mapping to override individual slots in the account storage before executing the call.

## Defined in

node\_modules/viem/\_types/types/rpc.d.ts:67
