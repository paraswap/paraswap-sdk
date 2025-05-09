[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseProvider

# Class: BaseProvider

## Extends

- [`Provider`](Provider.md)

## Implements

- [`EnsProvider`](../interfaces/EnsProvider.md)

## Constructors

### new BaseProvider()

> **new BaseProvider**(`network`): [`BaseProvider`](BaseProvider.md)

ready

 A Promise<Network> that resolves only once the provider is ready.

 Sub-classes that call the super with a network without a chainId
 MUST set this. Standard named networks have a known chainId.

#### Parameters

• **network**: `Promise`\<[`Network`](../type-aliases/Network.md)\> \| [`Networkish`](../type-aliases/Networkish.md)

#### Returns

[`BaseProvider`](BaseProvider.md)

#### Overrides

[`Provider`](Provider.md).[`constructor`](Provider.md#constructors)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:89

## Properties

### \_bootstrapPoll

> **\_bootstrapPoll**: [`Timer`](../interfaces/Timer.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:66

***

### \_emitted

> **\_emitted**: `object`

#### Index Signature

 \[`eventName`: `string`\]: `number` \| `"pending"`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:61

***

### \_events

> **\_events**: [`Event`](Event.md)[]

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:59

***

### \_fastBlockNumber

> **\_fastBlockNumber**: `number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:69

***

### \_fastBlockNumberPromise

> **\_fastBlockNumberPromise**: `Promise`\<`number`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:70

***

### \_fastQueryDate

> **\_fastQueryDate**: `number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:71

***

### \_internalBlockNumber

> **\_internalBlockNumber**: `Promise`\<`object`\>

#### Type declaration

##### blockNumber

> **blockNumber**: `number`

##### reqTime

> **reqTime**: `number`

##### respTime

> **respTime**: `number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:73

***

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

#### Inherited from

[`Provider`](Provider.md).[`_isProvider`](Provider.md#_isprovider)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

***

### \_lastBlockNumber

> **\_lastBlockNumber**: `number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:67

***

### \_maxFilterBlockRange

> **\_maxFilterBlockRange**: `number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:68

***

### \_maxInternalBlockNumber

> **\_maxInternalBlockNumber**: `number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:72

***

### \_network

> **\_network**: [`Network`](../type-aliases/Network.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:58

***

### \_networkPromise

> **\_networkPromise**: `Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:57

***

### \_poller

> **\_poller**: [`Timer`](../interfaces/Timer.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:65

***

### \_pollingInterval

> **\_pollingInterval**: `number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:64

***

### anyNetwork

> `readonly` **anyNetwork**: `boolean`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:78

***

### disableCcipRead

> **disableCcipRead**: `boolean`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:79

***

### formatter

> **formatter**: [`Formatter`](Formatter.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:60

## Accessors

### blockNumber

#### Get Signature

> **get** **blockNumber**(): `number`

##### Returns

`number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:101

***

### network

#### Get Signature

> **get** **network**(): [`Network`](../type-aliases/Network.md)

##### Returns

[`Network`](../type-aliases/Network.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:98

***

### polling

#### Get Signature

> **get** **polling**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **polling**(`value`): `void`

##### Parameters

• **value**: `boolean`

##### Returns

`void`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:102

***

### pollingInterval

#### Get Signature

> **get** **pollingInterval**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **pollingInterval**(`value`): `void`

##### Parameters

• **value**: `number`

##### Returns

`void`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:104

***

### ready

#### Get Signature

> **get** **ready**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

##### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:91

## Methods

### \_addEventListener()

> **\_addEventListener**(`eventName`, `listener`, `once`): `this`

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

• **once**: `boolean`

#### Returns

`this`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:147

***

### \_call()

> **\_call**(`transaction`, `blockTag`, `attempt`): `Promise`\<`string`\>

#### Parameters

• **transaction**: [`TransactionRequest`](../type-aliases/TransactionRequest.md)

• **blockTag**: [`BlockTag`](../type-aliases/BlockTag.md)

• **attempt**: `number`

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:127

***

### \_getAddress()

> **\_getAddress**(`addressOrName`): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:130

***

### \_getBlock()

> **\_getBlock**(`blockHashOrBlockTag`, `includeTransactions`?): `Promise`\<[`Block`](../interfaces/Block.md) \| [`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

#### Parameters

• **blockHashOrBlockTag**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

• **includeTransactions?**: `boolean`

#### Returns

`Promise`\<[`Block`](../interfaces/Block.md) \| [`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:131

***

### \_getBlockTag()

> **\_getBlockTag**(`blockTag`): `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Parameters

• **blockTag**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:138

***

### \_getFastBlockNumber()

> **\_getFastBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:106

***

### \_getFilter()

> **\_getFilter**(`filter`): `Promise`\<[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md)\>

#### Parameters

• **filter**: [`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md) \| `Promise`\<[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md)\>

#### Returns

`Promise`\<[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:126

***

### \_getInternalBlockNumber()

> **\_getInternalBlockNumber**(`maxAge`): `Promise`\<`number`\>

#### Parameters

• **maxAge**: `number`

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:95

***

### \_getResolver()

> **\_getResolver**(`name`, `operation`?): `Promise`\<`string`\>

#### Parameters

• **name**: `string`

• **operation?**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:140

***

### \_getTransactionRequest()

> **\_getTransactionRequest**(`transaction`): `Promise`\<[`Transaction`](../interfaces/Transaction.md)\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`Transaction`](../interfaces/Transaction.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:125

***

### \_ready()

> **\_ready**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:90

***

### \_setFastBlockNumber()

> **\_setFastBlockNumber**(`blockNumber`): `void`

#### Parameters

• **blockNumber**: `number`

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:107

***

### \_startEvent()

> **\_startEvent**(`event`): `void`

#### Parameters

• **event**: [`Event`](Event.md)

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:145

***

### \_stopEvent()

> **\_stopEvent**(`event`): `void`

#### Parameters

• **event**: [`Event`](Event.md)

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:146

***

### \_waitForTransaction()

> **\_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Parameters

• **transactionHash**: `string`

• **confirmations**: `number`

• **timeout**: `number`

• **replaceable**

• **replaceable.data**: `string`

• **replaceable.from**: `string`

• **replaceable.nonce**: `number`

• **replaceable.startBlock**: `number`

• **replaceable.to**: `string`

• **replaceable.value**: [`BigNumber`](BigNumber.md)

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:109

***

### \_wrapTransaction()

> **\_wrapTransaction**(`tx`, `hash`?, `startBlock`?): [`TransactionResponse`](../interfaces/TransactionResponse.md)

#### Parameters

• **tx**: [`Transaction`](../interfaces/Transaction.md)

• **hash?**: `string`

• **startBlock?**: `number`

#### Returns

[`TransactionResponse`](../interfaces/TransactionResponse.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:123

***

### addListener()

> **addListener**(`eventName`, `listener`): [`Provider`](Provider.md)

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Inherited from

[`Provider`](Provider.md).[`addListener`](Provider.md#addlistener)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

***

### call()

> **call**(`transaction`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[`Provider`](Provider.md).[`call`](Provider.md#call)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:128

***

### ccipReadFetch()

> **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`\<`null` \| `string`\>

#### Parameters

• **tx**: [`Transaction`](../interfaces/Transaction.md)

• **calldata**: `string`

• **urls**: `string`[]

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:94

***

### detectNetwork()

> **detectNetwork**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:99

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• ...**args**: `any`[]

#### Returns

`boolean`

#### Overrides

[`Provider`](Provider.md).[`emit`](Provider.md#emit)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:150

***

### estimateGas()

> **estimateGas**(`transaction`): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Parameters

• **transaction**: [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Overrides

[`Provider`](Provider.md).[`estimateGas`](Provider.md#estimategas)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:129

***

### getAvatar()

> **getAvatar**(`nameOrAddress`): `Promise`\<`null` \| `string`\>

#### Parameters

• **nameOrAddress**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:143

***

### getBalance()

> **getBalance**(`addressOrName`, `blockTag`?): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Overrides

[`Provider`](Provider.md).[`getBalance`](Provider.md#getbalance)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:119

***

### getBlock()

> **getBlock**(`blockHashOrBlockTag`): `Promise`\<[`Block`](../interfaces/Block.md)\>

#### Parameters

• **blockHashOrBlockTag**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`Block`](../interfaces/Block.md)\>

#### Overrides

[`Provider`](Provider.md).[`getBlock`](Provider.md#getblock)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:132

***

### getBlockNumber()

> **getBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Overrides

[`Provider`](Provider.md).[`getBlockNumber`](Provider.md#getblocknumber)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:117

***

### getBlockWithTransactions()

> **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`\<[`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

#### Parameters

• **blockHashOrBlockTag**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

#### Overrides

[`Provider`](Provider.md).[`getBlockWithTransactions`](Provider.md#getblockwithtransactions)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:133

***

### getCode()

> **getCode**(`addressOrName`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[`Provider`](Provider.md).[`getCode`](Provider.md#getcode)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:121

***

### getEtherPrice()

> **getEtherPrice**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:137

***

### getFeeData()

> **getFeeData**(): `Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

#### Returns

`Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

#### Inherited from

[`Provider`](Provider.md).[`getFeeData`](Provider.md#getfeedata)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

***

### getGasPrice()

> **getGasPrice**(): `Promise`\<[`BigNumber`](BigNumber.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Overrides

[`Provider`](Provider.md).[`getGasPrice`](Provider.md#getgasprice)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:118

***

### getLogs()

> **getLogs**(`filter`): `Promise`\<[`Log`](../interfaces/Log.md)[]\>

#### Parameters

• **filter**: [`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md) \| `Promise`\<[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md)\>

#### Returns

`Promise`\<[`Log`](../interfaces/Log.md)[]\>

#### Overrides

[`Provider`](Provider.md).[`getLogs`](Provider.md#getlogs)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:136

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Overrides

[`Provider`](Provider.md).[`getNetwork`](Provider.md#getnetwork)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:100

***

### getResolver()

> **getResolver**(`name`): `Promise`\<`null` \| [`Resolver`](Resolver.md)\>

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`null` \| [`Resolver`](Resolver.md)\>

#### Implementation of

[`EnsProvider`](../interfaces/EnsProvider.md).[`getResolver`](../interfaces/EnsProvider.md#getresolver)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:139

***

### getStorageAt()

> **getStorageAt**(`addressOrName`, `position`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **position**: [`BigNumberish`](../type-aliases/BigNumberish.md) \| `Promise`\<[`BigNumberish`](../type-aliases/BigNumberish.md)\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[`Provider`](Provider.md).[`getStorageAt`](Provider.md#getstorageat)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:122

***

### getTransaction()

> **getTransaction**(`transactionHash`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Parameters

• **transactionHash**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Overrides

[`Provider`](Provider.md).[`getTransaction`](Provider.md#gettransaction)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:134

***

### getTransactionCount()

> **getTransactionCount**(`addressOrName`, `blockTag`?): `Promise`\<`number`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`number`\>

#### Overrides

[`Provider`](Provider.md).[`getTransactionCount`](Provider.md#gettransactioncount)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:120

***

### getTransactionReceipt()

> **getTransactionReceipt**(`transactionHash`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Parameters

• **transactionHash**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Overrides

[`Provider`](Provider.md).[`getTransactionReceipt`](Provider.md#gettransactionreceipt)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:135

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: [`EventType`](../type-aliases/EventType.md)

#### Returns

`number`

#### Overrides

[`Provider`](Provider.md).[`listenerCount`](Provider.md#listenercount)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:151

***

### listeners()

> **listeners**(`eventName`?): [`Listener`](../type-aliases/Listener.md)[]

#### Parameters

• **eventName?**: [`EventType`](../type-aliases/EventType.md)

#### Returns

[`Listener`](../type-aliases/Listener.md)[]

#### Overrides

[`Provider`](Provider.md).[`listeners`](Provider.md#listeners)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:152

***

### lookupAddress()

> **lookupAddress**(`address`): `Promise`\<`null` \| `string`\>

#### Parameters

• **address**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Implementation of

[`EnsProvider`](../interfaces/EnsProvider.md).[`lookupAddress`](../interfaces/EnsProvider.md#lookupaddress)

#### Overrides

[`Provider`](Provider.md).[`lookupAddress`](Provider.md#lookupaddress)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:142

***

### off()

> **off**(`eventName`, `listener`?): `this`

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener?**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Overrides

[`Provider`](Provider.md).[`off`](Provider.md#off)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:153

***

### on()

> **on**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Overrides

[`Provider`](Provider.md).[`on`](Provider.md#on)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:148

***

### once()

> **once**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Overrides

[`Provider`](Provider.md).[`once`](Provider.md#once)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:149

***

### perform()

> **perform**(`method`, `params`): `Promise`\<`any`\>

#### Parameters

• **method**: `string`

• **params**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:144

***

### poll()

> **poll**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:96

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `this`

#### Parameters

• **eventName?**: [`EventType`](../type-aliases/EventType.md)

#### Returns

`this`

#### Overrides

[`Provider`](Provider.md).[`removeAllListeners`](Provider.md#removealllisteners)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:154

***

### removeListener()

> **removeListener**(`eventName`, `listener`): [`Provider`](Provider.md)

#### Parameters

• **eventName**: [`EventType`](../type-aliases/EventType.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Inherited from

[`Provider`](Provider.md).[`removeListener`](Provider.md#removelistener)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

***

### resetEventsBlock()

> **resetEventsBlock**(`blockNumber`): `void`

#### Parameters

• **blockNumber**: `number`

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:97

***

### resolveName()

> **resolveName**(`name`): `Promise`\<`null` \| `string`\>

#### Parameters

• **name**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Implementation of

[`EnsProvider`](../interfaces/EnsProvider.md).[`resolveName`](../interfaces/EnsProvider.md#resolvename)

#### Overrides

[`Provider`](Provider.md).[`resolveName`](Provider.md#resolvename)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:141

***

### sendTransaction()

> **sendTransaction**(`signedTransaction`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Parameters

• **signedTransaction**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Overrides

[`Provider`](Provider.md).[`sendTransaction`](Provider.md#sendtransaction)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:124

***

### waitForTransaction()

> **waitForTransaction**(`transactionHash`, `confirmations`?, `timeout`?): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Parameters

• **transactionHash**: `string`

• **confirmations?**: `number`

• **timeout?**: `number`

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Overrides

[`Provider`](Provider.md).[`waitForTransaction`](Provider.md#waitfortransaction)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:108

***

### getFormatter()

> `static` **getFormatter**(): [`Formatter`](Formatter.md)

#### Returns

[`Formatter`](Formatter.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:92

***

### getNetwork()

> `static` **getNetwork**(`network`): [`Network`](../type-aliases/Network.md)

#### Parameters

• **network**: [`Networkish`](../type-aliases/Networkish.md)

#### Returns

[`Network`](../type-aliases/Network.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:93

***

### isProvider()

> `static` **isProvider**(`value`): `value is Provider`

#### Parameters

• **value**: `any`

#### Returns

`value is Provider`

#### Inherited from

[`Provider`](Provider.md).[`isProvider`](Provider.md#isprovider)

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
