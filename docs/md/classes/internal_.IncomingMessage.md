[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / IncomingMessage

# Class: IncomingMessage

[<internal>](../modules/internal_.md).IncomingMessage

An `IncomingMessage` object is created by [Server](internal_.Server.md) or ClientRequest and passed as the first argument to the `'request'` and `'response'` event respectively. It may be used to
access response
status, headers and data.

Different from its `socket` value which is a subclass of `stream.Duplex`, the`IncomingMessage` itself extends `stream.Readable` and is created separately to
parse and emit the incoming HTTP headers and payload, as the underlying socket
may be reused multiple times in case of keep-alive.

**`Since`**

v0.1.17

## Hierarchy

- [`Readable`](internal_.Readable.md)

  ↳ **`IncomingMessage`**

## Table of contents

### Constructors

- [constructor](internal_.IncomingMessage.md#constructor)

### Properties

- [aborted](internal_.IncomingMessage.md#aborted)
- [complete](internal_.IncomingMessage.md#complete)
- [connection](internal_.IncomingMessage.md#connection)
- [destroyed](internal_.IncomingMessage.md#destroyed)
- [headers](internal_.IncomingMessage.md#headers)
- [httpVersion](internal_.IncomingMessage.md#httpversion)
- [httpVersionMajor](internal_.IncomingMessage.md#httpversionmajor)
- [httpVersionMinor](internal_.IncomingMessage.md#httpversionminor)
- [method](internal_.IncomingMessage.md#method)
- [rawHeaders](internal_.IncomingMessage.md#rawheaders)
- [rawTrailers](internal_.IncomingMessage.md#rawtrailers)
- [readable](internal_.IncomingMessage.md#readable)
- [readableAborted](internal_.IncomingMessage.md#readableaborted)
- [readableDidRead](internal_.IncomingMessage.md#readabledidread)
- [readableEncoding](internal_.IncomingMessage.md#readableencoding)
- [readableEnded](internal_.IncomingMessage.md#readableended)
- [readableFlowing](internal_.IncomingMessage.md#readableflowing)
- [readableHighWaterMark](internal_.IncomingMessage.md#readablehighwatermark)
- [readableLength](internal_.IncomingMessage.md#readablelength)
- [readableObjectMode](internal_.IncomingMessage.md#readableobjectmode)
- [socket](internal_.IncomingMessage.md#socket)
- [statusCode](internal_.IncomingMessage.md#statuscode)
- [statusMessage](internal_.IncomingMessage.md#statusmessage)
- [trailers](internal_.IncomingMessage.md#trailers)
- [url](internal_.IncomingMessage.md#url)
- [captureRejectionSymbol](internal_.IncomingMessage.md#capturerejectionsymbol)
- [captureRejections](internal_.IncomingMessage.md#capturerejections)
- [defaultMaxListeners](internal_.IncomingMessage.md#defaultmaxlisteners)
- [errorMonitor](internal_.IncomingMessage.md#errormonitor)

### Methods

- [[asyncIterator]](internal_.IncomingMessage.md#[asynciterator])
- [\_construct](internal_.IncomingMessage.md#_construct)
- [\_destroy](internal_.IncomingMessage.md#_destroy)
- [\_read](internal_.IncomingMessage.md#_read)
- [addListener](internal_.IncomingMessage.md#addlistener)
- [destroy](internal_.IncomingMessage.md#destroy)
- [emit](internal_.IncomingMessage.md#emit)
- [eventNames](internal_.IncomingMessage.md#eventnames)
- [getMaxListeners](internal_.IncomingMessage.md#getmaxlisteners)
- [isPaused](internal_.IncomingMessage.md#ispaused)
- [listenerCount](internal_.IncomingMessage.md#listenercount)
- [listeners](internal_.IncomingMessage.md#listeners)
- [off](internal_.IncomingMessage.md#off)
- [on](internal_.IncomingMessage.md#on)
- [once](internal_.IncomingMessage.md#once)
- [pause](internal_.IncomingMessage.md#pause)
- [pipe](internal_.IncomingMessage.md#pipe)
- [prependListener](internal_.IncomingMessage.md#prependlistener)
- [prependOnceListener](internal_.IncomingMessage.md#prependoncelistener)
- [push](internal_.IncomingMessage.md#push)
- [rawListeners](internal_.IncomingMessage.md#rawlisteners)
- [read](internal_.IncomingMessage.md#read)
- [removeAllListeners](internal_.IncomingMessage.md#removealllisteners)
- [removeListener](internal_.IncomingMessage.md#removelistener)
- [resume](internal_.IncomingMessage.md#resume)
- [setEncoding](internal_.IncomingMessage.md#setencoding)
- [setMaxListeners](internal_.IncomingMessage.md#setmaxlisteners)
- [setTimeout](internal_.IncomingMessage.md#settimeout)
- [unpipe](internal_.IncomingMessage.md#unpipe)
- [unshift](internal_.IncomingMessage.md#unshift)
- [wrap](internal_.IncomingMessage.md#wrap)
- [from](internal_.IncomingMessage.md#from)
- [getEventListeners](internal_.IncomingMessage.md#geteventlisteners)
- [isDisturbed](internal_.IncomingMessage.md#isdisturbed)
- [listenerCount](internal_.IncomingMessage.md#listenercount-1)
- [on](internal_.IncomingMessage.md#on-1)
- [once](internal_.IncomingMessage.md#once-1)
- [setMaxListeners](internal_.IncomingMessage.md#setmaxlisteners-1)

## Constructors

### constructor

• **new IncomingMessage**(`socket`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | [`Socket`](internal_.Socket.md) |

#### Overrides

[Readable](internal_.Readable.md).[constructor](internal_.Readable.md#constructor)

## Properties

### aborted

• **aborted**: `boolean`

The `message.aborted` property will be `true` if the request has
been aborted.

**`Since`**

v10.1.0

**`Deprecated`**

Since v17.0.0 - Check `message.destroyed` from [stream.Readable](https://nodejs.org/dist/latest-v17.x/docs/api/stream.html#class-streamreadable).

#### Defined in

node_modules/@types/node/http.d.ts:793

___

### complete

• **complete**: `boolean`

The `message.complete` property will be `true` if a complete HTTP message has
been received and successfully parsed.

This property is particularly useful as a means of determining if a client or
server fully transmitted a message before a connection was terminated:

```js
const req = http.request({
  host: '127.0.0.1',
  port: 8080,
  method: 'POST'
}, (res) => {
  res.resume();
  res.on('end', () => {
    if (!res.complete)
      console.error(
        'The connection was terminated while the message was still being sent');
  });
});
```

**`Since`**

v0.3.0

#### Defined in

node_modules/@types/node/http.d.ts:828

___

### connection

• **connection**: [`Socket`](internal_.Socket.md)

Alias for `message.socket`.

**`Since`**

v0.1.90

**`Deprecated`**

Since v16.0.0 - Use `socket`.

#### Defined in

node_modules/@types/node/http.d.ts:834

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

**`Since`**

v8.0.0

#### Inherited from

[Readable](internal_.Readable.md).[destroyed](internal_.Readable.md#destroyed)

#### Defined in

node_modules/@types/node/stream.d.ts:115

___

### headers

• **headers**: [`IncomingHttpHeaders`](../interfaces/internal_.IncomingHttpHeaders.md)

The request/response headers object.

Key-value pairs of header names and values. Header names are lower-cased.

```js
// Prints something like:
//
// { 'user-agent': 'curl/7.22.0',
//   host: '127.0.0.1:8000',
//   accept: '*' }
console.log(request.headers);
```

Duplicates in raw headers are handled in the following ways, depending on the
header name:

* Duplicates of `age`, `authorization`, `content-length`, `content-type`,`etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`,`last-modified`, `location`,
`max-forwards`, `proxy-authorization`, `referer`,`retry-after`, `server`, or `user-agent` are discarded.
* `set-cookie` is always an array. Duplicates are added to the array.
* For duplicate `cookie` headers, the values are joined together with '; '.
* For all other headers, the values are joined together with ', '.

**`Since`**

v0.1.5

#### Defined in

node_modules/@types/node/http.d.ts:871

___

### httpVersion

• **httpVersion**: `string`

In case of server request, the HTTP version sent by the client. In the case of
client response, the HTTP version of the connected-to server.
Probably either `'1.1'` or `'1.0'`.

Also `message.httpVersionMajor` is the first integer and`message.httpVersionMinor` is the second.

**`Since`**

v0.1.1

#### Defined in

node_modules/@types/node/http.d.ts:802

___

### httpVersionMajor

• **httpVersionMajor**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:803

___

### httpVersionMinor

• **httpVersionMinor**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:804

___

### method

• `Optional` **method**: `string`

**Only valid for request obtained from [Server](internal_.Server.md).**

The request method as a string. Read only. Examples: `'GET'`, `'DELETE'`.

**`Since`**

v0.1.1

#### Defined in

node_modules/@types/node/http.d.ts:919

___

### rawHeaders

• **rawHeaders**: `string`[]

The raw request/response headers list exactly as they were received.

The keys and values are in the same list. It is _not_ a
list of tuples. So, the even-numbered offsets are key values, and the
odd-numbered offsets are the associated values.

Header names are not lowercased, and duplicates are not merged.

```js
// Prints something like:
//
// [ 'user-agent',
//   'this is invalid because there can be only one',
//   'User-Agent',
//   'curl/7.22.0',
//   'Host',
//   '127.0.0.1:8000',
//   'ACCEPT',
//   '*' ]
console.log(request.rawHeaders);
```

**`Since`**

v0.11.6

#### Defined in

node_modules/@types/node/http.d.ts:896

___

### rawTrailers

• **rawTrailers**: `string`[]

The raw request/response trailer keys and values exactly as they were
received. Only populated at the `'end'` event.

**`Since`**

v0.11.6

#### Defined in

node_modules/@types/node/http.d.ts:907

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`Since`**

v11.4.0

#### Inherited from

[Readable](internal_.Readable.md).[readable](internal_.Readable.md#readable)

#### Defined in

node_modules/@types/node/stream.d.ts:71

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`Since`**

v16.8.0

#### Inherited from

[Readable](internal_.Readable.md).[readableAborted](internal_.Readable.md#readableaborted)

#### Defined in

node_modules/@types/node/stream.d.ts:65

___

### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`Since`**

v16.7.0, v14.18.0

#### Inherited from

[Readable](internal_.Readable.md).[readableDidRead](internal_.Readable.md#readabledidread)

#### Defined in

node_modules/@types/node/stream.d.ts:77

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| [`BufferEncoding`](../modules/internal_.md#bufferencoding)

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`Since`**

v12.7.0

#### Inherited from

[Readable](internal_.Readable.md).[readableEncoding](internal_.Readable.md#readableencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:82

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`Since`**

v12.9.0

#### Inherited from

[Readable](internal_.Readable.md).[readableEnded](internal_.Readable.md#readableended)

#### Defined in

node_modules/@types/node/stream.d.ts:87

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`Since`**

v9.4.0

#### Inherited from

[Readable](internal_.Readable.md).[readableFlowing](internal_.Readable.md#readableflowing)

#### Defined in

node_modules/@types/node/stream.d.ts:93

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`Since`**

v9.3.0

#### Inherited from

[Readable](internal_.Readable.md).[readableHighWaterMark](internal_.Readable.md#readablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:98

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

#### Inherited from

[Readable](internal_.Readable.md).[readableLength](internal_.Readable.md#readablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:105

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`Since`**

v12.3.0

#### Inherited from

[Readable](internal_.Readable.md).[readableObjectMode](internal_.Readable.md#readableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:110

___

### socket

• **socket**: [`Socket`](internal_.Socket.md)

The `net.Socket` object associated with the connection.

With HTTPS support, use `request.socket.getPeerCertificate()` to obtain the
client's authentication details.

This property is guaranteed to be an instance of the `net.Socket` class,
a subclass of `stream.Duplex`, unless the user specified a socket
type other than `net.Socket`.

**`Since`**

v0.3.0

#### Defined in

node_modules/@types/node/http.d.ts:846

___

### statusCode

• `Optional` **statusCode**: `number`

**Only valid for response obtained from ClientRequest.**

The 3-digit HTTP response status code. E.G. `404`.

**`Since`**

v0.1.1

#### Defined in

node_modules/@types/node/http.d.ts:966

___

### statusMessage

• `Optional` **statusMessage**: `string`

**Only valid for response obtained from ClientRequest.**

The HTTP response status message (reason phrase). E.G. `OK` or `Internal Server Error`.

**`Since`**

v0.11.10

#### Defined in

node_modules/@types/node/http.d.ts:973

___

### trailers

• **trailers**: [`Dict`](../interfaces/internal_.Dict.md)<`string`\>

The request/response trailers object. Only populated at the `'end'` event.

**`Since`**

v0.3.0

#### Defined in

node_modules/@types/node/http.d.ts:901

___

### url

• `Optional` **url**: `string`

**Only valid for request obtained from [Server](internal_.Server.md).**

Request URL string. This contains only the URL that is present in the actual
HTTP request. Take the following request:

```http
GET /status?name=ryan HTTP/1.1
Accept: text/plain
```

To parse the URL into its parts:

```js
new URL(request.url, `http://${request.headers.host}`);
```

When `request.url` is `'/status?name=ryan'` and`request.headers.host` is `'localhost:3000'`:

```console
$ node
> new URL(request.url, `http://${request.headers.host}`)
URL {
  href: 'http://localhost:3000/status?name=ryan',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/status',
  search: '?name=ryan',
  searchParams: URLSearchParams { 'name' => 'ryan' },
  hash: ''
}
```

**`Since`**

v0.1.90

#### Defined in

node_modules/@types/node/http.d.ts:959

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](internal_.Socket.md#capturerejectionsymbol)

#### Inherited from

[Readable](internal_.Readable.md).[captureRejectionSymbol](internal_.Readable.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:301

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Readable](internal_.Readable.md).[captureRejections](internal_.Readable.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:306

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Readable](internal_.Readable.md).[defaultMaxListeners](internal_.Readable.md#defaultmaxlisteners)

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

[Readable](internal_.Readable.md).[errorMonitor](internal_.Readable.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:300

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

#### Inherited from

[Readable](internal_.Readable.md).[[asyncIterator]](internal_.Readable.md#[asynciterator])

___

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Inherited from

[Readable](internal_.Readable.md).[_construct](internal_.Readable.md#_construct)

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

#### Inherited from

[Readable](internal_.Readable.md).[_destroy](internal_.Readable.md#_destroy)

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

[Readable](internal_.Readable.md).[_read](internal_.Readable.md#_read)

___

### addListener

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[addListener](internal_.Readable.md#addlistener)

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[addListener](internal_.Readable.md#addlistener)

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[addListener](internal_.Readable.md#addlistener)

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[addListener](internal_.Readable.md#addlistener)

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[addListener](internal_.Readable.md#addlistener)

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[addListener](internal_.Readable.md#addlistener)

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[addListener](internal_.Readable.md#addlistener)

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[addListener](internal_.Readable.md#addlistener)

___

### destroy

▸ **destroy**(`error?`): [`IncomingMessage`](internal_.IncomingMessage.md)

Calls `destroy()` on the socket that received the `IncomingMessage`. If `error`is provided, an `'error'` event is emitted on the socket and `error` is passed
as an argument to any listeners on the event.

**`Since`**

v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | [`Error`](../modules/internal_.md#error) |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Overrides

[Readable](internal_.Readable.md).[destroy](internal_.Readable.md#destroy)

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

#### Inherited from

[Readable](internal_.Readable.md).[emit](internal_.Readable.md#emit)

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[emit](internal_.Readable.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[emit](internal_.Readable.md#emit)

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | [`Error`](../modules/internal_.md#error) |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[emit](internal_.Readable.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[emit](internal_.Readable.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[emit](internal_.Readable.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[emit](internal_.Readable.md#emit)

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[emit](internal_.Readable.md#emit)

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

#### Inherited from

[Readable](internal_.Readable.md).[eventNames](internal_.Readable.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](internal_.IncomingMessage.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[Readable](internal_.Readable.md).[getMaxListeners](internal_.Readable.md#getmaxlisteners)

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

**`Since`**

v0.11.14

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[isPaused](internal_.Readable.md#ispaused)

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

#### Inherited from

[Readable](internal_.Readable.md).[listenerCount](internal_.Readable.md#listenercount)

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

#### Inherited from

[Readable](internal_.Readable.md).[listeners](internal_.Readable.md#listeners)

___

### off

▸ **off**(`eventName`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[off](internal_.Readable.md#off)

___

### on

▸ **on**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

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

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on)

▸ **on**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on)

▸ **on**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on)

▸ **on**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on)

▸ **on**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on)

▸ **on**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on)

▸ **on**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on)

▸ **on**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on)

___

### once

▸ **once**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

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

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once)

▸ **once**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once)

▸ **once**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once)

▸ **once**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once)

▸ **once**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once)

▸ **once**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once)

▸ **once**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once)

▸ **once**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once)

___

### pause

▸ **pause**(): [`IncomingMessage`](internal_.IncomingMessage.md)

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

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

**`Since`**

v0.9.4

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[pause](internal_.Readable.md#pause)

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

[Readable](internal_.Readable.md).[pipe](internal_.Readable.md#pipe)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

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

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependListener](internal_.Readable.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependListener](internal_.Readable.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependListener](internal_.Readable.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependListener](internal_.Readable.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependListener](internal_.Readable.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependListener](internal_.Readable.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependListener](internal_.Readable.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependListener](internal_.Readable.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

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

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependOnceListener](internal_.Readable.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependOnceListener](internal_.Readable.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependOnceListener](internal_.Readable.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependOnceListener](internal_.Readable.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependOnceListener](internal_.Readable.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependOnceListener](internal_.Readable.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependOnceListener](internal_.Readable.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[prependOnceListener](internal_.Readable.md#prependoncelistener)

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[push](internal_.Readable.md#push)

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

#### Inherited from

[Readable](internal_.Readable.md).[rawListeners](internal_.Readable.md#rawlisteners)

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method pulls some data out of the internal buffer and
returns it. If no data available to be read, `null` is returned. By default,
the data will be returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

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
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](internal_.IncomingMessage.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

**`Since`**

v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Inherited from

[Readable](internal_.Readable.md).[read](internal_.Readable.md#read)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`IncomingMessage`](internal_.IncomingMessage.md)

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

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeAllListeners](internal_.Readable.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

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

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeListener](internal_.Readable.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeListener](internal_.Readable.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeListener](internal_.Readable.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeListener](internal_.Readable.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeListener](internal_.Readable.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeListener](internal_.Readable.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeListener](internal_.Readable.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](internal_.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[removeListener](internal_.Readable.md#removelistener)

___

### resume

▸ **resume**(): [`IncomingMessage`](internal_.IncomingMessage.md)

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

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

**`Since`**

v0.9.4

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[resume](internal_.Readable.md#resume)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`IncomingMessage`](internal_.IncomingMessage.md)

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
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

**`Since`**

v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | The encoding to use. |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[setEncoding](internal_.Readable.md#setencoding)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`IncomingMessage`](internal_.IncomingMessage.md)

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

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[setMaxListeners](internal_.Readable.md#setmaxlisteners)

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [`IncomingMessage`](internal_.IncomingMessage.md)

Calls `message.socket.setTimeout(msecs, callback)`.

**`Since`**

v0.5.9

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs` | `number` |
| `callback?` | () => `void` |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

___

### unpipe

▸ **unpipe**(`destination?`): [`IncomingMessage`](internal_.IncomingMessage.md)

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](internal_.IncomingMessage.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
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

**`Since`**

v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | [`WritableStream`](../interfaces/internal_.WritableStream-1.md) | Optional specific stream to unpipe |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[unpipe](internal_.Readable.md#unpipe)

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

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
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.match(/\n\n/)) {
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
      } else {
        // Still reading the header.
        header += str;
      }
    }
  }
}
```

Unlike [push](internal_.IncomingMessage.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](internal_.IncomingMessage.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](internal_.IncomingMessage.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

**`Since`**

v0.9.11

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

#### Inherited from

[Readable](internal_.Readable.md).[unshift](internal_.Readable.md#unshift)

___

### wrap

▸ **wrap**(`stream`): [`IncomingMessage`](internal_.IncomingMessage.md)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](internal_.IncomingMessage.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

**`Since`**

v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) | An "old style" readable stream |

#### Returns

[`IncomingMessage`](internal_.IncomingMessage.md)

#### Inherited from

[Readable](internal_.Readable.md).[wrap](internal_.Readable.md#wrap)

___

### from

▸ `Static` **from**(`iterable`, `options?`): [`Readable`](internal_.Readable.md)

A utility method for creating Readable Streams out of iterators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | [`Iterable`](../interfaces/internal_.Iterable.md)<`any`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`any`\> |
| `options?` | [`ReadableOptions`](../interfaces/internal_.internal.ReadableOptions.md) |

#### Returns

[`Readable`](internal_.Readable.md)

#### Inherited from

[Readable](internal_.Readable.md).[from](internal_.Readable.md#from)

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

[Readable](internal_.Readable.md).[getEventListeners](internal_.Readable.md#geteventlisteners)

___

### isDisturbed

▸ `Static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

**`Since`**

v16.8.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](internal_.Readable.md) \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Returns

`boolean`

#### Inherited from

[Readable](internal_.Readable.md).[isDisturbed](internal_.Readable.md#isdisturbed)

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

[Readable](internal_.Readable.md).[listenerCount](internal_.Readable.md#listenercount-1)

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

[Readable](internal_.Readable.md).[on](internal_.Readable.md#on-1)

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

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once-1)

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

[Readable](internal_.Readable.md).[once](internal_.Readable.md#once-1)

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

[Readable](internal_.Readable.md).[setMaxListeners](internal_.Readable.md#setmaxlisteners-1)
