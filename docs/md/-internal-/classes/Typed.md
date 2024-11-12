[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Typed

# Class: Typed

The **Typed** class to wrap values providing explicit type information.

## Extended by

- [`TypedBigInt`](../interfaces/TypedBigInt.md)
- [`TypedData`](../interfaces/TypedData.md)
- [`TypedString`](../interfaces/TypedString.md)

## Constructors

### new Typed()

> **new Typed**(`gaurd`, `type`, `value`, `options`?): [`Typed`](Typed.md)

@_ignore:

#### Parameters

• **gaurd**: `any`

• **type**: `string`

• **value**: `any`

• **options?**: `any`

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:94

## Properties

### \_typedSymbol

> `readonly` **\_typedSymbol**: `Symbol`

@_ignore:

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:90

***

### type

> `readonly` **type**: `string`

The type, as a Solidity-compatible type.

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:82

***

### value

> `readonly` **value**: `any`

The actual value.

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:86

## Accessors

### arrayLength

#### Get Signature

> **get** **arrayLength**(): `null` \| `number`

Returns the length of the array type or ``-1`` if it is dynamic.

 Throws if the type is not an array.

##### Returns

`null` \| `number`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:132

***

### tupleName

#### Get Signature

> **get** **tupleName**(): `null` \| `string`

Returns the tuple name, if this is a tuple. Throws otherwise.

##### Returns

`null` \| `string`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:126

## Methods

### defaultValue()

> **defaultValue**(): `string` \| `number` \| `bigint` \| [`Result`](Result.md)

The default value returned by this type.

#### Returns

`string` \| `number` \| `bigint` \| [`Result`](Result.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:102

***

### format()

> **format**(): `string`

Format the type as a Human-Readable type.

#### Returns

`string`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:98

***

### isBigInt()

> **isBigInt**(): `this is TypedBigInt`

Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].

#### Returns

`this is TypedBigInt`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:114

***

### isData()

> **isData**(): `this is TypedData`

Returns ``true`` and provides a type guard is this is a [[TypedData]].

#### Returns

`this is TypedData`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:118

***

### isString()

> **isString**(): `this is TypedString`

Returns ``true`` and provides a type guard is this is a [[TypedString]].

#### Returns

`this is TypedString`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:122

***

### maxValue()

> **maxValue**(): `string` \| `number` \| `bigint`

The maximum value for numeric types.

#### Returns

`string` \| `number` \| `bigint`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:110

***

### minValue()

> **minValue**(): `string` \| `number` \| `bigint`

The minimum value for numeric types.

#### Returns

`string` \| `number` \| `bigint`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:106

***

### address()

> `static` **address**(`v`): [`Typed`](Typed.md)

Return a new ``address`` type for %%v%%.

#### Parameters

• **v**: `string` \| [`Addressable`](../interfaces/Addressable.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:532

***

### array()

> `static` **array**(`v`, `dynamic`?): [`Typed`](Typed.md)

Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.

#### Parameters

• **v**: `any`[]

• **dynamic?**: `null` \| `boolean`

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:548

***

### bool()

> `static` **bool**(`v`): [`Typed`](Typed.md)

Return a new ``bool`` type for %%v%%.

#### Parameters

• **v**: `any`

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:536

***

### bytes()

> `static` **bytes**(`v`): [`Typed`](Typed.md)

Return a new ``bytes`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:540

***

### bytes1()

> `static` **bytes1**(`v`): [`Typed`](Typed.md)

Return a new ``bytes1`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:404

***

### bytes10()

> `static` **bytes10**(`v`): [`Typed`](Typed.md)

Return a new ``bytes10`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:440

***

### bytes11()

> `static` **bytes11**(`v`): [`Typed`](Typed.md)

Return a new ``bytes11`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:444

***

### bytes12()

> `static` **bytes12**(`v`): [`Typed`](Typed.md)

Return a new ``bytes12`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:448

***

### bytes13()

> `static` **bytes13**(`v`): [`Typed`](Typed.md)

Return a new ``bytes13`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:452

***

### bytes14()

> `static` **bytes14**(`v`): [`Typed`](Typed.md)

Return a new ``bytes14`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:456

***

### bytes15()

> `static` **bytes15**(`v`): [`Typed`](Typed.md)

Return a new ``bytes15`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:460

***

### bytes16()

> `static` **bytes16**(`v`): [`Typed`](Typed.md)

Return a new ``bytes16`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:464

***

### bytes17()

> `static` **bytes17**(`v`): [`Typed`](Typed.md)

Return a new ``bytes17`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:468

***

### bytes18()

> `static` **bytes18**(`v`): [`Typed`](Typed.md)

Return a new ``bytes18`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:472

***

### bytes19()

> `static` **bytes19**(`v`): [`Typed`](Typed.md)

Return a new ``bytes19`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:476

***

### bytes2()

> `static` **bytes2**(`v`): [`Typed`](Typed.md)

Return a new ``bytes2`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:408

***

### bytes20()

> `static` **bytes20**(`v`): [`Typed`](Typed.md)

Return a new ``bytes20`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:480

***

### bytes21()

> `static` **bytes21**(`v`): [`Typed`](Typed.md)

Return a new ``bytes21`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:484

***

### bytes22()

> `static` **bytes22**(`v`): [`Typed`](Typed.md)

Return a new ``bytes22`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:488

***

### bytes23()

> `static` **bytes23**(`v`): [`Typed`](Typed.md)

Return a new ``bytes23`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:492

***

### bytes24()

> `static` **bytes24**(`v`): [`Typed`](Typed.md)

Return a new ``bytes24`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:496

***

### bytes25()

> `static` **bytes25**(`v`): [`Typed`](Typed.md)

Return a new ``bytes25`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:500

***

### bytes26()

> `static` **bytes26**(`v`): [`Typed`](Typed.md)

Return a new ``bytes26`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:504

***

### bytes27()

> `static` **bytes27**(`v`): [`Typed`](Typed.md)

Return a new ``bytes27`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:508

***

### bytes28()

> `static` **bytes28**(`v`): [`Typed`](Typed.md)

Return a new ``bytes28`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:512

***

### bytes29()

> `static` **bytes29**(`v`): [`Typed`](Typed.md)

Return a new ``bytes29`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:516

***

### bytes3()

> `static` **bytes3**(`v`): [`Typed`](Typed.md)

Return a new ``bytes3`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:412

***

### bytes30()

> `static` **bytes30**(`v`): [`Typed`](Typed.md)

Return a new ``bytes30`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:520

***

### bytes31()

> `static` **bytes31**(`v`): [`Typed`](Typed.md)

Return a new ``bytes31`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:524

***

### bytes32()

> `static` **bytes32**(`v`): [`Typed`](Typed.md)

Return a new ``bytes32`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:528

***

### bytes4()

> `static` **bytes4**(`v`): [`Typed`](Typed.md)

Return a new ``bytes4`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:416

***

### bytes5()

> `static` **bytes5**(`v`): [`Typed`](Typed.md)

Return a new ``bytes5`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:420

***

### bytes6()

> `static` **bytes6**(`v`): [`Typed`](Typed.md)

Return a new ``bytes6`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:424

***

### bytes7()

> `static` **bytes7**(`v`): [`Typed`](Typed.md)

Return a new ``bytes7`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:428

***

### bytes8()

> `static` **bytes8**(`v`): [`Typed`](Typed.md)

Return a new ``bytes8`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:432

***

### bytes9()

> `static` **bytes9**(`v`): [`Typed`](Typed.md)

Return a new ``bytes9`` type for %%v%%.

#### Parameters

• **v**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:436

***

### dereference()

> `static` **dereference**\<`T`\>(`value`, `type`): `T`

If the value is a [[Typed]] instance, validates the underlying value
 and returns it, otherwise returns value directly.

 This is useful for functions that with to accept either a [[Typed]]
 object or values.

#### Type Parameters

• **T**

#### Parameters

• **value**: [`Typed`](Typed.md) \| `T`

• **type**: `string`

#### Returns

`T`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:568

***

### from()

> `static` **from**(`type`, `value`): [`Typed`](Typed.md)

Returns a new **Typed** of %%type%% with the %%value%%.

#### Parameters

• **type**: `string`

• **value**: `any`

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:136

***

### int()

> `static` **int**(`v`): [`Typed`](Typed.md)

Return a new ``int256`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:400

***

### int104()

> `static` **int104**(`v`): [`Typed`](Typed.md)

Return a new ``int104`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:320

***

### int112()

> `static` **int112**(`v`): [`Typed`](Typed.md)

Return a new ``int112`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:324

***

### int120()

> `static` **int120**(`v`): [`Typed`](Typed.md)

Return a new ``int120`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:328

***

### int128()

> `static` **int128**(`v`): [`Typed`](Typed.md)

Return a new ``int128`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:332

***

### int136()

> `static` **int136**(`v`): [`Typed`](Typed.md)

Return a new ``int136`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:336

***

### int144()

> `static` **int144**(`v`): [`Typed`](Typed.md)

Return a new ``int144`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:340

***

### int152()

> `static` **int152**(`v`): [`Typed`](Typed.md)

Return a new ``int52`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:344

***

### int16()

> `static` **int16**(`v`): [`Typed`](Typed.md)

Return a new ``int16`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:276

***

### int160()

> `static` **int160**(`v`): [`Typed`](Typed.md)

Return a new ``int160`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:348

***

### int168()

> `static` **int168**(`v`): [`Typed`](Typed.md)

Return a new ``int168`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:352

***

### int176()

> `static` **int176**(`v`): [`Typed`](Typed.md)

Return a new ``int176`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:356

***

### int184()

> `static` **int184**(`v`): [`Typed`](Typed.md)

Return a new ``int184`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:360

***

### int192()

> `static` **int192**(`v`): [`Typed`](Typed.md)

Return a new ``int92`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:364

***

### int200()

> `static` **int200**(`v`): [`Typed`](Typed.md)

Return a new ``int200`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:368

***

### int208()

> `static` **int208**(`v`): [`Typed`](Typed.md)

Return a new ``int208`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:372

***

### int216()

> `static` **int216**(`v`): [`Typed`](Typed.md)

Return a new ``int216`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:376

***

### int224()

> `static` **int224**(`v`): [`Typed`](Typed.md)

Return a new ``int224`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:380

***

### int232()

> `static` **int232**(`v`): [`Typed`](Typed.md)

Return a new ``int232`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:384

***

### int24()

> `static` **int24**(`v`): [`Typed`](Typed.md)

Return a new ``int24`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:280

***

### int240()

> `static` **int240**(`v`): [`Typed`](Typed.md)

Return a new ``int240`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:388

***

### int248()

> `static` **int248**(`v`): [`Typed`](Typed.md)

Return a new ``int248`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:392

***

### int256()

> `static` **int256**(`v`): [`Typed`](Typed.md)

Return a new ``int256`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:396

***

### int32()

> `static` **int32**(`v`): [`Typed`](Typed.md)

Return a new ``int32`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:284

***

### int40()

> `static` **int40**(`v`): [`Typed`](Typed.md)

Return a new ``int40`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:288

***

### int48()

> `static` **int48**(`v`): [`Typed`](Typed.md)

Return a new ``int48`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:292

***

### int56()

> `static` **int56**(`v`): [`Typed`](Typed.md)

Return a new ``int56`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:296

***

### int64()

> `static` **int64**(`v`): [`Typed`](Typed.md)

Return a new ``int64`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:300

***

### int72()

> `static` **int72**(`v`): [`Typed`](Typed.md)

Return a new ``int72`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:304

***

### int8()

> `static` **int8**(`v`): [`Typed`](Typed.md)

Return a new ``int8`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:272

***

### int80()

> `static` **int80**(`v`): [`Typed`](Typed.md)

Return a new ``int80`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:308

***

### int88()

> `static` **int88**(`v`): [`Typed`](Typed.md)

Return a new ``int88`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:312

***

### int96()

> `static` **int96**(`v`): [`Typed`](Typed.md)

Return a new ``int96`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:316

***

### isTyped()

> `static` **isTyped**(`value`): `value is Typed`

Returns true only if %%value%% is a [[Typed]] instance.

#### Parameters

• **value**: `any`

#### Returns

`value is Typed`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:560

***

### overrides()

> `static` **overrides**(`v`): [`Typed`](Typed.md)

Return a new ``uint8`` type for %%v%%.

#### Parameters

• **v**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:556

***

### string()

> `static` **string**(`v`): [`Typed`](Typed.md)

Return a new ``string`` type for %%v%%.

#### Parameters

• **v**: `string`

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:544

***

### tuple()

> `static` **tuple**(`v`, `name`?): [`Typed`](Typed.md)

Return a new ``tuple`` type for %%v%%, with the optional %%name%%.

#### Parameters

• **v**: `any`[] \| [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

• **name?**: `string`

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:552

***

### uint()

> `static` **uint**(`v`): [`Typed`](Typed.md)

Return a new ``uint256`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:268

***

### uint104()

> `static` **uint104**(`v`): [`Typed`](Typed.md)

Return a new ``uint104`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:188

***

### uint112()

> `static` **uint112**(`v`): [`Typed`](Typed.md)

Return a new ``uint112`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:192

***

### uint120()

> `static` **uint120**(`v`): [`Typed`](Typed.md)

Return a new ``uint120`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:196

***

### uint128()

> `static` **uint128**(`v`): [`Typed`](Typed.md)

Return a new ``uint128`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:200

***

### uint136()

> `static` **uint136**(`v`): [`Typed`](Typed.md)

Return a new ``uint136`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:204

***

### uint144()

> `static` **uint144**(`v`): [`Typed`](Typed.md)

Return a new ``uint144`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:208

***

### uint152()

> `static` **uint152**(`v`): [`Typed`](Typed.md)

Return a new ``uint152`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:212

***

### uint16()

> `static` **uint16**(`v`): [`Typed`](Typed.md)

Return a new ``uint16`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:144

***

### uint160()

> `static` **uint160**(`v`): [`Typed`](Typed.md)

Return a new ``uint160`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:216

***

### uint168()

> `static` **uint168**(`v`): [`Typed`](Typed.md)

Return a new ``uint168`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:220

***

### uint176()

> `static` **uint176**(`v`): [`Typed`](Typed.md)

Return a new ``uint176`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:224

***

### uint184()

> `static` **uint184**(`v`): [`Typed`](Typed.md)

Return a new ``uint184`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:228

***

### uint192()

> `static` **uint192**(`v`): [`Typed`](Typed.md)

Return a new ``uint192`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:232

***

### uint200()

> `static` **uint200**(`v`): [`Typed`](Typed.md)

Return a new ``uint200`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:236

***

### uint208()

> `static` **uint208**(`v`): [`Typed`](Typed.md)

Return a new ``uint208`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:240

***

### uint216()

> `static` **uint216**(`v`): [`Typed`](Typed.md)

Return a new ``uint216`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:244

***

### uint224()

> `static` **uint224**(`v`): [`Typed`](Typed.md)

Return a new ``uint224`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:248

***

### uint232()

> `static` **uint232**(`v`): [`Typed`](Typed.md)

Return a new ``uint232`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:252

***

### uint24()

> `static` **uint24**(`v`): [`Typed`](Typed.md)

Return a new ``uint24`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:148

***

### uint240()

> `static` **uint240**(`v`): [`Typed`](Typed.md)

Return a new ``uint240`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:256

***

### uint248()

> `static` **uint248**(`v`): [`Typed`](Typed.md)

Return a new ``uint248`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:260

***

### uint256()

> `static` **uint256**(`v`): [`Typed`](Typed.md)

Return a new ``uint256`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:264

***

### uint32()

> `static` **uint32**(`v`): [`Typed`](Typed.md)

Return a new ``uint32`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:152

***

### uint40()

> `static` **uint40**(`v`): [`Typed`](Typed.md)

Return a new ``uint40`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:156

***

### uint48()

> `static` **uint48**(`v`): [`Typed`](Typed.md)

Return a new ``uint48`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:160

***

### uint56()

> `static` **uint56**(`v`): [`Typed`](Typed.md)

Return a new ``uint56`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:164

***

### uint64()

> `static` **uint64**(`v`): [`Typed`](Typed.md)

Return a new ``uint64`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:168

***

### uint72()

> `static` **uint72**(`v`): [`Typed`](Typed.md)

Return a new ``uint72`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:172

***

### uint8()

> `static` **uint8**(`v`): [`Typed`](Typed.md)

Return a new ``uint8`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:140

***

### uint80()

> `static` **uint80**(`v`): [`Typed`](Typed.md)

Return a new ``uint80`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:176

***

### uint88()

> `static` **uint88**(`v`): [`Typed`](Typed.md)

Return a new ``uint88`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:180

***

### uint96()

> `static` **uint96**(`v`): [`Typed`](Typed.md)

Return a new ``uint96`` type for %%v%%.

#### Parameters

• **v**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`Typed`](Typed.md)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/typed.d.ts:184
