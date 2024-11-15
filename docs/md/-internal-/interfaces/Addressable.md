[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Addressable

# Interface: Addressable

An interface for objects which have an address, and can
 resolve it asyncronously.

 This allows objects such as [[Signer]] or [[Contract]] to
 be used most places an address can be, for example getting
 the [balance](Provider-getBalance).

## Extended by

- [`Signer`](Signer.md)

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Get the object address.

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/address/index.d.ts:27
