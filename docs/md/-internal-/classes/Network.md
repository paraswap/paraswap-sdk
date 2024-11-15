[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Network

# Class: Network

A **Network** provides access to a chain's properties and allows
 for plug-ins to extend functionality.

## Constructors

### new Network()

> **new Network**(`name`, `chainId`): [`Network`](Network.md)

Creates a new **Network** for %%name%% and %%chainId%%.

#### Parameters

• **name**: `string`

• **chainId**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Network`](Network.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:32

## Accessors

### chainId

#### Get Signature

> **get** **chainId**(): `bigint`

The network chain ID.

##### Returns

`bigint`

#### Set Signature

> **set** **chainId**(`value`): `void`

##### Parameters

• **value**: [`BigNumberish`](../type-aliases/BigNumberish.md)

##### Returns

`void`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:48

***

### name

#### Get Signature

> **get** **name**(): `string`

The network common name.

 This is the canonical name, as networks migh have multiple
 names.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

##### Parameters

• **value**: `string`

##### Returns

`void`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:43

***

### plugins

#### Get Signature

> **get** **plugins**(): [`NetworkPlugin`](NetworkPlugin.md)[]

Returns the list of plugins currently attached to this Network.

##### Returns

[`NetworkPlugin`](NetworkPlugin.md)[]

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:61

## Methods

### attachPlugin()

> **attachPlugin**(`plugin`): `this`

Attach a new %%plugin%% to this Network. The network name
 must be unique, excluding any fragment.

#### Parameters

• **plugin**: [`NetworkPlugin`](NetworkPlugin.md)

#### Returns

`this`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:66

***

### clone()

> **clone**(): [`Network`](Network.md)

Create a copy of this Network.

#### Returns

[`Network`](Network.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:81

***

### computeIntrinsicGas()

> **computeIntrinsicGas**(`tx`): `number`

Compute the intrinsic gas required for a transaction.

 A GasCostPlugin can be attached to override the default
 values.

#### Parameters

• **tx**: [`TransactionLike`](../interfaces/TransactionLike.md)\<`string`\>

#### Returns

`number`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:88

***

### getPlugin()

> **getPlugin**\<`T`\>(`name`): `null` \| `T`

Return the plugin, if any, matching %%name%% exactly. Plugins
 with fragments will not be returned unless %%name%% includes
 a fragment.

#### Type Parameters

• **T** *extends* [`NetworkPlugin`](NetworkPlugin.md) = [`NetworkPlugin`](NetworkPlugin.md)

#### Parameters

• **name**: `string`

#### Returns

`null` \| `T`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:72

***

### getPlugins()

> **getPlugins**\<`T`\>(`basename`): `T`[]

Gets a list of all plugins that match %%name%%, with otr without
 a fragment.

#### Type Parameters

• **T** *extends* [`NetworkPlugin`](NetworkPlugin.md) = [`NetworkPlugin`](NetworkPlugin.md)

#### Parameters

• **basename**: `string`

#### Returns

`T`[]

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:77

***

### matches()

> **matches**(`other`): `boolean`

Returns true if %%other%% matches this network. Any chain ID
 must match, and if no chain ID is present, the name must match.

 This method does not currently check for additional properties,
 such as ENS address or plug-in compatibility.

#### Parameters

• **other**: [`Networkish`](../type-aliases/Networkish.md)

#### Returns

`boolean`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:57

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON-compatible representation of a Network.

#### Returns

`any`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:36

***

### from()

> `static` **from**(`network`?): [`Network`](Network.md)

Returns a new Network for the %%network%% name or chainId.

#### Parameters

• **network?**: [`Networkish`](../type-aliases/Networkish.md)

#### Returns

[`Network`](Network.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:92

***

### register()

> `static` **register**(`nameOrChainId`, `networkFunc`): `void`

Register %%nameOrChainId%% with a function which returns
 an instance of a Network representing that chain.

#### Parameters

• **nameOrChainId**: `string` \| `number` \| `bigint`

• **networkFunc**

#### Returns

`void`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/network.d.ts:97
