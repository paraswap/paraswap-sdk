[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Config

# Class: `abstract` Web3Config

## Extends

- [`Web3EventEmitter`](Web3EventEmitter.md)\<`object`\>

## Extended by

- [`Web3Context`](Web3Context.md)

## Implements

- [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

## Constructors

### new Web3Config()

> **new Web3Config**(`options`?): [`Web3Config`](Web3Config.md)

#### Parameters

• **options?**: [`Partial`](../type-aliases/Partial.md)\<[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)\>

#### Returns

[`Web3Config`](Web3Config.md)

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`constructor`](Web3EventEmitter.md#constructors)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:47

## Properties

### config

> **config**: [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:46

## Accessors

### blockHeaderTimeout

#### Get Signature

> **get** **blockHeaderTimeout**(): `number`

The blockHeaderTimeout is used over socket-based connections. This option defines the amount seconds it should wait for `'newBlockHeaders'` event before falling back to polling to fetch transaction receipt.
Default is `10` seconds.

##### Returns

`number`

#### Set Signature

> **set** **blockHeaderTimeout**(`val`): `void`

Will set the blockHeaderTimeout

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`blockHeaderTimeout`](../interfaces/Web3ConfigOptions.md#blockheadertimeout)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:169

***

### contractDataInputFill

#### Get Signature

> **get** **contractDataInputFill**(): `"data"` \| `"input"` \| `"both"`

The `contractDataInputFill` options property will allow you to set the hash of the method signature and encoded parameters to the property
either `data`, `input` or both within your contract.
This will affect the contracts send, call and estimateGas methods
Default is `data`.

##### Returns

`"data"` \| `"input"` \| `"both"`

#### Set Signature

> **set** **contractDataInputFill**(`val`): `void`

Will set the contractDataInputFill

##### Parameters

• **val**: `"data"` \| `"input"` \| `"both"`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`contractDataInputFill`](../interfaces/Web3ConfigOptions.md#contractdatainputfill)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:70

***

### customTransactionSchema

#### Get Signature

> **get** **customTransactionSchema**(): `undefined` \| [`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md)

##### Returns

`undefined` \| [`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md)

#### Set Signature

> **set** **customTransactionSchema**(`schema`): `void`

##### Parameters

• **schema**: `undefined` \| [`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md)

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`customTransactionSchema`](../interfaces/Web3ConfigOptions.md#customtransactionschema)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:255

***

### defaultAccount

#### Get Signature

> **get** **defaultAccount**(): `undefined` \| `string`

This default address is used as the default `from` property, if no `from` property is specified in for the following methods:
- web3.eth.sendTransaction()
- web3.eth.call()
- myContract.methods.myMethod().call()
- myContract.methods.myMethod().send()

##### Returns

`undefined` \| `string`

#### Set Signature

> **set** **defaultAccount**(`val`): `void`

Will set the default account.

##### Parameters

• **val**: `undefined` \| `string`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultAccount`](../interfaces/Web3ConfigOptions.md#defaultaccount)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:82

***

### defaultBlock

#### Get Signature

> **get** **defaultBlock**(): [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is `"latest"`.
- web3.eth.getBalance()
- web3.eth.getCode()
- web3.eth.getTransactionCount()
- web3.eth.getStorageAt()
- web3.eth.call()
- myContract.methods.myMethod().call()

##### Returns

[`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

#### Set Signature

> **set** **defaultBlock**(`val`): `void`

Will set the default block.

- A block number
- `"earliest"` - String: The genesis block
- `"latest"` - String: The latest block (current head of the blockchain)
- `"pending"` - String: The currently mined block (including pending transactions)
- `"finalized"` - String: (For POS networks) The finalized block is one which has been accepted as canonical by greater than 2/3 of validators
- `"safe"` - String: (For POS networks) The safe head block is one which under normal network conditions, is expected to be included in the canonical chain. Under normal network conditions the safe head and the actual tip of the chain will be equivalent (with safe head trailing only by a few seconds). Safe heads will be less likely to be reorged than the proof of work network's latest blocks.

##### Parameters

• **val**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultBlock`](../interfaces/Web3ConfigOptions.md#defaultblock)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:96

***

### defaultChain

#### Get Signature

> **get** **defaultChain**(): `string`

##### Returns

`string`

#### Set Signature

> **set** **defaultChain**(`val`): `void`

##### Parameters

• **val**: `string`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultChain`](../interfaces/Web3ConfigOptions.md#defaultchain)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:195

***

### defaultCommon

#### Get Signature

> **get** **defaultCommon**(): `undefined` \| [`Common`](../interfaces/Common.md)

Will get the default common property
The default common property does contain the following Common object:
- `customChain` - `Object`: The custom chain properties
	- `name` - `string`: (optional) The name of the chain
	- `networkId` - `number`: Network ID of the custom chain
	- `chainId` - `number`: Chain ID of the custom chain
- `baseChain` - `string`: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
- `hardfork` - `string`: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, or london
Default is `undefined`.

##### Returns

`undefined` \| [`Common`](../interfaces/Common.md)

#### Set Signature

> **set** **defaultCommon**(`val`): `void`

Will set the default common property

##### Parameters

• **val**: `undefined` \| [`Common`](../interfaces/Common.md)

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultCommon`](../interfaces/Web3ConfigOptions.md#defaultcommon)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:235

***

### defaultHardfork

#### Get Signature

> **get** **defaultHardfork**(): `string`

Will return the default hardfork. Default is `london`
The default hardfork property can be one of the following:
- `chainstart`
- `homestead`
- `dao`
- `tangerineWhistle`
- `spuriousDragon`
- `byzantium`
- `constantinople`
- `petersburg`
- `istanbul`
- `berlin`
- `london`
- 'arrowGlacier',
- 'tangerineWhistle',
- 'muirGlacier'

##### Returns

`string`

#### Set Signature

> **set** **defaultHardfork**(`val`): `void`

Will set the default hardfork.

##### Parameters

• **val**: `string`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultHardfork`](../interfaces/Web3ConfigOptions.md#defaulthardfork)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:216

***

### defaultMaxPriorityFeePerGas

#### Get Signature

> **get** **defaultMaxPriorityFeePerGas**(): [`Numbers`](../type-aliases/Numbers.md)

##### Returns

[`Numbers`](../type-aliases/Numbers.md)

#### Set Signature

> **set** **defaultMaxPriorityFeePerGas**(`val`): `void`

##### Parameters

• **val**: [`Numbers`](../type-aliases/Numbers.md)

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultMaxPriorityFeePerGas`](../interfaces/Web3ConfigOptions.md#defaultmaxpriorityfeepergas)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:249

***

### defaultNetworkId

#### Get Signature

> **get** **defaultNetworkId**(): `undefined` \| [`Numbers`](../type-aliases/Numbers.md)

##### Returns

`undefined` \| [`Numbers`](../type-aliases/Numbers.md)

#### Set Signature

> **set** **defaultNetworkId**(`val`): `void`

##### Parameters

• **val**: `undefined` \| [`Numbers`](../type-aliases/Numbers.md)

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultNetworkId`](../interfaces/Web3ConfigOptions.md#defaultnetworkid)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:193

***

### defaultReturnFormat

#### Get Signature

> **get** **defaultReturnFormat**(): [`DataFormat`](../type-aliases/DataFormat.md)

##### Returns

[`DataFormat`](../type-aliases/DataFormat.md)

#### Set Signature

> **set** **defaultReturnFormat**(`val`): `void`

##### Parameters

• **val**: [`DataFormat`](../type-aliases/DataFormat.md)

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultReturnFormat`](../interfaces/Web3ConfigOptions.md#defaultreturnformat)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:191

***

### defaultTransactionType

#### Get Signature

> **get** **defaultTransactionType**(): [`Numbers`](../type-aliases/Numbers.md)

##### Returns

[`Numbers`](../type-aliases/Numbers.md)

#### Set Signature

> **set** **defaultTransactionType**(`val`): `void`

##### Parameters

• **val**: [`Numbers`](../type-aliases/Numbers.md)

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultTransactionType`](../interfaces/Web3ConfigOptions.md#defaulttransactiontype)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:247

***

### enableExperimentalFeatures

#### Get Signature

> **get** **enableExperimentalFeatures**(): `object`

The enableExperimentalFeatures is used to enable trying new experimental features that are still not fully implemented or not fully tested or still have some related issues.
Default is `false` for every feature.

##### Returns

`object`

###### useRpcCallSpecification

> **useRpcCallSpecification**: `boolean`

###### useSubscriptionWhenCheckingBlockTimeout

> **useSubscriptionWhenCheckingBlockTimeout**: `boolean`

#### Set Signature

> **set** **enableExperimentalFeatures**(`val`): `void`

Will set the enableExperimentalFeatures

##### Parameters

• **val**

• **val.useRpcCallSpecification**: `boolean`

• **val.useSubscriptionWhenCheckingBlockTimeout**: `boolean`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`enableExperimentalFeatures`](../interfaces/Web3ConfigOptions.md#enableexperimentalfeatures)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:178

***

### handleRevert

#### Get Signature

> **get** **handleRevert**(): `boolean`

The `handleRevert` options property returns the revert reason string if enabled for the following methods:
- web3.eth.sendTransaction()
- web3.eth.call()
- myContract.methods.myMethod().call()
- myContract.methods.myMethod().send()
Default is `false`.

`Note`: At the moment `handleRevert` is only supported for `sendTransaction` and not for `sendSignedTransaction`

##### Returns

`boolean`

#### Set Signature

> **set** **handleRevert**(`val`): `void`

Will set the handleRevert

##### Parameters

• **val**: `boolean`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`handleRevert`](../interfaces/Web3ConfigOptions.md#handlerevert)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:59

***

### ignoreGasPricing

#### Get Signature

> **get** **ignoreGasPricing**(): `boolean`

Will get the ignoreGasPricing property. When true, the gasPrice, maxPriorityFeePerGas, and maxFeePerGas will not be autofilled in the transaction object.
 Useful when you want wallets to handle gas pricing.

##### Returns

`boolean`

#### Set Signature

> **set** **ignoreGasPricing**(`val`): `void`

##### Parameters

• **val**: `boolean`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`ignoreGasPricing`](../interfaces/Web3ConfigOptions.md#ignoregaspricing)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:245

***

### maxListenersWarningThreshold

#### Get Signature

> **get** **maxListenersWarningThreshold**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **maxListenersWarningThreshold**(`val`): `void`

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`maxListenersWarningThreshold`](../interfaces/Web3ConfigOptions.md#maxlistenerswarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:189

***

### transactionBlockTimeout

#### Get Signature

> **get** **transactionBlockTimeout**(): `number`

The `transactionBlockTimeout` is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
Default is `50`.

##### Returns

`number`

#### Set Signature

> **set** **transactionBlockTimeout**(`val`): `void`

Will set the transactionBlockTimeout.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionBlockTimeout`](../interfaces/Web3ConfigOptions.md#transactionblocktimeout)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:122

***

### transactionBuilder

#### Get Signature

> **get** **transactionBuilder**(): `undefined` \| [`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\>

##### Returns

`undefined` \| [`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\>

#### Set Signature

> **set** **transactionBuilder**(`val`): `void`

##### Parameters

• **val**: `undefined` \| [`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\>

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionBuilder`](../interfaces/Web3ConfigOptions.md#transactionbuilder)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:251

***

### transactionConfirmationBlocks

#### Get Signature

> **get** **transactionConfirmationBlocks**(): `number`

This defines the number of blocks it requires until a transaction is considered confirmed.
Default is `24`.

##### Returns

`number`

#### Set Signature

> **set** **transactionConfirmationBlocks**(`val`): `void`

Will set the transactionConfirmationBlocks.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionConfirmationBlocks`](../interfaces/Web3ConfigOptions.md#transactionconfirmationblocks)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:131

***

### transactionConfirmationPollingInterval

#### Get Signature

> **get** **transactionConfirmationPollingInterval**(): `undefined` \| `number`

##### Returns

`undefined` \| `number`

#### Set Signature

> **set** **transactionConfirmationPollingInterval**(`val`): `void`

##### Parameters

• **val**: `undefined` \| `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionConfirmationPollingInterval`](../interfaces/Web3ConfigOptions.md#transactionconfirmationpollinginterval)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:163

***

### transactionPollingInterval

#### Get Signature

> **get** **transactionPollingInterval**(): `number`

Used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
Default is `1000` ms.

##### Returns

`number`

#### Set Signature

> **set** **transactionPollingInterval**(`val`): `void`

Will set the transactionPollingInterval.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionPollingInterval`](../interfaces/Web3ConfigOptions.md#transactionpollinginterval)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:140

***

### transactionPollingTimeout

#### Get Signature

> **get** **transactionPollingTimeout**(): `number`

Used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
Default is `750` seconds (12.5 minutes).

##### Returns

`number`

#### Set Signature

> **set** **transactionPollingTimeout**(`val`): `void`

Will set the transactionPollingTimeout.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionPollingTimeout`](../interfaces/Web3ConfigOptions.md#transactionpollingtimeout)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:149

***

### transactionReceiptPollingInterval

#### Get Signature

> **get** **transactionReceiptPollingInterval**(): `undefined` \| `number`

The `transactionPollingInterval` is used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
Default is `undefined`

##### Returns

`undefined` \| `number`

#### Set Signature

> **set** **transactionReceiptPollingInterval**(`val`): `void`

Will set the transactionReceiptPollingInterval

##### Parameters

• **val**: `undefined` \| `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionReceiptPollingInterval`](../interfaces/Web3ConfigOptions.md#transactionreceiptpollinginterval)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:158

***

### transactionSendTimeout

#### Get Signature

> **get** **transactionSendTimeout**(): `number`

The time used to wait for Ethereum Node to return the sent transaction result.
Note: If the RPC call stuck at the Node and therefor timed-out, the transaction may still be pending or even mined by the Network. We recommend checking the pending transactions in such a case.
Default is `750` seconds (12.5 minutes).

##### Returns

`number`

#### Set Signature

> **set** **transactionSendTimeout**(`val`): `void`

Will set the transactionSendTimeout.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionSendTimeout`](../interfaces/Web3ConfigOptions.md#transactionsendtimeout)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:113

***

### transactionTypeParser

#### Get Signature

> **get** **transactionTypeParser**(): `undefined` \| [`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md)

##### Returns

`undefined` \| [`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md)

#### Set Signature

> **set** **transactionTypeParser**(`val`): `void`

##### Parameters

• **val**: `undefined` \| [`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md)

##### Returns

`void`

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionTypeParser`](../interfaces/Web3ConfigOptions.md#transactiontypeparser)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:253

## Methods

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

• **params**: `object`\[`K`\]

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`emit`](Web3EventEmitter.md#emit)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`eventNames`](Web3EventEmitter.md#eventnames)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`getMaxListeners`](Web3EventEmitter.md#getmaxlisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`): `number`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

#### Returns

`number`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`listenerCount`](Web3EventEmitter.md#listenercount)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:17

***

### listeners()

> **listeners**\<`K`\>(`eventName`): (...`args`) => `void`[]

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`listeners`](Web3EventEmitter.md#listeners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`off`](Web3EventEmitter.md#off)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`on`](Web3EventEmitter.md#on)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:13

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`once`](Web3EventEmitter.md#once)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`removeAllListeners`](Web3EventEmitter.md#removealllisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

***

### setConfig()

> **setConfig**(`options`): `void`

#### Parameters

• **options**: [`Partial`](../type-aliases/Partial.md)\<[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:48

***

### setMaxListenerWarningThreshold()

> **setMaxListenerWarningThreshold**(`maxListenersWarningThreshold`): `void`

#### Parameters

• **maxListenersWarningThreshold**: `number`

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`setMaxListenerWarningThreshold`](Web3EventEmitter.md#setmaxlistenerwarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21
