[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OnReadOpts

# Interface: OnReadOpts

[<internal>](../modules/internal_.md).OnReadOpts

## Table of contents

### Properties

- [buffer](internal_.OnReadOpts.md#buffer)

### Methods

- [callback](internal_.OnReadOpts.md#callback)

## Properties

### buffer

• **buffer**: `Uint8Array` \| () => `Uint8Array`

#### Defined in

node_modules/@types/node/net.d.ts:33

## Methods

### callback

▸ **callback**(`bytesWritten`, `buf`): `boolean`

This function is called for every chunk of incoming data.
Two arguments are passed to it: the number of bytes written to buffer and a reference to buffer.
Return false from this function to implicitly pause() the socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesWritten` | `number` |
| `buf` | `Uint8Array` |

#### Returns

`boolean`
