[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / BigNumber

# Class: BigNumber

## Implements

- [`Hexable`](../interfaces/Hexable.md)

## Constructors

### new BigNumber()

> **new BigNumber**(`constructorGuard`, `hex`): [`BigNumber`](BigNumber.md)

#### Parameters

• **constructorGuard**: `any`

• **hex**: `string`

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:7

## Properties

### \_hex

> `readonly` **\_hex**: `string`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:5

***

### \_isBigNumber

> `readonly` **\_isBigNumber**: `boolean`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:6

## Methods

### abs()

> **abs**(): [`BigNumber`](BigNumber.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:10

***

### add()

> **add**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:11

***

### and()

> **and**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:17

***

### div()

> **div**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:13

***

### eq()

> **eq**(`other`): `boolean`

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:23

***

### fromTwos()

> **fromTwos**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

• **value**: `number`

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:8

***

### gt()

> **gt**(`other`): `boolean`

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:26

***

### gte()

> **gte**(`other`): `boolean`

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:27

***

### isNegative()

> **isNegative**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:28

***

### isZero()

> **isZero**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:29

***

### lt()

> **lt**(`other`): `boolean`

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:24

***

### lte()

> **lte**(`other`): `boolean`

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:25

***

### mask()

> **mask**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

• **value**: `number`

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:20

***

### mod()

> **mod**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:15

***

### mul()

> **mul**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:14

***

### or()

> **or**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:18

***

### pow()

> **pow**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:16

***

### shl()

> **shl**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

• **value**: `number`

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:21

***

### shr()

> **shr**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

• **value**: `number`

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:22

***

### sub()

> **sub**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:12

***

### toBigInt()

> **toBigInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:31

***

### toHexString()

> **toHexString**(): `string`

#### Returns

`string`

#### Implementation of

[`Hexable`](../interfaces/Hexable.md).[`toHexString`](../interfaces/Hexable.md#tohexstring)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:33

***

### toJSON()

> **toJSON**(`key`?): `any`

#### Parameters

• **key?**: `string`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:34

***

### toNumber()

> **toNumber**(): `number`

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:30

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:32

***

### toTwos()

> **toTwos**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

• **value**: `number`

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:9

***

### xor()

> **xor**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

• **other**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:19

***

### from()

> `static` **from**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

• **value**: `any`

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:35

***

### isBigNumber()

> `static` **isBigNumber**(`value`): `value is BigNumber`

#### Parameters

• **value**: `any`

#### Returns

`value is BigNumber`

#### Defined in

node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:36
