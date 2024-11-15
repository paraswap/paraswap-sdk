[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TypedDataDomain

# Interface: TypedDataDomain

The domain for an [[link-eip-712]] payload.

## Properties

### chainId?

> `optional` **chainId**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The chain ID of the signing domain.

#### Defined in

node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:18

***

### name?

> `optional` **name**: `null` \| `string`

The human-readable name of the signing domain.

#### Defined in

node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:10

***

### salt?

> `optional` **salt**: `null` \| [`BytesLike`](../type-aliases/BytesLike.md)

A salt used for purposes decided by the specific domain.

#### Defined in

node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:26

***

### verifyingContract?

> `optional` **verifyingContract**: `null` \| `string`

The the address of the contract that will verify the signature.

#### Defined in

node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:22

***

### version?

> `optional` **version**: `null` \| `string`

The major version of the signing domain.

#### Defined in

node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:14
