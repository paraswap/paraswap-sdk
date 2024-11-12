[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Emitter

# Interface: Web3Emitter\<T\>

## Type Parameters

• **T** *extends* [`Web3EventMap`](../type-aliases/Web3EventMap.md)

## Methods

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **params**: `T`\[`K`\]

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:9

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:8

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:6

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:7
