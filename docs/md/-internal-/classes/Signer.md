[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Signer

# Class: `abstract` Signer

## Constructors

### new Signer()

> **new Signer**(): [`Signer`](Signer.md)

#### Returns

[`Signer`](Signer.md)

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:30

## Properties

### \_isSigner

> `readonly` **\_isSigner**: `boolean`

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

***

### provider?

> `readonly` `optional` **provider**: [`Provider`](Provider.md)

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:24

## Methods

### \_checkProvider()

> **\_checkProvider**(`operation`?): `void`

#### Parameters

• **operation?**: `string`

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

***

### call()

> **call**(`transaction`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:34

***

### checkTransaction()

> **checkTransaction**(`transaction`): [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

***

### connect()

> `abstract` **connect**(`provider`): [`Signer`](Signer.md)

#### Parameters

• **provider**: [`Provider`](Provider.md)

#### Returns

[`Signer`](Signer.md)

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:28

***

### estimateGas()

> **estimateGas**(`transaction`): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

***

### getAddress()

> `abstract` **getAddress**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:25

***

### getBalance()

> **getBalance**(`blockTag`?): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Parameters

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

***

### getChainId()

> **getChainId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

***

### getFeeData()

> **getFeeData**(): `Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

#### Returns

`Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

***

### getGasPrice()

> **getGasPrice**(): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:37

***

### getTransactionCount()

> **getTransactionCount**(`blockTag`?): `Promise`\<`number`\>

#### Parameters

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:32

***

### populateTransaction()

> **populateTransaction**(`transaction`): `Promise`\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:41

***

### resolveName()

> **resolveName**(`name`): `Promise`\<`string`\>

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:39

***

### sendTransaction()

> **sendTransaction**(`transaction`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:35

***

### signMessage()

> `abstract` **signMessage**(`message`): `Promise`\<`string`\>

#### Parameters

• **message**: `string` \| [`Bytes`](../type-aliases/Bytes.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:26

***

### signTransaction()

> `abstract` **signTransaction**(`transaction`): `Promise`\<`string`\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:27

***

### isSigner()

> `static` **isSigner**(`value`): `value is Signer`

#### Parameters

• **value**: `any`

#### Returns

`value is Signer`

#### Defined in

node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
