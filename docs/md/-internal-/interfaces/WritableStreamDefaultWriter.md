[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / WritableStreamDefaultWriter

# Interface: WritableStreamDefaultWriter\<W\>

This Streams API interface is the object returned by
WritableStream.getWriter() and once created locks the < writer to the
WritableStream ensuring that no other streams can write to the underlying
sink.

## Type Parameters

• **W** = `any`

## Properties

### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

#### Defined in

node\_modules/@types/node/stream/web.d.ts:305

***

### desiredSize

> `readonly` **desiredSize**: `null` \| `number`

#### Defined in

node\_modules/@types/node/stream/web.d.ts:306

***

### ready

> `readonly` **ready**: `Promise`\<`undefined`\>

#### Defined in

node\_modules/@types/node/stream/web.d.ts:307

## Methods

### abort()

> **abort**(`reason`?): `Promise`\<`void`\>

#### Parameters

• **reason?**: `any`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@types/node/stream/web.d.ts:308

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@types/node/stream/web.d.ts:309

***

### releaseLock()

> **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream/web.d.ts:310

***

### write()

> **write**(`chunk`?): `Promise`\<`void`\>

#### Parameters

• **chunk?**: `W`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@types/node/stream/web.d.ts:311
