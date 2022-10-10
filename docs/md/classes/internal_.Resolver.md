[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Resolver

# Class: Resolver

[<internal>](../modules/internal_.md).Resolver

## Implements

- [`EnsResolver`](../interfaces/internal_.EnsResolver.md)

## Table of contents

### Constructors

- [constructor](internal_.Resolver.md#constructor)

### Properties

- [\_resolvedAddress](internal_.Resolver.md#_resolvedaddress)
- [\_supportsEip2544](internal_.Resolver.md#_supportseip2544)
- [address](internal_.Resolver.md#address)
- [name](internal_.Resolver.md#name)
- [provider](internal_.Resolver.md#provider)

### Methods

- [\_fetch](internal_.Resolver.md#_fetch)
- [\_fetchBytes](internal_.Resolver.md#_fetchbytes)
- [\_getAddress](internal_.Resolver.md#_getaddress)
- [getAddress](internal_.Resolver.md#getaddress)
- [getAvatar](internal_.Resolver.md#getavatar)
- [getContentHash](internal_.Resolver.md#getcontenthash)
- [getText](internal_.Resolver.md#gettext)
- [supportsWildcard](internal_.Resolver.md#supportswildcard)

## Constructors

### constructor

• **new Resolver**(`provider`, `address`, `name`, `resolvedAddress?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`BaseProvider`](internal_.BaseProvider.md) |
| `address` | `string` |
| `name` | `string` |
| `resolvedAddress?` | `string` |

## Properties

### \_resolvedAddress

• `Readonly` **\_resolvedAddress**: ``null`` \| `string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:44

___

### \_supportsEip2544

• **\_supportsEip2544**: ``null`` \| `Promise`<`boolean`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:45

___

### address

• `Readonly` **address**: `string`

#### Implementation of

[EnsResolver](../interfaces/internal_.EnsResolver.md).[address](../interfaces/internal_.EnsResolver.md#address)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:43

___

### name

• `Readonly` **name**: `string`

#### Implementation of

[EnsResolver](../interfaces/internal_.EnsResolver.md).[name](../interfaces/internal_.EnsResolver.md#name)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:42

___

### provider

• `Readonly` **provider**: [`BaseProvider`](internal_.BaseProvider.md)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:41

## Methods

### \_fetch

▸ **_fetch**(`selector`, `parameters?`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `parameters?` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

___

### \_fetchBytes

▸ **_fetchBytes**(`selector`, `parameters?`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `parameters?` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

___

### \_getAddress

▸ **_getAddress**(`coinType`, `hexBytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coinType` | `number` |
| `hexBytes` | `string` |

#### Returns

`string`

___

### getAddress

▸ **getAddress**(`coinType?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `coinType?` | `number` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[EnsResolver](../interfaces/internal_.EnsResolver.md).[getAddress](../interfaces/internal_.EnsResolver.md#getaddress)

___

### getAvatar

▸ **getAvatar**(): `Promise`<``null`` \| [`Avatar`](../interfaces/internal_.Avatar.md)\>

#### Returns

`Promise`<``null`` \| [`Avatar`](../interfaces/internal_.Avatar.md)\>

___

### getContentHash

▸ **getContentHash**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

[EnsResolver](../interfaces/internal_.EnsResolver.md).[getContentHash](../interfaces/internal_.EnsResolver.md#getcontenthash)

___

### getText

▸ **getText**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[EnsResolver](../interfaces/internal_.EnsResolver.md).[getText](../interfaces/internal_.EnsResolver.md#gettext)

___

### supportsWildcard

▸ **supportsWildcard**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>
