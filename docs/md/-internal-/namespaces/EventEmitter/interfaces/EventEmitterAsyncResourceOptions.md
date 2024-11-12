[**@paraswap/sdk**](../../../../README.md) • **Docs**

***

[@paraswap/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [EventEmitter](../README.md) / EventEmitterAsyncResourceOptions

# Interface: EventEmitterAsyncResourceOptions

## Extends

- [`AsyncResourceOptions`](../../../interfaces/AsyncResourceOptions.md).[`EventEmitterOptions`](../../../interfaces/EventEmitterOptions.md)

## Properties

### captureRejections?

> `optional` **captureRejections**: `boolean`

Enables automatic capturing of promise rejection.

#### Inherited from

[`EventEmitterOptions`](../../../interfaces/EventEmitterOptions.md).[`captureRejections`](../../../interfaces/EventEmitterOptions.md#capturerejections)

#### Defined in

node\_modules/@types/node/events.d.ts:77

***

### name?

> `optional` **name**: `string`

The type of async event, this is required when instantiating `EventEmitterAsyncResource`
directly rather than as a child class.

#### Default

```ts
new.target.name if instantiated as a child class.
```

#### Defined in

node\_modules/@types/node/events.d.ts:574

***

### requireManualDestroy?

> `optional` **requireManualDestroy**: `boolean`

Disables automatic `emitDestroy` when the object is garbage collected.
This usually does not need to be set (even if `emitDestroy` is called
manually), unless the resource's `asyncId` is retrieved and the
sensitive API's `emitDestroy` is called with it.

#### Default

```ts
false
```

#### Inherited from

[`AsyncResourceOptions`](../../../interfaces/AsyncResourceOptions.md).[`requireManualDestroy`](../../../interfaces/AsyncResourceOptions.md#requiremanualdestroy)

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:224

***

### triggerAsyncId?

> `optional` **triggerAsyncId**: `number`

The ID of the execution context that created this async event.

#### Default

```ts
executionAsyncId()
```

#### Inherited from

[`AsyncResourceOptions`](../../../interfaces/AsyncResourceOptions.md).[`triggerAsyncId`](../../../interfaces/AsyncResourceOptions.md#triggerasyncid)

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:216
