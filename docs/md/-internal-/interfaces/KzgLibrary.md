[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / KzgLibrary

# Interface: KzgLibrary

A KZG Library with the necessary functions to compute
 BLOb commitments and proofs.

## Properties

### blobToKzgCommitment()

> **blobToKzgCommitment**: (`blob`) => `Uint8Array`

#### Parameters

• **blob**: `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:116

***

### computeBlobKzgProof()

> **computeBlobKzgProof**: (`blob`, `commitment`) => `Uint8Array`

#### Parameters

• **blob**: `Uint8Array`

• **commitment**: `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:117
