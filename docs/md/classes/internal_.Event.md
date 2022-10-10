[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Event

# Class: Event

[<internal>](../modules/internal_.md).Event

## Table of contents

### Constructors

- [constructor](internal_.Event.md#constructor)

### Properties

- [\_inflight](internal_.Event.md#_inflight)
- [\_lastBlockNumber](internal_.Event.md#_lastblocknumber)
- [listener](internal_.Event.md#listener)
- [once](internal_.Event.md#once)
- [tag](internal_.Event.md#tag)

### Accessors

- [event](internal_.Event.md#event)
- [filter](internal_.Event.md#filter)
- [hash](internal_.Event.md#hash)
- [type](internal_.Event.md#type)

### Methods

- [pollable](internal_.Event.md#pollable)

## Constructors

### constructor

• **new Event**(`tag`, `listener`, `once`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |
| `once` | `boolean` |

## Properties

### \_inflight

• **\_inflight**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:13

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:12

___

### listener

• `Readonly` **listener**: [`Listener`](../modules/internal_.md#listener)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:9

___

### once

• `Readonly` **once**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:10

___

### tag

• `Readonly` **tag**: `string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:11

## Accessors

### event

• `get` **event**(): [`EventType`](../modules/internal_.md#eventtype)

#### Returns

[`EventType`](../modules/internal_.md#eventtype)

___

### filter

• `get` **filter**(): [`Filter`](../interfaces/internal_.Filter.md)

#### Returns

[`Filter`](../interfaces/internal_.Filter.md)

___

### hash

• `get` **hash**(): `string`

#### Returns

`string`

___

### type

• `get` **type**(): `string`

#### Returns

`string`

## Methods

### pollable

▸ **pollable**(): `boolean`

#### Returns

`boolean`
