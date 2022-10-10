[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ConnectOpts

# Interface: ConnectOpts

[<internal>](../modules/internal_.md).ConnectOpts

## Hierarchy

- **`ConnectOpts`**

  ↳ [`TcpSocketConnectOpts`](internal_.TcpSocketConnectOpts.md)

  ↳ [`IpcSocketConnectOpts`](internal_.IpcSocketConnectOpts.md)

## Table of contents

### Properties

- [onread](internal_.ConnectOpts.md#onread)

## Properties

### onread

• `Optional` **onread**: [`OnReadOpts`](internal_.OnReadOpts.md)

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

#### Defined in

node_modules/@types/node/net.d.ts:47
