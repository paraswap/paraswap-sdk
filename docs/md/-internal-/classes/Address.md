[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Address

# Class: Address

## Constructors

### new Address()

> **new Address**(`buf`): [`Address`](Address.md)

#### Parameters

• **buf**: `Uint8Array`

#### Returns

[`Address`](Address.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:3

## Properties

### buf

> `readonly` **buf**: `Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:2

## Methods

### equals()

> **equals**(`address`): `boolean`

Is address equal to another.

#### Parameters

• **address**: [`Address`](Address.md)

#### Returns

`boolean`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:11

***

### isZero()

> **isZero**(): `boolean`

Is address zero.

#### Returns

`boolean`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:15

***

### toArray()

> **toArray**(): `Uint8Array`

Returns Uint8Array representation of address.

#### Returns

`Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:23

***

### toString()

> **toString**(): `string`

Returns hex encoding of address.

#### Returns

`string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:19

***

### publicToAddress()

> `static` **publicToAddress**(`_pubKey`, `sanitize`?): `Uint8Array`

Returns the ethereum address of a given public key.
Accepts "Ethereum public keys" and SEC1 encoded keys.

#### Parameters

• **\_pubKey**: `Uint8Array`

• **sanitize?**: `boolean`

Accept public keys in other formats

#### Returns

`Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:30

***

### zero()

> `static` **zero**(): [`Address`](Address.md)

Returns the zero address.

#### Returns

[`Address`](Address.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:7
