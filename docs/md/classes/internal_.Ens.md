[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Ens

# Class: Ens

[<internal>](../modules/internal_.md).Ens

## Table of contents

### Constructors

- [constructor](internal_.Ens.md#constructor)

### Properties

- [registry](internal_.Ens.md#registry)
- [registryAddress](internal_.Ens.md#registryaddress)

### Methods

- [getAddress](internal_.Ens.md#getaddress)
- [getContent](internal_.Ens.md#getcontent)
- [getContenthash](internal_.Ens.md#getcontenthash)
- [getMultihash](internal_.Ens.md#getmultihash)
- [getOwner](internal_.Ens.md#getowner)
- [getPubkey](internal_.Ens.md#getpubkey)
- [getResolver](internal_.Ens.md#getresolver)
- [getTTL](internal_.Ens.md#getttl)
- [getText](internal_.Ens.md#gettext)
- [isApprovedForAll](internal_.Ens.md#isapprovedforall)
- [recordExists](internal_.Ens.md#recordexists)
- [resolver](internal_.Ens.md#resolver)
- [setAddress](internal_.Ens.md#setaddress)
- [setApprovalForAll](internal_.Ens.md#setapprovalforall)
- [setContent](internal_.Ens.md#setcontent)
- [setContenthash](internal_.Ens.md#setcontenthash)
- [setMultihash](internal_.Ens.md#setmultihash)
- [setOwner](internal_.Ens.md#setowner)
- [setPubkey](internal_.Ens.md#setpubkey)
- [setRecord](internal_.Ens.md#setrecord)
- [setResolver](internal_.Ens.md#setresolver)
- [setSubnodeOwner](internal_.Ens.md#setsubnodeowner)
- [setSubnodeRecord](internal_.Ens.md#setsubnoderecord)
- [setTTL](internal_.Ens.md#setttl)
- [setText](internal_.Ens.md#settext)
- [supportsInterface](internal_.Ens.md#supportsinterface)

## Constructors

### constructor

• **new Ens**(`eth`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eth` | [`Eth`](internal_.Eth.md) |

## Properties

### registry

• **registry**: [`Registry`](internal_.Registry.md)

#### Defined in

node_modules/web3-eth-ens/types/index.d.ts:36

___

### registryAddress

• **registryAddress**: ``null`` \| `string`

#### Defined in

node_modules/web3-eth-ens/types/index.d.ts:35

## Methods

### getAddress

▸ **getAddress**(`name`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getAddress**(`name`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `address`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getContent

▸ **getContent**(`name`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getContent**(`name`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `contentHash`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getContenthash

▸ **getContenthash**(`name`, `callback?`): `Promise`<[`ContentHash`](../interfaces/internal_.ContentHash.md)\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: [`ContentHash`](../interfaces/internal_.ContentHash.md)) => `void` |

#### Returns

`Promise`<[`ContentHash`](../interfaces/internal_.ContentHash.md)\>

▸ **getContenthash**(`name`, `callback?`): `Promise`<[`ContentHash`](../interfaces/internal_.ContentHash.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `contenthash`: [`ContentHash`](../interfaces/internal_.ContentHash.md)) => `void` |

#### Returns

`Promise`<[`ContentHash`](../interfaces/internal_.ContentHash.md)\>

___

### getMultihash

▸ **getMultihash**(`name`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getMultihash**(`name`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `multihash`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getOwner

▸ **getOwner**(`name`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getOwner**(`name`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `owner`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getPubkey

▸ **getPubkey**(`name`, `callback?`): `Promise`<{ `[x: string]`: `string`;  }\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<{ `[x: string]`: `string`;  }\>

▸ **getPubkey**(`name`, `callback?`): `Promise`<{ `[x: string]`: `string`;  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: { `[x: string]`: `string`;  }) => `void` |

#### Returns

`Promise`<{ `[x: string]`: `string`;  }\>

___

### getResolver

▸ **getResolver**(`name`, `callback?`): `Promise`<[`Contract`](internal_.Contract.md)\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<[`Contract`](internal_.Contract.md)\>

▸ **getResolver**(`name`, `callback?`): `Promise`<[`Contract`](internal_.Contract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `contract`: [`Contract`](internal_.Contract.md)) => `void` |

#### Returns

`Promise`<[`Contract`](internal_.Contract.md)\>

___

### getTTL

▸ **getTTL**(`name`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getTTL**(`name`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `ttl`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getText

▸ **getText**(`name`, `key`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getText**(`name`, `key`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `ensName`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### isApprovedForAll

▸ **isApprovedForAll**(`owner`, `operator`, `callback?`): `Promise`<`boolean`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `operator` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`boolean`\>

▸ **isApprovedForAll**(`owner`, `operator`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `operator` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### recordExists

▸ **recordExists**(`name`, `callback?`): `Promise`<`boolean`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`boolean`\>

▸ **recordExists**(`name`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### resolver

▸ **resolver**(`name`, `callback?`): `Promise`<[`Contract`](internal_.Contract.md)\>

**`Deprecated`**

Please use the "getResolver" method instead of "resolver"

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `contract`: [`Contract`](internal_.Contract.md)) => `void` |

#### Returns

`Promise`<[`Contract`](internal_.Contract.md)\>

▸ **resolver**(`name`, `callback?`): `Promise`<[`Contract`](internal_.Contract.md)\>

**`Deprecated`**

Please use the "getResolver" method instead of "resolver"

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<[`Contract`](internal_.Contract.md)\>

___

### setAddress

▸ **setAddress**(`name`, `address`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `address` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `approved` | `boolean` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setContent

▸ **setContent**(`name`, `hash`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `hash` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setContenthash

▸ **setContenthash**(`name`, `hash`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `hash` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setMultihash

▸ **setMultihash**(`name`, `hash`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `hash` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setOwner

▸ **setOwner**(`name`, `address`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `address` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setPubkey

▸ **setPubkey**(`name`, `x`, `y`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `x` | `string` |
| `y` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setRecord

▸ **setRecord**(`name`, `owner`, `resolver`, `ttl`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `owner` | `string` |
| `resolver` | `string` |
| `ttl` | `string` \| `number` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setResolver

▸ **setResolver**(`name`, `address`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `address` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setSubnodeOwner

▸ **setSubnodeOwner**(`name`, `label`, `address`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `label` | `string` |
| `address` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setSubnodeRecord

▸ **setSubnodeRecord**(`name`, `label`, `owner`, `resolver`, `ttl`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `label` | `string` |
| `owner` | `string` |
| `resolver` | `string` |
| `ttl` | `string` \| `number` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setTTL

▸ **setTTL**(`name`, `ttl`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ttl` | `string` \| `number` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### setText

▸ **setText**(`name`, `key`, `value`, `txConfig?`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `string` |
| `value` | `string` |
| `txConfig?` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md), `receipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md) \| [`TransactionRevertInstructionError`](../interfaces/internal_.TransactionRevertInstructionError.md)\>

___

### supportsInterface

▸ **supportsInterface**(`name`, `interfaceId`, `callback?`): `Promise`<`boolean`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `interfaceId` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`boolean`\>

▸ **supportsInterface**(`name`, `interfaceId`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `interfaceId` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `supported`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>
