[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / VerifyHashParameters

# Type Alias: VerifyHashParameters

> **VerifyHashParameters**: [`Pick`](Pick.md)\<[`CallParameters`](CallParameters.md), `"blockNumber"` \| `"blockTag"`\> & `object` & [`OneOf`](OneOf.md)\<`object` \| `object`\>

## Type declaration

### address

> **address**: [`Address`](Address.md)

The address that signed the original message.

### hash

> **hash**: [`Hex`](Hex.md)

The hash to be verified.

### signature

> **signature**: [`Hex`](Hex.md) \| [`ByteArray`](ByteArray.md) \| [`Signature`](Signature.md)

The signature that was generated by signing the message with the address's private key.

### universalSignatureVerifierAddress?

> `optional` **universalSignatureVerifierAddress**: [`Address`](Address.md)

## Defined in

node\_modules/viem/\_types/actions/public/verifyHash.d.ts:13
