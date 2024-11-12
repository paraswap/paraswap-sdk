[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AsyncIterator

# Interface: AsyncIterator\<T, TReturn, TNext\>

## Type Parameters

• **T**

• **TReturn** = `any`

• **TNext** = `any`

## Methods

### next()

> **next**(...`__namedParameters`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• ...**\_\_namedParameters**: [] \| [`TNext`]

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Defined in

node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:32

***

### return()?

> `optional` **return**(`value`?): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• **value?**: `TReturn` \| [`PromiseLike`](PromiseLike.md)\<`TReturn`\>

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Defined in

node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:33

***

### throw()?

> `optional` **throw**(`e`?): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• **e?**: `any`

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Defined in

node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34
