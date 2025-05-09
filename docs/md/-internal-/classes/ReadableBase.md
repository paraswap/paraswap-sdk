[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableBase

# Class: ReadableBase

The `EventEmitter` class is defined and exposed by the `node:events` module:

```js
import { EventEmitter } from 'node:events';
```

All `EventEmitter`s emit the event `'newListener'` when new listeners are
added and `'removeListener'` when existing listeners are removed.

It supports the following option:

## Since

v0.1.26

## Extends

- [`Stream`](Stream.md)

## Extended by

- [`Duplex`](Duplex.md)
- [`Readable`](Readable.md)

## Implements

- [`ReadableStream`](../interfaces/ReadableStream.md)

## Constructors

### new ReadableBase()

> **new ReadableBase**(`opts`?): [`ReadableBase`](ReadableBase.md)

#### Parameters

• **opts?**: [`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md)

#### Returns

[`ReadableBase`](ReadableBase.md)

#### Overrides

[`Stream`](Stream.md).[`constructor`](Stream.md#constructors)

#### Defined in

node\_modules/@types/node/stream.d.ts:132

## Properties

### closed

> `readonly` **closed**: `boolean`

Is `true` after `'close'` has been emitted.

#### Since

v18.0.0

#### Defined in

node\_modules/@types/node/stream.d.ts:126

***

### destroyed

> **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

#### Since

v8.0.0

#### Defined in

node\_modules/@types/node/stream.d.ts:121

***

### errored

> `readonly` **errored**: `null` \| [`Error`](../interfaces/Error.md)

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

#### Defined in

node\_modules/@types/node/stream.d.ts:131

***

### readable

> **readable**: `boolean`

Is `true` if it is safe to call [read](ReadableBase.md#read), which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Since

v11.4.0

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`readable`](../interfaces/ReadableStream.md#readable)

#### Defined in

node\_modules/@types/node/stream.d.ts:77

***

### readableAborted

> `readonly` **readableAborted**: `boolean`

**`Experimental`**

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Since

v16.8.0

#### Defined in

node\_modules/@types/node/stream.d.ts:71

***

### readableDidRead

> `readonly` **readableDidRead**: `boolean`

**`Experimental`**

Returns whether `'data'` has been emitted.

#### Since

v16.7.0, v14.18.0

#### Defined in

node\_modules/@types/node/stream.d.ts:83

***

### readableEncoding

> `readonly` **readableEncoding**: `null` \| [`BufferEncoding`](../type-aliases/BufferEncoding.md)

Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](ReadableBase.md#setencoding) method.

#### Since

v12.7.0

#### Defined in

node\_modules/@types/node/stream.d.ts:88

***

### readableEnded

> `readonly` **readableEnded**: `boolean`

Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v22.x/api/stream.html#event-end) event is emitted.

#### Since

v12.9.0

#### Defined in

node\_modules/@types/node/stream.d.ts:93

***

### readableFlowing

> `readonly` **readableFlowing**: `null` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the [Three states](https://nodejs.org/docs/latest-v22.x/api/stream.html#three-states) section.

#### Since

v9.4.0

#### Defined in

node\_modules/@types/node/stream.d.ts:99

***

### readableHighWaterMark

> `readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Since

v9.3.0

#### Defined in

node\_modules/@types/node/stream.d.ts:104

***

### readableLength

> `readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Since

v9.4.0

#### Defined in

node\_modules/@types/node/stream.d.ts:111

***

### readableObjectMode

> `readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

#### Since

v12.3.0

#### Defined in

node\_modules/@types/node/stream.d.ts:116

***

### captureRejections

> `static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### Since

v13.4.0, v12.16.0

#### Inherited from

[`Stream`](Stream.md).[`captureRejections`](Stream.md#capturerejections)

#### Defined in

node\_modules/@types/node/events.d.ts:512

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](EventEmitter.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### Since

v13.4.0, v12.16.0

#### Inherited from

[`Stream`](Stream.md).[`captureRejectionSymbol`](Stream.md#capturerejectionsymbol)

#### Defined in

node\_modules/@types/node/events.d.ts:505

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners` property
can be used. If this value is not a positive number, a `RangeError` is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_ `EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single
`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

#### Since

v0.11.2

#### Inherited from

[`Stream`](Stream.md).[`defaultMaxListeners`](Stream.md#defaultmaxlisteners)

#### Defined in

node\_modules/@types/node/events.d.ts:551

***

### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](EventEmitter.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

#### Since

v13.6.0, v12.17.0

#### Inherited from

[`Stream`](Stream.md).[`errorMonitor`](Stream.md#errormonitor)

#### Defined in

node\_modules/@types/node/events.d.ts:498

## Methods

### \_construct()?

> `optional` **\_construct**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:133

***

### \_destroy()

> **\_destroy**(`error`, `callback`): `void`

#### Parameters

• **error**: `null` \| [`Error`](../interfaces/Error.md)

• **callback**

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:574

***

### \_read()

> **\_read**(`size`): `void`

#### Parameters

• **size**: `number`

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:134

***

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### Returns

`Promise`\<`void`\>

#### Since

v20.4.0

#### Defined in

node\_modules/@types/node/stream.d.ts:659

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<`any`, `any`, `any`\>

#### Returns

`AsyncIterator`\<`any`, `any`, `any`\>

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`[asyncIterator]`](../interfaces/ReadableStream.md#%5Basynciterator%5D-1)

#### Defined in

node\_modules/@types/node/stream.d.ts:654

***

### \[captureRejectionSymbol\]()?

#### \[captureRejectionSymbol\](error, event, args)

> `optional` **\[captureRejectionSymbol\]**\<`EventName`\>(`error`, `event`, ...`args`): `void`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **error**: [`Error`](../interfaces/Error.md)

• **event**: `EventName`

• ...**args**: [`Args`](../type-aliases/Args.md)\<`object`, `EventName`\>

##### Returns

`void`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`[captureRejectionSymbol]`](../interfaces/ReadableStream.md#%5Bcapturerejectionsymbol%5D)

##### Inherited from

[`Stream`](Stream.md).[`[captureRejectionSymbol]`](Stream.md#%5Bcapturerejectionsymbol%5D)

##### Defined in

node\_modules/@types/node/events.d.ts:146

#### \[captureRejectionSymbol\](error, event, args)

> `optional` **\[captureRejectionSymbol\]**(`error`, `event`, ...`args`): `void`

##### Parameters

• **error**: [`Error`](../interfaces/Error.md)

• **event**: `string` \| `symbol`

• ...**args**: `any`[]

##### Returns

`void`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`[captureRejectionSymbol]`](../interfaces/ReadableStream.md#%5Bcapturerejectionsymbol%5D)

##### Inherited from

[`Stream`](Stream.md).[`[captureRejectionSymbol]`](Stream.md#%5Bcapturerejectionsymbol%5D)

##### Defined in

node\_modules/@types/node/events.d.ts:151

***

### addListener()

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`addListener`](../interfaces/ReadableStream.md#addlistener)

##### Overrides

[`Stream`](Stream.md).[`addListener`](Stream.md#addlistener)

##### Defined in

node\_modules/@types/node/stream.d.ts:598

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`addListener`](../interfaces/ReadableStream.md#addlistener)

##### Overrides

[`Stream`](Stream.md).[`addListener`](Stream.md#addlistener)

##### Defined in

node\_modules/@types/node/stream.d.ts:599

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.addListener`

##### Overrides

`Stream.addListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:600

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.addListener`

##### Overrides

`Stream.addListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:601

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.addListener`

##### Overrides

`Stream.addListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:602

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.addListener`

##### Overrides

`Stream.addListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:603

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.addListener`

##### Overrides

`Stream.addListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:604

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.addListener`

##### Overrides

`Stream.addListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:605

***

### asIndexedPairs()

> **asIndexedPairs**(`options`?): [`Readable`](Readable.md)

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### Parameters

• **options?**: [`Pick`](../type-aliases/Pick.md)\<[`ArrayOptions`](../interfaces/ArrayOptions.md), `"signal"`\>

#### Returns

[`Readable`](Readable.md)

a stream of indexed pairs.

#### Since

v17.5.0

#### Defined in

node\_modules/@types/node/stream.d.ts:549

***

### compose()

> **compose**\<`T`\>(`stream`, `options`?): `T`

#### Type Parameters

• **T** *extends* [`ReadableStream`](../interfaces/ReadableStream.md)

#### Parameters

• **stream**: [`ComposeFnParam`](../type-aliases/ComposeFnParam.md) \| `T` \| [`Iterable`](../interfaces/Iterable.md)\<`T`, `any`, `any`\> \| [`AsyncIterable`](../interfaces/AsyncIterable.md)\<`T`, `any`, `any`\>

• **options?**

• **options.signal?**: `AbortSignal`

#### Returns

`T`

#### Inherited from

[`Stream`](Stream.md).[`compose`](Stream.md#compose)

#### Defined in

node\_modules/@types/node/stream.d.ts:36

***

### destroy()

> **destroy**(`error`?): `this`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

• **error?**: [`Error`](../interfaces/Error.md)

Error which will be passed as payload in `'error'` event

#### Returns

`this`

#### Since

v8.0.0

#### Defined in

node\_modules/@types/node/stream.d.ts:586

***

### drop()

> **drop**(`limit`, `options`?): [`Readable`](Readable.md)

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

• **limit**: `number`

the number of chunks to drop from the readable.

• **options?**: [`Pick`](../type-aliases/Pick.md)\<[`ArrayOptions`](../interfaces/ArrayOptions.md), `"signal"`\>

#### Returns

[`Readable`](Readable.md)

a stream with *limit* chunks dropped from the start.

#### Since

v17.5.0

#### Defined in

node\_modules/@types/node/stream.d.ts:535

***

### emit()

#### emit(event)

> **emit**(`event`): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Parameters

• **event**: `"close"`

##### Returns

`boolean`

##### Since

v0.1.26

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`emit`](../interfaces/ReadableStream.md#emit)

##### Overrides

[`Stream`](Stream.md).[`emit`](Stream.md#emit)

##### Defined in

node\_modules/@types/node/stream.d.ts:606

#### emit(event, chunk)

> **emit**(`event`, `chunk`): `boolean`

##### Parameters

• **event**: `"data"`

• **chunk**: `any`

##### Returns

`boolean`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`emit`](../interfaces/ReadableStream.md#emit)

##### Overrides

[`Stream`](Stream.md).[`emit`](Stream.md#emit)

##### Defined in

node\_modules/@types/node/stream.d.ts:607

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"end"`

##### Returns

`boolean`

##### Implementation of

`NodeJS.ReadableStream.emit`

##### Overrides

`Stream.emit`

##### Defined in

node\_modules/@types/node/stream.d.ts:608

#### emit(event, err)

> **emit**(`event`, `err`): `boolean`

##### Parameters

• **event**: `"error"`

• **err**: [`Error`](../interfaces/Error.md)

##### Returns

`boolean`

##### Implementation of

`NodeJS.ReadableStream.emit`

##### Overrides

`Stream.emit`

##### Defined in

node\_modules/@types/node/stream.d.ts:609

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"pause"`

##### Returns

`boolean`

##### Implementation of

`NodeJS.ReadableStream.emit`

##### Overrides

`Stream.emit`

##### Defined in

node\_modules/@types/node/stream.d.ts:610

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"readable"`

##### Returns

`boolean`

##### Implementation of

`NodeJS.ReadableStream.emit`

##### Overrides

`Stream.emit`

##### Defined in

node\_modules/@types/node/stream.d.ts:611

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"resume"`

##### Returns

`boolean`

##### Implementation of

`NodeJS.ReadableStream.emit`

##### Overrides

`Stream.emit`

##### Defined in

node\_modules/@types/node/stream.d.ts:612

#### emit(event, args)

> **emit**(`event`, ...`args`): `boolean`

##### Parameters

• **event**: `string` \| `symbol`

• ...**args**: `any`[]

##### Returns

`boolean`

##### Implementation of

`NodeJS.ReadableStream.emit`

##### Overrides

`Stream.emit`

##### Defined in

node\_modules/@types/node/stream.d.ts:613

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`eventNames`](../interfaces/ReadableStream.md#eventnames)

#### Inherited from

[`Stream`](Stream.md).[`eventNames`](Stream.md#eventnames)

#### Defined in

node\_modules/@types/node/events.d.ts:1065

***

### every()

> **every**(`fn`, `options`?): `Promise`\<`boolean`\>

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

• **fn**

a function to call on each chunk of the stream. Async or not.

• **options?**: [`ArrayOptions`](../interfaces/ArrayOptions.md)

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

#### Since

v17.5.0

#### Defined in

node\_modules/@types/node/stream.d.ts:514

***

### filter()

> **filter**(`fn`, `options`?): [`Readable`](Readable.md)

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

• **fn**

a function to filter chunks from the stream. Async or not.

• **options?**: [`ArrayOptions`](../interfaces/ArrayOptions.md)

#### Returns

[`Readable`](Readable.md)

a stream filtered with the predicate *fn*.

#### Since

v17.4.0, v16.14.0

#### Defined in

node\_modules/@types/node/stream.d.ts:442

***

### find()

#### find(fn, options)

> **find**\<`T`\>(`fn`, `options`?): `Promise`\<`undefined` \| `T`\>

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Type Parameters

• **T**

##### Parameters

• **fn**

a function to call on each chunk of the stream. Async or not.

• **options?**: [`ArrayOptions`](../interfaces/ArrayOptions.md)

##### Returns

`Promise`\<`undefined` \| `T`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Defined in

node\_modules/@types/node/stream.d.ts:497

#### find(fn, options)

> **find**(`fn`, `options`?): `Promise`\<`any`\>

##### Parameters

• **fn**

• **options?**: [`ArrayOptions`](../interfaces/ArrayOptions.md)

##### Returns

`Promise`\<`any`\>

##### Defined in

node\_modules/@types/node/stream.d.ts:501

***

### flatMap()

> **flatMap**(`fn`, `options`?): [`Readable`](Readable.md)

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

• **fn**

a function to map over every chunk in the stream. May be async. May be a stream or generator.

• **options?**: [`ArrayOptions`](../interfaces/ArrayOptions.md)

#### Returns

[`Readable`](Readable.md)

a stream flat-mapped with the function *fn*.

#### Since

v17.5.0

#### Defined in

node\_modules/@types/node/stream.d.ts:528

***

### forEach()

> **forEach**(`fn`, `options`?): `Promise`\<`void`\>

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### Parameters

• **fn**

a function to call on each chunk of the stream. Async or not.

• **options?**: [`ArrayOptions`](../interfaces/ArrayOptions.md)

#### Returns

`Promise`\<`void`\>

a promise for when the stream has finished.

#### Since

v17.5.0

#### Defined in

node\_modules/@types/node/stream.d.ts:461

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](ReadableBase.md#defaultmaxlisteners).

#### Returns

`number`

#### Since

v1.0.0

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`getMaxListeners`](../interfaces/ReadableStream.md#getmaxlisteners)

#### Inherited from

[`Stream`](Stream.md).[`getMaxListeners`](Stream.md#getmaxlisteners)

#### Defined in

node\_modules/@types/node/events.d.ts:879

***

### isPaused()

> **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

#### Since

v0.11.14

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`isPaused`](../interfaces/ReadableStream.md#ispaused)

#### Defined in

node\_modules/@types/node/stream.d.ts:295

***

### iterator()

> **iterator**(`options`?): `AsyncIterator`\<`any`, `any`, `any`\>

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

• **options?**

• **options.destroyOnReturn?**: `boolean`

When set to `false`, calling `return` on the async iterator,
or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream.
**Default: `true`**.

#### Returns

`AsyncIterator`\<`any`, `any`, `any`\>

#### Since

v16.3.0

#### Defined in

node\_modules/@types/node/stream.d.ts:425

***

### listenerCount()

#### listenerCount(eventName, listener)

> **listenerCount**\<`EventName`\>(`eventName`, `listener`?): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

The name of the event being listened for

• **listener?**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

The event handler function

##### Returns

`number`

##### Since

v3.2.0

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`listenerCount`](../interfaces/ReadableStream.md#listenercount)

##### Inherited from

[`Stream`](Stream.md).[`listenerCount`](Stream.md#listenercount)

##### Defined in

node\_modules/@types/node/events.d.ts:990

#### listenerCount(eventName, listener)

> **listenerCount**\<`EventName`\>(`eventName`, `listener`?): `number`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener?**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`number`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`listenerCount`](../interfaces/ReadableStream.md#listenercount)

##### Inherited from

[`Stream`](Stream.md).[`listenerCount`](Stream.md#listenercount)

##### Defined in

node\_modules/@types/node/events.d.ts:994

***

### listeners()

#### listeners(eventName)

> **listeners**\<`EventName`\>(`eventName`): [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

##### Returns

[`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>[]

##### Since

v0.1.26

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`listeners`](../interfaces/ReadableStream.md#listeners)

##### Inherited from

[`Stream`](Stream.md).[`listeners`](Stream.md#listeners)

##### Defined in

node\_modules/@types/node/events.d.ts:892

#### listeners(eventName)

> **listeners**\<`EventName`\>(`eventName`): [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>[]

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

##### Returns

[`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>[]

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`listeners`](../interfaces/ReadableStream.md#listeners)

##### Inherited from

[`Stream`](Stream.md).[`listeners`](Stream.md#listeners)

##### Defined in

node\_modules/@types/node/events.d.ts:895

***

### map()

> **map**(`fn`, `options`?): [`Readable`](Readable.md)

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

• **fn**

a function to map over every chunk in the stream. Async or not.

• **options?**: [`ArrayOptions`](../interfaces/ArrayOptions.md)

#### Returns

[`Readable`](Readable.md)

a stream mapped with the function *fn*.

#### Since

v17.4.0, v16.14.0

#### Defined in

node\_modules/@types/node/stream.d.ts:433

***

### off()

#### off(eventName, listener)

> **off**\<`EventName`\>(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Since

v10.0.0

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`off`](../interfaces/ReadableStream.md#off)

##### Inherited from

[`Stream`](Stream.md).[`off`](Stream.md#off)

##### Defined in

node\_modules/@types/node/events.d.ts:842

#### off(eventName, listener)

> **off**\<`EventName`\>(`eventName`, `listener`): `this`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`off`](../interfaces/ReadableStream.md#off)

##### Inherited from

[`Stream`](Stream.md).[`off`](Stream.md#off)

##### Defined in

node\_modules/@types/node/events.d.ts:846

***

### on()

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"close"`

• **listener**

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`on`](../interfaces/ReadableStream.md#on)

##### Overrides

[`Stream`](Stream.md).[`on`](Stream.md#on)

##### Defined in

node\_modules/@types/node/stream.d.ts:614

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`on`](../interfaces/ReadableStream.md#on)

##### Overrides

[`Stream`](Stream.md).[`on`](Stream.md#on)

##### Defined in

node\_modules/@types/node/stream.d.ts:615

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.on`

##### Overrides

`Stream.on`

##### Defined in

node\_modules/@types/node/stream.d.ts:616

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.on`

##### Overrides

`Stream.on`

##### Defined in

node\_modules/@types/node/stream.d.ts:617

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.on`

##### Overrides

`Stream.on`

##### Defined in

node\_modules/@types/node/stream.d.ts:618

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.on`

##### Overrides

`Stream.on`

##### Defined in

node\_modules/@types/node/stream.d.ts:619

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.on`

##### Overrides

`Stream.on`

##### Defined in

node\_modules/@types/node/stream.d.ts:620

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.on`

##### Overrides

`Stream.on`

##### Defined in

node\_modules/@types/node/stream.d.ts:621

***

### once()

#### once(event, listener)

> **once**(`event`, `listener`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"close"`

• **listener**

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`once`](../interfaces/ReadableStream.md#once)

##### Overrides

[`Stream`](Stream.md).[`once`](Stream.md#once)

##### Defined in

node\_modules/@types/node/stream.d.ts:622

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`once`](../interfaces/ReadableStream.md#once)

##### Overrides

[`Stream`](Stream.md).[`once`](Stream.md#once)

##### Defined in

node\_modules/@types/node/stream.d.ts:623

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.once`

##### Overrides

`Stream.once`

##### Defined in

node\_modules/@types/node/stream.d.ts:624

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.once`

##### Overrides

`Stream.once`

##### Defined in

node\_modules/@types/node/stream.d.ts:625

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.once`

##### Overrides

`Stream.once`

##### Defined in

node\_modules/@types/node/stream.d.ts:626

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.once`

##### Overrides

`Stream.once`

##### Defined in

node\_modules/@types/node/stream.d.ts:627

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.once`

##### Overrides

`Stream.once`

##### Defined in

node\_modules/@types/node/stream.d.ts:628

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.once`

##### Overrides

`Stream.once`

##### Defined in

node\_modules/@types/node/stream.d.ts:629

***

### pause()

> **pause**(): `this`

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'` event listener.

#### Returns

`this`

#### Since

v0.9.4

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`pause`](../interfaces/ReadableStream.md#pause)

#### Defined in

node\_modules/@types/node/stream.d.ts:259

***

### pipe()

> **pipe**\<`T`\>(`destination`, `options`?): `T`

#### Type Parameters

• **T** *extends* [`WritableStream`](../interfaces/WritableStream.md)

#### Parameters

• **destination**: `T`

• **options?**

• **options.end?**: `boolean`

#### Returns

`T`

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`pipe`](../interfaces/ReadableStream.md#pipe)

#### Inherited from

[`Stream`](Stream.md).[`pipe`](Stream.md#pipe)

#### Defined in

node\_modules/@types/node/stream.d.ts:30

***

### prependListener()

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

• **event**: `"close"`

• **listener**

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`prependListener`](../interfaces/ReadableStream.md#prependlistener)

##### Overrides

[`Stream`](Stream.md).[`prependListener`](Stream.md#prependlistener)

##### Defined in

node\_modules/@types/node/stream.d.ts:630

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`prependListener`](../interfaces/ReadableStream.md#prependlistener)

##### Overrides

[`Stream`](Stream.md).[`prependListener`](Stream.md#prependlistener)

##### Defined in

node\_modules/@types/node/stream.d.ts:631

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependListener`

##### Overrides

`Stream.prependListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:632

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependListener`

##### Overrides

`Stream.prependListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:633

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependListener`

##### Overrides

`Stream.prependListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:634

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependListener`

##### Overrides

`Stream.prependListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:635

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependListener`

##### Overrides

`Stream.prependListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:636

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependListener`

##### Overrides

`Stream.prependListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:637

***

### prependOnceListener()

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

• **event**: `"close"`

• **listener**

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`prependOnceListener`](../interfaces/ReadableStream.md#prependoncelistener)

##### Overrides

[`Stream`](Stream.md).[`prependOnceListener`](Stream.md#prependoncelistener)

##### Defined in

node\_modules/@types/node/stream.d.ts:638

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`prependOnceListener`](../interfaces/ReadableStream.md#prependoncelistener)

##### Overrides

[`Stream`](Stream.md).[`prependOnceListener`](Stream.md#prependoncelistener)

##### Defined in

node\_modules/@types/node/stream.d.ts:639

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:640

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:641

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:642

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:643

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:644

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:645

***

### push()

> **push**(`chunk`, `encoding`?): `boolean`

#### Parameters

• **chunk**: `any`

• **encoding?**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

#### Returns

`boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:415

***

### rawListeners()

#### rawListeners(eventName)

> **rawListeners**\<`EventName`\>(`eventName`): [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

##### Returns

[`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>[]

##### Since

v9.4.0

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`rawListeners`](../interfaces/ReadableStream.md#rawlisteners)

##### Inherited from

[`Stream`](Stream.md).[`rawListeners`](Stream.md#rawlisteners)

##### Defined in

node\_modules/@types/node/events.d.ts:928

#### rawListeners(eventName)

> **rawListeners**\<`EventName`\>(`eventName`): [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>[]

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

##### Returns

[`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>[]

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`rawListeners`](../interfaces/ReadableStream.md#rawlisteners)

##### Inherited from

[`Stream`](Stream.md).[`rawListeners`](Stream.md#rawlisteners)

##### Defined in

node\_modules/@types/node/events.d.ts:931

***

### read()

> **read**(`size`?): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](ReadableBase.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

• **size?**: `number`

Optional argument to specify how much data to read.

#### Returns

`any`

#### Since

v0.9.4

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`read`](../interfaces/ReadableStream.md#read)

#### Defined in

node\_modules/@types/node/stream.d.ts:212

***

### reduce()

#### reduce(fn, initial, options)

> **reduce**\<`T`\>(`fn`, `initial`?, `options`?): `Promise`\<`T`\>

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

• **T** = `any`

##### Parameters

• **fn**

a reducer function to call over every chunk in the stream. Async or not.

• **initial?**: `undefined`

the initial value to use in the reduction.

• **options?**: [`Pick`](../type-aliases/Pick.md)\<[`ArrayOptions`](../interfaces/ArrayOptions.md), `"signal"`\>

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Defined in

node\_modules/@types/node/stream.d.ts:564

#### reduce(fn, initial, options)

> **reduce**\<`T`\>(`fn`, `initial`, `options`?): `Promise`\<`T`\>

##### Type Parameters

• **T** = `any`

##### Parameters

• **fn**

• **initial**: `T`

• **options?**: [`Pick`](../type-aliases/Pick.md)\<[`ArrayOptions`](../interfaces/ArrayOptions.md), `"signal"`\>

##### Returns

`Promise`\<`T`\>

##### Defined in

node\_modules/@types/node/stream.d.ts:569

***

### removeAllListeners()

#### removeAllListeners(eventName)

> **removeAllListeners**\<`EventName`\>(`eventName`): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

##### Returns

`this`

##### Since

v0.1.26

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`removeAllListeners`](../interfaces/ReadableStream.md#removealllisteners)

##### Inherited from

[`Stream`](Stream.md).[`removeAllListeners`](Stream.md#removealllisteners)

##### Defined in

node\_modules/@types/node/events.d.ts:861

#### removeAllListeners(eventName)

> **removeAllListeners**\<`EventName`\>(`eventName`?): `this`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName?**: `EventName`

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`removeAllListeners`](../interfaces/ReadableStream.md#removealllisteners)

##### Inherited from

[`Stream`](Stream.md).[`removeAllListeners`](Stream.md#removealllisteners)

##### Defined in

node\_modules/@types/node/events.d.ts:862

***

### removeListener()

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Since

v0.1.26

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`removeListener`](../interfaces/ReadableStream.md#removelistener)

##### Overrides

[`Stream`](Stream.md).[`removeListener`](Stream.md#removelistener)

##### Defined in

node\_modules/@types/node/stream.d.ts:646

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`removeListener`](../interfaces/ReadableStream.md#removelistener)

##### Overrides

[`Stream`](Stream.md).[`removeListener`](Stream.md#removelistener)

##### Defined in

node\_modules/@types/node/stream.d.ts:647

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.removeListener`

##### Overrides

`Stream.removeListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:648

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.removeListener`

##### Overrides

`Stream.removeListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:649

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.removeListener`

##### Overrides

`Stream.removeListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:650

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.removeListener`

##### Overrides

`Stream.removeListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:651

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.removeListener`

##### Overrides

`Stream.removeListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:652

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Implementation of

`NodeJS.ReadableStream.removeListener`

##### Overrides

`Stream.removeListener`

##### Defined in

node\_modules/@types/node/stream.d.ts:653

***

### resume()

> **resume**(): `this`

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'` event listener.

#### Returns

`this`

#### Since

v0.9.4

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`resume`](../interfaces/ReadableStream.md#resume)

#### Defined in

node\_modules/@types/node/stream.d.ts:278

***

### setEncoding()

> **setEncoding**(`encoding`): `this`

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as `Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer` objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling `readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### Parameters

• **encoding**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

The encoding to use.

#### Returns

`this`

#### Since

v0.9.4

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`setEncoding`](../interfaces/ReadableStream.md#setencoding)

#### Defined in

node\_modules/@types/node/stream.d.ts:237

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Since

v0.3.5

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`setMaxListeners`](../interfaces/ReadableStream.md#setmaxlisteners)

#### Inherited from

[`Stream`](Stream.md).[`setMaxListeners`](Stream.md#setmaxlisteners)

#### Defined in

node\_modules/@types/node/events.d.ts:873

***

### some()

> **some**(`fn`, `options`?): `Promise`\<`boolean`\>

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

• **fn**

a function to call on each chunk of the stream. Async or not.

• **options?**: [`ArrayOptions`](../interfaces/ArrayOptions.md)

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

#### Since

v17.5.0

#### Defined in

node\_modules/@types/node/stream.d.ts:483

***

### take()

> **take**(`limit`, `options`?): [`Readable`](Readable.md)

This method returns a new stream with the first *limit* chunks.

#### Parameters

• **limit**: `number`

the number of chunks to take from the readable.

• **options?**: [`Pick`](../type-aliases/Pick.md)\<[`ArrayOptions`](../interfaces/ArrayOptions.md), `"signal"`\>

#### Returns

[`Readable`](Readable.md)

a stream with *limit* chunks taken.

#### Since

v17.5.0

#### Defined in

node\_modules/@types/node/stream.d.ts:542

***

### toArray()

> **toArray**(`options`?): `Promise`\<`any`[]\>

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

• **options?**: [`Pick`](../type-aliases/Pick.md)\<[`ArrayOptions`](../interfaces/ArrayOptions.md), `"signal"`\>

#### Returns

`Promise`\<`any`[]\>

a promise containing an array with the contents of the stream.

#### Since

v17.5.0

#### Defined in

node\_modules/@types/node/stream.d.ts:473

***

### unpipe()

> **unpipe**(`destination`?): `this`

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](ReadableBase.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
import fs from 'node:fs';
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

• **destination?**: [`WritableStream`](../interfaces/WritableStream.md)

Optional specific stream to unpipe

#### Returns

`this`

#### Since

v0.9.4

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`unpipe`](../interfaces/ReadableStream.md#unpipe)

#### Defined in

node\_modules/@types/node/stream.d.ts:322

***

### unshift()

> **unshift**(`chunk`, `encoding`?): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
import { StringDecoder } from 'node:string_decoder';
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](ReadableBase.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](ReadableBase.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](ReadableBase.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

• **chunk**: `any`

Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must
be a {string}, {Buffer}, {TypedArray}, {DataView} or `null`. For object mode streams, `chunk` may be any JavaScript value.

• **encoding?**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`.

#### Returns

`void`

#### Since

v0.9.11

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`unshift`](../interfaces/ReadableStream.md#unshift)

#### Defined in

node\_modules/@types/node/stream.d.ts:388

***

### wrap()

> **wrap**(`stream`): `this`

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](ReadableBase.md#pause) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
import { OldReader } from './old-api-module.js';
import { Readable } from 'node:stream';
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

• **stream**: [`ReadableStream`](../interfaces/ReadableStream.md)

An "old style" readable stream

#### Returns

`this`

#### Since

v0.9.4

#### Implementation of

[`ReadableStream`](../interfaces/ReadableStream.md).[`wrap`](../interfaces/ReadableStream.md#wrap)

#### Defined in

node\_modules/@types/node/stream.d.ts:414

***

### addAbortListener()

> `static` **addAbortListener**(`signal`, `resource`): [`Disposable`](../interfaces/Disposable.md)

**`Experimental`**

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

• **signal**: `AbortSignal`

• **resource**

#### Returns

[`Disposable`](../interfaces/Disposable.md)

Disposable that removes the `abort` listener.

#### Since

v20.5.0

#### Inherited from

[`Stream`](Stream.md).[`addAbortListener`](Stream.md#addabortlistener)

#### Defined in

node\_modules/@types/node/events.d.ts:490

***

### from()

> `static` **from**(`iterable`, `options`?): [`Readable`](Readable.md)

A utility method for creating Readable Streams out of iterators.

#### Parameters

• **iterable**: [`Iterable`](../interfaces/Iterable.md)\<`any`, `any`, `any`\> \| [`AsyncIterable`](../interfaces/AsyncIterable.md)\<`any`, `any`, `any`\>

Object implementing the `Symbol.asyncIterator` or `Symbol.iterator` iterable protocol. Emits an 'error' event if a null value is passed.

• **options?**: [`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md)

Options provided to `new stream.Readable([options])`. By default, `Readable.from()` will set `options.objectMode` to `true`, unless this is explicitly opted out by setting `options.objectMode` to `false`.

#### Returns

[`Readable`](Readable.md)

#### Since

v12.3.0, v10.17.0

#### Defined in

node\_modules/@types/node/stream.d.ts:60

***

### getEventListeners()

#### getEventListeners(emitter, name)

> `static` **getEventListeners**\<`Events`, `EventName`\>(`emitter`, `name`): [`Listener`](../type-aliases/Listener.md)\<`Events`, `EventName`\>[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

##### Type Parameters

• **Events** *extends* [`EventMap`](../type-aliases/EventMap.md)\<`Events`\>

• **EventName** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **emitter**: [`EventEmitter`](EventEmitter.md)\<`Events`\>

• **name**: `EventName`

##### Returns

[`Listener`](../type-aliases/Listener.md)\<`Events`, `EventName`\>[]

##### Since

v15.2.0, v14.17.0

##### Inherited from

[`Stream`](Stream.md).[`getEventListeners`](Stream.md#geteventlisteners)

##### Defined in

node\_modules/@types/node/events.d.ts:404

#### getEventListeners(emitter, name)

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

##### Parameters

• **emitter**: `EventTarget` \| [`EventEmitter`](../interfaces/EventEmitter.md)\<`object`\>

• **name**: `string` \| `symbol`

##### Returns

`Function`[]

##### Inherited from

[`Stream`](Stream.md).[`getEventListeners`](Stream.md#geteventlisteners)

##### Defined in

node\_modules/@types/node/events.d.ts:408

***

### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

• **emitter**: `EventTarget` \| [`EventEmitter`](../interfaces/EventEmitter.md)\<`object`\>

#### Returns

`number`

#### Since

v19.9.0

#### Inherited from

[`Stream`](Stream.md).[`getMaxListeners`](Stream.md#getmaxlisteners-1)

#### Defined in

node\_modules/@types/node/events.d.ts:440

***

### isDisturbed()

> `static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

#### Parameters

• **stream**: [`ReadableStream`](../interfaces/ReadableStream.md) \| [`Readable`](Readable.md)

#### Returns

`boolean`

#### Since

v16.8.0

#### Defined in

node\_modules/@types/node/stream.d.ts:65

***

### ~~listenerCount()~~

#### listenerCount(emitter, eventName)

> `static` **listenerCount**\<`Events`, `EventName`\>(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

##### Type Parameters

• **Events** *extends* [`EventMap`](../type-aliases/EventMap.md)\<`Events`\>

• **EventName** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **emitter**: [`EventEmitter`](EventEmitter.md)\<`Events`\>

The emitter to query

• **eventName**: `EventName`

The event name

##### Returns

`number`

##### Since

v0.9.12

##### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

##### Inherited from

[`Stream`](Stream.md).[`listenerCount`](Stream.md#listenercount-1)

##### Defined in

node\_modules/@types/node/events.d.ts:355

#### listenerCount(emitter, eventName)

> `static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

##### Parameters

• **emitter**: [`EventEmitter`](../interfaces/EventEmitter.md)\<`object`\>

The emitter to query

• **eventName**: `string` \| `symbol`

The event name

##### Returns

`number`

##### Since

v0.9.12

##### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

##### Inherited from

[`Stream`](Stream.md).[`listenerCount`](Stream.md#listenercount-1)

##### Defined in

node\_modules/@types/node/events.d.ts:376

***

### on()

#### on(emitter, eventName, options)

> `static` **on**\<`Events`, `EventName`\>(`emitter`, `eventName`, `options`?): `AsyncIterator`\<[`Args`](../type-aliases/Args.md)\<`Events`, `EventName`\>, `any`, `any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Type Parameters

• **Events** *extends* [`EventMap`](../type-aliases/EventMap.md)\<`Events`\>

• **EventName** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **emitter**: [`EventEmitter`](EventEmitter.md)\<`Events`\>

• **eventName**: `EventName`

• **options?**: [`StaticEventEmitterIteratorOptions`](../interfaces/StaticEventEmitterIteratorOptions.md)

##### Returns

`AsyncIterator`\<[`Args`](../type-aliases/Args.md)\<`Events`, `EventName`\>, `any`, `any`\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Inherited from

[`Stream`](Stream.md).[`on`](Stream.md#on-1)

##### Defined in

node\_modules/@types/node/events.d.ts:323

#### on(emitter, eventName, options)

> `static` **on**(`emitter`, `eventName`, `options`?): `AsyncIterator`\<`any`[], `any`, `any`\>

##### Parameters

• **emitter**: [`EventEmitter`](../interfaces/EventEmitter.md)\<`object`\>

• **eventName**: `string` \| `symbol`

• **options?**: [`StaticEventEmitterIteratorOptions`](../interfaces/StaticEventEmitterIteratorOptions.md)

##### Returns

`AsyncIterator`\<`any`[], `any`, `any`\>

##### Inherited from

[`Stream`](Stream.md).[`on`](Stream.md#on-1)

##### Defined in

node\_modules/@types/node/events.d.ts:328

#### on(emitter, eventName, options)

> `static` **on**(`emitter`, `eventName`, `options`?): `AsyncIterator`\<`any`[], `any`, `any`\>

##### Parameters

• **emitter**: `EventTarget`

• **eventName**: `string`

• **options?**: [`StaticEventEmitterIteratorOptions`](../interfaces/StaticEventEmitterIteratorOptions.md)

##### Returns

`AsyncIterator`\<`any`[], `any`, `any`\>

##### Inherited from

[`Stream`](Stream.md).[`on`](Stream.md#on-1)

##### Defined in

node\_modules/@types/node/events.d.ts:333

***

### once()

#### once(emitter, eventName, options)

> `static` **once**\<`Events`, `EventName`\>(`emitter`, `eventName`, `options`?): `Promise`\<[`Args`](../type-aliases/Args.md)\<`Events`, `EventName`\>\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Type Parameters

• **Events** *extends* [`EventMap`](../type-aliases/EventMap.md)\<`Events`\>

• **EventName** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **emitter**: [`EventEmitter`](EventEmitter.md)\<`Events`\>

• **eventName**: `EventName`

• **options?**: [`StaticEventEmitterOptions`](../interfaces/StaticEventEmitterOptions.md)

##### Returns

`Promise`\<[`Args`](../type-aliases/Args.md)\<`Events`, `EventName`\>\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

[`Stream`](Stream.md).[`once`](Stream.md#once-1)

##### Defined in

node\_modules/@types/node/events.d.ts:232

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: [`EventEmitter`](../interfaces/EventEmitter.md)\<`object`\>

• **eventName**: `string` \| `symbol`

• **options?**: [`StaticEventEmitterOptions`](../interfaces/StaticEventEmitterOptions.md)

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`Stream`](Stream.md).[`once`](Stream.md#once-1)

##### Defined in

node\_modules/@types/node/events.d.ts:237

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: `EventTarget`

• **eventName**: `string`

• **options?**: [`StaticEventEmitterOptions`](../interfaces/StaticEventEmitterOptions.md)

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`Stream`](Stream.md).[`once`](Stream.md#once-1)

##### Defined in

node\_modules/@types/node/events.d.ts:242

***

### setMaxListeners()

> `static` **setMaxListeners**(`n`?, ...`eventTargets`?): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

• **n?**: `number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

• ...**eventTargets?**: (`EventTarget` \| [`EventEmitter`](../interfaces/EventEmitter.md)\<`object`\>)[]

Zero or more {EventTarget} or {EventEmitter} instances. If none are specified, `n` is set as the default max for all newly created {EventTarget} and {EventEmitter}
objects.

#### Returns

`void`

#### Since

v15.4.0

#### Inherited from

[`Stream`](Stream.md).[`setMaxListeners`](Stream.md#setmaxlisteners-1)

#### Defined in

node\_modules/@types/node/events.d.ts:455
