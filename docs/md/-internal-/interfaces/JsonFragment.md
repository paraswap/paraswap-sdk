[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonFragment

# Interface: JsonFragment

## Properties

### anonymous?

> `readonly` `optional` **anonymous**: `boolean`

If the event is anonymous.

#### Defined in

[src/types.ts:206](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L206)

***

### constant?

> `readonly` `optional` **constant**: `boolean`

If the function is constant.

#### Defined in

[src/types.ts:216](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L216)

***

### gas?

> `readonly` `optional` **gas**: `string`

The gas limit to use when sending a transaction for this function.

#### Defined in

[src/types.ts:236](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L236)

***

### inputs?

> `readonly` `optional` **inputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

The input parameters.

#### Defined in

[src/types.ts:226](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L226)

***

### name?

> `readonly` `optional` **name**: `string`

The name of the error, event, function, etc.

#### Defined in

[src/types.ts:196](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L196)

***

### outputs?

> `readonly` `optional` **outputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

The output parameters.

#### Defined in

[src/types.ts:231](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L231)

***

### payable?

> `readonly` `optional` **payable**: `boolean`

If the function is payable.

#### Defined in

[src/types.ts:211](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L211)

***

### stateMutability?

> `readonly` `optional` **stateMutability**: `string`

The mutability state of the function.

#### Defined in

[src/types.ts:221](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L221)

***

### type?

> `readonly` `optional` **type**: `string`

The type of the fragment (e.g. ``event``, ``"function"``, etc.)

#### Defined in

[src/types.ts:201](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L201)
