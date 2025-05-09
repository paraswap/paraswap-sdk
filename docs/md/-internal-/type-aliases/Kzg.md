[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Kzg

# Type Alias: Kzg

> **Kzg**: `object`

## Type declaration

### blobToKzgCommitment()

Convert a blob to a KZG commitment.

#### Parameters

• **blob**: `Uint8Array`

#### Returns

`Uint8Array`

### computeBlobKzgProof()

Given a blob, return the KZG proof that is used to verify it against the
commitment.

#### Parameters

• **blob**: `Uint8Array`

• **commitment**: `Uint8Array`

#### Returns

`Uint8Array`

## Defined in

node\_modules/viem/\_types/types/kzg.d.ts:6
