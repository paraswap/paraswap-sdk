[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3ProviderEventCallback

# Type Alias: Web3ProviderEventCallback()\<T\>

> **Web3ProviderEventCallback**\<`T`\>: (`error`, `result`?) => `void`

## Type Parameters

• **T** = [`JsonRpcResult`](JsonRpcResult.md)

## Parameters

• **error**: [`Error`](../interfaces/Error.md) \| [`ProviderRpcError`](../interfaces/ProviderRpcError.md) \| `undefined`

• **result?**: [`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<`T`\>

## Returns

`void`

## Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:15
