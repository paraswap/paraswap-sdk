[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / [BigNumber](../modules/internal_.BigNumber.md) / Config

# Interface: Config

[<internal>](../modules/internal_.md).[BigNumber](../modules/internal_.BigNumber.md).Config

See `BigNumber.config` (alias `BigNumber.set`) and `BigNumber.clone`.

## Table of contents

### Properties

- [ALPHABET](internal_.BigNumber.Config.md#alphabet)
- [CRYPTO](internal_.BigNumber.Config.md#crypto)
- [DECIMAL\_PLACES](internal_.BigNumber.Config.md#decimal_places)
- [EXPONENTIAL\_AT](internal_.BigNumber.Config.md#exponential_at)
- [FORMAT](internal_.BigNumber.Config.md#format)
- [MODULO\_MODE](internal_.BigNumber.Config.md#modulo_mode)
- [POW\_PRECISION](internal_.BigNumber.Config.md#pow_precision)
- [RANGE](internal_.BigNumber.Config.md#range)
- [ROUNDING\_MODE](internal_.BigNumber.Config.md#rounding_mode)

## Properties

### ALPHABET

• `Optional` **ALPHABET**: `string`

The alphabet used for base conversion. The length of the alphabet corresponds to the maximum
value of the base argument that can be passed to the BigNumber constructor or `toString`.

Default value: `'0123456789abcdefghijklmnopqrstuvwxyz'`.

There is no maximum length for the alphabet, but it must be at least 2 characters long,
and it must not contain whitespace or a repeated character, or the sign indicators '+' and
'-', or the decimal separator '.'.

```ts
// duodecimal (base 12)
BigNumber.config({ ALPHABET: '0123456789TE' })
x = new BigNumber('T', 12)
x.toString()                // '10'
x.toString(12)              // 'T'
```

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:279

___

### CRYPTO

• `Optional` **CRYPTO**: `boolean`

A boolean: `true` or `false`. Default value: `false`.

The value that determines whether cryptographically-secure pseudo-random number generation is
used. If `CRYPTO` is set to true then the random method will generate random digits using
`crypto.getRandomValues` in browsers that support it, or `crypto.randomBytes` if using a
version of Node.js that supports it.

If neither function is supported by the host environment then attempting to set `CRYPTO` to
`true` will fail and an exception will be thrown.

If `CRYPTO` is `false` then the source of randomness used will be `Math.random` (which is
assumed to generate at least 30 bits of randomness).

See `BigNumber.random`.

```ts
// Node.js
global.crypto = require('crypto')

BigNumber.config({ CRYPTO: true })
BigNumber.config().CRYPTO       // true
BigNumber.random()              // 0.54340758610486147524
```

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:171

___

### DECIMAL\_PLACES

• `Optional` **DECIMAL\_PLACES**: `number`

An integer, 0 to 1e+9. Default value: 20.

The maximum number of decimal places of the result of operations involving division, i.e.
division, square root and base conversion operations, and exponentiation when the exponent is
negative.

```ts
BigNumber.config({ DECIMAL_PLACES: 5 })
BigNumber.set({ DECIMAL_PLACES: 5 })
```

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:53

___

### EXPONENTIAL\_AT

• `Optional` **EXPONENTIAL\_AT**: `number` \| [`number`, `number`]

An integer, 0 to 1e+9, or an array, [-1e+9 to 0, 0 to 1e+9].
Default value: `[-7, 20]`.

The exponent value(s) at which `toString` returns exponential notation.

If a single number is assigned, the value is the exponent magnitude.

If an array of two numbers is assigned then the first number is the negative exponent value at
and beneath which exponential notation is used, and the second number is the positive exponent
value at and above which exponential notation is used.

For example, to emulate JavaScript numbers in terms of the exponent values at which they begin
to use exponential notation, use `[-7, 20]`.

```ts
BigNumber.config({ EXPONENTIAL_AT: 2 })
new BigNumber(12.3)         // '12.3'        e is only 1
new BigNumber(123)          // '1.23e+2'
new BigNumber(0.123)        // '0.123'       e is only -1
new BigNumber(0.0123)       // '1.23e-2'

BigNumber.config({ EXPONENTIAL_AT: [-7, 20] })
new BigNumber(123456789)    // '123456789'   e is only 8
new BigNumber(0.000000123)  // '1.23e-7'

// Almost never return exponential notation:
BigNumber.config({ EXPONENTIAL_AT: 1e+9 })

// Always return exponential notation:
BigNumber.config({ EXPONENTIAL_AT: 0 })
```

Regardless of the value of `EXPONENTIAL_AT`, the `toFixed` method will always return a value in
normal notation and the `toExponential` method will always return a value in exponential form.
Calling `toString` with a base argument, e.g. `toString(10)`, will also always return normal
notation.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:109

___

### FORMAT

• `Optional` **FORMAT**: [`Format`](internal_.BigNumber.Format.md)

An object including any number of the properties shown below.

The object configures the format of the string returned by the `toFormat` method.
The example below shows the properties of the object that are recognised, and
their default values.

Unlike the other configuration properties, the values of the properties of the `FORMAT` object
will not be checked for validity - the existing object will simply be replaced by the object
that is passed in.

See `toFormat`.

```ts
BigNumber.config({
  FORMAT: {
    // string to prepend
    prefix: '',
    // the decimal separator
    decimalSeparator: '.',
    // the grouping separator of the integer part
    groupSeparator: ',',
    // the primary grouping size of the integer part
    groupSize: 3,
    // the secondary grouping size of the integer part
    secondaryGroupSize: 0,
    // the grouping separator of the fraction part
    fractionGroupSeparator: ' ',
    // the grouping size of the fraction part
    fractionGroupSize: 0,
    // string to append
    suffix: ''
  }
})
```

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:259

___

### MODULO\_MODE

• `Optional` **MODULO\_MODE**: [`ModuloMode`](../modules/internal_.BigNumber.md#modulomode)

An integer, 0, 1, 3, 6 or 9. Default value: `BigNumber.ROUND_DOWN` (1).

The modulo mode used when calculating the modulus: `a mod n`.
The quotient, `q = a / n`, is calculated according to the `ROUNDING_MODE` that corresponds to
the chosen `MODULO_MODE`.
The remainder, `r`, is calculated as: `r = a - n * q`.

The modes that are most commonly used for the modulus/remainder operation are shown in the
following table. Although the other rounding modes can be used, they may not give useful
results.

Property           | Value | Description
:------------------|:------|:------------------------------------------------------------------
 `ROUND_UP`        |   0   | The remainder is positive if the dividend is negative.
 `ROUND_DOWN`      |   1   | The remainder has the same sign as the dividend.
                   |       | Uses 'truncating division' and matches JavaScript's `%` operator .
 `ROUND_FLOOR`     |   3   | The remainder has the same sign as the divisor.
                   |       | This matches Python's `%` operator.
 `ROUND_HALF_EVEN` |   6   | The IEEE 754 remainder function.
 `EUCLID`          |   9   | The remainder is always positive.
                   |       | Euclidian division: `q = sign(n) * floor(a / abs(n))`

The rounding/modulo modes are available as enumerated properties of the BigNumber constructor.

See `modulo`.

```ts
BigNumber.config({ MODULO_MODE: BigNumber.EUCLID })
BigNumber.set({ MODULO_MODE: 9 })          // equivalent
```

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:205

___

### POW\_PRECISION

• `Optional` **POW\_PRECISION**: `number`

An integer, 0 to 1e+9. Default value: 0.

The maximum precision, i.e. number of significant digits, of the result of the power operation
- unless a modulus is specified.

If set to 0, the number of significant digits will not be limited.

See `exponentiatedBy`.

```ts
BigNumber.config({ POW_PRECISION: 100 })
```

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:221

___

### RANGE

• `Optional` **RANGE**: `number` \| [`number`, `number`]

An integer, magnitude 1 to 1e+9, or an array, [-1e+9 to -1, 1 to 1e+9].
Default value: `[-1e+9, 1e+9]`.

The exponent value(s) beyond which overflow to Infinity and underflow to zero occurs.

If a single number is assigned, it is the maximum exponent magnitude: values wth a positive
exponent of greater magnitude become Infinity and those with a negative exponent of greater
magnitude become zero.

If an array of two numbers is assigned then the first number is the negative exponent limit and
the second number is the positive exponent limit.

For example, to emulate JavaScript numbers in terms of the exponent values at which they
become zero and Infinity, use [-324, 308].

```ts
BigNumber.config({ RANGE: 500 })
BigNumber.config().RANGE     // [ -500, 500 ]
new BigNumber('9.999e499')   // '9.999e+499'
new BigNumber('1e500')       // 'Infinity'
new BigNumber('1e-499')      // '1e-499'
new BigNumber('1e-500')      // '0'

BigNumber.config({ RANGE: [-3, 4] })
new BigNumber(99999)         // '99999'      e is only 4
new BigNumber(100000)        // 'Infinity'   e is 5
new BigNumber(0.001)         // '0.01'       e is only -3
new BigNumber(0.0001)        // '0'          e is -4
```
The largest possible magnitude of a finite BigNumber is 9.999...e+1000000000.
The smallest possible magnitude of a non-zero BigNumber is 1e-1000000000.

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:144

___

### ROUNDING\_MODE

• `Optional` **ROUNDING\_MODE**: [`RoundingMode`](../modules/internal_.BigNumber.md#roundingmode)

An integer, 0 to 8. Default value: `BigNumber.ROUND_HALF_UP` (4).

The rounding mode used in operations that involve division (see `DECIMAL_PLACES`) and the
default rounding mode of the `decimalPlaces`, `precision`, `toExponential`, `toFixed`,
`toFormat` and `toPrecision` methods.

The modes are available as enumerated properties of the BigNumber constructor.

```ts
BigNumber.config({ ROUNDING_MODE: 0 })
BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_UP })
```

#### Defined in

node_modules/bignumber.js/bignumber.d.ts:69
