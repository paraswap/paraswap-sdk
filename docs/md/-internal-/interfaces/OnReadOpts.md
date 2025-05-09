[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OnReadOpts

# Interface: OnReadOpts

## Properties

### buffer

> **buffer**: `Uint8Array` \| () => `Uint8Array`

#### Defined in

node\_modules/@types/node/net.d.ts:38

## Methods

### callback()

> **callback**(`bytesWritten`, `buffer`): `boolean`

This function is called for every chunk of incoming data.
Two arguments are passed to it: the number of bytes written to `buffer` and a reference to `buffer`.
Return `false` from this function to implicitly `pause()` the socket.

#### Parameters

• **bytesWritten**: `number`

• **buffer**: `Uint8Array`

#### Returns

`boolean`

#### Defined in

node\_modules/@types/node/net.d.ts:44
