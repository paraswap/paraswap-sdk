[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Contract

# Class: Contract

[<internal>](../modules/internal_.md).Contract

## Table of contents

### Constructors

- [constructor](internal_.Contract.md#constructor)

### Properties

- [\_address](internal_.Contract.md#_address)
- [\_jsonInterface](internal_.Contract.md#_jsoninterface)
- [defaultAccount](internal_.Contract.md#defaultaccount)
- [defaultBlock](internal_.Contract.md#defaultblock)
- [defaultChain](internal_.Contract.md#defaultchain)
- [defaultCommon](internal_.Contract.md#defaultcommon)
- [defaultHardfork](internal_.Contract.md#defaulthardfork)
- [events](internal_.Contract.md#events)
- [handleRevert](internal_.Contract.md#handlerevert)
- [methods](internal_.Contract.md#methods)
- [options](internal_.Contract.md#options)
- [transactionBlockTimeout](internal_.Contract.md#transactionblocktimeout)
- [transactionConfirmationBlocks](internal_.Contract.md#transactionconfirmationblocks)
- [transactionPollingTimeout](internal_.Contract.md#transactionpollingtimeout)

### Methods

- [clone](internal_.Contract.md#clone)
- [deploy](internal_.Contract.md#deploy)
- [getPastEvents](internal_.Contract.md#getpastevents)
- [once](internal_.Contract.md#once)

## Constructors

### constructor

• **new Contract**(`jsonInterface`, `address?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonInterface` | [`AbiItem`](../interfaces/internal_.AbiItem.md)[] |
| `address?` | `string` |
| `options?` | [`ContractOptions`](../interfaces/internal_.ContractOptions.md) |

## Properties

### \_address

• `Private` **\_address**: `string`

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:32

___

### \_jsonInterface

• `Private` **\_jsonInterface**: [`AbiItem`](../interfaces/internal_.AbiItem.md)[]

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:33

___

### defaultAccount

• **defaultAccount**: ``null`` \| `string`

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:34

___

### defaultBlock

• **defaultBlock**: [`BlockNumber`](../modules/internal_.md#blocknumber)

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:35

___

### defaultChain

• **defaultChain**: [`chain`](../modules/internal_.md#chain)

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:38

___

### defaultCommon

• **defaultCommon**: [`Common`](../interfaces/internal_.Common.md)

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:36

___

### defaultHardfork

• **defaultHardfork**: [`hardfork`](../modules/internal_.md#hardfork)

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:37

___

### events

• **events**: `any`

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:62

___

### handleRevert

• **handleRevert**: `boolean`

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:42

___

### methods

• **methods**: `any`

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:50

___

### options

• **options**: [`Options`](../interfaces/internal_.Options.md)

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:44

___

### transactionBlockTimeout

• **transactionBlockTimeout**: `number`

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:41

___

### transactionConfirmationBlocks

• **transactionConfirmationBlocks**: `number`

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:40

___

### transactionPollingTimeout

• **transactionPollingTimeout**: `number`

#### Defined in

node_modules/web3-eth-contract/types/index.d.ts:39

## Methods

### clone

▸ **clone**(): [`Contract`](internal_.Contract.md)

#### Returns

[`Contract`](internal_.Contract.md)

___

### deploy

▸ **deploy**(`options`): [`ContractSendMethod`](../interfaces/internal_.ContractSendMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeployOptions`](../interfaces/internal_.DeployOptions.md) |

#### Returns

[`ContractSendMethod`](../interfaces/internal_.ContractSendMethod.md)

___

### getPastEvents

▸ **getPastEvents**(`event`): `Promise`<[`EventData`](../interfaces/internal_.EventData.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

`Promise`<[`EventData`](../interfaces/internal_.EventData.md)[]\>

▸ **getPastEvents**(`event`, `options`, `callback`): `Promise`<[`EventData`](../interfaces/internal_.EventData.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `options` | [`PastEventOptions`](../interfaces/internal_.PastEventOptions.md) |
| `callback` | (`error`: [`Error`](../modules/internal_.md#error), `event`: [`EventData`](../interfaces/internal_.EventData.md)) => `void` |

#### Returns

`Promise`<[`EventData`](../interfaces/internal_.EventData.md)[]\>

▸ **getPastEvents**(`event`, `options`): `Promise`<[`EventData`](../interfaces/internal_.EventData.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `options` | [`PastEventOptions`](../interfaces/internal_.PastEventOptions.md) |

#### Returns

`Promise`<[`EventData`](../interfaces/internal_.EventData.md)[]\>

▸ **getPastEvents**(`event`, `callback`): `Promise`<[`EventData`](../interfaces/internal_.EventData.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | (`error`: [`Error`](../modules/internal_.md#error), `event`: [`EventData`](../interfaces/internal_.EventData.md)) => `void` |

#### Returns

`Promise`<[`EventData`](../interfaces/internal_.EventData.md)[]\>

___

### once

▸ **once**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | (`error`: [`Error`](../modules/internal_.md#error), `event`: [`EventData`](../interfaces/internal_.EventData.md)) => `void` |

#### Returns

`void`

▸ **once**(`event`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `options` | [`EventOptions`](../interfaces/internal_.EventOptions.md) |
| `callback` | (`error`: [`Error`](../modules/internal_.md#error), `event`: [`EventData`](../interfaces/internal_.EventData.md)) => `void` |

#### Returns

`void`
