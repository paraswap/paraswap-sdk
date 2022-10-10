[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / RedBN

# Class: RedBN

[<internal>](../modules/internal_.md).RedBN

Big-Number class with additionnal methods that are using modular
operation.

## Hierarchy

- [`BN`](internal_.BN-1.md)

  ↳ **`RedBN`**

## Table of contents

### Constructors

- [constructor](internal_.RedBN.md#constructor)

### Methods

- [abs](internal_.RedBN.md#abs)
- [add](internal_.RedBN.md#add)
- [addn](internal_.RedBN.md#addn)
- [and](internal_.RedBN.md#and)
- [andln](internal_.RedBN.md#andln)
- [bincn](internal_.RedBN.md#bincn)
- [bitLength](internal_.RedBN.md#bitlength)
- [byteLength](internal_.RedBN.md#bytelength)
- [clone](internal_.RedBN.md#clone)
- [cmp](internal_.RedBN.md#cmp)
- [cmpn](internal_.RedBN.md#cmpn)
- [div](internal_.RedBN.md#div)
- [divRound](internal_.RedBN.md#divround)
- [divn](internal_.RedBN.md#divn)
- [egcd](internal_.RedBN.md#egcd)
- [eq](internal_.RedBN.md#eq)
- [eqn](internal_.RedBN.md#eqn)
- [fromRed](internal_.RedBN.md#fromred)
- [fromTwos](internal_.RedBN.md#fromtwos)
- [gcd](internal_.RedBN.md#gcd)
- [gt](internal_.RedBN.md#gt)
- [gte](internal_.RedBN.md#gte)
- [gten](internal_.RedBN.md#gten)
- [gtn](internal_.RedBN.md#gtn)
- [iabs](internal_.RedBN.md#iabs)
- [iadd](internal_.RedBN.md#iadd)
- [iaddn](internal_.RedBN.md#iaddn)
- [iand](internal_.RedBN.md#iand)
- [idivn](internal_.RedBN.md#idivn)
- [imaskn](internal_.RedBN.md#imaskn)
- [imul](internal_.RedBN.md#imul)
- [imuln](internal_.RedBN.md#imuln)
- [ineg](internal_.RedBN.md#ineg)
- [inotn](internal_.RedBN.md#inotn)
- [invm](internal_.RedBN.md#invm)
- [ior](internal_.RedBN.md#ior)
- [isEven](internal_.RedBN.md#iseven)
- [isNeg](internal_.RedBN.md#isneg)
- [isOdd](internal_.RedBN.md#isodd)
- [isZero](internal_.RedBN.md#iszero)
- [ishln](internal_.RedBN.md#ishln)
- [ishrn](internal_.RedBN.md#ishrn)
- [isqr](internal_.RedBN.md#isqr)
- [isub](internal_.RedBN.md#isub)
- [isubn](internal_.RedBN.md#isubn)
- [iuand](internal_.RedBN.md#iuand)
- [iuor](internal_.RedBN.md#iuor)
- [iushln](internal_.RedBN.md#iushln)
- [iushrn](internal_.RedBN.md#iushrn)
- [iuxor](internal_.RedBN.md#iuxor)
- [ixor](internal_.RedBN.md#ixor)
- [lt](internal_.RedBN.md#lt)
- [lte](internal_.RedBN.md#lte)
- [lten](internal_.RedBN.md#lten)
- [ltn](internal_.RedBN.md#ltn)
- [maskn](internal_.RedBN.md#maskn)
- [mod](internal_.RedBN.md#mod)
- [modn](internal_.RedBN.md#modn)
- [mul](internal_.RedBN.md#mul)
- [muln](internal_.RedBN.md#muln)
- [neg](internal_.RedBN.md#neg)
- [notn](internal_.RedBN.md#notn)
- [or](internal_.RedBN.md#or)
- [pow](internal_.RedBN.md#pow)
- [redAdd](internal_.RedBN.md#redadd)
- [redIAdd](internal_.RedBN.md#rediadd)
- [redIMul](internal_.RedBN.md#redimul)
- [redISqr](internal_.RedBN.md#redisqr)
- [redISub](internal_.RedBN.md#redisub)
- [redInvm](internal_.RedBN.md#redinvm)
- [redMul](internal_.RedBN.md#redmul)
- [redNeg](internal_.RedBN.md#redneg)
- [redPow](internal_.RedBN.md#redpow)
- [redShl](internal_.RedBN.md#redshl)
- [redSqr](internal_.RedBN.md#redsqr)
- [redSqrt](internal_.RedBN.md#redsqrt)
- [redSub](internal_.RedBN.md#redsub)
- [setn](internal_.RedBN.md#setn)
- [shln](internal_.RedBN.md#shln)
- [shrn](internal_.RedBN.md#shrn)
- [sqr](internal_.RedBN.md#sqr)
- [sub](internal_.RedBN.md#sub)
- [subn](internal_.RedBN.md#subn)
- [testn](internal_.RedBN.md#testn)
- [toArray](internal_.RedBN.md#toarray)
- [toArrayLike](internal_.RedBN.md#toarraylike)
- [toBuffer](internal_.RedBN.md#tobuffer)
- [toJSON](internal_.RedBN.md#tojson)
- [toNumber](internal_.RedBN.md#tonumber)
- [toRed](internal_.RedBN.md#tored)
- [toString](internal_.RedBN.md#tostring)
- [toTwos](internal_.RedBN.md#totwos)
- [uand](internal_.RedBN.md#uand)
- [ucmp](internal_.RedBN.md#ucmp)
- [umod](internal_.RedBN.md#umod)
- [uor](internal_.RedBN.md#uor)
- [ushln](internal_.RedBN.md#ushln)
- [ushrn](internal_.RedBN.md#ushrn)
- [uxor](internal_.RedBN.md#uxor)
- [xor](internal_.RedBN.md#xor)
- [zeroBits](internal_.RedBN.md#zerobits)
- [isBN](internal_.RedBN.md#isbn)
- [max](internal_.RedBN.md#max)
- [min](internal_.RedBN.md#min)
- [mont](internal_.RedBN.md#mont)
- [red](internal_.RedBN.md#red)

## Constructors

### constructor

• **new RedBN**(`number`, `base?`, `endian?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| `Uint8Array` \| `number`[] \| [`Buffer`](../modules/internal_.md#buffer) |
| `base?` | `number` \| ``"hex"`` |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |

#### Inherited from

[BN](internal_.BN-1.md).[constructor](internal_.BN-1.md#constructor)

• **new RedBN**(`number`, `endian?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| `Uint8Array` \| `number`[] \| [`Buffer`](../modules/internal_.md#buffer) |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |

#### Inherited from

[BN](internal_.BN-1.md).[constructor](internal_.BN-1.md#constructor)

## Methods

### abs

▸ **abs**(): [`BN`](internal_.BN-1.md)

**`Description`**

absolute value

#### Returns

[`BN`](internal_.BN-1.md)

#### Inherited from

[BN](internal_.BN-1.md).[abs](internal_.BN-1.md#abs)

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

#### Inherited from

[BN](internal_.BN-1.md).[add](internal_.BN-1.md#add)

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

#### Inherited from

[BN](internal_.BN-1.md).[addn](internal_.BN-1.md#addn)

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

#### Inherited from

[BN](internal_.BN-1.md).[and](internal_.BN-1.md#and)

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

#### Inherited from

[BN](internal_.BN-1.md).[andln](internal_.BN-1.md#andln)

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

#### Inherited from

[BN](internal_.BN-1.md).[bincn](internal_.BN-1.md#bincn)

___

### bitLength

▸ **bitLength**(): `number`

**`Description`**

get number of bits occupied

#### Returns

`number`

#### Inherited from

[BN](internal_.BN-1.md).[bitLength](internal_.BN-1.md#bitlength)

___

### byteLength

▸ **byteLength**(): `number`

**`Description`**

return number of bytes occupied

#### Returns

`number`

#### Inherited from

[BN](internal_.BN-1.md).[byteLength](internal_.BN-1.md#bytelength)

___

### clone

▸ **clone**(): [`BN`](internal_.BN-1.md)

**`Description`**

clone number

#### Returns

[`BN`](internal_.BN-1.md)

#### Inherited from

[BN](internal_.BN-1.md).[clone](internal_.BN-1.md#clone)

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

#### Inherited from

[BN](internal_.BN-1.md).[cmp](internal_.BN-1.md#cmp)

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

#### Inherited from

[BN](internal_.BN-1.md).[cmpn](internal_.BN-1.md#cmpn)

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

#### Inherited from

[BN](internal_.BN-1.md).[div](internal_.BN-1.md#div)

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

#### Inherited from

[BN](internal_.BN-1.md).[divRound](internal_.BN-1.md#divround)

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

#### Inherited from

[BN](internal_.BN-1.md).[divn](internal_.BN-1.md#divn)

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

#### Inherited from

[BN](internal_.BN-1.md).[egcd](internal_.BN-1.md#egcd)

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

#### Inherited from

[BN](internal_.BN-1.md).[eq](internal_.BN-1.md#eq)

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

#### Inherited from

[BN](internal_.BN-1.md).[eqn](internal_.BN-1.md#eqn)

___

### fromRed

▸ **fromRed**(): [`BN`](internal_.BN-1.md)

**`Description`**

Convert back a number using a reduction context

#### Returns

[`BN`](internal_.BN-1.md)

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

#### Inherited from

[BN](internal_.BN-1.md).[fromTwos](internal_.BN-1.md#fromtwos)

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

#### Inherited from

[BN](internal_.BN-1.md).[gcd](internal_.BN-1.md#gcd)

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

#### Inherited from

[BN](internal_.BN-1.md).[gt](internal_.BN-1.md#gt)

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

#### Inherited from

[BN](internal_.BN-1.md).[gte](internal_.BN-1.md#gte)

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

#### Inherited from

[BN](internal_.BN-1.md).[gten](internal_.BN-1.md#gten)

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

#### Inherited from

[BN](internal_.BN-1.md).[gtn](internal_.BN-1.md#gtn)

___

### iabs

▸ **iabs**(): [`BN`](internal_.BN-1.md)

**`Description`**

absolute value

#### Returns

[`BN`](internal_.BN-1.md)

#### Inherited from

[BN](internal_.BN-1.md).[iabs](internal_.BN-1.md#iabs)

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

#### Inherited from

[BN](internal_.BN-1.md).[iadd](internal_.BN-1.md#iadd)

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

#### Inherited from

[BN](internal_.BN-1.md).[iaddn](internal_.BN-1.md#iaddn)

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

#### Inherited from

[BN](internal_.BN-1.md).[iand](internal_.BN-1.md#iand)

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

#### Inherited from

[BN](internal_.BN-1.md).[idivn](internal_.BN-1.md#idivn)

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

#### Inherited from

[BN](internal_.BN-1.md).[imaskn](internal_.BN-1.md#imaskn)

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

#### Inherited from

[BN](internal_.BN-1.md).[imul](internal_.BN-1.md#imul)

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

#### Inherited from

[BN](internal_.BN-1.md).[imuln](internal_.BN-1.md#imuln)

___

### ineg

▸ **ineg**(): [`BN`](internal_.BN-1.md)

**`Description`**

negate sign

#### Returns

[`BN`](internal_.BN-1.md)

#### Inherited from

[BN](internal_.BN-1.md).[ineg](internal_.BN-1.md#ineg)

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

#### Inherited from

[BN](internal_.BN-1.md).[inotn](internal_.BN-1.md#inotn)

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

#### Inherited from

[BN](internal_.BN-1.md).[invm](internal_.BN-1.md#invm)

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

#### Inherited from

[BN](internal_.BN-1.md).[ior](internal_.BN-1.md#ior)

___

### isEven

▸ **isEven**(): `boolean`

**`Description`**

check if value is even

#### Returns

`boolean`

#### Inherited from

[BN](internal_.BN-1.md).[isEven](internal_.BN-1.md#iseven)

___

### isNeg

▸ **isNeg**(): `boolean`

**`Description`**

true if the number is negative

#### Returns

`boolean`

#### Inherited from

[BN](internal_.BN-1.md).[isNeg](internal_.BN-1.md#isneg)

___

### isOdd

▸ **isOdd**(): `boolean`

**`Description`**

check if value is odd

#### Returns

`boolean`

#### Inherited from

[BN](internal_.BN-1.md).[isOdd](internal_.BN-1.md#isodd)

___

### isZero

▸ **isZero**(): `boolean`

**`Description`**

check if value is zero

#### Returns

`boolean`

#### Inherited from

[BN](internal_.BN-1.md).[isZero](internal_.BN-1.md#iszero)

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

#### Inherited from

[BN](internal_.BN-1.md).[ishln](internal_.BN-1.md#ishln)

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

#### Inherited from

[BN](internal_.BN-1.md).[ishrn](internal_.BN-1.md#ishrn)

___

### isqr

▸ **isqr**(): [`BN`](internal_.BN-1.md)

**`Description`**

square

#### Returns

[`BN`](internal_.BN-1.md)

#### Inherited from

[BN](internal_.BN-1.md).[isqr](internal_.BN-1.md#isqr)

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

#### Inherited from

[BN](internal_.BN-1.md).[isub](internal_.BN-1.md#isub)

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

#### Inherited from

[BN](internal_.BN-1.md).[isubn](internal_.BN-1.md#isubn)

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

#### Inherited from

[BN](internal_.BN-1.md).[iuand](internal_.BN-1.md#iuand)

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

#### Inherited from

[BN](internal_.BN-1.md).[iuor](internal_.BN-1.md#iuor)

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

#### Inherited from

[BN](internal_.BN-1.md).[iushln](internal_.BN-1.md#iushln)

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

#### Inherited from

[BN](internal_.BN-1.md).[iushrn](internal_.BN-1.md#iushrn)

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

#### Inherited from

[BN](internal_.BN-1.md).[iuxor](internal_.BN-1.md#iuxor)

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

#### Inherited from

[BN](internal_.BN-1.md).[ixor](internal_.BN-1.md#ixor)

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

#### Inherited from

[BN](internal_.BN-1.md).[lt](internal_.BN-1.md#lt)

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

#### Inherited from

[BN](internal_.BN-1.md).[lte](internal_.BN-1.md#lte)

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

#### Inherited from

[BN](internal_.BN-1.md).[lten](internal_.BN-1.md#lten)

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

#### Inherited from

[BN](internal_.BN-1.md).[ltn](internal_.BN-1.md#ltn)

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

#### Inherited from

[BN](internal_.BN-1.md).[maskn](internal_.BN-1.md#maskn)

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

#### Inherited from

[BN](internal_.BN-1.md).[mod](internal_.BN-1.md#mod)

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

#### Inherited from

[BN](internal_.BN-1.md).[modn](internal_.BN-1.md#modn)

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

#### Inherited from

[BN](internal_.BN-1.md).[mul](internal_.BN-1.md#mul)

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

#### Inherited from

[BN](internal_.BN-1.md).[muln](internal_.BN-1.md#muln)

___

### neg

▸ **neg**(): [`BN`](internal_.BN-1.md)

**`Description`**

negate sign

#### Returns

[`BN`](internal_.BN-1.md)

#### Inherited from

[BN](internal_.BN-1.md).[neg](internal_.BN-1.md#neg)

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

#### Inherited from

[BN](internal_.BN-1.md).[notn](internal_.BN-1.md#notn)

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

#### Inherited from

[BN](internal_.BN-1.md).[or](internal_.BN-1.md#or)

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

#### Inherited from

[BN](internal_.BN-1.md).[pow](internal_.BN-1.md#pow)

___

### redAdd

▸ **redAdd**(`b`): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redIAdd

▸ **redIAdd**(`b`): [`RedBN`](internal_.RedBN.md)

**`Description`**

in-place modular addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redIMul

▸ **redIMul**(`b`): [`RedBN`](internal_.RedBN.md)

**`Description`**

in-place modular multiplication

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redISqr

▸ **redISqr**(): [`RedBN`](internal_.RedBN.md)

**`Description`**

in-place modular square

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redISub

▸ **redISub**(`b`): [`RedBN`](internal_.RedBN.md)

**`Description`**

in-place modular subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redInvm

▸ **redInvm**(): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular inverse of the number

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redMul

▸ **redMul**(`b`): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular multiplication

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redNeg

▸ **redNeg**(): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular negation

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redPow

▸ **redPow**(`b`): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular exponentiation

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redShl

▸ **redShl**(`num`): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redSqr

▸ **redSqr**(): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular square

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redSqrt

▸ **redSqrt**(): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular square root

#### Returns

[`RedBN`](internal_.RedBN.md)

___

### redSub

▸ **redSub**(`b`): [`RedBN`](internal_.RedBN.md)

**`Description`**

modular subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`BN`](internal_.BN-1.md) |

#### Returns

[`RedBN`](internal_.RedBN.md)

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

#### Inherited from

[BN](internal_.BN-1.md).[setn](internal_.BN-1.md#setn)

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

#### Inherited from

[BN](internal_.BN-1.md).[shln](internal_.BN-1.md#shln)

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

#### Inherited from

[BN](internal_.BN-1.md).[shrn](internal_.BN-1.md#shrn)

___

### sqr

▸ **sqr**(): [`BN`](internal_.BN-1.md)

**`Description`**

square

#### Returns

[`BN`](internal_.BN-1.md)

#### Inherited from

[BN](internal_.BN-1.md).[sqr](internal_.BN-1.md#sqr)

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

#### Inherited from

[BN](internal_.BN-1.md).[sub](internal_.BN-1.md#sub)

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

#### Inherited from

[BN](internal_.BN-1.md).[subn](internal_.BN-1.md#subn)

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

#### Inherited from

[BN](internal_.BN-1.md).[testn](internal_.BN-1.md#testn)

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

#### Inherited from

[BN](internal_.BN-1.md).[toArray](internal_.BN-1.md#toarray)

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

#### Inherited from

[BN](internal_.BN-1.md).[toArrayLike](internal_.BN-1.md#toarraylike)

▸ **toArrayLike**(`ArrayType`, `endian?`, `length?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ArrayType` | `any`[] |
| `endian?` | [`Endianness`](../modules/internal_.BN.md#endianness) |
| `length?` | `number` |

#### Returns

`any`[]

#### Inherited from

[BN](internal_.BN-1.md).[toArrayLike](internal_.BN-1.md#toarraylike)

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

#### Inherited from

[BN](internal_.BN-1.md).[toBuffer](internal_.BN-1.md#tobuffer)

___

### toJSON

▸ **toJSON**(): `string`

**`Description`**

convert to JSON compatible hex string (alias of toString(16))

#### Returns

`string`

#### Inherited from

[BN](internal_.BN-1.md).[toJSON](internal_.BN-1.md#tojson)

___

### toNumber

▸ **toNumber**(): `number`

**`Description`**

convert to Javascript Number (limited to 53 bits)

#### Returns

`number`

#### Inherited from

[BN](internal_.BN-1.md).[toNumber](internal_.BN-1.md#tonumber)

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

#### Inherited from

[BN](internal_.BN-1.md).[toRed](internal_.BN-1.md#tored)

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

#### Inherited from

[BN](internal_.BN-1.md).[toString](internal_.BN-1.md#tostring)

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

#### Inherited from

[BN](internal_.BN-1.md).[toTwos](internal_.BN-1.md#totwos)

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

#### Inherited from

[BN](internal_.BN-1.md).[uand](internal_.BN-1.md#uand)

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

#### Inherited from

[BN](internal_.BN-1.md).[ucmp](internal_.BN-1.md#ucmp)

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

#### Inherited from

[BN](internal_.BN-1.md).[umod](internal_.BN-1.md#umod)

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

#### Inherited from

[BN](internal_.BN-1.md).[uor](internal_.BN-1.md#uor)

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

#### Inherited from

[BN](internal_.BN-1.md).[ushln](internal_.BN-1.md#ushln)

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

#### Inherited from

[BN](internal_.BN-1.md).[ushrn](internal_.BN-1.md#ushrn)

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

#### Inherited from

[BN](internal_.BN-1.md).[uxor](internal_.BN-1.md#uxor)

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

#### Inherited from

[BN](internal_.BN-1.md).[xor](internal_.BN-1.md#xor)

___

### zeroBits

▸ **zeroBits**(): `number`

**`Description`**

return number of less-significant consequent zero bits (example: 1010000 has 4 zero bits)

#### Returns

`number`

#### Inherited from

[BN](internal_.BN-1.md).[zeroBits](internal_.BN-1.md#zerobits)

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

#### Inherited from

[BN](internal_.BN-1.md).[isBN](internal_.BN-1.md#isbn)

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

#### Inherited from

[BN](internal_.BN-1.md).[max](internal_.BN-1.md#max)

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

#### Inherited from

[BN](internal_.BN-1.md).[min](internal_.BN-1.md#min)

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

#### Inherited from

[BN](internal_.BN-1.md).[mont](internal_.BN-1.md#mont)

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

#### Inherited from

[BN](internal_.BN-1.md).[red](internal_.BN-1.md#red)
