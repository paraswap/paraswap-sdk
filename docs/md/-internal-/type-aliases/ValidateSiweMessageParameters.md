[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ValidateSiweMessageParameters

# Type Alias: ValidateSiweMessageParameters

> **ValidateSiweMessageParameters**: `object`

## Type declaration

### address?

> `optional` **address**: [`Address`](Address.md)

Ethereum address to check against.

### domain?

> `optional` **domain**: `string`

[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) authority to check against.

### message

> **message**: [`ExactPartial`](ExactPartial.md)\<[`SiweMessage`](SiweMessage.md)\>

EIP-4361 message fields.

### nonce?

> `optional` **nonce**: `string`

Random string to check against.

### scheme?

> `optional` **scheme**: `string`

[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986#section-3.1) URI scheme to check against.

### time?

> `optional` **time**: `Date`

Current time to check optional `expirationTime` and `notBefore` fields.

#### Default

```ts
new Date()
```

## Defined in

node\_modules/viem/\_types/utils/siwe/validateSiweMessage.d.ts:4
