[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3DeferredPromiseInterface

# Interface: Web3DeferredPromiseInterface\<T\>

## Extends

- `Promise`\<`T`\>

## Type Parameters

• **T**

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Promise.[toStringTag]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:176

***

### state

> **state**: `"pending"` \| `"fulfilled"` \| `"rejected"`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_deferred\_promise\_type.d.ts:2

## Methods

### catch()

> **catch**\<`TResult`\>(`onrejected`?): `Promise`\<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

• **TResult** = `never`

#### Parameters

• **onrejected?**: `null` \| (`reason`) => `TResult` \| [`PromiseLike`](PromiseLike.md)\<`TResult`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1557

***

### finally()

> **finally**(`onfinally`?): `Promise`\<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

• **onfinally?**: `null` \| () => `void`

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<`T`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`

#### Defined in

node\_modules/typescript/lib/lib.es2018.promise.d.ts:29

***

### reject()

> **reject**(`reason`?): `void`

#### Parameters

• **reason?**: `unknown`

#### Returns

`void`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_deferred\_promise\_type.d.ts:4

***

### resolve()

> **resolve**(`value`): `void`

#### Parameters

• **value**: `T` \| [`PromiseLike`](PromiseLike.md)\<`T`\>

#### Returns

`void`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_deferred\_promise\_type.d.ts:3

***

### startTimer()

> **startTimer**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_deferred\_promise\_type.d.ts:5

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `Promise`\<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

• **TResult1** = `T`

• **TResult2** = `never`

#### Parameters

• **onfulfilled?**: `null` \| (`value`) => `TResult1` \| [`PromiseLike`](PromiseLike.md)\<`TResult1`\>

The callback to execute when the Promise is resolved.

• **onrejected?**: `null` \| (`reason`) => `TResult2` \| [`PromiseLike`](PromiseLike.md)\<`TResult2`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1550
