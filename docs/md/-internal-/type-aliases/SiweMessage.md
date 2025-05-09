[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SiweMessage

# Type Alias: SiweMessage

> **SiweMessage**: `object`

## Type declaration

### address

> **address**: [`Address`](Address.md)

The Ethereum address performing the signing.

### chainId

> **chainId**: `number`

The [EIP-155](https://eips.ethereum.org/EIPS/eip-155) Chain ID to which the session is bound,

### domain

> **domain**: `string`

[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) authority that is requesting the signing.

### expirationTime?

> `optional` **expirationTime**: `Date`

Time when the signed authentication message is no longer valid.

### issuedAt?

> `optional` **issuedAt**: `Date`

Time when the message was generated, typically the current time.

### nonce

> **nonce**: `string`

A random string typically chosen by the relying party and used to prevent replay attacks.

### notBefore?

> `optional` **notBefore**: `Date`

Time when the signed authentication message will become valid.

### requestId?

> `optional` **requestId**: `string`

A system-specific identifier that may be used to uniquely refer to the sign-in request.

### resources?

> `optional` **resources**: `string`[]

A list of information or references to information the user wishes to have resolved as part of authentication by the relying party.

### scheme?

> `optional` **scheme**: `string`

[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986#section-3.1) URI scheme of the origin of the request.

### statement?

> `optional` **statement**: `string`

A human-readable ASCII assertion that the user will sign.

### uri

> **uri**: `string`

[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) URI referring to the resource that is the subject of the signing (as in the subject of a claim).

### version

> **version**: `"1"`

The current version of the SIWE Message.

## Description

EIP-4361 message fields

## See

https://eips.ethereum.org/EIPS/eip-4361

## Defined in

node\_modules/viem/\_types/utils/siwe/types.d.ts:7
