[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AsyncResource

# Class: AsyncResource

The class `AsyncResource` is designed to be extended by the embedder's async
resources. Using this, users can easily trigger the lifetime events of their
own resources.

The `init` hook will trigger when an `AsyncResource` is instantiated.

The following is an overview of the `AsyncResource` API.

```js
import { AsyncResource, executionAsyncId } from 'node:async_hooks';

// AsyncResource() is meant to be extended. Instantiating a
// new AsyncResource() also triggers init. If triggerAsyncId is omitted then
// async_hook.executionAsyncId() is used.
const asyncResource = new AsyncResource(
  type, { triggerAsyncId: executionAsyncId(), requireManualDestroy: false },
);

// Run a function in the execution context of the resource. This will
// * establish the context of the resource
// * trigger the AsyncHooks before callbacks
// * call the provided function `fn` with the supplied arguments
// * trigger the AsyncHooks after callbacks
// * restore the original execution context
asyncResource.runInAsyncScope(fn, thisArg, ...args);

// Call AsyncHooks destroy callbacks.
asyncResource.emitDestroy();

// Return the unique ID assigned to the AsyncResource instance.
asyncResource.asyncId();

// Return the trigger ID for the AsyncResource instance.
asyncResource.triggerAsyncId();
```

## Extended by

- [`EventEmitterReferencingAsyncResource`](../namespaces/EventEmitter/interfaces/EventEmitterReferencingAsyncResource.md)

## Constructors

### new AsyncResource()

> **new AsyncResource**(`type`, `triggerAsyncId`?): [`AsyncResource`](AsyncResource.md)

AsyncResource() is meant to be extended. Instantiating a
new AsyncResource() also triggers init. If triggerAsyncId is omitted then
async_hook.executionAsyncId() is used.

#### Parameters

• **type**: `string`

The type of async event.

• **triggerAsyncId?**: `number` \| [`AsyncResourceOptions`](../interfaces/AsyncResourceOptions.md)

The ID of the execution context that created
  this async event (default: `executionAsyncId()`), or an
  AsyncResourceOptions object (since v9.3.0)

#### Returns

[`AsyncResource`](AsyncResource.md)

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:273

## Methods

### asyncId()

> **asyncId**(): `number`

#### Returns

`number`

The unique `asyncId` assigned to the resource.

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:317

***

### bind()

> **bind**\<`Func`\>(`fn`): `Func`

Binds the given function to execute to this `AsyncResource`'s scope.

#### Type Parameters

• **Func** *extends* (...`args`) => `any`

#### Parameters

• **fn**: `Func`

The function to bind to the current `AsyncResource`.

#### Returns

`Func`

#### Since

v14.8.0, v12.19.0

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:290

***

### emitDestroy()

> **emitDestroy**(): `this`

Call all `destroy` hooks. This should only ever be called once. An error will
be thrown if it is called more than once. This **must** be manually called. If
the resource is left to be collected by the GC then the `destroy` hooks will
never be called.

#### Returns

`this`

A reference to `asyncResource`.

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:313

***

### runInAsyncScope()

> **runInAsyncScope**\<`This`, `Result`\>(`fn`, `thisArg`?, ...`args`?): `Result`

Call the provided function with the provided arguments in the execution context
of the async resource. This will establish the context, trigger the AsyncHooks
before callbacks, call the function, trigger the AsyncHooks after callbacks, and
then restore the original execution context.

#### Type Parameters

• **This**

• **Result**

#### Parameters

• **fn**

The function to call in the execution context of this async resource.

• **thisArg?**: `This`

The receiver to be used for the function call.

• ...**args?**: `any`[]

Optional arguments to pass to the function.

#### Returns

`Result`

#### Since

v9.6.0

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:301

***

### triggerAsyncId()

> **triggerAsyncId**(): `number`

#### Returns

`number`

The same `triggerAsyncId` that is passed to the `AsyncResource` constructor.

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:321

***

### bind()

> `static` **bind**\<`Func`, `ThisArg`\>(`fn`, `type`?, `thisArg`?): `Func`

Binds the given function to the current execution context.

#### Type Parameters

• **Func** *extends* (`this`, ...`args`) => `any`

• **ThisArg**

#### Parameters

• **fn**: `Func`

The function to bind to the current execution context.

• **type?**: `string`

An optional name to associate with the underlying `AsyncResource`.

• **thisArg?**: `ThisArg`

#### Returns

`Func`

#### Since

v14.8.0, v12.19.0

#### Defined in

node\_modules/@types/node/async\_hooks.d.ts:280
