[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Common

# Class: Common

Common class to access chain and hardfork parameters and to provide
a unified and shared view on the network and hardfork state.

Use the [Common.custom](Common.md#custom) static constructor for creating simple
custom chain [Common](Common.md) objects (more complete custom chain setups
can be created via the main constructor and the [CommonOpts.customChains](../interfaces/CommonOpts.md#customchains) parameter).

## Extends

- [`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

## Constructors

### new Common()

> **new Common**(`opts`): [`Common`](Common.md)

#### Parameters

• **opts**: [`CommonOpts`](../interfaces/CommonOpts.md)

#### Returns

[`Common`](Common.md)

#### Overrides

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`constructor`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#constructors)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:60

## Properties

### DEFAULT\_HARDFORK

> `readonly` **DEFAULT\_HARDFORK**: `string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:15

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`prefixed`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#prefixed)

#### Defined in

node\_modules/eventemitter3/index.d.ts:9

## Methods

### \_calcForkHash()

> **\_calcForkHash**(`hardfork`, `genesisHash`): `string`

Internal helper function to calculate a fork hash

#### Parameters

• **hardfork**: `string`

Hardfork name

• **genesisHash**: `Uint8Array`

Genesis block hash of the chain

#### Returns

`string`

Fork hash as hex string

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:241

***

### \_getHardfork()

> **\_getHardfork**(`hardfork`): `null` \| [`HardforkConfig`](../interfaces/HardforkConfig.md)

Internal helper function, returns the params for the given hardfork for the chain set

#### Parameters

• **hardfork**: `string`

Hardfork name

#### Returns

`null` \| [`HardforkConfig`](../interfaces/HardforkConfig.md)

Dictionary with hardfork params or null if hardfork not on chain

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:106

***

### activeOnBlock()

> **activeOnBlock**(`blockNumber`): `boolean`

Alias to hardforkIsActiveOnBlock when hardfork is set

#### Parameters

• **blockNumber**: [`Numbers`](../type-aliases/Numbers.md)

#### Returns

`boolean`

True if HF is active on block number

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:172

***

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`addListener`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#addlistener)

#### Defined in

node\_modules/eventemitter3/index.d.ts:45

***

### bootstrapNodes()

> **bootstrapNodes**(): `undefined` \| [`BootstrapNodeConfig`](../interfaces/BootstrapNodeConfig.md)[]

Returns bootstrap nodes for the current chain

#### Returns

`undefined` \| [`BootstrapNodeConfig`](../interfaces/BootstrapNodeConfig.md)[]

Dict with bootstrap nodes

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:274

***

### chainId()

> **chainId**(): `bigint`

Returns the Id of current chain

#### Returns

`bigint`

chain Id

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:289

***

### chainName()

> **chainName**(): `string`

Returns the name of current chain

#### Returns

`string`

chain name (lower case)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:294

***

### consensusAlgorithm()

> **consensusAlgorithm**(): `string`

Returns the concrete consensus implementation
algorithm or protocol for the network
e.g. "ethash" for "pow" consensus type,
"clique" for "poa" consensus type or
"casper" for "pos" consensus type.

Note: This value can update along a Hardfork.

#### Returns

`string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:321

***

### consensusConfig()

> **consensusConfig**(): `object`

Returns a dictionary with consensus configuration
parameters based on the consensus algorithm

Expected returns (parameters must be present in
the respective chain json files):

ethash: empty object
clique: period, epoch
casper: empty object

Note: This value can update along a Hardfork.

#### Returns

`object`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:335

***

### consensusType()

> **consensusType**(): `string`

Returns the consensus type of the network
Possible values: "pow"|"poa"|"pos"

Note: This value can update along a Hardfork.

#### Returns

`string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:311

***

### copy()

> **copy**(): [`Common`](Common.md)

Returns a deep copy of this [Common](Common.md) instance.

#### Returns

[`Common`](Common.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:341

***

### dnsNetworks()

> **dnsNetworks**(): `string`[]

Returns DNS networks for the current chain

#### Returns

`string`[]

Array of DNS ENR urls

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:279

***

### eipBlock()

> **eipBlock**(`eip`): `null` \| `bigint`

Returns the hardfork change block for eip

#### Parameters

• **eip**: `number`

EIP number

#### Returns

`null` \| `bigint`

Block number or null if unscheduled

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:199

***

### eips()

> **eips**(): `number`[]

Returns the active EIPs

#### Returns

`number`[]

List of EIPs

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:304

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`emit`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#emit)

#### Defined in

node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`eventNames`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#eventnames)

#### Defined in

node\_modules/eventemitter3/index.d.ts:15

***

### forkHash()

> **forkHash**(`_hardfork`?, `genesisHash`?): `string`

Returns an eth/64 compliant fork hash (EIP-2124)

#### Parameters

• **\_hardfork?**: `string`

• **genesisHash?**: `Uint8Array`

Genesis block hash of the chain, optional if already defined and not needed to be calculated

#### Returns

`string`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:247

***

### genesis()

> **genesis**(): [`GenesisBlockConfig`](../interfaces/GenesisBlockConfig.md)

Returns the Genesis parameters of the current chain

#### Returns

[`GenesisBlockConfig`](../interfaces/GenesisBlockConfig.md)

Genesis dictionary

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:264

***

### getHardforkByBlockNumber()

> **getHardforkByBlockNumber**(`_blockNumber`, `_td`?, `_timestamp`?): `string`

Returns the hardfork based on the block number or an optional
total difficulty (Merge HF) provided.

An optional TD takes precedence in case the corresponding HF block
is set to `null` or otherwise needs to match (if not an error
will be thrown).

#### Parameters

• **\_blockNumber**: [`Numbers`](../type-aliases/Numbers.md)

• **\_td?**: [`Numbers`](../type-aliases/Numbers.md)

• **\_timestamp?**: [`Numbers`](../type-aliases/Numbers.md)

#### Returns

`string`

The name of the HF

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:86

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`getMaxListeners`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#getmaxlisteners)

#### Defined in

node\_modules/web3-utils/lib/commonjs/event\_emitter.d.ts:9

***

### gteHardfork()

> **gteHardfork**(`hardfork`): `boolean`

Alias to hardforkGteHardfork when hardfork is set

#### Parameters

• **hardfork**: `string`

Hardfork name

#### Returns

`boolean`

True if hardfork set is greater than hardfork provided

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:186

***

### hardfork()

> **hardfork**(): `string`

Returns the hardfork set

#### Returns

`string`

Hardfork name

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:284

***

### hardforkBlock()

> **hardforkBlock**(`_hardfork`?): `null` \| `bigint`

Returns the hardfork change block for hardfork provided or set

#### Parameters

• **\_hardfork?**: `string`

#### Returns

`null` \| `bigint`

Block number or null if unscheduled

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:192

***

### hardforkForForkHash()

> **hardforkForForkHash**(`forkHash`): `null` \| [`HardforkConfig`](../interfaces/HardforkConfig.md)

#### Parameters

• **forkHash**: `string`

Fork hash as a hex string

#### Returns

`null` \| [`HardforkConfig`](../interfaces/HardforkConfig.md)

Array with hardfork data (name, block, forkHash)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:253

***

### hardforkGteHardfork()

> **hardforkGteHardfork**(`_hardfork1`, `hardfork2`): `boolean`

Sequence based check if given or set HF1 is greater than or equal HF2

#### Parameters

• **\_hardfork1**: `null` \| `string`

• **hardfork2**: `string`

Hardfork name

#### Returns

`boolean`

True if HF1 gte HF2

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:180

***

### hardforkIsActiveOnBlock()

> **hardforkIsActiveOnBlock**(`_hardfork`, `_blockNumber`): `boolean`

Checks if set or provided hardfork is active on block number

#### Parameters

• **\_hardfork**: `null` \| `string`

• **\_blockNumber**: [`Numbers`](../type-aliases/Numbers.md)

#### Returns

`boolean`

True if HF is active on block number

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:166

***

### hardforks()

> **hardforks**(): [`HardforkConfig`](../interfaces/HardforkConfig.md)[]

Returns the hardforks for current chain

#### Returns

[`HardforkConfig`](../interfaces/HardforkConfig.md)[]

Array with arrays of hardforks

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:269

***

### hardforkTimestamp()

> **hardforkTimestamp**(`_hardfork`?): `null` \| `bigint`

#### Parameters

• **\_hardfork?**: `string`

#### Returns

`null` \| `bigint`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:193

***

### hardforkTTD()

> **hardforkTTD**(`_hardfork`?): `null` \| `bigint`

Returns the hardfork change total difficulty (Merge HF) for hardfork provided or set

#### Parameters

• **\_hardfork?**: `string`

#### Returns

`null` \| `bigint`

Total difficulty or null if no set

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:205

***

### isActivatedEIP()

> **isActivatedEIP**(`eip`): `boolean`

Checks if an EIP is activated by either being included in the EIPs
manually passed in with the [CommonOpts.eips](../interfaces/BaseOpts.md#eips) or in a
hardfork currently being active

Note: this method only works for EIPs being supported
by the [CommonOpts.eips](../interfaces/BaseOpts.md#eips) constructor option

#### Parameters

• **eip**: `number`

#### Returns

`boolean`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:159

***

### ~~isHardforkBlock()~~

> **isHardforkBlock**(`_blockNumber`, `_hardfork`?): `boolean`

True if block number provided is the hardfork (given or set) change block

#### Parameters

• **\_blockNumber**: [`Numbers`](../type-aliases/Numbers.md)

• **\_hardfork?**: `string`

#### Returns

`boolean`

True if blockNumber is HF block

#### Deprecated

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:213

***

### ~~isNextHardforkBlock()~~

> **isNextHardforkBlock**(`_blockNumber`, `_hardfork`?): `boolean`

True if block number provided is the hardfork change block following the hardfork given or set

#### Parameters

• **\_blockNumber**: [`Numbers`](../type-aliases/Numbers.md)

• **\_hardfork?**: `string`

#### Returns

`boolean`

True if blockNumber is HF block

#### Deprecated

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:234

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: `string` \| `symbol`

#### Returns

`number`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`listenerCount`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#listenercount)

#### Defined in

node\_modules/eventemitter3/index.d.ts:27

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`listeners`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#listeners)

#### Defined in

node\_modules/eventemitter3/index.d.ts:20

***

### networkId()

> **networkId**(): `bigint`

Returns the Id of current network

#### Returns

`bigint`

network Id

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:299

***

### ~~nextHardforkBlock()~~

> **nextHardforkBlock**(`_hardfork`?): `null` \| `bigint`

Returns the change block for the next hardfork after the hardfork provided or set

#### Parameters

• **\_hardfork?**: `string`

#### Returns

`null` \| `bigint`

Block number or null if not available

#### Deprecated

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:226

***

### nextHardforkBlockOrTimestamp()

> **nextHardforkBlockOrTimestamp**(`_hardfork`?): `null` \| `bigint`

Returns the change block for the next hardfork after the hardfork provided or set

#### Parameters

• **\_hardfork?**: `string`

#### Returns

`null` \| `bigint`

Block timestamp, number or null if not available

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:219

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`off`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#off)

#### Defined in

node\_modules/eventemitter3/index.d.ts:69

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`on`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#on)

#### Defined in

node\_modules/eventemitter3/index.d.ts:40

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`once`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#once)

#### Defined in

node\_modules/eventemitter3/index.d.ts:54

***

### param()

> **param**(`topic`, `name`): `bigint`

Returns a parameter for the current chain setup

If the parameter is present in an EIP, the EIP always takes precedence.
Otherwise the parameter if taken from the latest applied HF with
a change on the respective parameter.

#### Parameters

• **topic**: `string`

Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')

• **name**: `string`

Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)

#### Returns

`bigint`

The value requested or `BigInt(0)` if not found

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:123

***

### paramByBlock()

> **paramByBlock**(`topic`, `name`, `blockNumber`, `td`?, `timestamp`?): `bigint`

Returns a parameter for the hardfork active on block number or
optional provided total difficulty (Merge HF)

#### Parameters

• **topic**: `string`

Parameter topic

• **name**: `string`

Parameter name

• **blockNumber**: [`Numbers`](../type-aliases/Numbers.md)

Block number

• **td?**: [`Numbers`](../type-aliases/Numbers.md)

Total difficulty
   *

• **timestamp?**: [`Numbers`](../type-aliases/Numbers.md)

#### Returns

`bigint`

The value requested or `BigInt(0)` if not found

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:149

***

### paramByEIP()

> **paramByEIP**(`topic`, `name`, `eip`): `undefined` \| `bigint`

Returns a parameter corresponding to an EIP

#### Parameters

• **topic**: `string`

Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')

• **name**: `string`

Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)

• **eip**: `number`

Number of the EIP

#### Returns

`undefined` \| `bigint`

The value requested or `undefined` if not found

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:139

***

### paramByHardfork()

> **paramByHardfork**(`topic`, `name`, `hardfork`): `bigint`

Returns the parameter corresponding to a hardfork

#### Parameters

• **topic**: `string`

Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')

• **name**: `string`

Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)

• **hardfork**: `string`

Hardfork name

#### Returns

`bigint`

The value requested or `BigInt(0)` if not found

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:131

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: `string` \| `symbol`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`removeAllListeners`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#removealllisteners)

#### Defined in

node\_modules/eventemitter3/index.d.ts:79

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`removeListener`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#removelistener)

#### Defined in

node\_modules/eventemitter3/index.d.ts:63

***

### setChain()

> **setChain**(`chain`): [`ChainConfig`](../interfaces/ChainConfig.md)

Sets the chain

#### Parameters

• **chain**: `string` \| `number` \| `bigint` \| `object`

String ('mainnet') or Number (1) chain representation.
             Or, a Dictionary of chain parameters for a private network.

#### Returns

[`ChainConfig`](../interfaces/ChainConfig.md)

The dictionary with parameters set as chain

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:67

***

### setEIPs()

> **setEIPs**(`eips`?): `void`

Sets the active EIPs

#### Parameters

• **eips?**: `number`[]

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:111

***

### setForkHashes()

> **setForkHashes**(`genesisHash`): `void`

Sets any missing forkHashes on the passed-in [Common](Common.md) instance

#### Parameters

• **genesisHash**: `Uint8Array`

The genesis block hash

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:259

***

### setHardfork()

> **setHardfork**(`hardfork`): `void`

Sets the hardfork to get params for

#### Parameters

• **hardfork**: `string`

String identifier (e.g. 'byzantium') or Hardfork enum

#### Returns

`void`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:72

***

### setHardforkByBlockNumber()

> **setHardforkByBlockNumber**(`blockNumber`, `td`?, `timestamp`?): `string`

Sets a new hardfork based on the block number or an optional
total difficulty (Merge HF) provided.

An optional TD takes precedence in case the corresponding HF block
is set to `null` or otherwise needs to match (if not an error
will be thrown).

#### Parameters

• **blockNumber**: [`Numbers`](../type-aliases/Numbers.md)

• **td?**: [`Numbers`](../type-aliases/Numbers.md)

• **timestamp?**: [`Numbers`](../type-aliases/Numbers.md)

#### Returns

`string`

The name of the HF set

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:100

***

### setMaxListeners()

> **setMaxListeners**(`maxListeners`): `this`

#### Parameters

• **maxListeners**: `number`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md).[`setMaxListeners`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md#setmaxlisteners)

#### Defined in

node\_modules/web3-utils/lib/commonjs/event\_emitter.d.ts:8

***

### \_getInitializedChains()

> `static` **\_getInitializedChains**(`customChains`?): [`ChainsConfig`](../interfaces/ChainsConfig.md)

#### Parameters

• **customChains?**: [`ChainConfig`](../interfaces/ChainConfig.md)[]

#### Returns

[`ChainsConfig`](../interfaces/ChainsConfig.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:342

***

### custom()

> `static` **custom**(`chainParamsOrName`, `opts`?): [`Common`](Common.md)

Creates a [Common](Common.md) object for a custom chain, based on a standard one.

It uses all the [Chain](../enumerations/Chain.md) parameters from the baseChain option except the ones overridden
in a provided chainParamsOrName dictionary. Some usage example:

```javascript
Common.custom({chainId: 123})
```

There are also selected supported custom chains which can be initialized by using one of the
CustomChains for chainParamsOrName, e.g.:

```javascript
Common.custom(CustomChains.MaticMumbai)
```

Note that these supported custom chains only provide some base parameters (usually the chain and
network ID and a name) and can only be used for selected use cases (e.g. sending a tx with
the `web3-utils/tx` library to a Layer-2 chain).

#### Parameters

• **chainParamsOrName**: [`Partial`](../type-aliases/Partial.md)\<[`ChainConfig`](../interfaces/ChainConfig.md)\> \| [`CustomChain`](../enumerations/CustomChain.md)

Custom parameter dict (`name` will default to `custom-chain`) or string with name of a supported custom chain

• **opts?**: [`CustomCommonOpts`](../interfaces/CustomCommonOpts.md)

Custom chain options to set the [CustomCommonOpts.baseChain](../interfaces/CustomCommonOpts.md#basechain), selected [CustomCommonOpts.hardfork](../interfaces/BaseOpts.md#hardfork) and others

#### Returns

[`Common`](Common.md)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:45

***

### fromGethGenesis()

> `static` **fromGethGenesis**(`genesisJson`, `to`): [`Common`](Common.md)

Static method to load and set common from a geth genesis json

#### Parameters

• **genesisJson**: `any`

json of geth configuration

• **to**: [`GethConfigOpts`](../interfaces/GethConfigOpts.md)

further configure the common instance

#### Returns

[`Common`](Common.md)

Common

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:52

***

### isSupportedChainId()

> `static` **isSupportedChainId**(`chainId`): `boolean`

Static method to determine if a chainId is supported as a standard chain

#### Parameters

• **chainId**: `bigint`

bigint id (`1`) of a standard chain

#### Returns

`boolean`

boolean

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:58
