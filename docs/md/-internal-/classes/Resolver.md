[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Resolver

# Class: Resolver

## Implements

- [`EnsResolver`](../interfaces/EnsResolver.md)

## Constructors

### new Resolver()

> **new Resolver**(`provider`, `address`, `name`, `resolvedAddress`?): [`Resolver`](Resolver.md)

#### Parameters

• **provider**: [`BaseProvider`](BaseProvider.md)

• **address**: `string`

• **name**: `string`

• **resolvedAddress?**: `string`

#### Returns

[`Resolver`](Resolver.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:46

## Properties

### \_resolvedAddress

> `readonly` **\_resolvedAddress**: `null` \| `string`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:44

***

### \_supportsEip2544

> **\_supportsEip2544**: `null` \| `Promise`\<`boolean`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:45

***

### address

> `readonly` **address**: `string`

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`address`](../interfaces/EnsResolver.md#address)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:43

***

### name

> `readonly` **name**: `string`

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`name`](../interfaces/EnsResolver.md#name)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:42

***

### provider

> `readonly` **provider**: [`BaseProvider`](BaseProvider.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:41

## Methods

### \_fetch()

> **\_fetch**(`selector`, `parameters`?): `Promise`\<`null` \| `string`\>

#### Parameters

• **selector**: `string`

• **parameters?**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:48

***

### \_fetchBytes()

> **\_fetchBytes**(`selector`, `parameters`?): `Promise`\<`null` \| `string`\>

#### Parameters

• **selector**: `string`

• **parameters?**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:49

***

### \_getAddress()

> **\_getAddress**(`coinType`, `hexBytes`): `string`

#### Parameters

• **coinType**: `number`

• **hexBytes**: `string`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:50

***

### getAddress()

> **getAddress**(`coinType`?): `Promise`\<`string`\>

#### Parameters

• **coinType?**: `number`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`getAddress`](../interfaces/EnsResolver.md#getaddress)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:51

***

### getAvatar()

> **getAvatar**(): `Promise`\<`null` \| [`Avatar`](../interfaces/Avatar.md)\>

#### Returns

`Promise`\<`null` \| [`Avatar`](../interfaces/Avatar.md)\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:52

***

### getContentHash()

> **getContentHash**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`getContentHash`](../interfaces/EnsResolver.md#getcontenthash)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:53

***

### getText()

> **getText**(`key`): `Promise`\<`string`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`getText`](../interfaces/EnsResolver.md#gettext)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:54

***

### supportsWildcard()

> **supportsWildcard**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:47
