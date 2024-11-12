[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseContract

# Class: BaseContract

An interface for objects which have an address, and can
 resolve it asyncronously.

 This allows objects such as [[Signer]] or [[Contract]] to
 be used most places an address can be, for example getting
 the [balance](Provider-getBalance).

## Implements

- [`Addressable`](../interfaces/Addressable.md)
- [`EventEmitterable`](../interfaces/EventEmitterable.md)\<[`ContractEventName`](../type-aliases/ContractEventName.md)\>

## Constructors

### new BaseContract()

> **new BaseContract**(`target`, `abi`, `runner`?, `_deployTx`?): [`BaseContract`](BaseContract.md)

Creates a new contract connected to %%target%% with the %%abi%% and
 optionally connected to a %%runner%% to perform operations on behalf
 of.

#### Parameters

• **target**: `string` \| [`Addressable`](../interfaces/Addressable.md)

• **abi**: [`Interface`](Interface.md) \| [`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

• **runner?**: `null` \| [`ContractRunner`](../interfaces/ContractRunner.md)

• **\_deployTx?**: `null` \| [`TransactionResponse`](TransactionResponse.md)

#### Returns

[`BaseContract`](BaseContract.md)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:56

## Properties

### \[internal\]

> `readonly` **\[internal\]**: `any`

@_ignore:

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:46

***

### fallback

> `readonly` **fallback**: `null` \| [`WrappedFallback`](../interfaces/WrappedFallback.md)

The fallback or receive function if any.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:50

***

### filters

> `readonly` **filters**: [`Record`](../type-aliases/Record.md)\<`string`, [`ContractEvent`](../interfaces/ContractEvent.md)\<`any`[]\>\>

All the Events available on this contract.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:42

***

### interface

> `readonly` **interface**: [`Interface`](Interface.md)

The contract Interface.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:30

***

### runner

> `readonly` **runner**: `null` \| [`ContractRunner`](../interfaces/ContractRunner.md)

The connected runner. This is generally a [[Provider]] or a
 [[Signer]], which dictates what operations are supported.

 For example, a **Contract** connected to a [[Provider]] may
 only execute read-only operations.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:38

***

### target

> `readonly` **target**: `string` \| [`Addressable`](../interfaces/Addressable.md)

The target to connect to.

 This can be an address, ENS name or any [[Addressable]], such as
 another contract. To get the resovled address, use the ``getAddress``
 method.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:26

## Methods

### addListener()

> **addListener**(`event`, `listener`): `Promise`\<[`BaseContract`](BaseContract.md)\>

Alias for [on].

#### Parameters

• **event**: [`ContractEventName`](../type-aliases/ContractEventName.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`BaseContract`](BaseContract.md)\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`addListener`](../interfaces/EventEmitterable.md#addlistener)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:147

***

### attach()

> **attach**(`target`): [`BaseContract`](BaseContract.md)

Return a new Contract instance with the same ABI and runner, but
 a different %%target%%.

#### Parameters

• **target**: `string` \| [`Addressable`](../interfaces/Addressable.md)

#### Returns

[`BaseContract`](BaseContract.md)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:66

***

### connect()

> **connect**(`runner`): [`BaseContract`](BaseContract.md)

Return a new Contract instance with the same target and ABI, but
 a different %%runner%%.

#### Parameters

• **runner**: `null` \| [`ContractRunner`](../interfaces/ContractRunner.md)

#### Returns

[`BaseContract`](BaseContract.md)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:61

***

### deploymentTransaction()

> **deploymentTransaction**(): `null` \| [`ContractTransactionResponse`](ContractTransactionResponse.md)

Return the transaction used to deploy this contract.

 This is only available if this instance was returned from a
 [[ContractFactory]].

#### Returns

`null` \| [`ContractTransactionResponse`](ContractTransactionResponse.md)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:86

***

### emit()

> **emit**(`event`, ...`args`): `Promise`\<`boolean`\>

Emit an %%event%% calling all listeners with %%args%%.

 Resolves to ``true`` if any listeners were called.

#### Parameters

• **event**: [`ContractEventName`](../type-aliases/ContractEventName.md)

• ...**args**: `any`[]

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`emit`](../interfaces/EventEmitterable.md#emit)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:123

***

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Return the resolved address of this Contract.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Addressable`](../interfaces/Addressable.md).[`getAddress`](../interfaces/Addressable.md#getaddress)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:70

***

### getDeployedCode()

> **getDeployedCode**(): `Promise`\<`null` \| `string`\>

Return the deployed bytecode or null if no bytecode is found.

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:74

***

### getEvent()

> **getEvent**(`key`): [`ContractEvent`](../interfaces/ContractEvent.md)\<`any`[]\>

Return the event for a given name. This is useful when a contract
 event name conflicts with a JavaScript name such as ``prototype`` or
 when using a Contract programatically.

#### Parameters

• **key**: `string` \| [`EventFragment`](EventFragment.md)

#### Returns

[`ContractEvent`](../interfaces/ContractEvent.md)\<`any`[]\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:98

***

### getFunction()

> **getFunction**\<`T`\>(`key`): `T`

Return the function for a given name. This is useful when a contract
 method name conflicts with a JavaScript name such as ``prototype`` or
 when using a Contract programatically.

#### Type Parameters

• **T** *extends* [`ContractMethod`](../interfaces/ContractMethod.md)\<`any`[], `any`, `any`\> = [`ContractMethod`](../interfaces/ContractMethod.md)\<`any`[], `any`, `any`\>

#### Parameters

• **key**: `string` \| [`FunctionFragment`](FunctionFragment.md)

#### Returns

`T`

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:92

***

### listenerCount()

> **listenerCount**(`event`?): `Promise`\<`number`\>

Resolves to the number of listeners of %%event%% or the total number
 of listeners if unspecified.

#### Parameters

• **event?**: [`ContractEventName`](../type-aliases/ContractEventName.md)

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`listenerCount`](../interfaces/EventEmitterable.md#listenercount)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:128

***

### listeners()

> **listeners**(`event`?): `Promise`\<[`Listener`](../type-aliases/Listener.md)[]\>

Resolves to the listeners subscribed to %%event%% or all listeners
 if unspecified.

#### Parameters

• **event?**: [`ContractEventName`](../type-aliases/ContractEventName.md)

#### Returns

`Promise`\<[`Listener`](../type-aliases/Listener.md)[]\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`listeners`](../interfaces/EventEmitterable.md#listeners)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:133

***

### off()

> **off**(`event`, `listener`?): `Promise`\<[`BaseContract`](BaseContract.md)\>

Remove the %%listener%% from the listeners for %%event%% or remove
 all listeners if unspecified.

#### Parameters

• **event**: [`ContractEventName`](../type-aliases/ContractEventName.md)

• **listener?**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`BaseContract`](BaseContract.md)\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`off`](../interfaces/EventEmitterable.md#off)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:138

***

### on()

> **on**(`event`, `listener`): `Promise`\<[`BaseContract`](BaseContract.md)\>

Add an event %%listener%% for the %%event%%.

#### Parameters

• **event**: [`ContractEventName`](../type-aliases/ContractEventName.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`BaseContract`](BaseContract.md)\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`on`](../interfaces/EventEmitterable.md#on)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:112

***

### once()

> **once**(`event`, `listener`): `Promise`\<[`BaseContract`](BaseContract.md)\>

Add an event %%listener%% for the %%event%%, but remove the listener
 after it is fired once.

#### Parameters

• **event**: [`ContractEventName`](../type-aliases/ContractEventName.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`BaseContract`](BaseContract.md)\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`once`](../interfaces/EventEmitterable.md#once)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:117

***

### queryFilter()

> **queryFilter**(`event`, `fromBlock`?, `toBlock`?): `Promise`\<([`Log`](Log.md) \| [`EventLog`](EventLog.md))[]\>

Provide historic access to event data for %%event%% in the range
 %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
 inclusive.

#### Parameters

• **event**: [`ContractEventName`](../type-aliases/ContractEventName.md)

• **fromBlock?**: [`BlockTag`](../type-aliases/BlockTag.md)

• **toBlock?**: [`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<([`Log`](Log.md) \| [`EventLog`](EventLog.md))[]\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:108

***

### queryTransaction()

> **queryTransaction**(`hash`): `Promise`\<[`EventLog`](EventLog.md)[]\>

@_ignore:

#### Parameters

• **hash**: `string`

#### Returns

`Promise`\<[`EventLog`](EventLog.md)[]\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:102

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `Promise`\<[`BaseContract`](BaseContract.md)\>

Remove all the listeners for %%event%% or remove all listeners if
 unspecified.

#### Parameters

• **event?**: [`ContractEventName`](../type-aliases/ContractEventName.md)

#### Returns

`Promise`\<[`BaseContract`](BaseContract.md)\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`removeAllListeners`](../interfaces/EventEmitterable.md#removealllisteners)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:143

***

### removeListener()

> **removeListener**(`event`, `listener`): `Promise`\<[`BaseContract`](BaseContract.md)\>

Alias for [off].

#### Parameters

• **event**: [`ContractEventName`](../type-aliases/ContractEventName.md)

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`BaseContract`](BaseContract.md)\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`removeListener`](../interfaces/EventEmitterable.md#removelistener)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:151

***

### waitForDeployment()

> **waitForDeployment**(): `Promise`\<[`BaseContract`](BaseContract.md)\>

Resolve to this Contract once the bytecode has been deployed, or
 resolve immediately if already deployed.

#### Returns

`Promise`\<[`BaseContract`](BaseContract.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:79

***

### buildClass()

> `static` **buildClass**\<`T`\>(`abi`): (`target`, `runner`?) => [`BaseContract`](BaseContract.md) & [`Omit`](../type-aliases/Omit.md)\<`T`, keyof [`BaseContract`](BaseContract.md)\>

Create a new Class for the %%abi%%.

#### Type Parameters

• **T** = [`ContractInterface`](../interfaces/ContractInterface.md)

#### Parameters

• **abi**: [`Interface`](Interface.md) \| [`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

#### Returns

`Function`

##### Parameters

• **target**: `string`

• **runner?**: `null` \| [`ContractRunner`](../interfaces/ContractRunner.md)

##### Returns

[`BaseContract`](BaseContract.md) & [`Omit`](../type-aliases/Omit.md)\<`T`, keyof [`BaseContract`](BaseContract.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:155

***

### from()

> `static` **from**\<`T`\>(`target`, `abi`, `runner`?): [`BaseContract`](BaseContract.md) & [`Omit`](../type-aliases/Omit.md)\<`T`, keyof [`BaseContract`](BaseContract.md)\>

Create a new BaseContract with a specified Interface.

#### Type Parameters

• **T** = [`ContractInterface`](../interfaces/ContractInterface.md)

#### Parameters

• **target**: `string`

• **abi**: [`Interface`](Interface.md) \| [`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

• **runner?**: `null` \| [`ContractRunner`](../interfaces/ContractRunner.md)

#### Returns

[`BaseContract`](BaseContract.md) & [`Omit`](../type-aliases/Omit.md)\<`T`, keyof [`BaseContract`](BaseContract.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/contract/contract.d.ts:159
