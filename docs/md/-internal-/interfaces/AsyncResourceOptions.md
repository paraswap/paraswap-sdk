[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AsyncResourceOptions

# Interface: AsyncResourceOptions

## Extended by

- [`EventEmitterAsyncResourceOptions`](../namespaces/EventEmitter/interfaces/EventEmitterAsyncResourceOptions.md)

## Properties

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

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:216
