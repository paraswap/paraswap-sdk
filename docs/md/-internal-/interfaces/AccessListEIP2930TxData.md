[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AccessListEIP2930TxData

# Interface: AccessListEIP2930TxData

AccessListEIP2930Transaction data.

## Extends

- [`TxData`](../type-aliases/TxData.md)

## Extended by

- [`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md)

## Properties

### accessList?

> `optional` **accessList**: `null` \| [`AccessListUint8Array`](../type-aliases/AccessListUint8Array.md) \| [`AccessList`](../type-aliases/AccessList.md)

The access list which contains the addresses/storage slots which the transaction wishes to access

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:134

***

### chainId?

> `optional` **chainId**: [`Numbers`](../type-aliases/Numbers.md)

The transaction's chain ID

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:130

***

### data?

> `optional` **data**: [`Uint8ArrayLike`](../type-aliases/Uint8ArrayLike.md)

This will contain the data of the message or the init of a contract.

#### Inherited from

`TxData.data`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:105

***

### gasLimit?

> `optional` **gasLimit**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The transaction's gas limit.

#### Inherited from

`TxData.gasLimit`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:93

***

### gasPrice?

> `optional` **gasPrice**: `null` \| `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The transaction's gas price.

#### Inherited from

`TxData.gasPrice`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:89

***

### nonce?

> `optional` **nonce**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The transaction's nonce.

#### Inherited from

`TxData.nonce`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:85

***

### r?

> `optional` **r**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

EC signature parameter.

#### Inherited from

`TxData.r`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:113

***

### s?

> `optional` **s**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

EC signature parameter.

#### Inherited from

`TxData.s`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:117

***

### to?

> `optional` **to**: `string` \| `Uint8Array` \| [`Address`](../classes/Address.md)

The transaction's the address is sent to.

#### Inherited from

`TxData.to`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:97

***

### type?

> `optional` **type**: [`Numbers`](../type-aliases/Numbers.md)

The transaction type

#### Inherited from

`TxData.type`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:121

***

### v?

> `optional` **v**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

EC recovery ID.

#### Inherited from

`TxData.v`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:109

***

### value?

> `optional` **value**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The amount of Ether sent.

#### Inherited from

`TxData.value`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:101
