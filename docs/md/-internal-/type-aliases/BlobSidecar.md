[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlobSidecar

# Type Alias: BlobSidecar\<type\>

> **BlobSidecar**\<`type`\>: `object`

## Type Parameters

• **type** *extends* [`Hex`](Hex.md) \| [`ByteArray`](ByteArray.md) = [`Hex`](Hex.md) \| [`ByteArray`](ByteArray.md)

## Type declaration

### blob

> **blob**: `type`

The blob associated with the transaction.

### commitment

> **commitment**: `type`

The KZG commitment corresponding to this blob.

### proof

> **proof**: `type`

The KZG proof corresponding to this blob and commitment.

## Defined in

node\_modules/viem/\_types/types/eip4844.d.ts:2
