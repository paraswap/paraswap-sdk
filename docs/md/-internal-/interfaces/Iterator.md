[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Iterator

# Interface: Iterator\<T, TReturn, TNext\>

## Extended by

- [`IterableIterator`](IterableIterator.md)

## Type Parameters

• **T**

• **TReturn** = `any`

• **TNext** = `any`

## Methods

### next()

> **next**(...`__namedParameters`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• ...**\_\_namedParameters**: [] \| [`TNext`]

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

***

### return()?

> `optional` **return**(`value`?): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• **value?**: `TReturn`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:44

***

### throw()?

> `optional` **throw**(`e`?): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• **e?**: `any`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:45
