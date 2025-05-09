[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Event

# Class: Event

## Constructors

### new Event()

> **new Event**(`tag`, `listener`, `once`): [`Event`](Event.md)

#### Parameters

• **tag**: `string`

• **listener**: [`Listener`](../type-aliases/Listener.md)

• **once**: `boolean`

#### Returns

[`Event`](Event.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:14

## Properties

### \_inflight

> **\_inflight**: `boolean`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:13

***

### \_lastBlockNumber

> **\_lastBlockNumber**: `number`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:12

***

### listener

> `readonly` **listener**: [`Listener`](../type-aliases/Listener.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:9

***

### once

> `readonly` **once**: `boolean`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:10

***

### tag

> `readonly` **tag**: `string`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:11

## Accessors

### event

#### Get Signature

> **get** **event**(): [`EventType`](../type-aliases/EventType.md)

##### Returns

[`EventType`](../type-aliases/EventType.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:15

***

### filter

#### Get Signature

> **get** **filter**(): [`Filter`](../interfaces/Filter.md)

##### Returns

[`Filter`](../interfaces/Filter.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:18

***

### hash

#### Get Signature

> **get** **hash**(): `string`

##### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:17

***

### type

#### Get Signature

> **get** **type**(): `string`

##### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:16

## Methods

### pollable()

> **pollable**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:19
