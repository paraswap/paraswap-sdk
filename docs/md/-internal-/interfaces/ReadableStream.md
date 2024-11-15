[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStream

# Interface: ReadableStream

## Extends

- [`EventEmitter`](EventEmitter.md)

## Extended by

- [`ReadWriteStream`](ReadWriteStream.md)

## Properties

### readable

> **readable**: `boolean`

#### Defined in

node\_modules/@types/node/globals.d.ts:412

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<`string` \| `Buffer`, `any`, `any`\>

#### Returns

`AsyncIterator`\<`string` \| `Buffer`, `any`, `any`\>

#### Defined in

node\_modules/@types/node/globals.d.ts:422

***

### \[captureRejectionSymbol\]()?

#### \[captureRejectionSymbol\](error, event, args)

> `optional` **\[captureRejectionSymbol\]**\<`EventName`\>(`error`, `event`, ...`args`): `void`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **error**: [`Error`](Error.md)

• **event**: `EventName`

• ...**args**: [`Args`](../type-aliases/Args.md)\<`object`, `EventName`\>

##### Returns

`void`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`[captureRejectionSymbol]`](EventEmitter.md#%5Bcapturerejectionsymbol%5D)

##### Defined in

node\_modules/@types/node/events.d.ts:650

#### \[captureRejectionSymbol\](error, event, args)

> `optional` **\[captureRejectionSymbol\]**\<`EventName`\>(`error`, `event`, ...`args`): `void`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **error**: [`Error`](Error.md)

• **event**: `EventName`

• ...**args**: [`Args`](../type-aliases/Args.md)\<`object`, `EventName`\>

##### Returns

`void`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`[captureRejectionSymbol]`](EventEmitter.md#%5Bcapturerejectionsymbol%5D)

##### Defined in

node\_modules/@types/node/events.d.ts:655

***

### addListener()

#### addListener(eventName, listener)

> **addListener**\<`EventName`\>(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`addListener`](EventEmitter.md#addlistener)

##### Defined in

node\_modules/@types/node/events.d.ts:664

#### addListener(eventName, listener)

> **addListener**\<`EventName`\>(`eventName`, `listener`): `this`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`addListener`](EventEmitter.md#addlistener)

##### Defined in

node\_modules/@types/node/events.d.ts:668

***

### emit()

#### emit(eventName, args)

> **emit**\<`EventName`\>(`eventName`, ...`args`): `boolean`

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

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• ...**args**: [`Args`](../type-aliases/Args.md)\<`object`, `EventName`\>

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

##### Defined in

node\_modules/@types/node/events.d.ts:974

#### emit(eventName, args)

> **emit**\<`EventName`\>(`eventName`, ...`args`): `boolean`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• ...**args**: [`Args`](../type-aliases/Args.md)\<`object`, `EventName`\>

##### Returns

`boolean`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

##### Defined in

node\_modules/@types/node/events.d.ts:978

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

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`eventNames`](EventEmitter.md#eventnames)

#### Defined in

node\_modules/@types/node/events.d.ts:1065

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`getMaxListeners`](EventEmitter.md#getmaxlisteners)

#### Defined in

node\_modules/@types/node/events.d.ts:879

***

### isPaused()

> **isPaused**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/@types/node/globals.d.ts:417

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`listenerCount`](EventEmitter.md#listenercount)

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`listenerCount`](EventEmitter.md#listenercount)

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`listeners`](EventEmitter.md#listeners)

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`listeners`](EventEmitter.md#listeners)

##### Defined in

node\_modules/@types/node/events.d.ts:895

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

##### Defined in

node\_modules/@types/node/events.d.ts:846

***

### on()

#### on(eventName, listener)

> **on**\<`EventName`\>(`eventName`, `listener`): `this`

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

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

The name of the event.

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

##### Defined in

node\_modules/@types/node/events.d.ts:703

#### on(eventName, listener)

> **on**\<`EventName`\>(`eventName`, `listener`): `this`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

##### Defined in

node\_modules/@types/node/events.d.ts:707

***

### once()

#### once(eventName, listener)

> **once**\<`EventName`\>(`eventName`, `listener`): `this`

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

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

The name of the event.

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`once`](EventEmitter.md#once)

##### Defined in

node\_modules/@types/node/events.d.ts:740

#### once(eventName, listener)

> **once**\<`EventName`\>(`eventName`, `listener`): `this`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`once`](EventEmitter.md#once)

##### Defined in

node\_modules/@types/node/events.d.ts:744

***

### pause()

> **pause**(): `this`

#### Returns

`this`

#### Defined in

node\_modules/@types/node/globals.d.ts:415

***

### pipe()

> **pipe**\<`T`\>(`destination`, `options`?): `T`

#### Type Parameters

• **T** *extends* [`WritableStream`](WritableStream.md)

#### Parameters

• **destination**: `T`

• **options?**

• **options.end?**: `boolean`

#### Returns

`T`

#### Defined in

node\_modules/@types/node/globals.d.ts:418

***

### prependListener()

#### prependListener(eventName, listener)

> **prependListener**\<`EventName`\>(`eventName`, `listener`): `this`

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

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

The name of the event.

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`prependListener`](EventEmitter.md#prependlistener)

##### Defined in

node\_modules/@types/node/events.d.ts:1015

#### prependListener(eventName, listener)

> **prependListener**\<`EventName`\>(`eventName`, `listener`): `this`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`prependListener`](EventEmitter.md#prependlistener)

##### Defined in

node\_modules/@types/node/events.d.ts:1019

***

### prependOnceListener()

#### prependOnceListener(eventName, listener)

> **prependOnceListener**\<`EventName`\>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

The name of the event.

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`prependOnceListener`](EventEmitter.md#prependoncelistener)

##### Defined in

node\_modules/@types/node/events.d.ts:1038

#### prependOnceListener(eventName, listener)

> **prependOnceListener**\<`EventName`\>(`eventName`, `listener`): `this`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`prependOnceListener`](EventEmitter.md#prependoncelistener)

##### Defined in

node\_modules/@types/node/events.d.ts:1042

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`rawListeners`](EventEmitter.md#rawlisteners)

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`rawListeners`](EventEmitter.md#rawlisteners)

##### Defined in

node\_modules/@types/node/events.d.ts:931

***

### read()

> **read**(`size`?): `string` \| `Buffer`

#### Parameters

• **size?**: `number`

#### Returns

`string` \| `Buffer`

#### Defined in

node\_modules/@types/node/globals.d.ts:413

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`removeAllListeners`](EventEmitter.md#removealllisteners)

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

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`removeAllListeners`](EventEmitter.md#removealllisteners)

##### Defined in

node\_modules/@types/node/events.d.ts:862

***

### removeListener()

#### removeListener(eventName, listener)

> **removeListener**\<`EventName`\>(`eventName`, `listener`): `this`

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

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`removeListener`](EventEmitter.md#removelistener)

##### Defined in

node\_modules/@types/node/events.d.ts:830

#### removeListener(eventName, listener)

> **removeListener**\<`EventName`\>(`eventName`, `listener`): `this`

##### Type Parameters

• **EventName** *extends* `string` \| `symbol`

##### Parameters

• **eventName**: `EventName`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`object`, `EventName`\>

##### Returns

`this`

##### Inherited from

[`EventEmitter`](EventEmitter.md).[`removeListener`](EventEmitter.md#removelistener)

##### Defined in

node\_modules/@types/node/events.d.ts:834

***

### resume()

> **resume**(): `this`

#### Returns

`this`

#### Defined in

node\_modules/@types/node/globals.d.ts:416

***

### setEncoding()

> **setEncoding**(`encoding`): `this`

#### Parameters

• **encoding**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

#### Returns

`this`

#### Defined in

node\_modules/@types/node/globals.d.ts:414

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

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`setMaxListeners`](EventEmitter.md#setmaxlisteners)

#### Defined in

node\_modules/@types/node/events.d.ts:873

***

### unpipe()

> **unpipe**(`destination`?): `this`

#### Parameters

• **destination?**: [`WritableStream`](WritableStream.md)

#### Returns

`this`

#### Defined in

node\_modules/@types/node/globals.d.ts:419

***

### unshift()

> **unshift**(`chunk`, `encoding`?): `void`

#### Parameters

• **chunk**: `string` \| `Uint8Array`

• **encoding?**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

#### Returns

`void`

#### Defined in

node\_modules/@types/node/globals.d.ts:420

***

### wrap()

> **wrap**(`oldStream`): `this`

#### Parameters

• **oldStream**: [`ReadableStream`](ReadableStream.md)

#### Returns

`this`

#### Defined in

node\_modules/@types/node/globals.d.ts:421
