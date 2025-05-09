[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TxData

# Type Alias: TxData

> **TxData**: `object`

Legacy [Transaction](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md) Data

## Type declaration

### data?

> `optional` **data**: [`Uint8ArrayLike`](Uint8ArrayLike.md)

This will contain the data of the message or the init of a contract.

### gasLimit?

> `optional` **gasLimit**: [`Numbers`](Numbers.md) \| `Uint8Array`

The transaction's gas limit.

### gasPrice?

> `optional` **gasPrice**: [`Numbers`](Numbers.md) \| `Uint8Array` \| `null`

The transaction's gas price.

### nonce?

> `optional` **nonce**: [`Numbers`](Numbers.md) \| `Uint8Array`

The transaction's nonce.

### r?

> `optional` **r**: [`Numbers`](Numbers.md) \| `Uint8Array`

EC signature parameter.

### s?

> `optional` **s**: [`Numbers`](Numbers.md) \| `Uint8Array`

EC signature parameter.

### to?

> `optional` **to**: [`Address`](../classes/Address.md) \| `Uint8Array` \| [`HexString`](HexString.md)

The transaction's the address is sent to.

### type?

> `optional` **type**: [`Numbers`](Numbers.md)

The transaction type

### v?

> `optional` **v**: [`Numbers`](Numbers.md) \| `Uint8Array`

EC recovery ID.

### value?

> `optional` **value**: [`Numbers`](Numbers.md) \| `Uint8Array`

The amount of Ether sent.

## Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:81
