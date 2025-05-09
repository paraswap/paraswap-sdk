[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CallExceptionError

# Interface: CallExceptionError

This **Error** indicates a transaction reverted.

## Extends

- [`EthersError`](EthersError.md)\<`"CALL_EXCEPTION"`\>

## Properties

### action

> **action**: [`CallExceptionAction`](../type-aliases/CallExceptionAction.md)

The action being performed when the revert was encountered.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:302

***

### code

> **code**: [`ErrorCode`](../type-aliases/ErrorCode.md)

The string error code.

#### Inherited from

[`EthersError`](EthersError.md).[`code`](EthersError.md#code)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:89

***

### data

> **data**: `null` \| `string`

The revert data returned.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:306

***

### error?

> `optional` **error**: [`Error`](Error.md)

Any related error.

#### Inherited from

[`EthersError`](EthersError.md).[`error`](EthersError.md#error)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:104

***

### info?

> `optional` **info**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

Additional info regarding the error that may be useful.

 This is generally helpful mostly for human-based debugging.

#### Inherited from

[`EthersError`](EthersError.md).[`info`](EthersError.md#info)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:100

***

### invocation

> **invocation**: `null` \| `object`

The contract invocation details, if available.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:318

***

### message

> **message**: `string`

#### Inherited from

[`EthersError`](EthersError.md).[`message`](EthersError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`EthersError`](EthersError.md).[`name`](EthersError.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### reason

> **reason**: `null` \| `string`

A human-readable representation of data, if possible.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:310

***

### receipt?

> `optional` **receipt**: [`TransactionReceipt`](../classes/TransactionReceipt.md)

If the error occurred in a transaction that was mined
 (with a status of ``0``), this is the receipt.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:335

***

### revert

> **revert**: `null` \| `object`

The built-in or custom revert error, if available

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:326

***

### shortMessage

> **shortMessage**: `string`

A short message describing the error, with minimal additional
 details.

#### Inherited from

[`EthersError`](EthersError.md).[`shortMessage`](EthersError.md#shortmessage)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:94

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`EthersError`](EthersError.md).[`stack`](EthersError.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### transaction

> **transaction**: [`CallExceptionTransaction`](../type-aliases/CallExceptionTransaction.md)

The transaction that triggered the exception.

#### Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:314
