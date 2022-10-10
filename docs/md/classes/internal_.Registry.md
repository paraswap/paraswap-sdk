[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Registry

# Class: Registry

[<internal>](../modules/internal_.md).Registry

## Table of contents

### Constructors

- [constructor](internal_.Registry.md#constructor)

### Properties

- [contract](internal_.Registry.md#contract)
- [ens](internal_.Registry.md#ens)

### Methods

- [getOwner](internal_.Registry.md#getowner)
- [getResolver](internal_.Registry.md#getresolver)
- [getTTl](internal_.Registry.md#getttl)
- [owner](internal_.Registry.md#owner)
- [resolver](internal_.Registry.md#resolver)
- [setOwner](internal_.Registry.md#setowner)
- [setResolver](internal_.Registry.md#setresolver)
- [setSubnodeOwner](internal_.Registry.md#setsubnodeowner)
- [setTTL](internal_.Registry.md#setttl)

## Constructors

### constructor

• **new Registry**(`ens`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ens` | [`Ens`](internal_.Ens.md) |

## Properties

### contract

• **contract**: ``null`` \| [`Contract`](internal_.Contract.md)

#### Defined in

node_modules/web3-eth-ens/types/index.d.ts:308

___

### ens

• **ens**: [`Ens`](internal_.Ens.md)

#### Defined in

node_modules/web3-eth-ens/types/index.d.ts:306

## Methods

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
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `address`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

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

### getTTl

▸ **getTTl**(`name`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

This callback signature is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getTTl**(`name`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `ttl`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### owner

▸ **owner**(`name`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

Please use the "getOwner" method instead of "owner"

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `address`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **owner**(`name`, `callback?`): `Promise`<`string`\>

**`Deprecated`**

Please use the "getOwner" method instead of "owner"

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | (`value`: `any`) => `void` |

#### Returns

`Promise`<`string`\>

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
