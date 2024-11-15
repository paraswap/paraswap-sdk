[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetAccountParameter

# Type Alias: GetAccountParameter\<account, accountOverride, required, nullish\>

> **GetAccountParameter**\<`account`, `accountOverride`, `required`, `nullish`\>: [`MaybeRequired`](MaybeRequired.md)\<`object`, [`IsUndefined`](IsUndefined.md)\<`account`\> *extends* `true` ? `required` *extends* `true` ? `true` : `false` : `false`\>

## Type declaration

### account?

> `optional` **account**: `accountOverride` \| [`Account`](Account.md) \| [`Address`](Address.md) \| `nullish` *extends* `true` ? `null` : `never`

## Type Parameters

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **accountOverride** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address.md)

• **required** *extends* `boolean` = `true`

• **nullish** *extends* `boolean` = `false`

## Defined in

node\_modules/viem/\_types/types/account.d.ts:5
