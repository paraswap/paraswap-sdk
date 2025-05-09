[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseTransaction

# Class: `abstract` BaseTransaction\<TransactionObject\>

This base class will likely be subject to further
refactoring along the introduction of additional tx types
on the Ethereum network.

It is therefore not recommended to use directly.

## Type Parameters

• **TransactionObject**

## Constructors

### new BaseTransaction()

> **new BaseTransaction**\<`TransactionObject`\>(`txData`, `opts`): [`BaseTransaction`](BaseTransaction.md)\<`TransactionObject`\>

#### Parameters

• **txData**: [`TxData`](../type-aliases/TxData.md) \| [`AccessListEIP2930TxData`](../interfaces/AccessListEIP2930TxData.md) \| [`FeeMarketEIP1559TxData`](../interfaces/FeeMarketEIP1559TxData.md)

• **opts**: [`TxOptions`](../interfaces/TxOptions.md)

#### Returns

[`BaseTransaction`](BaseTransaction.md)\<`TransactionObject`\>

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:56

## Properties

### activeCapabilities

> `protected` **activeCapabilities**: `number`[]

List of tx type defining EIPs,
e.g. 1559 (fee market) and 2930 (access lists)
for FeeMarketEIP1559Transaction objects

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:39

***

### cache

> `protected` **cache**: [`TransactionCache`](../interfaces/TransactionCache.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:32

***

### common

> `readonly` **common**: [`Common`](Common.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:31

***

### data

> `readonly` **data**: `Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:27

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:24

***

### nonce

> `readonly` **nonce**: `bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:23

***

### r?

> `readonly` `optional` **r**: `bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:29

***

### s?

> `readonly` `optional` **s**: `bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:30

***

### to?

> `readonly` `optional` **to**: [`Address`](Address.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:25

***

### txOptions

> `protected` `readonly` **txOptions**: [`TxOptions`](../interfaces/TxOptions.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:33

***

### v?

> `readonly` `optional` **v**: `bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:28

***

### value

> `readonly` **value**: `bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:26

## Accessors

### type

#### Get Signature

> **get** **type**(): `number`

Returns the transaction type.

Note: legacy txs will return tx type `0`.

##### Returns

`number`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:62

## Methods

### \_ecsign()

> `protected` **\_ecsign**(`msgHash`, `privateKey`, `chainId`?): [`ECDSASignature`](../interfaces/ECDSASignature.md)

#### Parameters

• **msgHash**: `Uint8Array`

• **privateKey**: `Uint8Array`

• **chainId?**: `bigint`

#### Returns

[`ECDSASignature`](../interfaces/ECDSASignature.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:193

***

### \_getSharedErrorPostfix()

> `protected` **\_getSharedErrorPostfix**(): `string`

Returns the shared error postfix part for _error() method
tx type implementations.

#### Returns

`string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:192

***

### \_processSignature()

> `abstract` `protected` **\_processSignature**(`v`, `r`, `s`): `TransactionObject`

#### Parameters

• **v**: `bigint`

• **r**: `Uint8Array`

• **s**: `Uint8Array`

#### Returns

`TransactionObject`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:155

***

### \_validateCannotExceedMaxInteger()

> `protected` **\_validateCannotExceedMaxInteger**(`values`, `bits`?, `cannotEqual`?): `void`

Validates that an object with BigInt values cannot exceed the specified bit limit.

#### Parameters

• **values**

Object containing string keys and BigInt values

• **bits?**: `number`

Number of bits to check (64 or 256)

• **cannotEqual?**: `boolean`

Pass true if the number also cannot equal one less the maximum value

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:171

***

### \_validateHighS()

> `protected` **\_validateHighS**(): `void`

EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2are considered invalid.
Reasoning: https://ethereum.stackexchange.com/a/55728

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:92

***

### \_validateYParity()

> `protected` **\_validateYParity**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:87

***

### errorStr()

> `abstract` **errorStr**(): `string`

Return a compact error string representation of the object

#### Returns

`string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:180

***

### getBaseFee()

> **getBaseFee**(): `bigint`

The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)

#### Returns

`bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:96

***

### getDataFee()

> **getDataFee**(): `bigint`

The amount of gas paid for the data in this tx

#### Returns

`bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:100

***

### getMessageToSign()

#### getMessageToSign(hashMessage)

> `abstract` **getMessageToSign**(`hashMessage`): `Uint8Array` \| `Uint8Array`[]

##### Parameters

• **hashMessage**: `false`

##### Returns

`Uint8Array` \| `Uint8Array`[]

##### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:124

#### getMessageToSign(hashMessage)

> `abstract` **getMessageToSign**(`hashMessage`?): `Uint8Array`

##### Parameters

• **hashMessage?**: `true`

##### Returns

`Uint8Array`

##### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:125

***

### getMessageToVerifySignature()

> `abstract` **getMessageToVerifySignature**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:127

***

### getSenderAddress()

> **getSenderAddress**(): [`Address`](Address.md)

Returns the sender's address

#### Returns

[`Address`](Address.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:136

***

### getSenderPublicKey()

> `abstract` **getSenderPublicKey**(): `Uint8Array`

Returns the public key of the sender

#### Returns

`Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:140

***

### getUpfrontCost()

> `abstract` **getUpfrontCost**(): `bigint`

The up front amount that an account must have for this transaction to be valid

#### Returns

`bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:104

***

### hash()

> `abstract` **hash**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:126

***

### isSigned()

> **isSigned**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:128

***

### raw()

> `abstract` **raw**(): [`TxValuesArray`](../type-aliases/TxValuesArray.md) \| [`AccessListEIP2930ValuesArray`](../type-aliases/AccessListEIP2930ValuesArray.md) \| [`FeeMarketEIP1559ValuesArray`](../type-aliases/FeeMarketEIP1559ValuesArray.md)

Returns a Uint8Array Array of the raw Uint8Arrays of this transaction, in order.

Use [BaseTransaction.serialize](BaseTransaction.md#serialize) to add a transaction to a block
with Block.fromValuesArray.

For an unsigned tx this method uses the empty Uint8Array values for the
signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
representation for external signing use [BaseTransaction.getMessageToSign](BaseTransaction.md#getmessagetosign).

#### Returns

[`TxValuesArray`](../type-aliases/TxValuesArray.md) \| [`AccessListEIP2930ValuesArray`](../type-aliases/AccessListEIP2930ValuesArray.md) \| [`FeeMarketEIP1559ValuesArray`](../type-aliases/FeeMarketEIP1559ValuesArray.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:119

***

### serialize()

> `abstract` **serialize**(): `Uint8Array`

Returns the encoding of the transaction.

#### Returns

`Uint8Array`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:123

***

### sign()

> **sign**(`privateKey`): `TransactionObject`

Signs a transaction.

Note that the signed tx is returned as a new object,
use as follows:
```javascript
const signedTx = tx.sign(privateKey)
```

#### Parameters

• **privateKey**: `Uint8Array`

#### Returns

`TransactionObject`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:150

***

### supports()

> **supports**(`capability`): `boolean`

Checks if a tx type defining capability is active
on a tx, for example the EIP-1559 fee market mechanism
or the EIP-2930 access list feature.

Note that this is different from the tx type itself,
so EIP-2930 access lists can very well be active
on an EIP-1559 tx for example.

This method can be useful for feature checks if the
tx type is unknown (e.g. when instantiated with
the tx factory).

See `Capabilites` in the `types` module for a reference
on all supported capabilities.

#### Parameters

• **capability**: [`Capability`](../enumerations/Capability.md)

#### Returns

`boolean`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:79

***

### toCreationAddress()

> **toCreationAddress**(): `boolean`

If the tx's `to` is to the creation address

#### Returns

`boolean`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:108

***

### toJSON()

> `abstract` **toJSON**(): [`JsonTx`](../interfaces/JsonTx.md)

Returns an object with the JSON representation of the transaction

#### Returns

[`JsonTx`](../interfaces/JsonTx.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:154

***

### validate()

#### validate()

> **validate**(): `boolean`

Checks if the transaction has the minimum amount of gas required
(DataFee + TxFee + Creation Fee).

##### Returns

`boolean`

##### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:84

#### validate(stringError)

> **validate**(`stringError`): `boolean`

##### Parameters

• **stringError**: `false`

##### Returns

`boolean`

##### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:85

#### validate(stringError)

> **validate**(`stringError`): `string`[]

##### Parameters

• **stringError**: `true`

##### Returns

`string`[]

##### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:86

***

### verifySignature()

> **verifySignature**(): `boolean`

Determines if the signature is valid

#### Returns

`boolean`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:132

***

### \_validateNotArray()

> `protected` `static` **\_validateNotArray**(`values`): `void`

#### Parameters

• **values**

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:174

***

### fromSerializedTx()

> `static` **fromSerializedTx**(`serialized`, `opts`?): `any`

#### Parameters

• **serialized**: `Uint8Array`

• **opts?**: [`TxOptions`](../interfaces/TxOptions.md)

#### Returns

`any`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:194

***

### fromTxData()

> `static` **fromTxData**(`txData`, `opts`?): `any`

#### Parameters

• **txData**: `any`

• **opts?**: [`TxOptions`](../interfaces/TxOptions.md)

#### Returns

`any`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:195
