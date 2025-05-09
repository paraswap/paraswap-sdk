[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TypedData

# Interface: TypedData

A **Typed** that represents a binary sequence of data as bytes.

## Extends

- [`Typed`](../classes/Typed.md)

## Properties

### \_typedSymbol

> `readonly` **\_typedSymbol**: `Symbol`

@_ignore:

#### Inherited from

[`Typed`](../classes/Typed.md).[`_typedSymbol`](../classes/Typed.md#_typedsymbol)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:90

***

### type

> `readonly` **type**: `string`

The type, as a Solidity-compatible type.

#### Inherited from

[`Typed`](../classes/Typed.md).[`type`](../classes/Typed.md#type)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:82

***

### value

> **value**: `string`

The value.

#### Overrides

[`Typed`](../classes/Typed.md).[`value`](../classes/Typed.md#value)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:55

## Accessors

### arrayLength

#### Get Signature

> **get** **arrayLength**(): `null` \| `number`

Returns the length of the array type or ``-1`` if it is dynamic.

 Throws if the type is not an array.

##### Returns

`null` \| `number`

#### Inherited from

[`Typed`](../classes/Typed.md).[`arrayLength`](../classes/Typed.md#arraylength)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:132

***

### tupleName

#### Get Signature

> **get** **tupleName**(): `null` \| `string`

Returns the tuple name, if this is a tuple. Throws otherwise.

##### Returns

`null` \| `string`

#### Inherited from

[`Typed`](../classes/Typed.md).[`tupleName`](../classes/Typed.md#tuplename)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:126

## Methods

### defaultValue()

> **defaultValue**(): `string`

The default value for this type.

#### Returns

`string`

#### Overrides

[`Typed`](../classes/Typed.md).[`defaultValue`](../classes/Typed.md#defaultvalue)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:59

***

### format()

> **format**(): `string`

Format the type as a Human-Readable type.

#### Returns

`string`

#### Inherited from

[`Typed`](../classes/Typed.md).[`format`](../classes/Typed.md#format)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:98

***

### isBigInt()

> **isBigInt**(): `this is TypedBigInt`

Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].

#### Returns

`this is TypedBigInt`

#### Inherited from

[`Typed`](../classes/Typed.md).[`isBigInt`](../classes/Typed.md#isbigint)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:114

***

### isData()

> **isData**(): `this is TypedData`

Returns ``true`` and provides a type guard is this is a [[TypedData]].

#### Returns

`this is TypedData`

#### Inherited from

[`Typed`](../classes/Typed.md).[`isData`](../classes/Typed.md#isdata)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:118

***

### isString()

> **isString**(): `this is TypedString`

Returns ``true`` and provides a type guard is this is a [[TypedString]].

#### Returns

`this is TypedString`

#### Inherited from

[`Typed`](../classes/Typed.md).[`isString`](../classes/Typed.md#isstring)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:122

***

### maxValue()

> **maxValue**(): `string` \| `number` \| `bigint`

The maximum value for numeric types.

#### Returns

`string` \| `number` \| `bigint`

#### Inherited from

[`Typed`](../classes/Typed.md).[`maxValue`](../classes/Typed.md#maxvalue)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:110

***

### minValue()

> **minValue**(): `string` \| `number` \| `bigint`

The minimum value for numeric types.

#### Returns

`string` \| `number` \| `bigint`

#### Inherited from

[`Typed`](../classes/Typed.md).[`minValue`](../classes/Typed.md#minvalue)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:106
