[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / IpcSocketConnectOpts

# Interface: IpcSocketConnectOpts

[<internal>](../modules/internal_.md).IpcSocketConnectOpts

## Hierarchy

- [`ConnectOpts`](internal_.ConnectOpts.md)

  ↳ **`IpcSocketConnectOpts`**

## Table of contents

### Properties

- [onread](internal_.IpcSocketConnectOpts.md#onread)
- [path](internal_.IpcSocketConnectOpts.md#path)

## Properties

### onread

• `Optional` **onread**: [`OnReadOpts`](internal_.OnReadOpts.md)

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

#### Inherited from

[ConnectOpts](internal_.ConnectOpts.md).[onread](internal_.ConnectOpts.md#onread)

#### Defined in

node_modules/@types/node/net.d.ts:47

___

### path

• **path**: `string`

#### Defined in

node_modules/@types/node/net.d.ts:59
