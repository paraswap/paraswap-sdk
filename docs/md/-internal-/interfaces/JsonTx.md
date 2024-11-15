[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonTx

# Interface: JsonTx

Generic interface for all tx types with a
JSON representation of a transaction.

Note that all values are marked as optional
and not all the values are present on all tx types
(an EIP1559 tx e.g. lacks a `gasPrice`).

## Properties

### accessList?

> `optional` **accessList**: [`JsonAccessListItem`](../type-aliases/JsonAccessListItem.md)[]

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:214

***

### chainId?

> `optional` **chainId**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:213

***

### data?

> `optional` **data**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:208

***

### gasLimit?

> `optional` **gasLimit**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:206

***

### gasPrice?

> `optional` **gasPrice**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:205

***

### maxFeePerDataGas?

> `optional` **maxFeePerDataGas**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:218

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:217

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:216

***

### nonce?

> `optional` **nonce**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:204

***

### r?

> `optional` **r**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:210

***

### s?

> `optional` **s**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:211

***

### to?

> `optional` **to**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:207

***

### type?

> `optional` **type**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:215

***

### v?

> `optional` **v**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:209

***

### value?

> `optional` **value**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:212

***

### versionedHashes?

> `optional` **versionedHashes**: `string`[]

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:219
