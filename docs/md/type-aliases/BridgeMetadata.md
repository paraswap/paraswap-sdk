[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BridgeMetadata

# Type Alias: BridgeMetadata

> **BridgeMetadata**: `object`

## Type declaration

### depositId

> **depositId**: `number`

#### Description

The deposit id

### depositRefundTxHash?

> `optional` **depositRefundTxHash**: `string`

#### Description

The transaction hash on the source chain that refunded the deposit. When bridgeStatus='refunded'

### fillDeadline

> **fillDeadline**: `number`

#### Description

The cross-chain deadline. If deadline passes, the bridgeStatus would be expired

### fillTx?

> `optional` **fillTx**: `string`

#### Description

The transaction hash on the destination chain that fulfilled the order. When bridgeStatus='filled'

### outputAmount

> **outputAmount**: `string`

#### Description

The amount that user should expect to get

## Defined in

[src/methods/delta/helpers/types.ts:96](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/delta/helpers/types.ts#L96)
