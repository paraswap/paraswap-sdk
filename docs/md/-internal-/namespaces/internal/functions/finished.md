[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / finished

# Function: finished()

## finished(stream, options, callback)

> **finished**(`stream`, `options`, `callback`): () => `void`

A readable and/or writable stream/webstream.

A function to get notified when a stream is no longer readable, writable
or has experienced an error or a premature close event.

```js
import { finished } from 'node:stream';
import fs from 'node:fs';

const rs = fs.createReadStream('archive.tar');

finished(rs, (err) => {
  if (err) {
    console.error('Stream failed.', err);
  } else {
    console.log('Stream is done reading.');
  }
});

rs.resume(); // Drain the stream.
```

Especially useful in error handling scenarios where a stream is destroyed
prematurely (like an aborted HTTP request), and will not emit `'end'` or `'finish'`.

The `finished` API provides [`promise version`](https://nodejs.org/docs/latest-v22.x/api/stream.html#streamfinishedstream-options).

`stream.finished()` leaves dangling event listeners (in particular `'error'`, `'end'`, `'finish'` and `'close'`) after `callback` has been
invoked. The reason for this is so that unexpected `'error'` events (due to
incorrect stream implementations) do not cause unexpected crashes.
If this is unwanted behavior then the returned cleanup function needs to be
invoked in the callback:

```js
const cleanup = finished(rs, (err) => {
  cleanup();
  // ...
});
```

### Parameters

• **stream**: [`ReadableStream`](../../../interfaces/ReadableStream.md) \| [`WritableStream`](../../../interfaces/WritableStream.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md)

A readable and/or writable stream.

• **options**: [`FinishedOptions`](../interfaces/FinishedOptions.md)

• **callback**

A callback function that takes an optional error argument.

### Returns

`Function`

A cleanup function which removes all registered listeners.

#### Returns

`void`

### Since

v10.0.0

### Defined in

node\_modules/@types/node/stream.d.ts:1458

## finished(stream, callback)

> **finished**(`stream`, `callback`): () => `void`

### Parameters

• **stream**: [`ReadableStream`](../../../interfaces/ReadableStream.md) \| [`WritableStream`](../../../interfaces/WritableStream.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md)

• **callback**

### Returns

`Function`

#### Returns

`void`

### Defined in

node\_modules/@types/node/stream.d.ts:1463
