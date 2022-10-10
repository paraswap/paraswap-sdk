[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Object

# Interface: Object

[<internal>](../modules/internal_.md).Object

## Table of contents

### Properties

- [constructor](internal_.Object.md#constructor)

### Methods

- [hasOwnProperty](internal_.Object.md#hasownproperty)
- [isPrototypeOf](internal_.Object.md#isprototypeof)
- [propertyIsEnumerable](internal_.Object.md#propertyisenumerable)
- [toLocaleString](internal_.Object.md#tolocalestring)
- [toString](internal_.Object.md#tostring)
- [valueOf](internal_.Object.md#valueof)

## Properties

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:124

## Methods

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`PropertyKey`](../modules/internal_.md#propertykey) | A property name. |

#### Returns

`boolean`

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Object`](../modules/internal_.md#object) | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`PropertyKey`](../modules/internal_.md#propertykey) | A property name. |

#### Returns

`boolean`

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

___

### valueOf

▸ **valueOf**(): [`Object`](../modules/internal_.md#object)

Returns the primitive value of the specified object.

#### Returns

[`Object`](../modules/internal_.md#object)
