[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonFragment

# Interface: JsonFragment

## Properties

### anonymous?

> `readonly` `optional` **anonymous**: `boolean`

If the event is anonymous.

#### Defined in

[src/types.ts:209](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L209)

***

### constant?

> `readonly` `optional` **constant**: `boolean`

If the function is constant.

#### Defined in

[src/types.ts:219](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L219)

***

### gas?

> `readonly` `optional` **gas**: `string`

The gas limit to use when sending a transaction for this function.

#### Defined in

[src/types.ts:239](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L239)

***

### inputs?

> `readonly` `optional` **inputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

The input parameters.

#### Defined in

[src/types.ts:229](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L229)

***

### name?

> `readonly` `optional` **name**: `string`

The name of the error, event, function, etc.

#### Defined in

[src/types.ts:199](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L199)

***

### outputs?

> `readonly` `optional` **outputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

The output parameters.

#### Defined in

[src/types.ts:234](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L234)

***

### payable?

> `readonly` `optional` **payable**: `boolean`

If the function is payable.

#### Defined in

[src/types.ts:214](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L214)

***

### stateMutability?

> `readonly` `optional` **stateMutability**: `string`

The mutability state of the function.

#### Defined in

[src/types.ts:224](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L224)

***

### type?

> `readonly` `optional` **type**: `string`

The type of the fragment (e.g. ``event``, ``"function"``, etc.)

#### Defined in

[src/types.ts:204](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L204)
