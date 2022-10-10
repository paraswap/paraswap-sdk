[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BN

# Class: BN

[<internal>](../modules/internal_.md).BN

## Hierarchy

- **`BN`**

  ↳ [`RedBN`](internal_.RedBN.md)

## Table of contents

### Constructors

- [constructor](internal_.BN-1.md#constructor)

### Methods

- [abs](internal_.BN-1.md#abs)
- [add](internal_.BN-1.md#add)
- [addn](internal_.BN-1.md#addn)
- [and](internal_.BN-1.md#and)
- [andln](internal_.BN-1.md#andln)
- [bincn](internal_.BN-1.md#bincn)
- [bitLength](internal_.BN-1.md#bitlength)
- [byteLength](internal_.BN-1.md#bytelength)
- [clone](internal_.BN-1.md#clone)
- [cmp](internal_.BN-1.md#cmp)
- [cmpn](internal_.BN-1.md#cmpn)
- [div](internal_.BN-1.md#div)
- [divRound](internal_.BN-1.md#divround)
- [divn](internal_.BN-1.md#divn)
- [egcd](internal_.BN-1.md#egcd)
- [eq](internal_.BN-1.md#eq)
- [eqn](internal_.BN-1.md#eqn)
- [fromTwos](internal_.BN-1.md#fromtwos)
- [gcd](internal_.BN-1.md#gcd)
- [gt](internal_.BN-1.md#gt)
- [gte](internal_.BN-1.md#gte)
- [gten](internal_.BN-1.md#gten)
- [gtn](internal_.BN-1.md#gtn)
- [iabs](internal_.BN-1.md#iabs)
- [iadd](internal_.BN-1.md#iadd)
- [iaddn](internal_.BN-1.md#iaddn)
- [iand](internal_.BN-1.md#iand)
- [idivn](internal_.BN-1.md#idivn)
- [imaskn](internal_.BN-1.md#imaskn)
- [imul](internal_.BN-1.md#imul)
- [imuln](internal_.BN-1.md#imuln)
- [ineg](internal_.BN-1.md#ineg)
- [inotn](internal_.BN-1.md#inotn)
- [invm](internal_.BN-1.md#invm)
- [ior](internal_.BN-1.md#ior)
- [isEven](internal_.BN-1.md#iseven)
- [isNeg](internal_.BN-1.md#isneg)
- [isOdd](internal_.BN-1.md#isodd)
- [isZero](internal_.BN-1.md#iszero)
- [ishln](internal_.BN-1.md#ishln)
- [ishrn](internal_.BN-1.md#ishrn)
- [isqr](internal_.BN-1.md#isqr)
- [isub](internal_.BN-1.md#isub)
- [isubn](internal_.BN-1.md#isubn)
- [iuand](internal_.BN-1.md#iuand)
- [iuor](internal_.BN-1.md#iuor)
- [iushln](internal_.BN-1.md#iushln)
- [iushrn](internal_.BN-1.md#iushrn)
- [iuxor](internal_.BN-1.md#iuxor)
- [ixor](internal_.BN-1.md#ixor)
- [lt](internal_.BN-1.md#lt)
- [lte](internal_.BN-1.md#lte)
- [lten](internal_.BN-1.md#lten)
- [ltn](internal_.BN-1.md#ltn)
- [maskn](internal_.BN-1.md#maskn)
- [mod](internal_.BN-1.md#mod)
- [modn](internal_.BN-1.md#modn)
- [mul](internal_.BN-1.md#mul)
- [muln](internal_.BN-1.md#muln)
- [neg](internal_.BN-1.md#neg)
- [notn](internal_.BN-1.md#notn)
- [or](internal_.BN-1.md#or)
- [pow](internal_.BN-1.md#pow)
- [setn](internal_.BN-1.md#setn)
- [shln](internal_.BN-1.md#shln)
- [shrn](internal_.BN-1.md#shrn)
- [sqr](internal_.BN-1.md#sqr)
- [sub](internal_.BN-1.md#sub)
- [subn](internal_.BN-1.md#subn)
- [testn](internal_.BN-1.md#testn)
- [toArray](internal_.BN-1.md#toarray)
- [toArrayLike](internal_.BN-1.md#toarraylike)
- [toBuffer](internal_.BN-1.md#tobuffer)
- [toJSON](internal_.BN-1.md#tojson)
- [toNumber](internal_.BN-1.md#tonumber)
- [toRed](internal_.BN-1.md#tored)
- [toString](internal_.BN-1.md#tostring)
- [toTwos](internal_.BN-1.md#totwos)
- [uand](internal_.BN-1.md#uand)
- [ucmp](internal_.BN-1.md#ucmp)
- [umod](internal_.BN-1.md#umod)
- [uor](internal_.BN-1.md#uor)
- [ushln](internal_.BN-1.md#ushln)
- [ushrn](internal_.BN-1.md#ushrn)
- [uxor](internal_.BN-1.md#uxor)
- [xor](internal_.BN-1.md#xor)
- [zeroBits](internal_.BN-1.md#zerobits)
- [isBN](internal_.BN-1.md#isbn)
- [max](internal_.BN-1.md#max)
- [min](internal_.BN-1.md#min)
- [mont](internal_.BN-1.md#mont)
- [red](internal_.BN-1.md#red)

## Constructors

### constructor

• **new BN**(`number`, `base?`, `endian?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| `Uint8Array` \| `number`[] \| [`Buffer`](../modules/internal_.md#buffer) |
| `base?` | `number` \| ``"hex"`` |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |

• **new BN**(`number`, `endian?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| `Uint8Array` \| `number`[] \| [`Buffer`](../modules/internal_.md#buffer) |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |

## Methods

### abs

▸ **abs**(): [`BN`](internal_.BN-1.md)

**`Description`**

absolute value

#### Returns

[`BN`](internal_.BN-1.md)

___

### add

▸ **add**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### addn

▸ **addn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### and

▸ **and**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### andln

▸ **andln**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

and (NOTE: `andln` is going to be replaced with `andn` in future)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### bincn

▸ **bincn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

add `1 << b` to the number

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### bitLength

▸ **bitLength**(): `number`

**`Description`**

get number of bits occupied

#### Returns

`number`

___

### byteLength

▸ **byteLength**(): `number`

**`Description`**

return number of bytes occupied

#### Returns

`number`

___

### clone

▸ **clone**(): [`BN`](internal_.BN-1.md)

**`Description`**

clone number

#### Returns

[`BN`](internal_.BN-1.md)

___

### cmp

▸ **cmp**(`b`): ``0`` \| ``1`` \| ``-1``

**`Description`**

compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

``0`` \| ``1`` \| ``-1``

___

### cmpn

▸ **cmpn**(`b`): ``0`` \| ``1`` \| ``-1``

**`Description`**

compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

``0`` \| ``1`` \| ``-1``

___

### div

▸ **div**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### divRound

▸ **divRound**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

rounded division

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### divn

▸ **divn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### egcd

▸ **egcd**(`b`): `Object`

**`Description`**

Extended GCD results `({ a: ..., b: ..., gcd: ... })`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `a` | [`BN`](internal_.BN-1.md) |
| `b` | [`BN`](internal_.BN-1.md) |
| `gcd` | [`BN`](internal_.BN-1.md) |

___

### eq

▸ **eq**(`b`): `boolean`

**`Description`**

a equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

`boolean`

___

### eqn

▸ **eqn**(`b`): `boolean`

**`Description`**

a equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

___

### fromTwos

▸ **fromTwos**(`width`): [`BN`](internal_.BN-1.md)

**`Description`**

convert from two's complement representation, where width is the bit width

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### gcd

▸ **gcd**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

GCD

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### gt

▸ **gt**(`b`): `boolean`

**`Description`**

a greater than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

`boolean`

___

### gte

▸ **gte**(`b`): `boolean`

**`Description`**

a greater than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

`boolean`

___

### gten

▸ **gten**(`b`): `boolean`

**`Description`**

a greater than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

___

### gtn

▸ **gtn**(`b`): `boolean`

**`Description`**

a greater than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

___

### iabs

▸ **iabs**(): [`BN`](internal_.BN-1.md)

**`Description`**

absolute value

#### Returns

[`BN`](internal_.BN-1.md)

___

### iadd

▸ **iadd**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### iaddn

▸ **iaddn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### iand

▸ **iand**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### idivn

▸ **idivn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### imaskn

▸ **imaskn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

clear bits with indexes higher or equal to `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### imul

▸ **imul**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### imuln

▸ **imuln**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### ineg

▸ **ineg**(): [`BN`](internal_.BN-1.md)

**`Description`**

negate sign

#### Returns

[`BN`](internal_.BN-1.md)

___

### inotn

▸ **inotn**(`w`): [`BN`](internal_.BN-1.md)

**`Description`**

not (for the width specified by `w`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### invm

▸ **invm**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

inverse `a` modulo `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### ior

▸ **ior**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### isEven

▸ **isEven**(): `boolean`

**`Description`**

check if value is even

#### Returns

`boolean`

___

### isNeg

▸ **isNeg**(): `boolean`

**`Description`**

true if the number is negative

#### Returns

`boolean`

___

### isOdd

▸ **isOdd**(): `boolean`

**`Description`**

check if value is odd

#### Returns

`boolean`

___

### isZero

▸ **isZero**(): `boolean`

**`Description`**

check if value is zero

#### Returns

`boolean`

___

### ishln

▸ **ishln**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### ishrn

▸ **ishrn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

shift right (unimplemented https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### isqr

▸ **isqr**(): [`BN`](internal_.BN-1.md)

**`Description`**

square

#### Returns

[`BN`](internal_.BN-1.md)

___

### isub

▸ **isub**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### isubn

▸ **isubn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### iuand

▸ **iuand**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### iuor

▸ **iuor**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### iushln

▸ **iushln**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### iushrn

▸ **iushrn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### iuxor

▸ **iuxor**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### ixor

▸ **ixor**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### lt

▸ **lt**(`b`): `boolean`

**`Description`**

a less than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

`boolean`

___

### lte

▸ **lte**(`b`): `boolean`

**`Description`**

a less than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

`boolean`

___

### lten

▸ **lten**(`b`): `boolean`

**`Description`**

a less than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

___

### ltn

▸ **ltn**(`b`): `boolean`

**`Description`**

a less than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

___

### maskn

▸ **maskn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

clear bits with indexes higher or equal to `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### mod

▸ **mod**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### modn

▸ **modn**(`b`): `number`

**`See`**

API consistency https://github.com/indutny/bn.js/pull/130

**`Description`**

reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`number`

___

### mul

▸ **mul**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### muln

▸ **muln**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### neg

▸ **neg**(): [`BN`](internal_.BN-1.md)

**`Description`**

negate sign

#### Returns

[`BN`](internal_.BN-1.md)

___

### notn

▸ **notn**(`w`): [`BN`](internal_.BN-1.md)

**`Description`**

not (for the width specified by `w`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### or

▸ **or**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### pow

▸ **pow**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

raise `a` to the power of `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### setn

▸ **setn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

set specified bit to 1

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### shln

▸ **shln**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### shrn

▸ **shrn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### sqr

▸ **sqr**(): [`BN`](internal_.BN-1.md)

**`Description`**

square

#### Returns

[`BN`](internal_.BN-1.md)

___

### sub

▸ **sub**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### subn

▸ **subn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### testn

▸ **testn**(`b`): `boolean`

**`Description`**

test if specified bit is set

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

___

### toArray

▸ **toArray**(`endian?`, `length?`): `number`[]

**`Description`**

convert to byte Array, and optionally zero pad to length, throwing if already exceeding

#### Parameters

| Name | Type |
| :------ | :------ |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |
| `length?` | `number` |

#### Returns

`number`[]

___

### toArrayLike

▸ **toArrayLike**(`ArrayType`, `endian?`, `length?`): [`Buffer`](../modules/internal_.md#buffer)

**`Description`**

convert to an instance of `type`, which must behave like an Array

#### Parameters

| Name | Type |
| :------ | :------ |
| `ArrayType` | [`BufferConstructor`](../interfaces/internal_.BufferConstructor.md) |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |
| `length?` | `number` |

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

▸ **toArrayLike**(`ArrayType`, `endian?`, `length?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ArrayType` | `any`[] |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |
| `length?` | `number` |

#### Returns

`any`[]

___

### toBuffer

▸ **toBuffer**(`endian?`, `length?`): [`Buffer`](../modules/internal_.md#buffer)

**`Description`**

convert to Node.js Buffer (if available). For compatibility with browserify and similar tools, use this instead: a.toArrayLike(Buffer, endian, length)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |
| `length?` | `number` |

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

___

### toJSON

▸ **toJSON**(): `string`

**`Description`**

convert to JSON compatible hex string (alias of toString(16))

#### Returns

`string`

___

### toNumber

▸ **toNumber**(): `number`

**`Description`**

convert to Javascript Number (limited to 53 bits)

#### Returns

`number`

___

### toRed

▸ **toRed**(`reductionContext`): [`RedBN`](internal_.RedBN.md)

**`Description`**

Convert number to red

#### Parameters

| Name | Type |
| :------ | :------ |
| `reductionContext` | [`ReductionContext`](../interfaces/internal_.BN.ReductionContext.md) |

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### toString

▸ **toString**(`base?`, `length?`): `string`

**`Description`**

convert to base-string and pad with zeroes

#### Parameters

| Name | Type |
| :------ | :------ |
| `base?` | `number` \| ``"hex"`` |
| `length?` | `number` |

#### Returns

`string`

___

### toTwos

▸ **toTwos**(`width`): [`BN`](internal_.BN-1.md)

**`Description`**

convert to two's complement representation, where width is bit width

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### uand

▸ **uand**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### ucmp

▸ **ucmp**(`b`): ``0`` \| ``1`` \| ``-1``

**`Description`**

compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

``0`` \| ``1`` \| ``-1``

___

### umod

▸ **umod**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### uor

▸ **uor**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### ushln

▸ **ushln**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### ushrn

▸ **ushrn**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

[`BN`](internal_.BN-1.md)

___

### uxor

▸ **uxor**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### xor

▸ **xor**(`b`): [`BN`](internal_.BN-1.md)

**`Description`**

xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### zeroBits

▸ **zeroBits**(): `number`

**`Description`**

return number of less-significant consequent zero bits (example: 1010000 has 4 zero bits)

#### Returns

`number`

___

### isBN

▸ `Static` **isBN**(`b`): b is BN

**`Description`**

returns true if the supplied object is a BN.js instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `any` |

#### Returns

b is BN

___

### max

▸ `Static` **max**(`left`, `right`): [`BN`](internal_.BN-1.md)

**`Description`**

returns the maximum of 2 BN instances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | [`BN`](internal_.BN-1.md) |
| `right` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### min

▸ `Static` **min**(`left`, `right`): [`BN`](internal_.BN-1.md)

**`Description`**

returns the minimum of 2 BN instances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | [`BN`](internal_.BN-1.md) |
| `right` | [`BN`](internal_.BN-1.md) |

#### Returns

[`BN`](internal_.BN-1.md)

___

### mont

▸ `Static` **mont**(`num`): [`ReductionContext`](../interfaces/internal_.BN.ReductionContext.md)

**`Description`**

create a reduction context  with the Montgomery trick.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | [`BN`](internal_.BN-1.md) |

#### Returns

[`ReductionContext`](../interfaces/internal_.BN.ReductionContext.md)

___

### red

▸ `Static` **red**(`reductionContext`): [`ReductionContext`](../interfaces/internal_.BN.ReductionContext.md)

**`Description`**

create a reduction context

#### Parameters

| Name | Type |
| :------ | :------ |
| `reductionContext` | [`BN`](internal_.BN-1.md) \| [`IPrimeName`](../modules/internal_.BN.md#iprimename) |

#### Returns

[`ReductionContext`](../interfaces/internal_.BN.ReductionContext.md)
