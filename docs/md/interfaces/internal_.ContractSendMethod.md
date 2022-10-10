[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ContractSendMethod

# Interface: ContractSendMethod

[<internal>](../modules/internal_.md).ContractSendMethod

## Table of contents

### Methods

- [call](internal_.ContractSendMethod.md#call)
- [encodeABI](internal_.ContractSendMethod.md#encodeabi)
- [estimateGas](internal_.ContractSendMethod.md#estimategas)
- [send](internal_.ContractSendMethod.md#send)

## Methods

### call

▸ **call**(`options?`, `callback?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`CallOptions`](internal_.CallOptions.md) |
| `callback?` | (`err`: [`Error`](../modules/internal_.md#error), `result`: `any`) => `void` |

#### Returns

`Promise`<`any`\>

___

### encodeABI

▸ **encodeABI**(): `string`

#### Returns

`string`

___

### estimateGas

▸ **estimateGas**(`options`, `callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EstimateGasOptions`](internal_.EstimateGasOptions.md) |
| `callback?` | (`err`: [`Error`](../modules/internal_.md#error), `gas`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

▸ **estimateGas**(`callback`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: [`Error`](../modules/internal_.md#error), `gas`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

▸ **estimateGas**(`options`, `callback`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EstimateGasOptions`](internal_.EstimateGasOptions.md) |
| `callback` | (`err`: [`Error`](../modules/internal_.md#error), `gas`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

▸ **estimateGas**(`options`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EstimateGasOptions`](internal_.EstimateGasOptions.md) |

#### Returns

`Promise`<`number`\>

▸ **estimateGas**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

___

### send

▸ **send**(`options`, `callback?`): [`PromiEvent`](internal_.PromiEvent.md)<[`Contract`](../classes/internal_.Contract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendOptions`](internal_.SendOptions.md) |
| `callback?` | (`err`: [`Error`](../modules/internal_.md#error), `transactionHash`: `string`) => `void` |

#### Returns

[`PromiEvent`](internal_.PromiEvent.md)<[`Contract`](../classes/internal_.Contract.md)\>
