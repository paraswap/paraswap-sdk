[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EthersError

# Interface: EthersError\<T\>

All errors in Ethers include properties to assist in
 machine-readable errors.

## Extends

- [`Error`](Error.md)

## Extended by

- [`CallExceptionError`](CallExceptionError.md)

## Type Parameters

• **T** *extends* [`ErrorCode`](../type-aliases/ErrorCode.md) = [`ErrorCode`](../type-aliases/ErrorCode.md)

## Properties

### code

> **code**: [`ErrorCode`](../type-aliases/ErrorCode.md)

The string error code.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:89

***

### error?

> `optional` **error**: [`Error`](Error.md)

Any related error.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:104

***

### info?

> `optional` **info**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

Additional info regarding the error that may be useful.

 This is generally helpful mostly for human-based debugging.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:100

***

### message

> **message**: `string`

#### Inherited from

[`Error`](Error.md).[`message`](Error.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`Error`](Error.md).[`name`](Error.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### shortMessage

> **shortMessage**: `string`

A short message describing the error, with minimal additional
 details.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:94

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`Error`](Error.md).[`stack`](Error.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078
