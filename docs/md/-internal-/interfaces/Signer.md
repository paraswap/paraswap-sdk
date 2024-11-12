[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Signer

# Interface: Signer

A Signer represents an account on the Ethereum Blockchain, and is most often
 backed by a private key represented by a mnemonic or residing on a Hardware Wallet.

 The API remains abstract though, so that it can deal with more advanced exotic
 Signing entities, such as Smart Contract Wallets or Virtual Wallets (where the
 private key may not be known).

## Extends

- [`Addressable`](Addressable.md).[`ContractRunner`](ContractRunner.md).[`NameResolver`](NameResolver.md)

## Properties

### provider

> **provider**: `null` \| [`Provider`](Provider.md)

The [[Provider]] attached to this Signer (if any).

#### Overrides

[`ContractRunner`](ContractRunner.md).[`provider`](ContractRunner.md#provider)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:18

## Methods

### call()

> **call**(`tx`): `Promise`\<`string`\>

Required for pure, view or static calls to contracts.

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`string`\>

#### Overrides

`ContractRunner.call`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:86

***

### connect()

> **connect**(`provider`): [`Signer`](Signer.md)

Returns a new instance of this Signer connected to //provider// or detached
 from any Provider if null.

#### Parameters

• **provider**: `null` \| [`Provider`](Provider.md)

#### Returns

[`Signer`](Signer.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:23

***

### estimateGas()

> **estimateGas**(`tx`): `Promise`\<`bigint`\>

Required to estimate gas.

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`bigint`\>

#### Throws

UNPREDICTABLE_GAS_LIMIT A transaction that is believed by the node to likely
         fail will throw an error during gas estimation. This could indicate that it
         will actually fail or that the circumstances are simply too complex for the
         node to take into account. In these cases, a manually determined ``gasLimit``
         will need to be made.

#### Overrides

`ContractRunner.estimateGas`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:76

***

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Get the address of the Signer.

#### Returns

`Promise`\<`string`\>

#### Overrides

[`Addressable`](Addressable.md).[`getAddress`](Addressable.md#getaddress)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:27

***

### getNonce()

> **getNonce**(`blockTag`?): `Promise`\<`number`\>

Gets the next nonce required for this Signer to send a transaction.

#### Parameters

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

The blocktag to base the transaction count on, keep in mind
        many nodes do not honour this value and silently ignore it [default: ``"latest"``]

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:34

***

### populateCall()

> **populateCall**(`tx`): `Promise`\<[`TransactionLike`](TransactionLike.md)\<`string`\>\>

Prepares a [TransactionRequest](TransactionRequest.md) for calling:
 - resolves ``to`` and ``from`` addresses
 - if ``from`` is specified , check that it matches this Signer

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

The call to prepare

#### Returns

`Promise`\<[`TransactionLike`](TransactionLike.md)\<`string`\>\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:42

***

### populateTransaction()

> **populateTransaction**(`tx`): `Promise`\<[`TransactionLike`](TransactionLike.md)\<`string`\>\>

Prepares a [TransactionRequest](TransactionRequest.md) for sending to the network by
 populating any missing properties:
 - resolves ``to`` and ``from`` addresses
 - if ``from`` is specified , check that it matches this Signer
 - populates ``nonce`` via ``signer.getNonce("pending")``
 - populates ``gasLimit`` via ``signer.estimateGas(tx)``
 - populates ``chainId`` via ``signer.provider.getNetwork()``
 - populates ``type`` and relevant fee data for that type (``gasPrice``
   for legacy transactions, ``maxFeePerGas`` for EIP-1559, etc)

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

The call to prepare

#### Returns

`Promise`\<[`TransactionLike`](TransactionLike.md)\<`string`\>\>

#### Note

Some Signer implementations may skip populating properties that
       are populated downstream; for example JsonRpcSigner defers to the
       node to populate the nonce and fee data.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:60

***

### resolveName()

> **resolveName**(`name`): `Promise`\<`null` \| `string`\>

Required to support ENS names

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Overrides

[`NameResolver`](NameResolver.md).[`resolveName`](NameResolver.md#resolvename)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:90

***

### sendTransaction()

> **sendTransaction**(`tx`): `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Required for state mutating calls

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Overrides

`ContractRunner.sendTransaction`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:101

***

### signMessage()

> **signMessage**(`message`): `Promise`\<`string`\>

Signs an [[link-eip-191]] prefixed personal message.

 If the %%message%% is a string, it is signed as UTF-8 encoded bytes. It is **not**
 interpretted as a [[BytesLike]]; so the string ``"0x1234"`` is signed as six
 characters, **not** two bytes.

 To sign that example as two bytes, the Uint8Array should be used
 (i.e. ``new Uint8Array([ 0x12, 0x34 ])``).

#### Parameters

• **message**: `string` \| `Uint8Array`

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:112

***

### signTransaction()

> **signTransaction**(`tx`): `Promise`\<`string`\>

Signs %%tx%%, returning the fully signed transaction. This does not
 populate any additional properties within the transaction.

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:95

***

### signTypedData()

> **signTypedData**(`domain`, `types`, `value`): `Promise`\<`string`\>

Signs the [[link-eip-712]] typed data.

#### Parameters

• **domain**: [`TypedDataDomain`](TypedDataDomain.md)

• **types**: [`Record`](../type-aliases/Record.md)\<`string`, [`TypedDataField`](TypedDataField.md)[]\>

• **value**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/signer.d.ts:116
