[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Agent

# Class: Agent

[<internal>](../modules/internal_.md).Agent

An `Agent` object for HTTPS similar to `http.Agent`. See request for more information.

**`Since`**

v0.4.5

## Hierarchy

- [`Agent`](internal_.Agent.md)

  ↳ **`Agent`**

## Table of contents

### Constructors

- [constructor](internal_.Agent-1.md#constructor)

### Properties

- [freeSockets](internal_.Agent-1.md#freesockets)
- [maxFreeSockets](internal_.Agent-1.md#maxfreesockets)
- [maxSockets](internal_.Agent-1.md#maxsockets)
- [maxTotalSockets](internal_.Agent-1.md#maxtotalsockets)
- [options](internal_.Agent-1.md#options)
- [requests](internal_.Agent-1.md#requests)
- [sockets](internal_.Agent-1.md#sockets)

### Methods

- [destroy](internal_.Agent-1.md#destroy)

## Constructors

### constructor

• **new Agent**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AgentOptions`](../interfaces/internal_.AgentOptions.md) |

#### Overrides

[Agent](internal_.Agent.md).[constructor](internal_.Agent.md#constructor)

## Properties

### freeSockets

• `Readonly` **freeSockets**: [`ReadOnlyDict`](../interfaces/internal_.ReadOnlyDict.md)<[`Socket`](internal_.Socket.md)[]\>

An object which contains arrays of sockets currently awaiting use by
the agent when `keepAlive` is enabled. Do not modify.

Sockets in the `freeSockets` list will be automatically destroyed and
removed from the array on `'timeout'`.

**`Since`**

v0.11.4

#### Inherited from

[Agent](internal_.Agent.md).[freeSockets](internal_.Agent.md#freesockets)

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

#### Inherited from

[Agent](internal_.Agent.md).[maxFreeSockets](internal_.Agent.md#maxfreesockets)

#### Defined in

node_modules/@types/node/http.d.ts:1075

___

### maxSockets

• **maxSockets**: `number`

By default set to `Infinity`. Determines how many concurrent sockets the agent
can have open per origin. Origin is the returned value of `agent.getName()`.

**`Since`**

v0.3.6

#### Inherited from

[Agent](internal_.Agent.md).[maxSockets](internal_.Agent.md#maxsockets)

#### Defined in

node_modules/@types/node/http.d.ts:1081

___

### maxTotalSockets

• **maxTotalSockets**: `number`

By default set to `Infinity`. Determines how many concurrent sockets the agent
can have open. Unlike `maxSockets`, this parameter applies across all origins.

**`Since`**

v14.5.0, v12.19.0

#### Inherited from

[Agent](internal_.Agent.md).[maxTotalSockets](internal_.Agent.md#maxtotalsockets)

#### Defined in

node_modules/@types/node/http.d.ts:1087

___

### options

• **options**: [`AgentOptions`](../interfaces/internal_.AgentOptions.md)

#### Defined in

node_modules/@types/node/https.d.ts:27

___

### requests

• `Readonly` **requests**: [`ReadOnlyDict`](../interfaces/internal_.ReadOnlyDict.md)<[`IncomingMessage`](internal_.IncomingMessage.md)[]\>

An object which contains queues of requests that have not yet been assigned to
sockets. Do not modify.

**`Since`**

v0.5.9

#### Inherited from

[Agent](internal_.Agent.md).[requests](internal_.Agent.md#requests)

#### Defined in

node_modules/@types/node/http.d.ts:1108

___

### sockets

• `Readonly` **sockets**: [`ReadOnlyDict`](../interfaces/internal_.ReadOnlyDict.md)<[`Socket`](internal_.Socket.md)[]\>

An object which contains arrays of sockets currently in use by the
agent. Do not modify.

**`Since`**

v0.3.6

#### Inherited from

[Agent](internal_.Agent.md).[sockets](internal_.Agent.md#sockets)

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

#### Inherited from

[Agent](internal_.Agent.md).[destroy](internal_.Agent.md#destroy)
