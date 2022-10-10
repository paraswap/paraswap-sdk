[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TcpSocketConnectOpts

# Interface: TcpSocketConnectOpts

[<internal>](../modules/internal_.md).TcpSocketConnectOpts

## Hierarchy

- [`ConnectOpts`](internal_.ConnectOpts.md)

  ↳ **`TcpSocketConnectOpts`**

## Table of contents

### Properties

- [family](internal_.TcpSocketConnectOpts.md#family)
- [hints](internal_.TcpSocketConnectOpts.md#hints)
- [host](internal_.TcpSocketConnectOpts.md#host)
- [localAddress](internal_.TcpSocketConnectOpts.md#localaddress)
- [localPort](internal_.TcpSocketConnectOpts.md#localport)
- [lookup](internal_.TcpSocketConnectOpts.md#lookup)
- [onread](internal_.TcpSocketConnectOpts.md#onread)
- [port](internal_.TcpSocketConnectOpts.md#port)

## Properties

### family

• `Optional` **family**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:55

___

### hints

• `Optional` **hints**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:54

___

### host

• `Optional` **host**: `string`

#### Defined in

node_modules/@types/node/net.d.ts:51

___

### localAddress

• `Optional` **localAddress**: `string`

#### Defined in

node_modules/@types/node/net.d.ts:52

___

### localPort

• `Optional` **localPort**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:53

___

### lookup

• `Optional` **lookup**: [`LookupFunction`](../modules/internal_.md#lookupfunction)

#### Defined in

node_modules/@types/node/net.d.ts:56

___

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

### port

• **port**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:50
