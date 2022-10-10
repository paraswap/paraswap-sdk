[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](internal_.md) / internal

# Namespace: internal

[<internal>](internal_.md).internal

## Table of contents

### Namespaces

- [finished](internal_.internal.finished.md)
- [pipeline](internal_.internal.pipeline.md)

### Classes

- [Duplex](../classes/internal_.internal.Duplex.md)
- [PassThrough](../classes/internal_.internal.PassThrough.md)
- [Readable](../classes/internal_.internal.Readable.md)
- [Stream](../classes/internal_.internal.Stream.md)
- [Transform](../classes/internal_.internal.Transform.md)
- [Writable](../classes/internal_.internal.Writable.md)

### Interfaces

- [DuplexOptions](../interfaces/internal_.internal.DuplexOptions.md)
- [FinishedOptions](../interfaces/internal_.internal.FinishedOptions.md)
- [Pipe](../interfaces/internal_.internal.Pipe.md)
- [PipelineOptions](../interfaces/internal_.internal.PipelineOptions.md)
- [ReadableOptions](../interfaces/internal_.internal.ReadableOptions.md)
- [StreamOptions](../interfaces/internal_.internal.StreamOptions.md)
- [TransformOptions](../interfaces/internal_.internal.TransformOptions.md)
- [WritableOptions](../interfaces/internal_.internal.WritableOptions.md)

### Type Aliases

- [PipelineCallback](internal_.internal.md#pipelinecallback)
- [PipelineDestination](internal_.internal.md#pipelinedestination)
- [PipelineDestinationIterableFunction](internal_.internal.md#pipelinedestinationiterablefunction)
- [PipelineDestinationPromiseFunction](internal_.internal.md#pipelinedestinationpromisefunction)
- [PipelinePromise](internal_.internal.md#pipelinepromise)
- [PipelineSource](internal_.internal.md#pipelinesource)
- [PipelineSourceFunction](internal_.internal.md#pipelinesourcefunction)
- [PipelineTransform](internal_.internal.md#pipelinetransform)
- [PipelineTransformSource](internal_.internal.md#pipelinetransformsource)
- [TransformCallback](internal_.internal.md#transformcallback)

### Variables

- [consumers](internal_.internal.md#consumers)
- [promises](internal_.internal.md#promises)

### Functions

- [addAbortSignal](internal_.internal.md#addabortsignal)
- [finished](internal_.internal.md#finished)
- [pipeline](internal_.internal.md#pipeline)

## Type Aliases

### PipelineCallback

Ƭ **PipelineCallback**<`S`\>: `S` extends [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, infer P\> ? (`err`: [`ErrnoException`](../interfaces/internal_.ErrnoException.md) \| ``null``, `value`: `P`) => `void` : (`err`: [`ErrnoException`](../interfaces/internal_.ErrnoException.md) \| ``null``) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineDestination`](internal_.internal.md#pipelinedestination)<`any`, `any`\> |

#### Defined in

node_modules/@types/node/stream.d.ts:1024

___

### PipelineDestination

Ƭ **PipelineDestination**<`S`, `P`\>: `S` extends [`PipelineTransformSource`](internal_.internal.md#pipelinetransformsource)<infer ST\> ? [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`ST`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`ST`, `P`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineTransformSource`](internal_.internal.md#pipelinetransformsource)<`any`\> |
| `P` | `P` |

#### Defined in

node_modules/@types/node/stream.d.ts:1021

___

### PipelineDestinationIterableFunction

Ƭ **PipelineDestinationIterableFunction**<`T`\>: (`source`: [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`T`\>) => [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`source`): [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`T`\> |

##### Returns

[`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`any`\>

#### Defined in

node_modules/@types/node/stream.d.ts:1019

___

### PipelineDestinationPromiseFunction

Ƭ **PipelineDestinationPromiseFunction**<`T`, `P`\>: (`source`: [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`T`\>) => `Promise`<`P`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Type declaration

▸ (`source`): `Promise`<`P`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`T`\> |

##### Returns

`Promise`<`P`\>

#### Defined in

node_modules/@types/node/stream.d.ts:1020

___

### PipelinePromise

Ƭ **PipelinePromise**<`S`\>: `S` extends [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, infer P\> ? `Promise`<`P`\> : `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineDestination`](internal_.internal.md#pipelinedestination)<`any`, `any`\> |

#### Defined in

node_modules/@types/node/stream.d.ts:1027

___

### PipelineSource

Ƭ **PipelineSource**<`T`\>: [`Iterable`](../interfaces/internal_.Iterable.md)<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`T`\> \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`PipelineSourceFunction`](internal_.internal.md#pipelinesourcefunction)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@types/node/stream.d.ts:1014

___

### PipelineSourceFunction

Ƭ **PipelineSourceFunction**<`T`\>: () => [`Iterable`](../interfaces/internal_.Iterable.md)<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): [`Iterable`](../interfaces/internal_.Iterable.md)<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`T`\>

##### Returns

[`Iterable`](../interfaces/internal_.Iterable.md)<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`T`\>

#### Defined in

node_modules/@types/node/stream.d.ts:1013

___

### PipelineTransform

Ƭ **PipelineTransform**<`S`, `U`\>: [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) \| (`source`: `S` extends (...`args`: `any`[]) => [`Iterable`](../interfaces/internal_.Iterable.md)<infer ST\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<infer ST\> ? [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`ST`\> : `S`) => [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineTransformSource`](internal_.internal.md#pipelinetransformsource)<`any`\> |
| `U` | `U` |

#### Defined in

node_modules/@types/node/stream.d.ts:1015

___

### PipelineTransformSource

Ƭ **PipelineTransformSource**<`T`\>: [`PipelineSource`](internal_.internal.md#pipelinesource)<`T`\> \| [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`any`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@types/node/stream.d.ts:1018

___

### TransformCallback

Ƭ **TransformCallback**: (`error?`: [`Error`](internal_.md#error) \| ``null``, `data?`: `any`) => `void`

#### Type declaration

▸ (`error?`, `data?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | [`Error`](internal_.md#error) \| ``null`` |
| `data?` | `any` |

##### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:862

## Variables

### consumers

• `Const` **consumers**: typeof [`"node:stream/consumers"`](internal_._node_stream_consumers_.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1242

___

### promises

• `Const` **promises**: typeof [`"node:stream/promises"`](internal_._node_stream_promises_.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1241

## Functions

### addAbortSignal

▸ **addAbortSignal**<`T`\>(`signal`, `stream`): `T`

Attaches an AbortSignal to a readable or writeable stream. This lets code
control stream destruction using an `AbortController`.

Calling `abort` on the `AbortController` corresponding to the passed`AbortSignal` will behave the same way as calling `.destroy(new AbortError())`on the stream.

```js
const fs = require('fs');

const controller = new AbortController();
const read = addAbortSignal(
  controller.signal,
  fs.createReadStream(('object.json'))
);
// Later, abort the operation closing the stream
controller.abort();
```

Or using an `AbortSignal` with a readable stream as an async iterable:

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 10_000); // set a timeout
const stream = addAbortSignal(
  controller.signal,
  fs.createReadStream(('object.json'))
);
(async () => {
  try {
    for await (const chunk of stream) {
      await process(chunk);
    }
  } catch (e) {
    if (e.name === 'AbortError') {
      // The operation was cancelled
    } else {
      throw e;
    }
  }
})();
```

**`Since`**

v15.4.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](../classes/internal_.Stream.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal` | `AbortSignal` | A signal representing possible cancellation |
| `stream` | `T` | a stream to attach a signal to |

#### Returns

`T`

___

### finished

▸ **finished**(`stream`, `options`, `callback`): () => `void`

A function to get notified when a stream is no longer readable, writable
or has experienced an error or a premature close event.

```js
const { finished } = require('stream');

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
prematurely (like an aborted HTTP request), and will not emit `'end'`or `'finish'`.

The `finished` API provides promise version:

```js
const { finished } = require('stream/promises');

const rs = fs.createReadStream('archive.tar');

async function run() {
  await finished(rs);
  console.log('Stream is done reading.');
}

run().catch(console.error);
rs.resume(); // Drain the stream.
```

`stream.finished()` leaves dangling event listeners (in particular`'error'`, `'end'`, `'finish'` and `'close'`) after `callback` has been
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

**`Since`**

v10.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) | A readable and/or writable stream. |
| `options` | [`FinishedOptions`](../interfaces/internal_.internal.FinishedOptions.md) | - |
| `callback` | (`err?`: ``null`` \| [`ErrnoException`](../interfaces/internal_.ErrnoException.md)) => `void` | A callback function that takes an optional error argument. |

#### Returns

`fn`

A cleanup function which removes all registered listeners.

▸ (): `void`

##### Returns

`void`

▸ **finished**(`stream`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) |
| `callback` | (`err?`: ``null`` \| [`ErrnoException`](../interfaces/internal_.ErrnoException.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

___

### pipeline

▸ **pipeline**<`A`, `B`\>(`source`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);
```

The `pipeline` API provides a promise version, which can also
receive an options argument as the last parameter with a`signal` `AbortSignal` property. When the signal is aborted,`destroy` will be called on the underlying pipeline, with
an`AbortError`.

```js
const { pipeline } = require('stream/promises');

async function run() {
  await pipeline(
    fs.createReadStream('archive.tar'),
    zlib.createGzip(),
    fs.createWriteStream('archive.tar.gz')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

To use an `AbortSignal`, pass it inside an options object,
as the last argument:

```js
const { pipeline } = require('stream/promises');

async function run() {
  const ac = new AbortController();
  const signal = ac.signal;

  setTimeout(() => ac.abort(), 1);
  await pipeline(
    fs.createReadStream('archive.tar'),
    zlib.createGzip(),
    fs.createWriteStream('archive.tar.gz'),
    { signal },
  );
}

run().catch(console.error); // AbortError
```

The `pipeline` API also supports async generators:

```js
const { pipeline } = require('stream/promises');
const fs = require('fs');

async function run() {
  await pipeline(
    fs.createReadStream('lowercase.txt'),
    async function* (source, signal) {
      source.setEncoding('utf8');  // Work with strings rather than `Buffer`s.
      for await (const chunk of source) {
        yield await processChunk(chunk, { signal });
      }
    },
    fs.createWriteStream('uppercase.txt')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

Remember to handle the `signal` argument passed into the async generator.
Especially in the case where the async generator is the source for the
pipeline (i.e. first argument) or the pipeline will never complete.

```js
const { pipeline } = require('stream/promises');
const fs = require('fs');

async function run() {
  await pipeline(
    async function * (signal) {
      await someLongRunningfn({ signal });
      yield 'asd';
    },
    fs.createWriteStream('uppercase.txt')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors.

**`Since`**

v10.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `A` | - |
| `destination` | `B` | - |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)<`B`\> | Called when the pipeline is fully done. |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

▸ **pipeline**<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`A`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

▸ **pipeline**<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T1`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

▸ **pipeline**<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T2`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

▸ **pipeline**<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T2`, `any`\> |
| `T4` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T3`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `transform4` | `T4` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

▸ **pipeline**(`streams`, `callback?`): [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `streams` | readonly ([`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md))[] |
| `callback?` | (`err`: ``null`` \| [`ErrnoException`](../interfaces/internal_.ErrnoException.md)) => `void` |

#### Returns

[`WritableStream`](../interfaces/internal_.WritableStream-1.md)

▸ **pipeline**(`stream1`, `stream2`, ...`streams`): [`WritableStream`](../interfaces/internal_.WritableStream-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream1` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |
| `stream2` | [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) |
| `...streams` | ([`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) \| (`err`: ``null`` \| [`ErrnoException`](../interfaces/internal_.ErrnoException.md)) => `void`)[] |

#### Returns

[`WritableStream`](../interfaces/internal_.WritableStream-1.md)
