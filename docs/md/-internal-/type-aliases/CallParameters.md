[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / CallParameters

# Type Alias: CallParameters\<chain\>

> **CallParameters**\<`chain`\>: [`UnionOmit`](UnionOmit.md)\<[`FormattedCall`](FormattedCall.md)\<`chain`\>, `"from"`\> & `object` & `object` \| `object`

## Type declaration

### account?

> `optional` **account**: [`Account`](Account.md) \| [`Address`](Address.md)

Account attached to the call (msg.sender).

### batch?

> `optional` **batch**: `boolean`

Whether or not to enable multicall batching on this call.

### code?

> `optional` **code**: [`Hex`](Hex.md)

Bytecode to perform the call on.

### factory?

> `optional` **factory**: [`Address`](Address.md)

Contract deployment factory address (ie. Create2 factory, Smart Account factory, etc).

### factoryData?

> `optional` **factoryData**: [`Hex`](Hex.md)

Calldata to execute on the factory to deploy the contract.

### stateOverride?

> `optional` **stateOverride**: [`StateOverride`](StateOverride.md)

State overrides for the call.

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/call.d.ts:24
