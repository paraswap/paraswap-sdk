[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AgentOptions

# Interface: AgentOptions

[<internal>](../modules/internal_.md).AgentOptions

Make all properties in T optional

## Hierarchy

- [`Partial`](../modules/internal_.md#partial)<[`TcpSocketConnectOpts`](internal_.TcpSocketConnectOpts.md)\>

  ↳ **`AgentOptions`**

  ↳↳ [`AgentOptions`](internal_.AgentOptions.md)

## Table of contents

### Properties

- [family](internal_.AgentOptions-1.md#family)
- [hints](internal_.AgentOptions-1.md#hints)
- [host](internal_.AgentOptions-1.md#host)
- [keepAlive](internal_.AgentOptions-1.md#keepalive)
- [keepAliveMsecs](internal_.AgentOptions-1.md#keepalivemsecs)
- [localAddress](internal_.AgentOptions-1.md#localaddress)
- [localPort](internal_.AgentOptions-1.md#localport)
- [lookup](internal_.AgentOptions-1.md#lookup)
- [maxFreeSockets](internal_.AgentOptions-1.md#maxfreesockets)
- [maxSockets](internal_.AgentOptions-1.md#maxsockets)
- [maxTotalSockets](internal_.AgentOptions-1.md#maxtotalsockets)
- [onread](internal_.AgentOptions-1.md#onread)
- [port](internal_.AgentOptions-1.md#port)
- [scheduling](internal_.AgentOptions-1.md#scheduling)
- [timeout](internal_.AgentOptions-1.md#timeout)

## Properties

### family

• `Optional` **family**: `number`

#### Inherited from

Partial.family

#### Defined in

node_modules/@types/node/net.d.ts:55

___

### hints

• `Optional` **hints**: `number`

#### Inherited from

Partial.hints

#### Defined in

node_modules/@types/node/net.d.ts:54

___

### host

• `Optional` **host**: `string`

#### Inherited from

Partial.host

#### Defined in

node_modules/@types/node/net.d.ts:51

___

### keepAlive

• `Optional` **keepAlive**: `boolean`

Keep sockets around in a pool to be used by other requests in the future. Default = false

#### Defined in

node_modules/@types/node/http.d.ts:985

___

### keepAliveMsecs

• `Optional` **keepAliveMsecs**: `number`

When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
Only relevant if keepAlive is set to true.

#### Defined in

node_modules/@types/node/http.d.ts:990

___

### localAddress

• `Optional` **localAddress**: `string`

#### Inherited from

Partial.localAddress

#### Defined in

node_modules/@types/node/net.d.ts:52

___

### localPort

• `Optional` **localPort**: `number`

#### Inherited from

Partial.localPort

#### Defined in

node_modules/@types/node/net.d.ts:53

___

### lookup

• `Optional` **lookup**: [`LookupFunction`](../modules/internal_.md#lookupfunction)

#### Inherited from

Partial.lookup

#### Defined in

node_modules/@types/node/net.d.ts:56

___

### maxFreeSockets

• `Optional` **maxFreeSockets**: `number`

Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.

#### Defined in

node_modules/@types/node/http.d.ts:1002

___

### maxSockets

• `Optional` **maxSockets**: `number`

Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity

#### Defined in

node_modules/@types/node/http.d.ts:994

___

### maxTotalSockets

• `Optional` **maxTotalSockets**: `number`

Maximum number of sockets allowed for all hosts in total. Each request will use a new socket until the maximum is reached. Default: Infinity.

#### Defined in

node_modules/@types/node/http.d.ts:998

___

### onread

• `Optional` **onread**: [`OnReadOpts`](internal_.OnReadOpts.md)

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

#### Inherited from

Partial.onread

#### Defined in

node_modules/@types/node/net.d.ts:47

___

### port

• `Optional` **port**: `number`

#### Inherited from

Partial.port

#### Defined in

node_modules/@types/node/net.d.ts:50

___

### scheduling

• `Optional` **scheduling**: ``"fifo"`` \| ``"lifo"``

Scheduling strategy to apply when picking the next free socket to use.

**`Default`**

`lifo`

#### Defined in

node_modules/@types/node/http.d.ts:1011

___

### timeout

• `Optional` **timeout**: `number`

Socket timeout in milliseconds. This will set the timeout after the socket is connected.

#### Defined in

node_modules/@types/node/http.d.ts:1006
