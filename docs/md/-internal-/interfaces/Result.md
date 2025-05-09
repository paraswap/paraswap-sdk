[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Result

# Interface: Result

## Extends

- `ReadonlyArray`\<`any`\>

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### \[unscopables\]?

> `readonly` `optional` **\[unscopables\]**: `boolean`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### length?

> `readonly` `optional` **length**: `boolean`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### \[iterator\]?

> `optional` **\[iterator\]**

#### at?

> `optional` **at**

#### concat?

> `optional` **concat**

#### entries?

> `optional` **entries**

#### every?

> `optional` **every**

#### filter?

> `optional` **filter**

#### find?

> `optional` **find**

#### findIndex?

> `optional` **findIndex**

#### flat?

> `optional` **flat**

#### flatMap?

> `optional` **flatMap**

#### forEach?

> `optional` **forEach**

#### includes?

> `optional` **includes**

#### indexOf?

> `optional` **indexOf**

#### join?

> `optional` **join**

#### keys?

> `optional` **keys**

#### lastIndexOf?

> `optional` **lastIndexOf**

#### map?

> `optional` **map**

#### reduce?

> `optional` **reduce**

#### reduceRight?

> `optional` **reduceRight**

#### slice?

> `optional` **slice**

#### some?

> `optional` **some**

#### toLocaleString?

> `optional` **toLocaleString**

#### toString?

> `optional` **toString**

#### values?

> `optional` **values**

#### Inherited from

`ReadonlyArray.[unscopables]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:107

***

### length

> `readonly` **length**: `number`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### Inherited from

`ReadonlyArray.length`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1192

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`ArrayIterator`](ArrayIterator.md)\<`any`\>

Iterator of values in the array.

#### Returns

[`ArrayIterator`](ArrayIterator.md)\<`any`\>

#### Inherited from

`ReadonlyArray.[iterator]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:114

***

### at()

> **at**(`index`): `any`

#### Parameters

• **index**: `number`

#### Returns

`any`

#### Inherited from

`ReadonlyArray.at`

#### Defined in

node\_modules/@types/node/compatibility/indexable.d.ts:7

***

### concat()

#### concat(items)

> **concat**(...`items`): `any`[]

Combines two or more arrays.

##### Parameters

• ...**items**: [`ConcatArray`](ConcatArray.md)\<`any`\>[]

Additional items to add to the end of array1.

##### Returns

`any`[]

##### Inherited from

`ReadonlyArray.concat`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1205

#### concat(items)

> **concat**(...`items`): `any`[]

Combines two or more arrays.

##### Parameters

• ...**items**: `any`[]

Additional items to add to the end of array1.

##### Returns

`any`[]

##### Inherited from

`ReadonlyArray.concat`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1210

***

### entries()

> **entries**(): [`ArrayIterator`](ArrayIterator.md)\<[`number`, `any`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

[`ArrayIterator`](ArrayIterator.md)\<[`number`, `any`]\>

#### Inherited from

`ReadonlyArray.entries`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

***

### every()

#### every(predicate, thisArg)

> **every**\<`S`\>(`predicate`, `thisArg`?): `this is readonly S[]`

Determines whether all the members of an array satisfy the specified test.

##### Type Parameters

• **S** *extends* `any`

##### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`this is readonly S[]`

##### Inherited from

`ReadonlyArray.every`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1242

#### every(predicate, thisArg)

> **every**(`predicate`, `thisArg`?): `boolean`

Determines whether all the members of an array satisfy the specified test.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

`ReadonlyArray.every`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1251

***

### filter()

#### filter(predicate, thisArg)

> **filter**\<`S`\>(`predicate`, `thisArg`?): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Type Parameters

• **S** *extends* `any`

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

`ReadonlyArray.filter`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1278

#### filter(predicate, thisArg)

> **filter**(`predicate`, `thisArg`?): `any`[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`any`[]

##### Inherited from

`ReadonlyArray.filter`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1284

***

### find()

#### find(predicate, thisArg)

> **find**\<`S`\>(`predicate`, `thisArg`?): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

• **S** *extends* `any`

##### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`undefined` \| `S`

##### Inherited from

`ReadonlyArray.find`

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:352

#### find(predicate, thisArg)

> **find**(`predicate`, `thisArg`?): `any`

##### Parameters

• **predicate**

• **thisArg?**: `any`

##### Returns

`any`

##### Inherited from

`ReadonlyArray.find`

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:353

***

### findIndex()

> **findIndex**(`predicate`, `thisArg`?): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.findIndex`

#### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:364

***

### flat()

> **flat**\<`A`, `D`\>(`this`, `depth`?): [`FlatArray`](../type-aliases/FlatArray.md)\<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type Parameters

• **A**

• **D** *extends* `number` = `1`

#### Parameters

• **this**: `A`

• **depth?**: `D`

The maximum recursion depth

#### Returns

[`FlatArray`](../type-aliases/FlatArray.md)\<`A`, `D`\>[]

#### Inherited from

`ReadonlyArray.flat`

#### Defined in

node\_modules/typescript/lib/lib.es2019.array.d.ts:47

***

### flatMap()

> **flatMap**\<`U`, `This`\>(`callback`, `thisArg`?): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type Parameters

• **U**

• **This** = `undefined`

#### Parameters

• **callback**

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

• **thisArg?**: `This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`ReadonlyArray.flatMap`

#### Defined in

node\_modules/typescript/lib/lib.es2019.array.d.ts:36

***

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Performs the specified action for each element in an array.

#### Parameters

• **callbackfn**

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`ReadonlyArray.forEach`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1266

***

### includes()

> **includes**(`searchElement`, `fromIndex`?): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

• **searchElement**: `any`

The element to search for.

• **fromIndex?**: `number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`ReadonlyArray.includes`

#### Defined in

node\_modules/typescript/lib/lib.es2016.array.include.d.ts:34

***

### indexOf()

> **indexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the first occurrence of a value in an array.

#### Parameters

• **searchElement**: `any`

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.indexOf`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1227

***

### join()

> **join**(`separator`?): `string`

Adds all the elements of an array separated by the specified separator string.

#### Parameters

• **separator?**: `string`

A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.join`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1215

***

### keys()

> **keys**(): [`ArrayIterator`](ArrayIterator.md)\<`number`\>

Returns an iterable of keys in the array

#### Returns

[`ArrayIterator`](ArrayIterator.md)\<`number`\>

#### Inherited from

`ReadonlyArray.keys`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the last occurrence of a specified value in an array.

#### Parameters

• **searchElement**: `any`

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.lastIndexOf`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1233

***

### map()

> **map**\<`U`\>(`callbackfn`, `thisArg`?): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type Parameters

• **U**

#### Parameters

• **callbackfn**

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`ReadonlyArray.map`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1272

***

### reduce()

#### reduce(callbackfn)

> **reduce**(`callbackfn`): `any`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

`any`

##### Inherited from

`ReadonlyArray.reduce`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1290

#### reduce(callbackfn, initialValue)

> **reduce**(`callbackfn`, `initialValue`): `any`

##### Parameters

• **callbackfn**

• **initialValue**: `any`

##### Returns

`any`

##### Inherited from

`ReadonlyArray.reduce`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1291

#### reduce(callbackfn, initialValue)

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`ReadonlyArray.reduce`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1297

***

### reduceRight()

#### reduceRight(callbackfn)

> **reduceRight**(`callbackfn`): `any`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

`any`

##### Inherited from

`ReadonlyArray.reduceRight`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1303

#### reduceRight(callbackfn, initialValue)

> **reduceRight**(`callbackfn`, `initialValue`): `any`

##### Parameters

• **callbackfn**

• **initialValue**: `any`

##### Returns

`any`

##### Inherited from

`ReadonlyArray.reduceRight`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1304

#### reduceRight(callbackfn, initialValue)

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`ReadonlyArray.reduceRight`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1310

***

### slice()

> **slice**(`start`?, `end`?): `any`[]

Returns a section of an array.

#### Parameters

• **start?**: `number`

The beginning of the specified portion of the array.

• **end?**: `number`

The end of the specified portion of the array. This is exclusive of the element at the index 'end'.

#### Returns

`any`[]

#### Inherited from

`ReadonlyArray.slice`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1221

***

### some()

> **some**(`predicate`, `thisArg`?): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

• **predicate**

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`ReadonlyArray.some`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1260

***

### toLocaleString()

#### toLocaleString()

> **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

`ReadonlyArray.toLocaleString`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1200

#### toLocaleString(locales, options)

> **toLocaleString**(`locales`, `options`?): `string`

##### Parameters

• **locales**: `string` \| `string`[]

• **options?**: `NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

`ReadonlyArray.toLocaleString`

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:366

***

### toString()

> **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.toString`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1196

***

### values()

> **values**(): [`ArrayIterator`](ArrayIterator.md)\<`any`\>

Returns an iterable of values in the array

#### Returns

[`ArrayIterator`](ArrayIterator.md)\<`any`\>

#### Inherited from

`ReadonlyArray.values`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129
