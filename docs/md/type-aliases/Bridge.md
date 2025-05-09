[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / Bridge

# Type Alias: Bridge

> **Bridge**: `object`

## Type declaration

### destinationChainId

> **destinationChainId**: `number`

### maxRelayerFee

> **maxRelayerFee**: `string`

### multiCallHandler

> **multiCallHandler**: `string`

#### Description

The address of the multiCallHandler on destination chain, used to unwrap WETH and send to Smart Contract receiver. Must be non-zero when receiver address is a SmartContract wallet and need to send Native ETH

### outputToken

> **outputToken**: `string`

#### Description

The address of the output token. Same as Order.destToken but on destination chain, so can still be a different address

## Defined in

[src/methods/delta/helpers/types.ts:28](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/delta/helpers/types.ts#L28)
