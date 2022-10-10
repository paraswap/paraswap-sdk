[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AbiCoder

# Class: AbiCoder

[<internal>](../modules/internal_.md).AbiCoder

## Table of contents

### Constructors

- [constructor](internal_.AbiCoder-1.md#constructor)

### Methods

- [decodeLog](internal_.AbiCoder-1.md#decodelog)
- [decodeParameter](internal_.AbiCoder-1.md#decodeparameter)
- [decodeParameters](internal_.AbiCoder-1.md#decodeparameters)
- [encodeEventSignature](internal_.AbiCoder-1.md#encodeeventsignature)
- [encodeFunctionCall](internal_.AbiCoder-1.md#encodefunctioncall)
- [encodeFunctionSignature](internal_.AbiCoder-1.md#encodefunctionsignature)
- [encodeParameter](internal_.AbiCoder-1.md#encodeparameter)
- [encodeParameters](internal_.AbiCoder-1.md#encodeparameters)

## Constructors

### constructor

• **new AbiCoder**()

## Methods

### decodeLog

▸ **decodeLog**(`inputs`, `hex`, `topics`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`AbiInput`](../interfaces/internal_.AbiInput.md)[] |
| `hex` | `string` |
| `topics` | `string`[] |

#### Returns

`Object`

___

### decodeParameter

▸ **decodeParameter**(`type`, `hex`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `hex` | `string` |

#### Returns

`Object`

___

### decodeParameters

▸ **decodeParameters**(`types`, `hex`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | `any`[] |
| `hex` | `string` |

#### Returns

`Object`

___

### encodeEventSignature

▸ **encodeEventSignature**(`functionName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` \| [`AbiItem`](../interfaces/internal_.AbiItem.md) |

#### Returns

`string`

___

### encodeFunctionCall

▸ **encodeFunctionCall**(`abiItem`, `params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `abiItem` | [`AbiItem`](../interfaces/internal_.AbiItem.md) |
| `params` | `string`[] |

#### Returns

`string`

___

### encodeFunctionSignature

▸ **encodeFunctionSignature**(`functionName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` \| [`AbiItem`](../interfaces/internal_.AbiItem.md) |

#### Returns

`string`

___

### encodeParameter

▸ **encodeParameter**(`type`, `parameter`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `parameter` | `any` |

#### Returns

`string`

___

### encodeParameters

▸ **encodeParameters**(`types`, `paramaters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | `any`[] |
| `paramaters` | `any`[] |

#### Returns

`string`
