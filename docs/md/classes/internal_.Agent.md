[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Agent

# Class: Agent

[<internal>](../modules/internal_.md).Agent

An `Agent` is responsible for managing connection persistence
and reuse for HTTP clients. It maintains a queue of pending requests
for a given host and port, reusing a single socket connection for each
until the queue is empty, at which time the socket is either destroyed
or put into a pool where it is kept to be used again for requests to the
same host and port. Whether it is destroyed or pooled depends on the`keepAlive` `option`.

Pooled connections have TCP Keep-Alive enabled for them, but servers may
still close idle connections, in which case they will be removed from the
pool and a new connection will be made when a new HTTP request is made for
that host and port. Servers may also refuse to allow multiple requests
over the same connection, in which case the connection will have to be
remade for every request and cannot be pooled. The `Agent` will still make
the requests to that server, but each one will occur over a new connection.

When a connection is closed by the client or the server, it is removed
from the pool. Any unused sockets in the pool will be unrefed so as not
to keep the Node.js process running when there are no outstanding requests.
(see `socket.unref()`).

It is good practice, to `destroy()` an `Agent` instance when it is no
longer in use, because unused sockets consume OS resources.

Sockets are removed from an agent when the socket emits either
a `'close'` event or an `'agentRemove'` event. When intending to keep one
HTTP request open for a long time without keeping it in the agent, something
like the following may be done:

```js
http.get(options, (res) => {
  // Do stuff
}).on('socket', (socket) => {
  socket.emit('agentRemove');
});
```

An agent may also be used for an individual request. By providing`{agent: false}` as an option to the `http.get()` or `http.request()`functions, a one-time use `Agent` with default options
will be used
for the client connection.

`agent:false`:

```js
http.get({
  hostname: 'localhost',
  port: 80,
  path: '/',
  agent: false  // Create a new agent just for this one request
}, (res) => {
  // Do stuff with response
});
```

**`Since`**

v0.3.4

## Hierarchy

- **`Agent`**

  ↳ [`Agent`](internal_.Agent-1.md)

## Table of contents

### Constructors

- [constructor](internal_.Agent.md#constructor)

### Properties

- [freeSockets](internal_.Agent.md#freesockets)
- [maxFreeSockets](internal_.Agent.md#maxfreesockets)
- [maxSockets](internal_.Agent.md#maxsockets)
- [maxTotalSockets](internal_.Agent.md#maxtotalsockets)
- [requests](internal_.Agent.md#requests)
- [sockets](internal_.Agent.md#sockets)

### Methods

- [destroy](internal_.Agent.md#destroy)

## Constructors

### constructor

• **new Agent**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`AgentOptions`](../interfaces/internal_.AgentOptions-1.md) |

## Properties

### freeSockets

• `Readonly` **freeSockets**: [`ReadOnlyDict`](../interfaces/internal_.ReadOnlyDict.md)<[`Socket`](internal_.Socket.md)[]\>

An object which contains arrays of sockets currently awaiting use by
the agent when `keepAlive` is enabled. Do not modify.

Sockets in the `freeSockets` list will be automatically destroyed and
removed from the array on `'timeout'`.

**`Since`**

v0.11.4

#### Defined in

node_modules/@types/node/http.d.ts:1096

___

### maxFreeSockets

• **maxFreeSockets**: `number`

By default set to 256\. For agents with `keepAlive` enabled, this
sets the maximum number of sockets that will be left open in the free
state.

**`Since`**

v0.11.7

#### Defined in

node_modules/@types/node/http.d.ts:1075

___

### maxSockets

• **maxSockets**: `number`

By default set to `Infinity`. Determines how many concurrent sockets the agent
can have open per origin. Origin is the returned value of `agent.getName()`.

**`Since`**

v0.3.6

#### Defined in

node_modules/@types/node/http.d.ts:1081

___

### maxTotalSockets

• **maxTotalSockets**: `number`

By default set to `Infinity`. Determines how many concurrent sockets the agent
can have open. Unlike `maxSockets`, this parameter applies across all origins.

**`Since`**

v14.5.0, v12.19.0

#### Defined in

node_modules/@types/node/http.d.ts:1087

___

### requests

• `Readonly` **requests**: [`ReadOnlyDict`](../interfaces/internal_.ReadOnlyDict.md)<[`IncomingMessage`](internal_.IncomingMessage.md)[]\>

An object which contains queues of requests that have not yet been assigned to
sockets. Do not modify.

**`Since`**

v0.5.9

#### Defined in

node_modules/@types/node/http.d.ts:1108

___

### sockets

• `Readonly` **sockets**: [`ReadOnlyDict`](../interfaces/internal_.ReadOnlyDict.md)<[`Socket`](internal_.Socket.md)[]\>

An object which contains arrays of sockets currently in use by the
agent. Do not modify.

**`Since`**

v0.3.6

#### Defined in

node_modules/@types/node/http.d.ts:1102

## Methods

### destroy

▸ **destroy**(): `void`

Destroy any sockets that are currently in use by the agent.

It is usually not necessary to do this. However, if using an
agent with `keepAlive` enabled, then it is best to explicitly shut down
the agent when it is no longer needed. Otherwise,
sockets might stay open for quite a long time before the server
terminates them.

**`Since`**

v0.11.4

#### Returns

`void`
