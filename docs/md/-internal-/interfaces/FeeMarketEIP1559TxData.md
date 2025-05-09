[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeMarketEIP1559TxData

# Interface: FeeMarketEIP1559TxData

FeeMarketEIP1559Transaction data.

## Extends

- [`AccessListEIP2930TxData`](AccessListEIP2930TxData.md)

## Properties

### accessList?

> `optional` **accessList**: `null` \| [`AccessListUint8Array`](../type-aliases/AccessListUint8Array.md) \| [`AccessList`](../type-aliases/AccessList.md)

The access list which contains the addresses/storage slots which the transaction wishes to access

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`accessList`](AccessListEIP2930TxData.md#accesslist)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:134

***

### chainId?

> `optional` **chainId**: [`Numbers`](../type-aliases/Numbers.md)

The transaction's chain ID

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`chainId`](AccessListEIP2930TxData.md#chainid)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:130

***

### data?

> `optional` **data**: [`Uint8ArrayLike`](../type-aliases/Uint8ArrayLike.md)

This will contain the data of the message or the init of a contract.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`data`](AccessListEIP2930TxData.md#data)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:105

***

### gasLimit?

> `optional` **gasLimit**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The transaction's gas limit.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`gasLimit`](AccessListEIP2930TxData.md#gaslimit)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:93

***

### gasPrice?

> `optional` **gasPrice**: `null`

The transaction's gas price, inherited from [Transaction](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md).  This property is not used for EIP1559
transactions and should always be undefined for this specific transaction type.

#### Overrides

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`gasPrice`](AccessListEIP2930TxData.md#gasprice)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:144

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The maximum total fee

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:152

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The maximum inclusion fee per gas (this fee is given to the miner)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:148

***

### nonce?

> `optional` **nonce**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The transaction's nonce.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`nonce`](AccessListEIP2930TxData.md#nonce)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:85

***

### r?

> `optional` **r**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

EC signature parameter.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`r`](AccessListEIP2930TxData.md#r)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:113

***

### s?

> `optional` **s**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

EC signature parameter.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`s`](AccessListEIP2930TxData.md#s)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:117

***

### to?

> `optional` **to**: `string` \| `Uint8Array` \| [`Address`](../classes/Address.md)

The transaction's the address is sent to.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`to`](AccessListEIP2930TxData.md#to)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:97

***

### type?

> `optional` **type**: [`Numbers`](../type-aliases/Numbers.md)

The transaction type

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`type`](AccessListEIP2930TxData.md#type)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:121

***

### v?

> `optional` **v**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

EC recovery ID.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`v`](AccessListEIP2930TxData.md#v)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:109

***

### value?

> `optional` **value**: `Uint8Array` \| [`Numbers`](../type-aliases/Numbers.md)

The amount of Ether sent.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`value`](AccessListEIP2930TxData.md#value)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:101
