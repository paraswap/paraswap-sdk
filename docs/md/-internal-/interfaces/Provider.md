[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Provider

# Interface: Provider

A **Provider** is the primary method to interact with the read-only
 content on Ethereum.

 It allows access to details about accounts, blocks and transactions
 and the ability to query event logs and simulate contract execution.

 Account data includes the [balance](getBalance),
 [transaction count](getTransactionCount), [code](getCode) and
 [state trie storage](getStorage).

 Simulating execution can be used to [call](call),
 [estimate gas](estimateGas) and
 [get transaction results](getTransactionResult).

 The [[broadcastTransaction]] is the only method which allows updating
 the blockchain, but it is usually accessed by a [[Signer]], since a
 private key must be used to sign the transaction before it can be
 broadcast.

## Extends

- [`ContractRunner`](ContractRunner.md).[`EventEmitterable`](EventEmitterable.md)\<[`ProviderEvent`](../type-aliases/ProviderEvent.md)\>.[`NameResolver`](NameResolver.md)

## Properties

### provider

> **provider**: [`Provider`](Provider.md)

The provider iteself.

 This is part of the necessary API for executing a contract, as
 it provides a common property on any [[ContractRunner]] that
 can be used to access the read-only portion of the runner.

#### Overrides

[`ContractRunner`](ContractRunner.md).[`provider`](ContractRunner.md#provider)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1083

***

### sendTransaction()?

> `optional` **sendTransaction**: (`tx`) => `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Required for state mutating calls

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Inherited from

[`ContractRunner`](ContractRunner.md).[`sendTransaction`](ContractRunner.md#sendtransaction)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:34

## Methods

### addListener()

> **addListener**(`event`, `listener`): `Promise`\<[`Provider`](Provider.md)\>

Alias for [[on]].

#### Parameters

• **event**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`Provider`](Provider.md)\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`addListener`](EventEmitterable.md#addlistener)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:46

***

### broadcastTransaction()

> **broadcastTransaction**(`signedTx`): `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Broadcasts the %%signedTx%% to the network, adding it to the
 memory pool of any node for which the transaction meets the
 rebroadcast requirements.

#### Parameters

• **signedTx**: `string`

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1149

***

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

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1143

***

### destroy()

> **destroy**(): `void`

Shutdown any resources this provider is using. No additional
 calls should be made to this provider after calling this.

#### Returns

`void`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1088

***

### emit()

> **emit**(`event`, ...`args`): `Promise`\<`boolean`\>

Triggers each listener for %%event%% with the %%args%%.

#### Parameters

• **event**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

• ...**args**: `any`[]

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`emit`](EventEmitterable.md#emit)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:25

***

### estimateGas()

> **estimateGas**(`tx`): `Promise`\<`bigint`\>

Required to estimate gas.

#### Parameters

• **tx**: [`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`bigint`\>

#### Overrides

`ContractRunner.estimateGas`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1138

***

### getBalance()

> **getBalance**(`address`, `blockTag`?): `Promise`\<`bigint`\>

Get the account balance (in wei) of %%address%%. If %%blockTag%%
 is specified and the node supports archive access for that
 %%blockTag%%, the balance is as of that [[BlockTag]].

#### Parameters

• **address**: [`AddressLike`](../type-aliases/AddressLike.md)

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`bigint`\>

#### Note

On nodes without archive access enabled, the %%blockTag%% may be
       **silently ignored** by the node, which may cause issues if relied on.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1109

***

### getBlock()

> **getBlock**(`blockHashOrBlockTag`, `prefetchTxs`?): `Promise`\<`null` \| [`Block`](../classes/Block.md)\>

Resolves to the block for %%blockHashOrBlockTag%%.

 If %%prefetchTxs%%, and the backend supports including transactions
 with block requests, all transactions will be included and the
 [[Block]] object will not need to make remote calls for getting
 transactions.

#### Parameters

• **blockHashOrBlockTag**: [`BlockTag`](../type-aliases/BlockTag.md)

• **prefetchTxs?**: `boolean`

#### Returns

`Promise`\<`null` \| [`Block`](../classes/Block.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1158

***

### getBlockNumber()

> **getBlockNumber**(): `Promise`\<`number`\>

Get the current block number.

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1092

***

### getCode()

> **getCode**(`address`, `blockTag`?): `Promise`\<`string`\>

Get the bytecode for %%address%%.

#### Parameters

• **address**: [`AddressLike`](../type-aliases/AddressLike.md)

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`string`\>

#### Note

On nodes without archive access enabled, the %%blockTag%% may be
       **silently ignored** by the node, which may cause issues if relied on.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1127

***

### getFeeData()

> **getFeeData**(): `Promise`\<[`FeeData`](../classes/FeeData.md)\>

Get the best guess at the recommended [[FeeData]].

#### Returns

`Promise`\<[`FeeData`](../classes/FeeData.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1100

***

### getLogs()

> **getLogs**(`filter`): `Promise`\<[`Log`](../classes/Log.md)[]\>

Resolves to the list of Logs that match %%filter%%

#### Parameters

• **filter**: [`Filter`](Filter.md) \| [`FilterByBlockHash`](FilterByBlockHash.md)

#### Returns

`Promise`\<[`Log`](../classes/Log.md)[]\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1184

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`Network`](../classes/Network.md)\>

Get the connected [[Network]].

#### Returns

`Promise`\<[`Network`](../classes/Network.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1096

***

### getStorage()

> **getStorage**(`address`, `position`, `blockTag`?): `Promise`\<`string`\>

Get the storage slot value for %%address%% at slot %%position%%.

#### Parameters

• **address**: [`AddressLike`](../type-aliases/AddressLike.md)

• **position**: [`BigNumberish`](../type-aliases/BigNumberish.md)

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`string`\>

#### Note

On nodes without archive access enabled, the %%blockTag%% may be
       **silently ignored** by the node, which may cause issues if relied on.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1134

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<`null` \| [`TransactionResponse`](../classes/TransactionResponse.md)\>

Resolves to the transaction for %%hash%%.

 If the transaction is unknown or on pruning nodes which
 discard old transactions this resolves to ``null``.

#### Parameters

• **hash**: `string`

#### Returns

`Promise`\<`null` \| [`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1165

***

### getTransactionCount()

> **getTransactionCount**(`address`, `blockTag`?): `Promise`\<`number`\>

Get the number of transactions ever sent for %%address%%, which
 is used as the ``nonce`` when sending a transaction. If
 %%blockTag%% is specified and the node supports archive access
 for that %%blockTag%%, the transaction count is as of that
 [[BlockTag]].

#### Parameters

• **address**: [`AddressLike`](../type-aliases/AddressLike.md)

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`number`\>

#### Note

On nodes without archive access enabled, the %%blockTag%% may be
       **silently ignored** by the node, which may cause issues if relied on.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1120

***

### getTransactionReceipt()

> **getTransactionReceipt**(`hash`): `Promise`\<`null` \| [`TransactionReceipt`](../classes/TransactionReceipt.md)\>

Resolves to the transaction receipt for %%hash%%, if mined.

 If the transaction has not been mined, is unknown or on
 pruning nodes which discard old transactions this resolves to
 ``null``.

#### Parameters

• **hash**: `string`

#### Returns

`Promise`\<`null` \| [`TransactionReceipt`](../classes/TransactionReceipt.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1173

***

### getTransactionResult()

> **getTransactionResult**(`hash`): `Promise`\<`null` \| `string`\>

Resolves to the result returned by the executions of %%hash%%.

 This is only supported on nodes with archive access and with
 the necessary debug APIs enabled.

#### Parameters

• **hash**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1180

***

### listenerCount()

> **listenerCount**(`event`?): `Promise`\<`number`\>

Resolves to the number of listeners for %%event%%.

#### Parameters

• **event?**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`listenerCount`](EventEmitterable.md#listenercount)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:29

***

### listeners()

> **listeners**(`event`?): `Promise`\<[`Listener`](../type-aliases/Listener.md)[]\>

Resolves to the listeners for %%event%%.

#### Parameters

• **event?**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

#### Returns

`Promise`\<[`Listener`](../type-aliases/Listener.md)[]\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`listeners`](EventEmitterable.md#listeners)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:33

***

### lookupAddress()

> **lookupAddress**(`address`): `Promise`\<`null` \| `string`\>

Resolves to the ENS name associated for the %%address%% or
 ``null`` if the //primary name// is not configured.

 Users must perform additional steps to configure a //primary name//,
 which is not currently common.

#### Parameters

• **address**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1197

***

### off()

> **off**(`event`, `listener`?): `Promise`\<[`Provider`](Provider.md)\>

Unregister the %%listener%% for %%event%%. If %%listener%%
 is unspecified, all listeners are unregistered.

#### Parameters

• **event**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

• **listener?**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`Provider`](Provider.md)\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`off`](EventEmitterable.md#off)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:38

***

### on()

> **on**(`event`, `listener`): `Promise`\<[`Provider`](Provider.md)\>

Registers a %%listener%% that is called whenever the
 %%event%% occurs until unregistered.

#### Parameters

• **event**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`Provider`](Provider.md)\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`on`](EventEmitterable.md#on)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:16

***

### once()

> **once**(`event`, `listener`): `Promise`\<[`Provider`](Provider.md)\>

Registers a %%listener%% that is called the next time
 %%event%% occurs.

#### Parameters

• **event**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`Provider`](Provider.md)\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`once`](EventEmitterable.md#once)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:21

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `Promise`\<[`Provider`](Provider.md)\>

Unregister all listeners for %%event%%.

#### Parameters

• **event?**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

#### Returns

`Promise`\<[`Provider`](Provider.md)\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`removeAllListeners`](EventEmitterable.md#removealllisteners)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:42

***

### removeListener()

> **removeListener**(`event`, `listener`): `Promise`\<[`Provider`](Provider.md)\>

Alias for [[off]].

#### Parameters

• **event**: [`ProviderEvent`](../type-aliases/ProviderEvent.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`Provider`](Provider.md)\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`removeListener`](EventEmitterable.md#removelistener)

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:50

***

### resolveName()

> **resolveName**(`ensName`): `Promise`\<`null` \| `string`\>

Required to support ENS names

#### Parameters

• **ensName**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Overrides

[`NameResolver`](NameResolver.md).[`resolveName`](NameResolver.md#resolvename)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1189

***

### waitForBlock()

> **waitForBlock**(`blockTag`?): `Promise`\<[`Block`](../classes/Block.md)\>

Resolves to the block at %%blockTag%% once it has been mined.

 This can be useful for waiting some number of blocks by using
 the ``currentBlockNumber + N``.

#### Parameters

• **blockTag?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<[`Block`](../classes/Block.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1209

***

### waitForTransaction()

> **waitForTransaction**(`hash`, `confirms`?, `timeout`?): `Promise`\<`null` \| [`TransactionReceipt`](../classes/TransactionReceipt.md)\>

Waits until the transaction %%hash%% is mined and has %%confirms%%
 confirmations.

#### Parameters

• **hash**: `string`

• **confirms?**: `number`

• **timeout?**: `number`

#### Returns

`Promise`\<`null` \| [`TransactionReceipt`](../classes/TransactionReceipt.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1202
