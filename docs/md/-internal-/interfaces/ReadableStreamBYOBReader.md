[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamBYOBReader

# Interface: ReadableStreamBYOBReader

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader)

## Extends

- [`ReadableStreamGenericReader`](ReadableStreamGenericReader.md)

## Properties

### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

#### Inherited from

[`ReadableStreamGenericReader`](ReadableStreamGenericReader.md).[`closed`](ReadableStreamGenericReader.md#closed)

#### Defined in

node\_modules/@types/node/stream/web.d.ts:100

## Methods

### cancel()

> **cancel**(`reason`?): `Promise`\<`void`\>

#### Parameters

• **reason?**: `any`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ReadableStreamGenericReader`](ReadableStreamGenericReader.md).[`cancel`](ReadableStreamGenericReader.md#cancel)

#### Defined in

node\_modules/@types/node/stream/web.d.ts:101

***

### read()

> **read**\<`T`\>(`view`): `Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`T`\>\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read)

#### Type Parameters

• **T** *extends* [`ArrayBufferView`](ArrayBufferView.md)

#### Parameters

• **view**: `T`

#### Returns

`Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`T`\>\>

#### Defined in

node\_modules/@types/node/stream/web.d.ts:208

***

### releaseLock()

> **releaseLock**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock)

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream/web.d.ts:210
