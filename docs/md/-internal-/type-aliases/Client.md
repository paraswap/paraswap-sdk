[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Client

# Type Alias: Client\<transport, chain, account, rpcSchema, extended\>

> **Client**\<`transport`, `chain`, `account`, `rpcSchema`, `extended`\>: [`Client_Base`](Client_Base.md)\<`transport`, `chain`, `account`, `rpcSchema`\> & `extended` *extends* [`Extended`](Extended.md) ? `extended` : `unknown` & `object`

## Type declaration

### extend()

> **extend**: \<`client`\>(`fn`) => [`Client`](Client.md)\<`transport`, `chain`, `account`, `rpcSchema`, [`Prettify`](Prettify.md)\<`client`\> & `extended` *extends* [`Extended`](Extended.md) ? `extended` : `unknown`\>

#### Type Parameters

• **client** *extends* [`Extended`](Extended.md) & [`ExactPartial`](ExactPartial.md)\<[`ExtendableProtectedActions`](ExtendableProtectedActions.md)\<`transport`, `chain`, `account`\>\>

#### Parameters

• **fn**

#### Returns

[`Client`](Client.md)\<`transport`, `chain`, `account`, `rpcSchema`, [`Prettify`](Prettify.md)\<`client`\> & `extended` *extends* [`Extended`](Extended.md) ? `extended` : `unknown`\>

## Type Parameters

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **rpcSchema** *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

• **extended** *extends* [`Extended`](Extended.md) \| `undefined` = [`Extended`](Extended.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/clients/createClient.d.ts:58
