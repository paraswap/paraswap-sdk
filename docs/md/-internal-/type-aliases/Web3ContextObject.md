[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3ContextObject

# Type Alias: Web3ContextObject\<API, RegisteredSubs\>

> **Web3ContextObject**\<`API`, `RegisteredSubs`\>: `object`

## Type Parameters

• **API** *extends* [`Web3APISpec`](Web3APISpec.md) = `unknown`

• **RegisteredSubs** *extends* `object` = `any`

## Type declaration

### accountProvider?

> `optional` **accountProvider**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

### config

> **config**: [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

### provider?

> `optional` **provider**: [`SupportedProviders`](SupportedProviders.md)\<`API`\> \| `string`

### providers

> **providers**: *typeof* [`providers`](../classes/Web3RequestManager.md#providers-1)

### registeredSubscriptions?

> `optional` **registeredSubscriptions**: `RegisteredSubs`

### requestManager

> **requestManager**: [`Web3RequestManager`](../classes/Web3RequestManager.md)\<`API`\>

### subscriptionManager?

> `optional` **subscriptionManager**: [`Web3SubscriptionManager`](../classes/Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

### wallet?

> `optional` **wallet**: [`Web3BaseWallet`](../classes/Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

## Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:9
