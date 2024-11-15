[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Context

# Class: Web3Context\<API, RegisteredSubs\>

## Extends

- [`Web3Config`](Web3Config.md)

## Extended by

- [`Web3`](Web3.md)
- [`Web3Eth`](Web3Eth.md)
- [`Net`](Net.md)
- [`ENS`](ENS.md)
- [`Personal`](Personal.md)
- [`Web3PluginBase`](Web3PluginBase.md)
- [`Contract`](Contract.md)

## Type Parameters

• **API** *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = `unknown`

• **RegisteredSubs** *extends* `object` = `any`

## Constructors

### new Web3Context()

> **new Web3Context**\<`API`, `RegisteredSubs`\>(`providerOrContext`?): [`Web3Context`](Web3Context.md)\<`API`, `RegisteredSubs`\>

#### Parameters

• **providerOrContext?**: `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| [`Web3ContextInitOptions`](../type-aliases/Web3ContextInitOptions.md)\<`API`, `RegisteredSubs`\>

#### Returns

[`Web3Context`](Web3Context.md)\<`API`, `RegisteredSubs`\>

#### Overrides

[`Web3Config`](Web3Config.md).[`constructor`](Web3Config.md#constructors)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:53

## Properties

### \_accountProvider?

> `protected` `optional` **\_accountProvider**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:51

***

### \_requestManager

> `protected` **\_requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:49

***

### \_subscriptionManager

> `protected` **\_subscriptionManager**: [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:50

***

### \_wallet?

> `protected` `optional` **\_wallet**: [`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:52

***

### config

> **config**: [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

#### Inherited from

[`Web3Config`](Web3Config.md).[`config`](Web3Config.md#config)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:46

***

### providers

> `readonly` **providers**: `object`

#### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:45

***

### givenProvider?

> `static` `optional` **givenProvider**: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:44

***

### providers

> `readonly` `static` **providers**: `object`

#### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:40

## Accessors

### accountProvider

#### Get Signature

> **get** **accountProvider**(): `undefined` \| [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

##### Returns

`undefined` \| [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:60

***

### BatchRequest

#### Get Signature

> **get** **BatchRequest**(): () => [`Web3BatchRequest`](Web3BatchRequest.md)

Will return the [Web3BatchRequest](Web3BatchRequest.md) constructor.

##### Returns

`Function`

###### Returns

[`Web3BatchRequest`](Web3BatchRequest.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:160

***

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`blockHeaderTimeout`](Web3Config.md#blockheadertimeout)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`contractDataInputFill`](Web3Config.md#contractdatainputfill)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:70

***

### currentProvider

#### Get Signature

> **get** **currentProvider**(): `undefined` \| [`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\>

Will return the current provider. (The same as `provider`)

##### Example

```ts
const web3Context = new Web3Context("http://localhost:8545");
console.log(web3Context.provider);
> HttpProvider {
	clientUrl: 'http://localhost:8545',
	httpProviderOptions: undefined
 }
```

##### Returns

`undefined` \| [`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\>

Returns the current provider

#### Set Signature

> **set** **currentProvider**(`provider`): `void`

Will set the current provider. (The same as `provider`)

##### Example

```ts
 const web3Context = new Web3Context("http://localhost:8545");
web3Context.currentProvider = "ws://localhost:8545";
console.log(web3Context.provider);
> WebSocketProvider {
_eventEmitter: EventEmitter {
_events: [Object: null prototype] {},
_eventsCount: 0,
...
}
```

##### Parameters

• **provider**: `undefined` \| `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

[SupportedProviders](../type-aliases/SupportedProviders.md) The provider to set

##### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:123

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`customTransactionSchema`](Web3Config.md#customtransactionschema)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultAccount`](Web3Config.md#defaultaccount)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultBlock`](Web3Config.md#defaultblock)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultChain`](Web3Config.md#defaultchain)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultCommon`](Web3Config.md#defaultcommon)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultHardfork`](Web3Config.md#defaulthardfork)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultMaxPriorityFeePerGas`](Web3Config.md#defaultmaxpriorityfeepergas)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultNetworkId`](Web3Config.md#defaultnetworkid)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultReturnFormat`](Web3Config.md#defaultreturnformat)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`defaultTransactionType`](Web3Config.md#defaulttransactiontype)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`enableExperimentalFeatures`](Web3Config.md#enableexperimentalfeatures)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:178

***

### givenProvider

#### Get Signature

> **get** **givenProvider**(): `undefined` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\>

Will return the givenProvider if available.

When using web3.js in an Ethereum compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise `undefined`.

##### Returns

`undefined` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:148

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`handleRevert`](Web3Config.md#handlerevert)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`ignoreGasPricing`](Web3Config.md#ignoregaspricing)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`maxListenersWarningThreshold`](Web3Config.md#maxlistenerswarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:189

***

### provider

#### Get Signature

> **get** **provider**(): `undefined` \| [`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\>

Will return the current provider.

##### Example

```ts
const web3 = new Web3Context("http://localhost:8545");
console.log(web3.provider);
> HttpProvider {
	clientUrl: 'http://localhost:8545',
	httpProviderOptions: undefined
 }
```

##### Returns

`undefined` \| [`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\>

Returns the current provider

#### Set Signature

> **set** **provider**(`provider`): `void`

Will set the current provider.

##### Example

```ts
 const web3Context = new web3ContextContext("http://localhost:8545");
web3Context.provider = "ws://localhost:8545";
console.log(web3Context.provider);
> WebSocketProvider {
_eventEmitter: EventEmitter {
_events: [Object: null prototype] {},
_eventsCount: 0,
...
}
```

##### Parameters

• **provider**: `undefined` \| `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

The provider to set

Accepted providers are of type [SupportedProviders](../type-aliases/SupportedProviders.md)

##### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:88

***

### requestManager

#### Get Signature

> **get** **requestManager**(): [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

##### Returns

[`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:54

***

### subscriptionManager

#### Get Signature

> **get** **subscriptionManager**(): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

Will return the current subscriptionManager ([Web3SubscriptionManager](Web3SubscriptionManager.md))

##### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:58

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionBlockTimeout`](Web3Config.md#transactionblocktimeout)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionBuilder`](Web3Config.md#transactionbuilder)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionConfirmationBlocks`](Web3Config.md#transactionconfirmationblocks)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionConfirmationPollingInterval`](Web3Config.md#transactionconfirmationpollinginterval)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionPollingInterval`](Web3Config.md#transactionpollinginterval)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionPollingTimeout`](Web3Config.md#transactionpollingtimeout)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionReceiptPollingInterval`](Web3Config.md#transactionreceiptpollinginterval)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionSendTimeout`](Web3Config.md#transactionsendtimeout)

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

#### Inherited from

[`Web3Config`](Web3Config.md).[`transactionTypeParser`](Web3Config.md#transactiontypeparser)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:253

***

### wallet

#### Get Signature

> **get** **wallet**(): `undefined` \| [`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

##### Returns

`undefined` \| [`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:59

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

[`Web3Config`](Web3Config.md).[`emit`](Web3Config.md#emit)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3Config`](Web3Config.md).[`eventNames`](Web3Config.md#eventnames)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

***

### extend()

> **extend**(`extendObj`): `this`

This method allows extending the web3 modules.
Note: This method is only for backward compatibility, and It is recommended to use Web3 v4 Plugin feature for extending web3.js functionality if you are developing something new.

#### Parameters

• **extendObj**: [`ExtensionObject`](../interfaces/ExtensionObject.md)

#### Returns

`this`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:165

***

### getContextObject()

> **getContextObject**(): [`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<`API`, `RegisteredSubs`\>

#### Returns

[`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<`API`, `RegisteredSubs`\>

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:62

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[`Web3Config`](Web3Config.md).[`getMaxListeners`](Web3Config.md#getmaxlisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

***

### link()

> **link**\<`T`\>(`parentContext`): `void`

Link current context to another context.

#### Type Parameters

• **T** *extends* [`Web3Context`](Web3Context.md)\<`unknown`, `any`\>

#### Parameters

• **parentContext**: `T`

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:72

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

[`Web3Config`](Web3Config.md).[`listenerCount`](Web3Config.md#listenercount)

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

[`Web3Config`](Web3Config.md).[`listeners`](Web3Config.md#listeners)

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

[`Web3Config`](Web3Config.md).[`off`](Web3Config.md#off)

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

[`Web3Config`](Web3Config.md).[`on`](Web3Config.md#on)

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

[`Web3Config`](Web3Config.md).[`once`](Web3Config.md#once)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

***

### registerPlugin()

> **registerPlugin**(`plugin`): `void`

#### Parameters

• **plugin**: [`Web3PluginBase`](Web3PluginBase.md)\<`unknown`\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:73

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Inherited from

[`Web3Config`](Web3Config.md).[`removeAllListeners`](Web3Config.md#removealllisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

***

### setConfig()

> **setConfig**(`options`): `void`

#### Parameters

• **options**: [`Partial`](../type-aliases/Partial.md)\<[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Config`](Web3Config.md).[`setConfig`](Web3Config.md#setconfig)

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

[`Web3Config`](Web3Config.md).[`setMaxListenerWarningThreshold`](Web3Config.md#setmaxlistenerwarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21

***

### setProvider()

> **setProvider**(`provider`?): `boolean`

Will set the provider.

#### Parameters

• **provider?**: `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

[SupportedProviders](../type-aliases/SupportedProviders.md) The provider to set

#### Returns

`boolean`

Returns true if the provider was set

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:155

***

### setRequestManagerMiddleware()

> **setRequestManagerMiddleware**(`requestManagerMiddleware`): `void`

#### Parameters

• **requestManagerMiddleware**: [`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:156

***

### use()

> **use**\<`T`, `T2`\>(`ContextRef`, ...`args`): `T`

Use to create new object of any type extended by `Web3Context`
and link it to current context. This can be used to initiate a global context object
and then use it to create new objects of any type extended by `Web3Context`.

#### Type Parameters

• **T** *extends* [`Web3Context`](Web3Context.md)\<`unknown`, `any`\>

• **T2** *extends* `unknown`[]

#### Parameters

• **ContextRef**: [`Web3ContextConstructor`](../type-aliases/Web3ContextConstructor.md)\<`T`, `T2`\>

• ...**args**: [`...T2[]`]

#### Returns

`T`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:68

***

### fromContextObject()

> `static` **fromContextObject**\<`T`, `T3`\>(`this`, ...`args`): `T`

#### Type Parameters

• **T** *extends* [`Web3Context`](Web3Context.md)\<`unknown`, `any`\>

• **T3** *extends* `unknown`[]

#### Parameters

• **this**: [`Web3ContextConstructor`](../type-aliases/Web3ContextConstructor.md)\<`T`, `T3`\>

• ...**args**: [[`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<`unknown`, `any`\>, `...T3[]`]

#### Returns

`T`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:61
