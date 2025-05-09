[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PromiseLike

# Interface: PromiseLike\<T\>

## Type Parameters

• **T**

## Methods

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): [`PromiseLike`](PromiseLike.md)\<`TResult1` \| `TResult2`\>

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

[`PromiseLike`](PromiseLike.md)\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1537
