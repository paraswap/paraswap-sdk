[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / IterableIterator

# Interface: IterableIterator\<T, TReturn, TNext\>

Describes a user-defined [Iterator](Iterator.md) that is also iterable.

## Extends

- [`Iterator`](Iterator.md)\<`T`, `TReturn`, `TNext`\>

## Type Parameters

• **T**

• **TReturn** = `any`

• **TNext** = `any`

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](IterableIterator.md)\<`T`, `TReturn`, `TNext`\>

#### Returns

[`IterableIterator`](IterableIterator.md)\<`T`, `TReturn`, `TNext`\>

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:56

***

### next()

> **next**(...`__namedParameters`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• ...**\_\_namedParameters**: [] \| [`TNext`]

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Inherited from

[`Iterator`](Iterator.md).[`next`](Iterator.md#next)

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

***

### return()?

> `optional` **return**(`value`?): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• **value?**: `TReturn`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Inherited from

[`Iterator`](Iterator.md).[`return`](Iterator.md#return)

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:44

***

### throw()?

> `optional` **throw**(`e`?): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• **e?**: `any`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Inherited from

[`Iterator`](Iterator.md).[`throw`](Iterator.md#throw)

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:45
