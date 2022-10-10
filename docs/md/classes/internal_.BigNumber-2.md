[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BigNumber

# Class: BigNumber

[<internal>](../modules/internal_.md).BigNumber

## Implements

- [`Instance`](../interfaces/internal_.BigNumber.Instance.md)

## Table of contents

### Constructors

- [constructor](internal_.BigNumber-2.md#constructor)

### Properties

- [\_isBigNumber](internal_.BigNumber-2.md#_isbignumber)
- [c](internal_.BigNumber-2.md#c)
- [e](internal_.BigNumber-2.md#e)
- [s](internal_.BigNumber-2.md#s)
- [BigNumber](internal_.BigNumber-2.md#bignumber)
- [DEBUG](internal_.BigNumber-2.md#debug)
- [EUCLID](internal_.BigNumber-2.md#euclid)
- [ROUND\_CEIL](internal_.BigNumber-2.md#round_ceil)
- [ROUND\_DOWN](internal_.BigNumber-2.md#round_down)
- [ROUND\_FLOOR](internal_.BigNumber-2.md#round_floor)
- [ROUND\_HALF\_CEIL](internal_.BigNumber-2.md#round_half_ceil)
- [ROUND\_HALF\_DOWN](internal_.BigNumber-2.md#round_half_down)
- [ROUND\_HALF\_EVEN](internal_.BigNumber-2.md#round_half_even)
- [ROUND\_HALF\_FLOOR](internal_.BigNumber-2.md#round_half_floor)
- [ROUND\_HALF\_UP](internal_.BigNumber-2.md#round_half_up)
- [ROUND\_UP](internal_.BigNumber-2.md#round_up)
- [default](internal_.BigNumber-2.md#default)

### Methods

- [abs](internal_.BigNumber-2.md#abs)
- [absoluteValue](internal_.BigNumber-2.md#absolutevalue)
- [comparedTo](internal_.BigNumber-2.md#comparedto)
- [decimalPlaces](internal_.BigNumber-2.md#decimalplaces)
- [div](internal_.BigNumber-2.md#div)
- [dividedBy](internal_.BigNumber-2.md#dividedby)
- [dividedToIntegerBy](internal_.BigNumber-2.md#dividedtointegerby)
- [dp](internal_.BigNumber-2.md#dp)
- [eq](internal_.BigNumber-2.md#eq)
- [exponentiatedBy](internal_.BigNumber-2.md#exponentiatedby)
- [gt](internal_.BigNumber-2.md#gt)
- [gte](internal_.BigNumber-2.md#gte)
- [idiv](internal_.BigNumber-2.md#idiv)
- [integerValue](internal_.BigNumber-2.md#integervalue)
- [isEqualTo](internal_.BigNumber-2.md#isequalto)
- [isFinite](internal_.BigNumber-2.md#isfinite)
- [isGreaterThan](internal_.BigNumber-2.md#isgreaterthan)
- [isGreaterThanOrEqualTo](internal_.BigNumber-2.md#isgreaterthanorequalto)
- [isInteger](internal_.BigNumber-2.md#isinteger)
- [isLessThan](internal_.BigNumber-2.md#islessthan)
- [isLessThanOrEqualTo](internal_.BigNumber-2.md#islessthanorequalto)
- [isNaN](internal_.BigNumber-2.md#isnan)
- [isNegative](internal_.BigNumber-2.md#isnegative)
- [isPositive](internal_.BigNumber-2.md#ispositive)
- [isZero](internal_.BigNumber-2.md#iszero)
- [lt](internal_.BigNumber-2.md#lt)
- [lte](internal_.BigNumber-2.md#lte)
- [minus](internal_.BigNumber-2.md#minus)
- [mod](internal_.BigNumber-2.md#mod)
- [modulo](internal_.BigNumber-2.md#modulo)
- [multipliedBy](internal_.BigNumber-2.md#multipliedby)
- [negated](internal_.BigNumber-2.md#negated)
- [plus](internal_.BigNumber-2.md#plus)
- [pow](internal_.BigNumber-2.md#pow)
- [precision](internal_.BigNumber-2.md#precision)
- [sd](internal_.BigNumber-2.md#sd)
- [shiftedBy](internal_.BigNumber-2.md#shiftedby)
- [sqrt](internal_.BigNumber-2.md#sqrt)
- [squareRoot](internal_.BigNumber-2.md#squareroot)
- [times](internal_.BigNumber-2.md#times)
- [toExponential](internal_.BigNumber-2.md#toexponential)
- [toFixed](internal_.BigNumber-2.md#tofixed)
- [toFormat](internal_.BigNumber-2.md#toformat)
- [toFraction](internal_.BigNumber-2.md#tofraction)
- [toJSON](internal_.BigNumber-2.md#tojson)
- [toNumber](internal_.BigNumber-2.md#tonumber)
- [toPrecision](internal_.BigNumber-2.md#toprecision)
- [toString](internal_.BigNumber-2.md#tostring)
- [valueOf](internal_.BigNumber-2.md#valueof)
- [clone](internal_.BigNumber-2.md#clone)
- [config](internal_.BigNumber-2.md#config)
- [isBigNumber](internal_.BigNumber-2.md#isbignumber)
- [max](internal_.BigNumber-2.md#max)
- [maximum](internal_.BigNumber-2.md#maximum)
- [min](internal_.BigNumber-2.md#min)
- [minimum](internal_.BigNumber-2.md#minimum)
- [random](internal_.BigNumber-2.md#random)
- [set](internal_.BigNumber-2.md#set)
- [sum](internal_.BigNumber-2.md#sum)

## Constructors

### constructor

• **new BigNumber**(`n`, `base?`)

Returns a new instance of a BigNumber object with value `n`, where `n` is a numeric value in
the specified `base`, or base 10 if `base` is omitted or is `null` or `undefined`.

```ts
x = new BigNumber(123.4567)              // '123.4567'
// 'new' is optional
y = BigNumber(x)                         // '123.4567'
```

If `n` is a base 10 value it can be in normal (fixed-point) or exponential notation.
Values in other bases must be in normal notation. Values in any base can have fraction digits,
i.e. digits after the decimal point.

```ts
new BigNumber(43210)                     // '43210'
new BigNumber('4.321e+4')                // '43210'
new BigNumber('-735.0918e-430')          // '-7.350918e-428'
new BigNumber('123412421.234324', 5)     // '607236.557696'
```

Signed `0`, signed `Infinity` and `NaN` are supported.

```ts
new BigNumber('-Infinity')               // '-Infinity'
new BigNumber(NaN)                       // 'NaN'
new BigNumber(-0)                        // '0'
new BigNumber('.5')                      // '0.5'
new BigNumber('+2')                      // '2'
```

String values in hexadecimal literal form, e.g. `'0xff'`, are valid, as are string values with
the octal and binary prefixs `'0o'` and `'0b'`. String values in octal literal form without the
prefix will be interpreted as decimals, e.g. `'011'` is interpreted as 11, not 9.

```ts
new BigNumber(-10110100.1, 2)            // '-180.5'
new BigNumber('-0b10110100.1')           // '-180.5'
new BigNumber('ff.8', 16)                // '255.5'
new BigNumber('0xff.8')                  // '255.5'
```

If a base is specified, `n` is rounded according to the current `DECIMAL_PLACES` and
`ROUNDING_MODE` settings. This includes base 10, so don't include a `base` parameter for decimal
values unless this behaviour is desired.

```ts
BigNumber.config({ DECIMAL_PLACES: 5 })
new BigNumber(1.23456789)                // '1.23456789'
new BigNumber(1.23456789, 10)            // '1.23457'
```

An error is thrown if `base` is invalid.

There is no limit to the number of digits of a value of type string (other than that of
JavaScript's maximum array size). See `RANGE` to set the maximum and minimum possible exponent
value of a BigNumber.

```ts
new BigNumber('5032485723458348569331745.33434346346912144534543')
new BigNumber('4.321e10000000')
```

BigNumber `NaN` is returned if `n` is invalid (unless `BigNumber.DEBUG` is `true`, see below).

```ts
new BigNumber('.1*')                    // 'NaN'
new BigNumber('blurgh')                 // 'NaN'
new BigNumber(9, 2)                     // 'NaN'
```

To aid in debugging, if `BigNumber.DEBUG` is `true` then an error will be thrown on an
invalid `n`. An error will also be thrown if `n` is of type number with more than 15
significant digits, as calling `toString` or `valueOf` on these numbers may not result in the
intended value.

```ts
console.log(823456789123456.3)          //  823456789123456.2
new BigNumber(823456789123456.3)        // '823456789123456.2'
BigNumber.DEBUG = true
// 'Error: Number has more than 15 significant digits'
new BigNumber(823456789123456.3)
// 'Error: Not a base 2 number'
new BigNumber(9, 2)
```

A BigNumber can also be created from an object literal.
Use `isBigNumber` to check that it is well-formed.

```ts
new BigNumber({ s: 1, e: 2, c: [ 777, 12300000000000 ], _isBigNumber: true })    // '777.123'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of `n`, integer, 2 to 36 (or `ALPHABET.length`, see `ALPHABET`). |

## Properties

### \_isBigNumber

• `Private` `Readonly` **\_isBigNumber**: ``true``

Used internally to identify a BigNumber instance.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:333

___

### c

• `Readonly` **c**: ``null`` \| `number`[]

The coefficient of the value of this BigNumber, an array of base 1e14 integer numbers, or null.

#### Implementation of

[Instance](../interfaces/internal_.BigNumber.Instance.md).[c](../interfaces/internal_.BigNumber.Instance.md#c)

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:336

___

### e

• `Readonly` **e**: ``null`` \| `number`

The exponent of the value of this BigNumber, an integer number, -1000000000 to 1000000000, or null.

#### Implementation of

[Instance](../interfaces/internal_.BigNumber.Instance.md).[e](../interfaces/internal_.BigNumber.Instance.md#e)

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:339

___

### s

• `Readonly` **s**: ``null`` \| `number`

The sign of the value of this BigNumber, -1, 1, or null.

#### Implementation of

[Instance](../interfaces/internal_.BigNumber.Instance.md).[s](../interfaces/internal_.BigNumber.Instance.md#s)

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:342

___

### BigNumber

▪ `Static` `Private` `Optional` `Readonly` **BigNumber**: typeof [`BigNumber`](internal_.BigNumber-2.md)

Helps ES6 import.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1517

___

### DEBUG

▪ `Static` `Optional` **DEBUG**: `boolean`

To aid in debugging, if a `BigNumber.DEBUG` property is `true` then an error will be thrown
if the BigNumber constructor receives an invalid `BigNumber.Value`, or if `BigNumber.isBigNumber`
receives a BigNumber instance that is malformed.

```ts
// No error, and BigNumber NaN is returned.
new BigNumber('blurgh')    // 'NaN'
new BigNumber(9, 2)        // 'NaN'
BigNumber.DEBUG = true
new BigNumber('blurgh')    // '[BigNumber Error] Not a number'
new BigNumber(9, 2)        // '[BigNumber Error] Not a base 2 number'
```

An error will also be thrown if a `BigNumber.Value` is of type number with more than 15
significant digits, as calling `toString` or `valueOf` on such numbers may not result
in the intended value.

```ts
console.log(823456789123456.3)       //  823456789123456.2
// No error, and the returned BigNumber does not have the same value as the number literal.
new BigNumber(823456789123456.3)     // '823456789123456.2'
BigNumber.DEBUG = true
new BigNumber(823456789123456.3)
// '[BigNumber Error] Number primitive has more than 15 significant digits'
```

Check that a BigNumber instance is well-formed:

```ts
x = new BigNumber(10)

BigNumber.DEBUG = false
// Change x.c to an illegitimate value.
x.c = NaN
// No error, as BigNumber.DEBUG is false.
BigNumber.isBigNumber(x)    // true

BigNumber.DEBUG = true
BigNumber.isBigNumber(x)    // '[BigNumber Error] Invalid BigNumber'
```

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1591

___

### EUCLID

▪ `Static` `Readonly` **EUCLID**: ``9``

See `MODULO_MODE`.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1547

___

### ROUND\_CEIL

▪ `Static` `Readonly` **ROUND\_CEIL**: ``2``

Rounds towards Infinity.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1526

___

### ROUND\_DOWN

▪ `Static` `Readonly` **ROUND\_DOWN**: ``1``

Rounds towards zero.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1523

___

### ROUND\_FLOOR

▪ `Static` `Readonly` **ROUND\_FLOOR**: ``3``

Rounds towards -Infinity.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1529

___

### ROUND\_HALF\_CEIL

▪ `Static` `Readonly` **ROUND\_HALF\_CEIL**: ``7``

Rounds towards nearest neighbour. If equidistant, rounds towards Infinity.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1541

___

### ROUND\_HALF\_DOWN

▪ `Static` `Readonly` **ROUND\_HALF\_DOWN**: ``5``

Rounds towards nearest neighbour. If equidistant, rounds towards zero.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1535

___

### ROUND\_HALF\_EVEN

▪ `Static` `Readonly` **ROUND\_HALF\_EVEN**: ``6``

Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1538

___

### ROUND\_HALF\_FLOOR

▪ `Static` `Readonly` **ROUND\_HALF\_FLOOR**: ``8``

Rounds towards nearest neighbour. If equidistant, rounds towards -Infinity.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1544

___

### ROUND\_HALF\_UP

▪ `Static` `Readonly` **ROUND\_HALF\_UP**: ``4``

Rounds towards nearest neighbour. If equidistant, rounds away from zero .

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1532

___

### ROUND\_UP

▪ `Static` `Readonly` **ROUND\_UP**: ``0``

Rounds away from zero.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1520

___

### default

▪ `Static` `Private` `Optional` `Readonly` **default**: typeof [`BigNumber`](internal_.BigNumber-2.md)

Helps ES6 import.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:1514

## Methods

### abs

▸ **abs**(): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the absolute value, i.e. the magnitude, of the value of this
BigNumber.

The return value is always exact and unrounded.

```ts
x = new BigNumber(-0.8)
x.abs()                     // '0.8'
```

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### absoluteValue

▸ **absoluteValue**(): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the absolute value, i.e. the magnitude, of the value of this
BigNumber.

The return value is always exact and unrounded.

```ts
x = new BigNumber(-0.8)
x.absoluteValue()           // '0.8'
```

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### comparedTo

▸ **comparedTo**(`n`, `base?`): `number`

Returns |                                                               |
:-------:|:--------------------------------------------------------------|
    1    | If the value of this BigNumber is greater than the value of `n`
   -1    | If the value of this BigNumber is less than the value of `n`
    0    | If this BigNumber and `n` have the same value
 `null`  | If the value of either this BigNumber or `n` is `NaN`

```ts

x = new BigNumber(Infinity)
y = new BigNumber(5)
x.comparedTo(y)                 // 1
x.comparedTo(x.minus(1))        // 0
y.comparedTo(NaN)               // null
y.comparedTo('110', 2)          // -1
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`number`

___

### decimalPlaces

▸ **decimalPlaces**(): `number`

Returns a BigNumber whose value is the value of this BigNumber rounded by rounding mode
`roundingMode` to a maximum of `decimalPlaces` decimal places.

If `decimalPlaces` is omitted, or is `null` or `undefined`, the return value is the number of
decimal places of the value of this BigNumber, or `null` if the value of this BigNumber is
±`Infinity` or `NaN`.

If `roundingMode` is omitted, or is `null` or `undefined`, `ROUNDING_MODE` is used.

Throws if `decimalPlaces` or `roundingMode` is invalid.

```ts
x = new BigNumber(1234.56)
x.decimalPlaces()                      // 2
x.decimalPlaces(1)                     // '1234.6'
x.decimalPlaces(2)                     // '1234.56'
x.decimalPlaces(10)                    // '1234.56'
x.decimalPlaces(0, 1)                  // '1234'
x.decimalPlaces(0, 6)                  // '1235'
x.decimalPlaces(1, 1)                  // '1234.5'
x.decimalPlaces(1, BigNumber.ROUND_HALF_EVEN)     // '1234.6'
x                                      // '1234.56'
y = new BigNumber('9.9e-101')
y.decimalPlaces()                      // 102
```

#### Returns

`number`

▸ **decimalPlaces**(`decimalPlaces`, `roundingMode?`): [`BigNumber`](internal_.BigNumber-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### div

▸ **div**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber divided by `n`, rounded
according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` settings.

```ts
x = new BigNumber(355)
y = new BigNumber(113)
x.div(y)                    // '3.14159292035398230088'
x.div(5)                    // '71'
x.div(47, 16)               // '5'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### dividedBy

▸ **dividedBy**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber divided by `n`, rounded
according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` settings.

```ts
x = new BigNumber(355)
y = new BigNumber(113)
x.dividedBy(y)                  // '3.14159292035398230088'
x.dividedBy(5)                  // '71'
x.dividedBy(47, 16)             // '5'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### dividedToIntegerBy

▸ **dividedToIntegerBy**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the integer part of dividing the value of this BigNumber by
`n`.

```ts
x = new BigNumber(5)
y = new BigNumber(3)
x.dividedToIntegerBy(y)              // '1'
x.dividedToIntegerBy(0.7)            // '7'
x.dividedToIntegerBy('0.f', 16)      // '5'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### dp

▸ **dp**(): `number`

Returns a BigNumber whose value is the value of this BigNumber rounded by rounding mode
`roundingMode` to a maximum of `decimalPlaces` decimal places.

If `decimalPlaces` is omitted, or is `null` or `undefined`, the return value is the number of
decimal places of the value of this BigNumber, or `null` if the value of this BigNumber is
±`Infinity` or `NaN`.

If `roundingMode` is omitted, or is `null` or `undefined`, `ROUNDING_MODE` is used.

Throws if `decimalPlaces` or `roundingMode` is invalid.

```ts
x = new BigNumber(1234.56)
x.dp()                                 // 2
x.dp(1)                                // '1234.6'
x.dp(2)                                // '1234.56'
x.dp(10)                               // '1234.56'
x.dp(0, 1)                             // '1234'
x.dp(0, 6)                             // '1235'
x.dp(1, 1)                             // '1234.5'
x.dp(1, BigNumber.ROUND_HALF_EVEN)     // '1234.6'
x                                      // '1234.56'
y = new BigNumber('9.9e-101')
y.dp()                                 // 102
```

#### Returns

`number`

▸ **dp**(`decimalPlaces`, `roundingMode?`): [`BigNumber`](internal_.BigNumber-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### eq

▸ **eq**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is equal to the value of `n`, otherwise returns
`false`.

As with JavaScript, `NaN` does not equal `NaN`.

```ts
0 === 1e-324                    // true
x = new BigNumber(0)
x.eq('1e-324')                  // false
BigNumber(-0).eq(x)             // true  ( -0 === 0 )
BigNumber(255).eq('ff', 16)     // true

y = new BigNumber(NaN)
y.eq(NaN)                       // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### exponentiatedBy

▸ **exponentiatedBy**(`n`, `m?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber exponentiated by `n`, i.e.
raised to the power `n`, and optionally modulo a modulus `m`.

If `n` is negative the result is rounded according to the current `DECIMAL_PLACES` and
`ROUNDING_MODE` settings.

As the number of digits of the result of the power operation can grow so large so quickly,
e.g. 123.456**10000 has over 50000 digits, the number of significant digits calculated is
limited to the value of the `POW_PRECISION` setting (unless a modulus `m` is specified).

By default `POW_PRECISION` is set to 0. This means that an unlimited number of significant
digits will be calculated, and that the method's performance will decrease dramatically for
larger exponents.

If `m` is specified and the value of `m`, `n` and this BigNumber are integers and `n` is
positive, then a fast modular exponentiation algorithm is used, otherwise the operation will
be performed as `x.exponentiatedBy(n).modulo(m)` with a `POW_PRECISION` of 0.

Throws if `n` is not an integer.

```ts
Math.pow(0.7, 2)                    // 0.48999999999999994
x = new BigNumber(0.7)
x.exponentiatedBy(2)                // '0.49'
BigNumber(3).exponentiatedBy(-2)    // '0.11111111111111111111'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | The exponent, an integer. |
| `m?` | [`Value`](../modules/internal_.BigNumber.md#value) | The modulus. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

▸ **exponentiatedBy**(`n`, `m?`): [`BigNumber`](internal_.BigNumber-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `m?` | [`Value`](../modules/internal_.BigNumber.md#value) |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### gt

▸ **gt**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is greater than the value of `n`, otherwise
returns `false`.

```ts
0.1 > (0.3 - 0                     // true
x = new BigNumber(0.1)
x.gt(BigNumber(0.3).minus(0.2))    // false
BigNumber(0).gt(x)                 // false
BigNumber(11, 3).gt(11.1, 2)       // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### gte

▸ **gte**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is greater than or equal to the value of `n`,
otherwise returns `false`.

```ts
(0.3 - 0.2) >= 0.1                    // false
x = new BigNumber(0.3).minus(0.2)
x.gte(0.1)                            // true
BigNumber(1).gte(x)                   // true
BigNumber(10, 18).gte('i', 36)        // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### idiv

▸ **idiv**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the integer part of dividing the value of this BigNumber by
`n`.

```ts
x = new BigNumber(5)
y = new BigNumber(3)
x.idiv(y)                       // '1'
x.idiv(0.7)                     // '7'
x.idiv('0.f', 16)               // '5'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### integerValue

▸ **integerValue**(`rm?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber rounded to an integer using
rounding mode `rm`.

If `rm` is omitted, or is `null` or `undefined`, `ROUNDING_MODE` is used.

Throws if `rm` is invalid.

```ts
x = new BigNumber(123.456)
x.integerValue()                        // '123'
x.integerValue(BigNumber.ROUND_CEIL)    // '124'
y = new BigNumber(-12.7)
y.integerValue()                        // '-13'
x.integerValue(BigNumber.ROUND_DOWN)    // '-12'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rm?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) | The roundng mode, an integer, 0 to 8. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### isEqualTo

▸ **isEqualTo**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is equal to the value of `n`, otherwise returns
`false`.

As with JavaScript, `NaN` does not equal `NaN`.

```ts
0 === 1e-324                           // true
x = new BigNumber(0)
x.isEqualTo('1e-324')                  // false
BigNumber(-0).isEqualTo(x)             // true  ( -0 === 0 )
BigNumber(255).isEqualTo('ff', 16)     // true

y = new BigNumber(NaN)
y.isEqualTo(NaN)                // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### isFinite

▸ **isFinite**(): `boolean`

Returns `true` if the value of this BigNumber is a finite number, otherwise returns `false`.

The only possible non-finite values of a BigNumber are `NaN`, `Infinity` and `-Infinity`.

```ts
x = new BigNumber(1)
x.isFinite()                    // true
y = new BigNumber(Infinity)
y.isFinite()                    // false
```

#### Returns

`boolean`

___

### isGreaterThan

▸ **isGreaterThan**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is greater than the value of `n`, otherwise
returns `false`.

```ts
0.1 > (0.3 - 0.2)                             // true
x = new BigNumber(0.1)
x.isGreaterThan(BigNumber(0.3).minus(0.2))    // false
BigNumber(0).isGreaterThan(x)                 // false
BigNumber(11, 3).isGreaterThan(11.1, 2)       // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### isGreaterThanOrEqualTo

▸ **isGreaterThanOrEqualTo**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is greater than or equal to the value of `n`,
otherwise returns `false`.

```ts
(0.3 - 0.2) >= 0.1                                  // false
x = new BigNumber(0.3).minus(0.2)
x.isGreaterThanOrEqualTo(0.1)                       // true
BigNumber(1).isGreaterThanOrEqualTo(x)              // true
BigNumber(10, 18).isGreaterThanOrEqualTo('i', 36)   // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### isInteger

▸ **isInteger**(): `boolean`

Returns `true` if the value of this BigNumber is an integer, otherwise returns `false`.

```ts
x = new BigNumber(1)
x.isInteger()                   // true
y = new BigNumber(123.456)
y.isInteger()                   // false
```

#### Returns

`boolean`

___

### isLessThan

▸ **isLessThan**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is less than the value of `n`, otherwise returns
`false`.

```ts
(0.3 - 0.2) < 0.1                       // true
x = new BigNumber(0.3).minus(0.2)
x.isLessThan(0.1)                       // false
BigNumber(0).isLessThan(x)              // true
BigNumber(11.1, 2).isLessThan(11, 3)    // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### isLessThanOrEqualTo

▸ **isLessThanOrEqualTo**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is less than or equal to the value of `n`,
otherwise returns `false`.

```ts
0.1 <= (0.3 - 0.2)                                 // false
x = new BigNumber(0.1)
x.isLessThanOrEqualTo(BigNumber(0.3).minus(0.2))   // true
BigNumber(-1).isLessThanOrEqualTo(x)               // true
BigNumber(10, 18).isLessThanOrEqualTo('i', 36)     // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### isNaN

▸ **isNaN**(): `boolean`

Returns `true` if the value of this BigNumber is `NaN`, otherwise returns `false`.

```ts
x = new BigNumber(NaN)
x.isNaN()                       // true
y = new BigNumber('Infinity')
y.isNaN()                       // false
```

#### Returns

`boolean`

___

### isNegative

▸ **isNegative**(): `boolean`

Returns `true` if the value of this BigNumber is negative, otherwise returns `false`.

```ts
x = new BigNumber(-0)
x.isNegative()                  // true
y = new BigNumber(2)
y.isNegative()                  // false
```

#### Returns

`boolean`

___

### isPositive

▸ **isPositive**(): `boolean`

Returns `true` if the value of this BigNumber is positive, otherwise returns `false`.

```ts
x = new BigNumber(-0)
x.isPositive()                  // false
y = new BigNumber(2)
y.isPositive()                  // true
```

#### Returns

`boolean`

___

### isZero

▸ **isZero**(): `boolean`

Returns `true` if the value of this BigNumber is zero or minus zero, otherwise returns `false`.

```ts
x = new BigNumber(-0)
x.isZero()                 // true
```

#### Returns

`boolean`

___

### lt

▸ **lt**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is less than the value of `n`, otherwise returns
`false`.

```ts
(0.3 - 0.2) < 0.1                       // true
x = new BigNumber(0.3).minus(0.2)
x.lt(0.1)                               // false
BigNumber(0).lt(x)                      // true
BigNumber(11.1, 2).lt(11, 3)            // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### lte

▸ **lte**(`n`, `base?`): `boolean`

Returns `true` if the value of this BigNumber is less than or equal to the value of `n`,
otherwise returns `false`.

```ts
0.1 <= (0.3 - 0.2)                  // false
x = new BigNumber(0.1)
x.lte(BigNumber(0.3).minus(0.2))    // true
BigNumber(-1).lte(x)                // true
BigNumber(10, 18).lte('i', 36)      // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

`boolean`

___

### minus

▸ **minus**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber minus `n`.

The return value is always exact and unrounded.

```ts
0.3 - 0.1                       // 0.19999999999999998
x = new BigNumber(0.3)
x.minus(0.1)                    // '0.2'
x.minus(0.6, 20)                // '0'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### mod

▸ **mod**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber modulo `n`, i.e. the integer
remainder of dividing this BigNumber by `n`.

The value returned, and in particular its sign, is dependent on the value of the `MODULO_MODE`
setting of this BigNumber constructor. If it is 1 (default value), the result will have the
same sign as this BigNumber, and it will match that of Javascript's `%` operator (within the
limits of double precision) and BigDecimal's `remainder` method.

The return value is always exact and unrounded.

See `MODULO_MODE` for a description of the other modulo modes.

```ts
1 % 0.9                      // 0.09999999999999998
x = new BigNumber(1)
x.mod(0.9)                   // '0.1'
y = new BigNumber(33)
y.mod('a', 33)               // '3'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### modulo

▸ **modulo**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber modulo `n`, i.e. the integer
remainder of dividing this BigNumber by `n`.

The value returned, and in particular its sign, is dependent on the value of the `MODULO_MODE`
setting of this BigNumber constructor. If it is 1 (default value), the result will have the
same sign as this BigNumber, and it will match that of Javascript's `%` operator (within the
limits of double precision) and BigDecimal's `remainder` method.

The return value is always exact and unrounded.

See `MODULO_MODE` for a description of the other modulo modes.

```ts
1 % 0.9                         // 0.09999999999999998
x = new BigNumber(1)
x.modulo(0.9)                   // '0.1'
y = new BigNumber(33)
y.modulo('a', 33)               // '3'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### multipliedBy

▸ **multipliedBy**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber multiplied by `n`.

The return value is always exact and unrounded.

```ts
0.6 * 3                                // 1.7999999999999998
x = new BigNumber(0.6)
y = x.multipliedBy(3)                  // '1.8'
BigNumber('7e+500').multipliedBy(y)    // '1.26e+501'
x.multipliedBy('-a', 16)               // '-6'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### negated

▸ **negated**(): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber negated, i.e. multiplied by -1.

```ts
x = new BigNumber(1.8)
x.negated()                     // '-1.8'
y = new BigNumber(-1.3)
y.negated()                     // '1.3'
```

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### plus

▸ **plus**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber plus `n`.

The return value is always exact and unrounded.

```ts
0.1 + 0.2                       // 0.30000000000000004
x = new BigNumber(0.1)
y = x.plus(0.2)                 // '0.3'
BigNumber(0.7).plus(x).plus(y)  // '1.1'
x.plus('0.1', 8)                // '0.225'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### pow

▸ **pow**(`n`, `m?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber exponentiated by `n`, i.e.
raised to the power `n`, and optionally modulo a modulus `m`.

If `n` is negative the result is rounded according to the current `DECIMAL_PLACES` and
`ROUNDING_MODE` settings.

As the number of digits of the result of the power operation can grow so large so quickly,
e.g. 123.456**10000 has over 50000 digits, the number of significant digits calculated is
limited to the value of the `POW_PRECISION` setting (unless a modulus `m` is specified).

By default `POW_PRECISION` is set to 0. This means that an unlimited number of significant
digits will be calculated, and that the method's performance will decrease dramatically for
larger exponents.

If `m` is specified and the value of `m`, `n` and this BigNumber are integers and `n` is
positive, then a fast modular exponentiation algorithm is used, otherwise the operation will
be performed as `x.pow(n).modulo(m)` with a `POW_PRECISION` of 0.

Throws if `n` is not an integer.

```ts
Math.pow(0.7, 2)                   // 0.48999999999999994
x = new BigNumber(0.7)
x.pow(2)                           // '0.49'
BigNumber(3).pow(-2)               // '0.11111111111111111111'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | The exponent, an integer. |
| `m?` | [`Value`](../modules/internal_.BigNumber.md#value) | The modulus. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

▸ **pow**(`n`, `m?`): [`BigNumber`](internal_.BigNumber-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `m?` | [`Value`](../modules/internal_.BigNumber.md#value) |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### precision

▸ **precision**(`includeZeros?`): `number`

Returns the number of significant digits of the value of this BigNumber, or `null` if the value
of this BigNumber is ±`Infinity` or `NaN`.

If `includeZeros` is true then any trailing zeros of the integer part of the value of this
BigNumber are counted as significant digits, otherwise they are not.

Throws if `includeZeros` is invalid.

```ts
x = new BigNumber(9876.54321)
x.precision()                         // 9
y = new BigNumber(987000)
y.precision(false)                    // 3
y.precision(true)                     // 6
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeZeros?` | `boolean` | Whether to include integer trailing zeros in the significant digit count. |

#### Returns

`number`

▸ **precision**(`significantDigits`, `roundingMode?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber rounded to a precision of
`significantDigits` significant digits using rounding mode `roundingMode`.

If `roundingMode` is omitted or is `null` or `undefined`, `ROUNDING_MODE` will be used.

Throws if `significantDigits` or `roundingMode` is invalid.

```ts
x = new BigNumber(9876.54321)
x.precision(6)                         // '9876.54'
x.precision(6, BigNumber.ROUND_UP)     // '9876.55'
x.precision(2)                         // '9900'
x.precision(2, 1)                      // '9800'
x                                      // '9876.54321'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `significantDigits` | `number` | Significant digits, integer, 1 to 1e+9. |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) | Rounding mode, integer, 0 to 8. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### sd

▸ **sd**(`includeZeros?`): `number`

Returns the number of significant digits of the value of this BigNumber,
or `null` if the value of this BigNumber is ±`Infinity` or `NaN`.

If `includeZeros` is true then any trailing zeros of the integer part of
the value of this BigNumber are counted as significant digits, otherwise
they are not.

Throws if `includeZeros` is invalid.

```ts
x = new BigNumber(9876.54321)
x.sd()                         // 9
y = new BigNumber(987000)
y.sd(false)                    // 3
y.sd(true)                     // 6
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeZeros?` | `boolean` | Whether to include integer trailing zeros in the significant digit count. |

#### Returns

`number`

▸ **sd**(`significantDigits`, `roundingMode?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber rounded to a precision of
`significantDigits` significant digits using rounding mode `roundingMode`.

If `roundingMode` is omitted or is `null` or `undefined`, `ROUNDING_MODE` will be used.

Throws if `significantDigits` or `roundingMode` is invalid.

```ts
x = new BigNumber(9876.54321)
x.sd(6)                           // '9876.54'
x.sd(6, BigNumber.ROUND_UP)       // '9876.55'
x.sd(2)                           // '9900'
x.sd(2, 1)                        // '9800'
x                                 // '9876.54321'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `significantDigits` | `number` | Significant digits, integer, 1 to 1e+9. |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) | Rounding mode, integer, 0 to 8. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### shiftedBy

▸ **shiftedBy**(`n`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber shifted by `n` places.

The shift is of the decimal point, i.e. of powers of ten, and is to the left if `n` is negative
or to the right if `n` is positive.

The return value is always exact and unrounded.

Throws if `n` is invalid.

```ts
x = new BigNumber(1.23)
x.shiftedBy(3)                      // '1230'
x.shiftedBy(-3)                     // '0.00123'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The shift value, integer, -9007199254740991 to 9007199254740991. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### sqrt

▸ **sqrt**(): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the square root of the value of this BigNumber, rounded
according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` settings.

The return value will be correctly rounded, i.e. rounded as if the result was first calculated
to an infinite number of correct digits before rounding.

```ts
x = new BigNumber(16)
x.sqrt()                  // '4'
y = new BigNumber(3)
y.sqrt()                  // '1.73205080756887729353'
```

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### squareRoot

▸ **squareRoot**(): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the square root of the value of this BigNumber, rounded
according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` settings.

The return value will be correctly rounded, i.e. rounded as if the result was first calculated
to an infinite number of correct digits before rounding.

```ts
x = new BigNumber(16)
x.squareRoot()                  // '4'
y = new BigNumber(3)
y.squareRoot()                  // '1.73205080756887729353'
```

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### times

▸ **times**(`n`, `base?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the value of this BigNumber multiplied by `n`.

The return value is always exact and unrounded.

```ts
0.6 * 3                         // 1.7999999999999998
x = new BigNumber(0.6)
y = x.times(3)                  // '1.8'
BigNumber('7e+500').times(y)    // '1.26e+501'
x.times('-a', 16)               // '-6'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | [`Value`](../modules/internal_.BigNumber.md#value) | A numeric value. |
| `base?` | `number` | The base of n. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### toExponential

▸ **toExponential**(`decimalPlaces?`, `roundingMode?`): `string`

Returns a string representing the value of this BigNumber in exponential notation rounded using
rounding mode `roundingMode` to `decimalPlaces` decimal places, i.e with one digit before the
decimal point and `decimalPlaces` digits after it.

If the value of this BigNumber in exponential notation has fewer than `decimalPlaces` fraction
digits, the return value will be appended with zeros accordingly.

If `decimalPlaces` is omitted, or is `null` or `undefined`, the number of digits after the
decimal point defaults to the minimum number of digits necessary to represent the value
exactly.

If `roundingMode` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.

Throws if `decimalPlaces` or `roundingMode` is invalid.

```ts
x = 45.6
y = new BigNumber(x)
x.toExponential()               // '4.56e+1'
y.toExponential()               // '4.56e+1'
x.toExponential(0)              // '5e+1'
y.toExponential(0)              // '5e+1'
x.toExponential(1)              // '4.6e+1'
y.toExponential(1)              // '4.6e+1'
y.toExponential(1, 1)           // '4.5e+1'  (ROUND_DOWN)
x.toExponential(3)              // '4.560e+1'
y.toExponential(3)              // '4.560e+1'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decimalPlaces?` | `number` | Decimal places, integer, 0 to 1e+9. |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) | Rounding mode, integer, 0 to 8. |

#### Returns

`string`

▸ **toExponential**(): `string`

#### Returns

`string`

___

### toFixed

▸ **toFixed**(`decimalPlaces?`, `roundingMode?`): `string`

Returns a string representing the value of this BigNumber in normal (fixed-point) notation
rounded to `decimalPlaces` decimal places using rounding mode `roundingMode`.

If the value of this BigNumber in normal notation has fewer than `decimalPlaces` fraction
digits, the return value will be appended with zeros accordingly.

Unlike `Number.prototype.toFixed`, which returns exponential notation if a number is greater or
equal to 10**21, this method will always return normal notation.

If `decimalPlaces` is omitted or is `null` or `undefined`, the return value will be unrounded
and in normal notation. This is also unlike `Number.prototype.toFixed`, which returns the value
to zero decimal places. It is useful when normal notation is required and the current
`EXPONENTIAL_AT` setting causes `toString` to return exponential notation.

If `roundingMode` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.

Throws if `decimalPlaces` or `roundingMode` is invalid.

```ts
x = 3.456
y = new BigNumber(x)
x.toFixed()                     // '3'
y.toFixed()                     // '3.456'
y.toFixed(0)                    // '3'
x.toFixed(2)                    // '3.46'
y.toFixed(2)                    // '3.46'
y.toFixed(2, 1)                 // '3.45'  (ROUND_DOWN)
x.toFixed(5)                    // '3.45600'
y.toFixed(5)                    // '3.45600'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decimalPlaces?` | `number` | Decimal places, integer, 0 to 1e+9. |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) | Rounding mode, integer, 0 to 8. |

#### Returns

`string`

▸ **toFixed**(): `string`

#### Returns

`string`

___

### toFormat

▸ **toFormat**(`decimalPlaces?`, `roundingMode?`, `format?`): `string`

Returns a string representing the value of this BigNumber in normal (fixed-point) notation
rounded to `decimalPlaces` decimal places using rounding mode `roundingMode`, and formatted
according to the properties of the `format` or `FORMAT` object.

The formatting object may contain some or all of the properties shown in the examples below.

If `decimalPlaces` is omitted or is `null` or `undefined`, then the return value is not
rounded to a fixed number of decimal places.

If `roundingMode` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.

If `format` is omitted or is `null` or `undefined`, `FORMAT` is used.

Throws if `decimalPlaces`, `roundingMode`, or `format` is invalid.

```ts
fmt = {
  decimalSeparator: '.',
  groupSeparator: ',',
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: ' ',
  fractionGroupSize: 0
}

x = new BigNumber('123456789.123456789')

// Set the global formatting options
BigNumber.config({ FORMAT: fmt })

x.toFormat()                              // '123,456,789.123456789'
x.toFormat(3)                             // '123,456,789.123'

// If a reference to the object assigned to FORMAT has been retained,
// the format properties can be changed directly
fmt.groupSeparator = ' '
fmt.fractionGroupSize = 5
x.toFormat()                              // '123 456 789.12345 6789'

// Alternatively, pass the formatting options as an argument
fmt = {
  decimalSeparator: ',',
  groupSeparator: '.',
  groupSize: 3,
  secondaryGroupSize: 2
}

x.toFormat()                              // '123 456 789.12345 6789'
x.toFormat(fmt)                           // '12.34.56.789,123456789'
x.toFormat(2, fmt)                        // '12.34.56.789,12'
x.toFormat(3, BigNumber.ROUND_UP, fmt)    // '12.34.56.789,124'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decimalPlaces?` | `number` | Decimal places, integer, 0 to 1e+9. |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) | Rounding mode, integer, 0 to 8. |
| `format?` | [`Format`](../interfaces/internal_.BigNumber.Format.md) | Formatting options object. See `BigNumber.Format`. |

#### Returns

`string`

▸ **toFormat**(`decimalPlaces`, `roundingMode?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) |

#### Returns

`string`

▸ **toFormat**(`decimalPlaces?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces?` | `number` |

#### Returns

`string`

▸ **toFormat**(`decimalPlaces`, `format`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `format` | [`Format`](../interfaces/internal_.BigNumber.Format.md) |

#### Returns

`string`

▸ **toFormat**(`format`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`Format`](../interfaces/internal_.BigNumber.Format.md) |

#### Returns

`string`

___

### toFraction

▸ **toFraction**(`max_denominator?`): [[`BigNumber`](internal_.BigNumber-2.md), [`BigNumber`](internal_.BigNumber-2.md)]

Returns an array of two BigNumbers representing the value of this BigNumber as a simple
fraction with an integer numerator and an integer denominator.
The denominator will be a positive non-zero value less than or equal to `max_denominator`.
If a maximum denominator, `max_denominator`, is not specified, or is `null` or `undefined`, the
denominator will be the lowest value necessary to represent the number exactly.

Throws if `max_denominator` is invalid.

```ts
x = new BigNumber(1.75)
x.toFraction()                  // '7, 4'

pi = new BigNumber('3.14159265358')
pi.toFraction()                 // '157079632679,50000000000'
pi.toFraction(100000)           // '312689, 99532'
pi.toFraction(10000)            // '355, 113'
pi.toFraction(100)              // '311, 99'
pi.toFraction(10)               // '22, 7'
pi.toFraction(1)                // '3, 1'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `max_denominator?` | [`Value`](../modules/internal_.BigNumber.md#value) | The maximum denominator, integer > 0, or Infinity. |

#### Returns

[[`BigNumber`](internal_.BigNumber-2.md), [`BigNumber`](internal_.BigNumber-2.md)]

___

### toJSON

▸ **toJSON**(): `string`

As `valueOf`.

#### Returns

`string`

___

### toNumber

▸ **toNumber**(): `number`

Returns the value of this BigNumber as a JavaScript primitive number.

Using the unary plus operator gives the same result.

```ts
x = new BigNumber(456.789)
x.toNumber()                    // 456.789
+x                              // 456.789

y = new BigNumber('45987349857634085409857349856430985')
y.toNumber()                    // 4.598734985763409e+34

z = new BigNumber(-0)
1 / z.toNumber()                // -Infinity
1 / +z                          // -Infinity
```

#### Returns

`number`

___

### toPrecision

▸ **toPrecision**(`significantDigits?`, `roundingMode?`): `string`

Returns a string representing the value of this BigNumber rounded to `significantDigits`
significant digits using rounding mode `roundingMode`.

If `significantDigits` is less than the number of digits necessary to represent the integer
part of the value in normal (fixed-point) notation, then exponential notation is used.

If `significantDigits` is omitted, or is `null` or `undefined`, then the return value is the
same as `n.toString()`.

If `roundingMode` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.

Throws if `significantDigits` or `roundingMode` is invalid.

```ts
x = 45.6
y = new BigNumber(x)
x.toPrecision()                 // '45.6'
y.toPrecision()                 // '45.6'
x.toPrecision(1)                // '5e+1'
y.toPrecision(1)                // '5e+1'
y.toPrecision(2, 0)             // '4.6e+1'  (ROUND_UP)
y.toPrecision(2, 1)             // '4.5e+1'  (ROUND_DOWN)
x.toPrecision(5)                // '45.600'
y.toPrecision(5)                // '45.600'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `significantDigits?` | `number` | Significant digits, integer, 1 to 1e+9. |
| `roundingMode?` | [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode) | Rounding mode, integer 0 to 8. |

#### Returns

`string`

▸ **toPrecision**(): `string`

#### Returns

`string`

___

### toString

▸ **toString**(`base?`): `string`

Returns a string representing the value of this BigNumber in base `base`, or base 10 if `base`
is omitted or is `null` or `undefined`.

For bases above 10, and using the default base conversion alphabet (see `ALPHABET`), values
from 10 to 35 are represented by a-z (the same as `Number.prototype.toString`).

If a base is specified the value is rounded according to the current `DECIMAL_PLACES` and
`ROUNDING_MODE` settings, otherwise it is not.

If a base is not specified, and this BigNumber has a positive exponent that is equal to or
greater than the positive component of the current `EXPONENTIAL_AT` setting, or a negative
exponent equal to or less than the negative component of the setting, then exponential notation
is returned.

If `base` is `null` or `undefined` it is ignored.

Throws if `base` is invalid.

```ts
x = new BigNumber(750000)
x.toString()                    // '750000'
BigNumber.config({ EXPONENTIAL_AT: 5 })
x.toString()                    // '7.5e+5'

y = new BigNumber(362.875)
y.toString(2)                   // '101101010.111'
y.toString(9)                   // '442.77777777777777777778'
y.toString(32)                  // 'ba.s'

BigNumber.config({ DECIMAL_PLACES: 4 });
z = new BigNumber('1.23456789')
z.toString()                    // '1.23456789'
z.toString(10)                  // '1.2346'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base?` | `number` | The base, integer, 2 to 36 (or `ALPHABET.length`, see `ALPHABET`). |

#### Returns

`string`

___

### valueOf

▸ **valueOf**(): `string`

As `toString`, but does not accept a base argument and includes the minus sign for negative
zero.

``ts
x = new BigNumber('-0')
x.toString()                    // '0'
x.valueOf()                     // '-0'
y = new BigNumber('1.777e+457')
y.valueOf()                     // '1.777e+457'
```

#### Returns

`string`

___

### clone

▸ `Static` **clone**(`object?`): typeof [`BigNumber`](internal_.BigNumber-2.md)

Returns a new independent BigNumber constructor with configuration as described by `object`, or
with the default configuration if object is `null` or `undefined`.

Throws if `object` is not an object.

```ts
BigNumber.config({ DECIMAL_PLACES: 5 })
BN = BigNumber.clone({ DECIMAL_PLACES: 9 })

x = new BigNumber(1)
y = new BN(1)

x.div(3)                        // 0.33333
y.div(3)                        // 0.333333333

// BN = BigNumber.clone({ DECIMAL_PLACES: 9 }) is equivalent to:
BN = BigNumber.clone()
BN.config({ DECIMAL_PLACES: 9 })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object?` | [`Config`](../interfaces/internal_.BigNumber.Config.md) | The configuration object. |

#### Returns

typeof [`BigNumber`](internal_.BigNumber-2.md)

___

### config

▸ `Static` **config**(`object`): [`Config`](../interfaces/internal_.BigNumber.Config.md)

Configures the settings that apply to this BigNumber constructor.

The configuration object, `object`, contains any number of the properties shown in the example
below.

Returns an object with the above properties and their current values.

Throws if `object` is not an object, or if an invalid value is assigned to one or more of the
properties.

```ts
BigNumber.config({
    DECIMAL_PLACES: 40,
    ROUNDING_MODE: BigNumber.ROUND_HALF_CEIL,
    EXPONENTIAL_AT: [-10, 20],
    RANGE: [-500, 500],
    CRYPTO: true,
    MODULO_MODE: BigNumber.ROUND_FLOOR,
    POW_PRECISION: 80,
    FORMAT: {
        groupSize: 3,
        groupSeparator: ' ',
        decimalSeparator: ','
    },
    ALPHABET: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
});

BigNumber.config().DECIMAL_PLACES        // 40
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Config`](../interfaces/internal_.BigNumber.Config.md) | The configuration object. |

#### Returns

[`Config`](../interfaces/internal_.BigNumber.Config.md)

___

### isBigNumber

▸ `Static` **isBigNumber**(`value`): value is BigNumber

Returns `true` if `value` is a BigNumber instance, otherwise returns `false`.

If `BigNumber.DEBUG` is `true`, throws if a BigNumber instance is not well-formed.

```ts
x = 42
y = new BigNumber(x)

BigNumber.isBigNumber(x)             // false
y instanceof BigNumber               // true
BigNumber.isBigNumber(y)             // true

BN = BigNumber.clone();
z = new BN(x)
z instanceof BigNumber               // false
BigNumber.isBigNumber(z)             // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to test. |

#### Returns

value is BigNumber

___

### max

▸ `Static` **max**(...`n`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the maximum of the arguments.

The return value is always exact and unrounded.

```ts
x = new BigNumber('3257869345.0378653')
BigNumber.max(4e9, x, '123456789.9')      // '4000000000'

arr = [12, '13', new BigNumber(14)]
BigNumber.max.apply(null, arr)            // '14'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...n` | [`Value`](../modules/internal_.BigNumber.md#value)[] | A numeric value. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### maximum

▸ `Static` **maximum**(...`n`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the maximum of the arguments.

The return value is always exact and unrounded.

```ts
x = new BigNumber('3257869345.0378653')
BigNumber.maximum(4e9, x, '123456789.9')      // '4000000000'

arr = [12, '13', new BigNumber(14)]
BigNumber.maximum.apply(null, arr)            // '14'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...n` | [`Value`](../modules/internal_.BigNumber.md#value)[] | A numeric value. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### min

▸ `Static` **min**(...`n`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the minimum of the arguments.

The return value is always exact and unrounded.

```ts
x = new BigNumber('3257869345.0378653')
BigNumber.min(4e9, x, '123456789.9')             // '123456789.9'

arr = [2, new BigNumber(-14), '-15.9999', -12]
BigNumber.min.apply(null, arr)                   // '-15.9999'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...n` | [`Value`](../modules/internal_.BigNumber.md#value)[] | A numeric value. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### minimum

▸ `Static` **minimum**(...`n`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the minimum of the arguments.

The return value is always exact and unrounded.

```ts
x = new BigNumber('3257869345.0378653')
BigNumber.minimum(4e9, x, '123456789.9')          // '123456789.9'

arr = [2, new BigNumber(-14), '-15.9999', -12]
BigNumber.minimum.apply(null, arr)                // '-15.9999'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...n` | [`Value`](../modules/internal_.BigNumber.md#value)[] | A numeric value. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### random

▸ `Static` **random**(`decimalPlaces?`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a new BigNumber with a pseudo-random value equal to or greater than 0 and less than 1.

The return value will have `decimalPlaces` decimal places, or less if trailing zeros are
produced. If `decimalPlaces` is omitted, the current `DECIMAL_PLACES` setting will be used.

Depending on the value of this BigNumber constructor's `CRYPTO` setting and the support for the
`crypto` object in the host environment, the random digits of the return value are generated by
either `Math.random` (fastest), `crypto.getRandomValues` (Web Cryptography API in recent
browsers) or `crypto.randomBytes` (Node.js).

To be able to set `CRYPTO` to true when using Node.js, the `crypto` object must be available
globally:

```ts
global.crypto = require('crypto')
```

If `CRYPTO` is true, i.e. one of the `crypto` methods is to be used, the value of a returned
BigNumber should be cryptographically secure and statistically indistinguishable from a random
value.

Throws if `decimalPlaces` is invalid.

```ts
BigNumber.config({ DECIMAL_PLACES: 10 })
BigNumber.random()              // '0.4117936847'
BigNumber.random(20)            // '0.78193327636914089009'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decimalPlaces?` | `number` | Decimal places, integer, 0 to 1e+9. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)

___

### set

▸ `Static` **set**(`object`): [`Config`](../interfaces/internal_.BigNumber.Config.md)

Configures the settings that apply to this BigNumber constructor.

The configuration object, `object`, contains any number of the properties shown in the example
below.

Returns an object with the above properties and their current values.

Throws if `object` is not an object, or if an invalid value is assigned to one or more of the
properties.

```ts
BigNumber.set({
    DECIMAL_PLACES: 40,
    ROUNDING_MODE: BigNumber.ROUND_HALF_CEIL,
    EXPONENTIAL_AT: [-10, 20],
    RANGE: [-500, 500],
    CRYPTO: true,
    MODULO_MODE: BigNumber.ROUND_FLOOR,
    POW_PRECISION: 80,
    FORMAT: {
        groupSize: 3,
        groupSeparator: ' ',
        decimalSeparator: ','
    },
    ALPHABET: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
});

BigNumber.set().DECIMAL_PLACES        // 40
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Config`](../interfaces/internal_.BigNumber.Config.md) | The configuration object. |

#### Returns

[`Config`](../interfaces/internal_.BigNumber.Config.md)

___

### sum

▸ `Static` **sum**(...`n`): [`BigNumber`](internal_.BigNumber-2.md)

Returns a BigNumber whose value is the sum of the arguments.

The return value is always exact and unrounded.

```ts
x = new BigNumber('3257869345.0378653')
BigNumber.sum(4e9, x, '123456789.9')      // '7381326134.9378653'

arr = [2, new BigNumber(14), '15.9999', 12]
BigNumber.sum.apply(null, arr)            // '43.9999'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...n` | [`Value`](../modules/internal_.BigNumber.md#value)[] | A numeric value. |

#### Returns

[`BigNumber`](internal_.BigNumber-2.md)
