[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EnsResolver

# Interface: EnsResolver

[<internal>](../modules/internal_.md).EnsResolver

## Implemented by

- [`Resolver`](../classes/internal_.Resolver.md)

## Table of contents

### Properties

- [address](internal_.EnsResolver.md#address)
- [name](internal_.EnsResolver.md#name)

### Methods

- [getAddress](internal_.EnsResolver.md#getaddress)
- [getContentHash](internal_.EnsResolver.md#getcontenthash)
- [getText](internal_.EnsResolver.md#gettext)

## Properties

### address

• `Readonly` **address**: `string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:23

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:22

## Methods

### getAddress

▸ **getAddress**(`coinType?`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `coinType?` | ``60`` |

#### Returns

`Promise`<``null`` \| `string`\>

___

### getContentHash

▸ **getContentHash**(): `Promise`<``null`` \| `string`\>

#### Returns

`Promise`<``null`` \| `string`\>

___

### getText

▸ **getText**(`key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>
