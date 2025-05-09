[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableWritablePair

# Interface: ReadableWritablePair\<R, W\>

## Type Parameters

• **R** = `any`

• **W** = `any`

## Properties

### readable

> **readable**: [`ReadableStream`](ReadableStream.md)\<`R`\>

#### Defined in

node\_modules/@types/node/stream/web.d.ts:40

***

### writable

> **writable**: [`WritableStream`](WritableStream.md)\<`W`\>

Provides a convenient, chainable way of piping this readable stream
through a transform stream (or any other { writable, readable }
pair). It simply pipes the stream into the writable side of the
supplied pair, and returns the readable side for further use.

Piping a stream will lock it for the duration of the pipe, preventing
any other consumer from acquiring a reader.

#### Defined in

node\_modules/@types/node/stream/web.d.ts:50
