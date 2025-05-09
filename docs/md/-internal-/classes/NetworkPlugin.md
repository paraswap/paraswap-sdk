[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / NetworkPlugin

# Class: NetworkPlugin

A **NetworkPlugin** provides additional functionality on a [[Network]].

## Constructors

### new NetworkPlugin()

> **new NetworkPlugin**(`name`): [`NetworkPlugin`](NetworkPlugin.md)

Creates a new **NetworkPlugin**.

#### Parameters

• **name**: `string`

#### Returns

[`NetworkPlugin`](NetworkPlugin.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/plugins-network.d.ts:17

## Properties

### name

> `readonly` **name**: `string`

The name of the plugin.

 It is recommended to use reverse-domain-notation, which permits
 unique names with a known authority as well as hierarchal entries.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/plugins-network.d.ts:13

## Methods

### clone()

> **clone**(): [`NetworkPlugin`](NetworkPlugin.md)

Creates a copy of this plugin.

#### Returns

[`NetworkPlugin`](NetworkPlugin.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/plugins-network.d.ts:21
