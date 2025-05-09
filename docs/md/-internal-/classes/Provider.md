[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Provider

# Class: `abstract` Provider

## Extended by

- [`BaseProvider`](BaseProvider.md)

## Implements

- [`OnceBlockable`](../interfaces/OnceBlockable.md)

## Constructors

### new Provider()

> **new Provider**(): [`Provider`](Provider.md)

#### Returns

[`Provider`](Provider.md)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:153

## Properties

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

## Methods

### addListener()

> **addListener**(`eventName`, `listener`): [`Provider`](Provider.md)

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

***

### call()

> `abstract` **call**(`transaction`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:133

***

### emit()

> `abstract` **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• ...**args**: `any`[]

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:144

***

### estimateGas()

> `abstract` **estimateGas**(`transaction`): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:134

***

### getBalance()

> `abstract` **getBalance**(`addressOrName`, `blockTag`?): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:128

***

### getBlock()

> `abstract` **getBlock**(`blockHashOrBlockTag`): `Promise`\<[`Block`](../interfaces/Block.md)\>

#### Parameters

• **blockHashOrBlockTag**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`Block`](../interfaces/Block.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:135

***

### getBlockNumber()

> `abstract` **getBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:125

***

### getBlockWithTransactions()

> `abstract` **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`\<[`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

#### Parameters

• **blockHashOrBlockTag**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:136

***

### getCode()

> `abstract` **getCode**(`addressOrName`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:130

***

### getFeeData()

> **getFeeData**(): `Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

#### Returns

`Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

***

### getGasPrice()

> `abstract` **getGasPrice**(): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:126

***

### getLogs()

> `abstract` **getLogs**(`filter`): `Promise`\<[`Log`](../interfaces/Log.md)[]\>

#### Parameters

• **filter**: [`Filter`](../interfaces/Filter.md)

#### Returns

`Promise`\<[`Log`](../interfaces/Log.md)[]\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:139

***

### getNetwork()

> `abstract` **getNetwork**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:124

***

### getStorageAt()

> `abstract` **getStorageAt**(`addressOrName`, `position`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **position**: [`BigNumberish`](../type-aliases/BigNumberish.md) \| `Promise`\<[`BigNumberish`](../type-aliases/BigNumberish.md)\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:131

***

### getTransaction()

> `abstract` **getTransaction**(`transactionHash`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Parameters

• **transactionHash**: `string`

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:137

***

### getTransactionCount()

> `abstract` **getTransactionCount**(`addressOrName`, `blockTag`?): `Promise`\<`number`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:129

***

### getTransactionReceipt()

> `abstract` **getTransactionReceipt**(`transactionHash`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Parameters

• **transactionHash**: `string`

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:138

***

### listenerCount()

> `abstract` **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: [`EventType`](../type-aliases/EventType.md)

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:145

***

### listeners()

> `abstract` **listeners**(`eventName`?): [`Listener`](../type-aliases/Listener.md)[]

#### Parameters

• **eventName?**: [`EventType`](../type-aliases/EventType.md)

#### Returns

[`Listener`](../type-aliases/Listener.md)[]

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:146

***

### lookupAddress()

> `abstract` **lookupAddress**(`address`): `Promise`\<`null` \| `string`\>

#### Parameters

• **address**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:141

***

### off()

> `abstract` **off**(`eventName`, `listener`?): [`Provider`](Provider.md)

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener?**: [`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:147

***

### on()

> `abstract` **on**(`eventName`, `listener`): [`Provider`](Provider.md)

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:142

***

### once()

> `abstract` **once**(`eventName`, `listener`): [`Provider`](Provider.md)

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Implementation of

[`OnceBlockable`](../interfaces/OnceBlockable.md).[`once`](../interfaces/OnceBlockable.md#once)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:143

***

### removeAllListeners()

> `abstract` **removeAllListeners**(`eventName`?): [`Provider`](Provider.md)

#### Parameters

• **eventName?**: [`EventType`](../type-aliases/EventType.md)

#### Returns

[`Provider`](Provider.md)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:148

***

### removeListener()

> **removeListener**(`eventName`, `listener`): [`Provider`](Provider.md)

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

***

### resolveName()

> `abstract` **resolveName**(`name`): `Promise`\<`null` \| `string`\>

#### Parameters

• **name**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:140

***

### sendTransaction()

> `abstract` **sendTransaction**(`signedTransaction`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Parameters

• **signedTransaction**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:132

***

### waitForTransaction()

> `abstract` **waitForTransaction**(`transactionHash`, `confirmations`?, `timeout`?): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Parameters

• **transactionHash**: `string`

• **confirmations?**: `number`

• **timeout?**: `number`

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:151

***

### isProvider()

> `static` **isProvider**(`value`): `value is Provider`

#### Parameters

• **value**: `any`

#### Returns

`value is Provider`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
