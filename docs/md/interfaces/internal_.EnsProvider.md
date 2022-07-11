[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EnsProvider

# Interface: EnsProvider

[<internal>](../modules/internal_.md).EnsProvider

## Implemented by

- [`BaseProvider`](../classes/internal_.BaseProvider.md)

## Table of contents

### Methods

- [getResolver](internal_.EnsProvider.md#getresolver)
- [lookupAddress](internal_.EnsProvider.md#lookupaddress)
- [resolveName](internal_.EnsProvider.md#resolvename)

## Methods

### getResolver

▸ **getResolver**(`name`): `Promise`<``null`` \| [`EnsResolver`](internal_.EnsResolver.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| [`EnsResolver`](internal_.EnsResolver.md)\>

___

### lookupAddress

▸ **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

___

### resolveName

▸ **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>
