[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader\<R\>

## Extends

- [`ReadableStreamGenericReader`](ReadableStreamGenericReader.md)

## Type Parameters

• **R** = `any`

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

> **read**(): `Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`R`\>\>

#### Returns

`Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`R`\>\>

#### Defined in

node\_modules/@types/node/stream/web.d.ts:202

***

### releaseLock()

> **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream/web.d.ts:203
