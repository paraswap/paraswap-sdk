[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / [internal](../modules/internal_.internal.md) / Writable

# Class: Writable

[<internal>](../modules/internal_.md).[internal](../modules/internal_.internal.md).Writable

**`Since`**

v0.9.4

## Hierarchy

- [`Stream`](internal_.Stream.md)

  ↳ **`Writable`**

## Implements

- [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

## Table of contents

### Constructors

- [constructor](internal_.internal.Writable.md#constructor)

### Properties

- [destroyed](internal_.internal.Writable.md#destroyed)
- [writable](internal_.internal.Writable.md#writable)
- [writableCorked](internal_.internal.Writable.md#writablecorked)
- [writableEnded](internal_.internal.Writable.md#writableended)
- [writableFinished](internal_.internal.Writable.md#writablefinished)
- [writableHighWaterMark](internal_.internal.Writable.md#writablehighwatermark)
- [writableLength](internal_.internal.Writable.md#writablelength)
- [writableObjectMode](internal_.internal.Writable.md#writableobjectmode)
- [captureRejectionSymbol](internal_.internal.Writable.md#capturerejectionsymbol)
- [captureRejections](internal_.internal.Writable.md#capturerejections)
- [defaultMaxListeners](internal_.internal.Writable.md#defaultmaxlisteners)
- [errorMonitor](internal_.internal.Writable.md#errormonitor)

### Methods

- [\_construct](internal_.internal.Writable.md#_construct)
- [\_destroy](internal_.internal.Writable.md#_destroy)
- [\_final](internal_.internal.Writable.md#_final)
- [\_write](internal_.internal.Writable.md#_write)
- [\_writev](internal_.internal.Writable.md#_writev)
- [addListener](internal_.internal.Writable.md#addlistener)
- [cork](internal_.internal.Writable.md#cork)
- [destroy](internal_.internal.Writable.md#destroy)
- [emit](internal_.internal.Writable.md#emit)
- [end](internal_.internal.Writable.md#end)
- [eventNames](internal_.internal.Writable.md#eventnames)
- [getMaxListeners](internal_.internal.Writable.md#getmaxlisteners)
- [listenerCount](internal_.internal.Writable.md#listenercount)
- [listeners](internal_.internal.Writable.md#listeners)
- [off](internal_.internal.Writable.md#off)
- [on](internal_.internal.Writable.md#on)
- [once](internal_.internal.Writable.md#once)
- [pipe](internal_.internal.Writable.md#pipe)
- [prependListener](internal_.internal.Writable.md#prependlistener)
- [prependOnceListener](internal_.internal.Writable.md#prependoncelistener)
- [rawListeners](internal_.internal.Writable.md#rawlisteners)
- [removeAllListeners](internal_.internal.Writable.md#removealllisteners)
- [removeListener](internal_.internal.Writable.md#removelistener)
- [setDefaultEncoding](internal_.internal.Writable.md#setdefaultencoding)
- [setMaxListeners](internal_.internal.Writable.md#setmaxlisteners)
- [uncork](internal_.internal.Writable.md#uncork)
- [write](internal_.internal.Writable.md#write)
- [getEventListeners](internal_.internal.Writable.md#geteventlisteners)
- [listenerCount](internal_.internal.Writable.md#listenercount-1)
- [on](internal_.internal.Writable.md#on-1)
- [once](internal_.internal.Writable.md#once-1)
- [setMaxListeners](internal_.internal.Writable.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Writable**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`WritableOptions`](../interfaces/internal_.internal.WritableOptions.md) |

#### Overrides

[Stream](internal_.Stream.md).[constructor](internal_.Stream.md#constructor)

## Properties

### destroyed

• **destroyed**: `boolean`

Is `true` after `writable.destroy()` has been called.

**`Since`**

v8.0.0

#### Defined in

node_modules/@types/node/stream.d.ts:543

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

**`Since`**

v11.4.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[writable](../interfaces/internal_.WritableStream-1.md#writable)

#### Defined in

node_modules/@types/node/stream.d.ts:504

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**`Since`**

v13.2.0, v12.16.0

#### Defined in

node_modules/@types/node/stream.d.ts:538

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**`Since`**

v12.9.0

#### Defined in

node_modules/@types/node/stream.d.ts:510

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

**`Since`**

v12.6.0

#### Defined in

node_modules/@types/node/stream.d.ts:515

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

**`Since`**

v9.3.0

#### Defined in

node_modules/@types/node/stream.d.ts:520

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

#### Defined in

node_modules/@types/node/stream.d.ts:527

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

**`Since`**

v12.3.0

#### Defined in

node_modules/@types/node/stream.d.ts:532

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](internal_.Socket.md#capturerejectionsymbol)

#### Inherited from

[Stream](internal_.Stream.md).[captureRejectionSymbol](internal_.Stream.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:301

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Stream](internal_.Stream.md).[captureRejections](internal_.Stream.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:306

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Stream](internal_.Stream.md).[defaultMaxListeners](internal_.Stream.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:307

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](internal_.Socket.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[Stream](internal_.Stream.md).[errorMonitor](internal_.Stream.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:300

## Methods

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| [`Error`](../modules/internal_.md#error) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

___

### addListener

▸ **addListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[addListener](../interfaces/internal_.WritableStream-1.md#addlistener)

#### Overrides

[Stream](internal_.Stream.md).[addListener](internal_.Stream.md#addlistener)

▸ **addListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

▸ **addListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

▸ **addListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

▸ **addListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

▸ **addListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

▸ **addListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](internal_.internal.Writable.md#uncork) or [end](internal_.internal.Writable.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

**`Since`**

v0.11.2

#### Returns

`void`

___

### destroy

▸ **destroy**(`error?`): [`Writable`](internal_.Writable.md)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to`write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

**`Since`**

v8.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../modules/internal_.md#error) | Optional, an error to emit with `'error'` event. |

#### Returns

[`Writable`](internal_.Writable.md)

___

### emit

▸ **emit**(`event`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
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

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[emit](../interfaces/internal_.WritableStream-1.md#emit)

#### Overrides

[Stream](internal_.Stream.md).[emit](internal_.Stream.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | [`Error`](../modules/internal_.md#error) |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | [`Readable`](internal_.Readable.md) |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | [`Readable`](internal_.Readable.md) |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

___

### end

▸ **end**(`cb?`): [`Writable`](internal_.Writable.md)

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](internal_.internal.Writable.md#write) method after calling [end](internal_.internal.Writable.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

**`Since`**

v0.9.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[end](../interfaces/internal_.WritableStream-1.md#end)

▸ **end**(`chunk`, `cb?`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[end](../interfaces/internal_.WritableStream-1.md#end)

▸ **end**(`chunk`, `encoding`, `cb?`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `cb?` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[end](../interfaces/internal_.WritableStream-1.md#end)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[eventNames](../interfaces/internal_.WritableStream-1.md#eventnames)

#### Inherited from

[Stream](internal_.Stream.md).[eventNames](internal_.Stream.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](internal_.internal.Writable.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[getMaxListeners](../interfaces/internal_.WritableStream-1.md#getmaxlisteners)

#### Inherited from

[Stream](internal_.Stream.md).[getMaxListeners](internal_.Stream.md#getmaxlisteners)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[listenerCount](../interfaces/internal_.WritableStream-1.md#listenercount)

#### Inherited from

[Stream](internal_.Stream.md).[listenerCount](internal_.Stream.md#listenercount)

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[listeners](../interfaces/internal_.WritableStream-1.md#listeners)

#### Inherited from

[Stream](internal_.Stream.md).[listeners](internal_.Stream.md#listeners)

___

### off

▸ **off**(`eventName`, `listener`): [`Writable`](internal_.Writable.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[off](../interfaces/internal_.WritableStream-1.md#off)

#### Inherited from

[Stream](internal_.Stream.md).[off](internal_.Stream.md#off)

___

### on

▸ **on**(`event`, `listener`): [`Writable`](internal_.Writable.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[on](../interfaces/internal_.WritableStream-1.md#on)

#### Overrides

[Stream](internal_.Stream.md).[on](internal_.Stream.md#on)

▸ **on**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

▸ **on**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

▸ **on**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

▸ **on**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

▸ **on**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

▸ **on**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

___

### once

▸ **once**(`event`, `listener`): [`Writable`](internal_.Writable.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[once](../interfaces/internal_.WritableStream-1.md#once)

#### Overrides

[Stream](internal_.Stream.md).[once](internal_.Stream.md#once)

▸ **once**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

▸ **once**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

▸ **once**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

▸ **once**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

▸ **once**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

▸ **once**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

[Stream](internal_.Stream.md).[pipe](internal_.Stream.md#pipe)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[prependListener](../interfaces/internal_.WritableStream-1.md#prependlistener)

#### Overrides

[Stream](internal_.Stream.md).[prependListener](internal_.Stream.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

▸ **prependListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

▸ **prependListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

▸ **prependListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

▸ **prependListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

▸ **prependListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[prependOnceListener](../interfaces/internal_.WritableStream-1.md#prependoncelistener)

#### Overrides

[Stream](internal_.Stream.md).[prependOnceListener](internal_.Stream.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
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

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[rawListeners](../interfaces/internal_.WritableStream-1.md#rawlisteners)

#### Inherited from

[Stream](internal_.Stream.md).[rawListeners](internal_.Stream.md#rawlisteners)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Writable`](internal_.Writable.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[removeAllListeners](../interfaces/internal_.WritableStream-1.md#removealllisteners)

#### Inherited from

[Stream](internal_.Stream.md).[removeAllListeners](internal_.Stream.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

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
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
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
recently added instance. In the example the `once('ping')`listener is removed:

```js
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

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[removeListener](../interfaces/internal_.WritableStream-1.md#removelistener)

#### Overrides

[Stream](internal_.Stream.md).[removeListener](internal_.Stream.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

▸ **removeListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

▸ **removeListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

▸ **removeListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

▸ **removeListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

▸ **removeListener**(`event`, `listener`): [`Writable`](internal_.Writable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`Writable`](internal_.Writable.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

**`Since`**

v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | The new default encoding |

#### Returns

[`Writable`](internal_.Writable.md)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Writable`](internal_.Writable.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Writable`](internal_.Writable.md)

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[setMaxListeners](../interfaces/internal_.WritableStream-1.md#setmaxlisteners)

#### Inherited from

[Stream](internal_.Stream.md).[setMaxListeners](internal_.Stream.md#setmaxlisteners)

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](internal_.internal.Writable.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, it is recommended that calls to `writable.uncork()` be
deferred using `process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

**`Since`**

v0.11.2

#### Returns

`void`

___

### write

▸ **write**(`chunk`, `callback?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
It is recommended that once `write()` returns false, no more chunks be written
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](internal_.internal.Writable.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

**`Since`**

v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `callback?` | (`error`: `undefined` \| ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` | Callback for when this chunk of data is flushed. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[write](../interfaces/internal_.WritableStream-1.md#write)

▸ **write**(`chunk`, `encoding`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback?` | (`error`: `undefined` \| ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`boolean`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream-1.md).[write](../interfaces/internal_.WritableStream-1.md#write)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md) \| [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Stream](internal_.Stream.md).[getEventListeners](internal_.Stream.md#geteventlisteners)

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[Stream](internal_.Stream.md).[listenerCount](internal_.Stream.md#listenercount-1)

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
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
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
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

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) | - |

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[Stream](internal_.Stream.md).[on](internal_.Stream.md#on-1)

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
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
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

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

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`NodeEventTarget`](../interfaces/internal_.NodeEventTarget.md) |
| `eventName` | `string` \| `symbol` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Stream](internal_.Stream.md).[once](internal_.Stream.md#once-1)

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md) |
| `eventName` | `string` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Stream](internal_.Stream.md).[once](internal_.Stream.md#once-1)

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `EventEmitter.setMaxListeners()` method allows the default limit to be
modified (if eventTargets is empty) or modify the limit specified in every `EventTarget` | `EventEmitter` passed as arguments.
The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

```js
EventEmitter.setMaxListeners(20);
// Equivalent to
EventEmitter.defaultMaxListeners = 20;

const eventTarget = new EventTarget();
// Only way to increase limit for `EventTarget` instances
// as these doesn't expose its own `setMaxListeners` method
EventEmitter.setMaxListeners(20, eventTarget);
```

**`Since`**

v15.3.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |
| `...eventTargets` | ([`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md) \| [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md))[] |

#### Returns

`void`

#### Inherited from

[Stream](internal_.Stream.md).[setMaxListeners](internal_.Stream.md#setmaxlisteners-1)
