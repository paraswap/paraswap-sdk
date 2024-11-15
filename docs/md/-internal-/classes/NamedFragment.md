[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / NamedFragment

# Class: `abstract` NamedFragment

An abstract class to represent An individual fragment
 which has a name from a parse ABI.

## Extends

- [`Fragment`](Fragment.md)

## Extended by

- [`FunctionFragment`](FunctionFragment.md)
- [`EventFragment`](EventFragment.md)
- [`ErrorFragment`](ErrorFragment.md)
- [`StructFragment`](StructFragment.md)

## Properties

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

The inputs for the fragment.

#### Inherited from

[`Fragment`](Fragment.md).[`inputs`](Fragment.md#inputs)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:231

***

### name

> `readonly` **name**: `string`

The name of the fragment.

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:274

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

The type of the fragment.

#### Inherited from

[`Fragment`](Fragment.md).[`type`](Fragment.md#type)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:227

## Methods

### format()

> `abstract` **format**(`format`?): `string`

Returns a string representation of this fragment as %%format%%.

#### Parameters

• **format?**: [`FormatType`](../type-aliases/FormatType.md)

#### Returns

`string`

#### Inherited from

[`Fragment`](Fragment.md).[`format`](Fragment.md#format)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:239

***

### from()

> `static` **from**(`obj`): [`Fragment`](Fragment.md)

Creates a new **Fragment** for %%obj%%, wich can be any supported
 ABI frgament type.

#### Parameters

• **obj**: `any`

#### Returns

[`Fragment`](Fragment.md)

#### Inherited from

[`Fragment`](Fragment.md).[`from`](Fragment.md#from)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:244

***

### isConstructor()

> `static` **isConstructor**(`value`): `value is ConstructorFragment`

Returns true if %%value%% is a [[ConstructorFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is ConstructorFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isConstructor`](Fragment.md#isconstructor)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:248

***

### isError()

> `static` **isError**(`value`): `value is ErrorFragment`

Returns true if %%value%% is an [[ErrorFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is ErrorFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isError`](Fragment.md#iserror)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:252

***

### isEvent()

> `static` **isEvent**(`value`): `value is EventFragment`

Returns true if %%value%% is an [[EventFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is EventFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isEvent`](Fragment.md#isevent)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:256

***

### isFunction()

> `static` **isFunction**(`value`): `value is FunctionFragment`

Returns true if %%value%% is a [[FunctionFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is FunctionFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isFunction`](Fragment.md#isfunction)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:260

***

### isStruct()

> `static` **isStruct**(`value`): `value is StructFragment`

Returns true if %%value%% is a [[StructFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is StructFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isStruct`](Fragment.md#isstruct)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:264
