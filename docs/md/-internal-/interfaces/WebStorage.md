[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WebStorage

# Interface: WebStorage

This Web Storage API interface provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items.

## Indexable

 \[`name`: `string`\]: `any`

## Properties

### length

> `readonly` **length**: `number`

Returns the number of key/value pairs.

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:27

## Methods

### clear()

> **clear**(): `void`

Removes all key/value pairs, if there are any.

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:33

***

### getItem()

> **getItem**(`key`): `null` \| `string`

Returns the current value associated with the given key, or null if the given key does not exist.

#### Parameters

• **key**: `string`

#### Returns

`null` \| `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:35

***

### key()

> **key**(`index`): `null` \| `string`

Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.

#### Parameters

• **index**: `number`

#### Returns

`null` \| `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:37

***

### removeItem()

> **removeItem**(`key`): `void`

Removes the key/value pair with the given key, if a key/value pair with the given key exists.

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Parameters

• **key**: `string`

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:43

***

### setItem()

> **setItem**(`key`, `value`): `void`

Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.

Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Parameters

• **key**: `string`

• **value**: `string`

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:51
