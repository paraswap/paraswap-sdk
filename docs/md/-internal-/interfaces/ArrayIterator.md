[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ArrayIterator

# Interface: ArrayIterator\<T\>

## Extends

- `IteratorObject`\<`T`, [`BuiltinIteratorReturn`](../type-aliases/BuiltinIteratorReturn.md), `unknown`\>

## Type Parameters

• **T**

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`ArrayIterator`](ArrayIterator.md)\<`T`\>

#### Returns

[`ArrayIterator`](ArrayIterator.md)\<`T`\>

#### Overrides

`IteratorObject.[iterator]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:73

***

### next()

> **next**(...`__namedParameters`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Parameters

• ...**\_\_namedParameters**: [] \| [`unknown`]

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Inherited from

`IteratorObject.next`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

***

### return()?

> `optional` **return**(`value`?): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Parameters

• **value?**: `undefined`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Inherited from

`IteratorObject.return`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:44

***

### throw()?

> `optional` **throw**(`e`?): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Parameters

• **e?**: `any`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Inherited from

`IteratorObject.throw`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:45
