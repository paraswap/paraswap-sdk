[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / ParaSwap

# Class: ~~ParaSwap~~

## Deprecated

## Constructors

### new ParaSwap()

> **new ParaSwap**(`__namedParameters`): [`ParaSwap`](ParaSwap.md)

#### Parameters

• **\_\_namedParameters**: [`LegacyOptions`](../-internal-/type-aliases/LegacyOptions.md)

#### Returns

[`ParaSwap`](ParaSwap.md)

#### Defined in

[src/legacy/index.ts:80](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L80)

## Properties

### ~~account?~~

> `optional` **account**: `string`

#### Defined in

[src/legacy/index.ts:78](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L78)

***

### ~~apiURL~~

> **apiURL**: `string`

#### Defined in

[src/legacy/index.ts:74](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L74)

***

### ~~chainId~~

> **chainId**: `number`

#### Defined in

[src/legacy/index.ts:73](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L73)

***

### ~~ethersDeps?~~

> `optional` **ethersDeps**: [`EthersProviderDeps`](../type-aliases/EthersProviderDeps.md)

#### Defined in

[src/legacy/index.ts:77](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L77)

***

### ~~fetcher~~

> **fetcher**: [`FetcherFunction`](../type-aliases/FetcherFunction.md)

#### Defined in

[src/legacy/index.ts:71](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L71)

***

### ~~sdk~~

> **sdk**: [`Partial`](../-internal-/type-aliases/Partial.md)\<[`SwapSDKMethods`](../type-aliases/SwapSDKMethods.md)\<[`TxResponse`](../-internal-/type-aliases/TxResponse.md)\>\> = `{}`

#### Defined in

[src/legacy/index.ts:70](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L70)

***

### ~~version~~

> **version**: [`ParaSwapVersion`](../type-aliases/ParaSwapVersion.md)

#### Defined in

[src/legacy/index.ts:75](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L75)

***

### ~~web3Provider?~~

> `optional` **web3Provider**: [`Web3`](../-internal-/classes/Web3.md)\<[`RegisteredSubscription`](../-internal-/type-aliases/RegisteredSubscription.md)\>

#### Defined in

[src/legacy/index.ts:76](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L76)

## Methods

### ~~approveToken()~~

> **approveToken**(`amount`, `userAddress`, `tokenAddress`, `_provider`?, `sendOptions`?): `Promise`\<`string` \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **amount**: `string`

• **userAddress**: `string`

• **tokenAddress**: `string`

• **\_provider?**: `any`

**Deprecated**

• **sendOptions?**: [`Omit`](../-internal-/type-aliases/Omit.md)\<[`TxSendOverrides`](../interfaces/TxSendOverrides.md), `"from"`\>

#### Returns

`Promise`\<`string` \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:408](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L408)

***

### ~~approveTokenBulk()~~

> **approveTokenBulk**(`amount`, `userAddress`, `tokenAddresses`, `_provider`?): `Promise`\<`string`[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **amount**: `string`

• **userAddress**: `string`

• **tokenAddresses**: `string`[]

• **\_provider?**: `any`

**Deprecated**

#### Returns

`Promise`\<`string`[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:381](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L381)

***

### ~~buildTx()~~

> **buildTx**(`srcToken`, `destToken`, `srcAmount`, `destAmount`, `priceRoute`, `userAddress`, `partner`?, `partnerAddress`?, `partnerFeeBps`?, `receiver`?, `options`?, `srcDecimals`?, `destDecimals`?, `permit`?, `deadline`?): `Promise`\<[`TransactionParams`](../interfaces/TransactionParams.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **srcToken**: `string`

• **destToken**: `string`

• **srcAmount**: `string`

• **destAmount**: `string`

• **priceRoute**: [`OptimalRate`](../type-aliases/OptimalRate.md)

• **userAddress**: `string`

• **partner?**: `string`

• **partnerAddress?**: `string`

• **partnerFeeBps?**: `number`

• **receiver?**: `string`

• **options?**: [`BuildOptions`](../type-aliases/BuildOptions.md) = `{}`

• **srcDecimals?**: `number`

• **destDecimals?**: `number`

• **permit?**: `string`

• **deadline?**: `string`

#### Returns

`Promise`\<[`TransactionParams`](../interfaces/TransactionParams.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:305](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L305)

***

### ~~getAdapters()~~

> **getAdapters**(): `Promise`\<[`AdaptersAsStrings`](../-internal-/type-aliases/AdaptersAsStrings.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Returns

`Promise`\<[`AdaptersAsStrings`](../-internal-/type-aliases/AdaptersAsStrings.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:238](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L238)

***

### ~~getAllowance()~~

> **getAllowance**(`userAddress`, `tokenAddress`): `Promise`\<[`Allowance`](../interfaces/Allowance.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **userAddress**: `string`

• **tokenAddress**: `string`

#### Returns

`Promise`\<[`Allowance`](../interfaces/Allowance.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:369](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L369)

***

### ~~getAllowances()~~

> **getAllowances**(`userAddress`, `tokenAddresses`): `Promise`\<[`Allowance`](../interfaces/Allowance.md)[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **userAddress**: `string`

• **tokenAddresses**: `string`[]

#### Returns

`Promise`\<[`Allowance`](../interfaces/Allowance.md)[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:357](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L357)

***

### ~~getBalance()~~

> **getBalance**(`userAddress`, `token`): `Promise`\<[`Token`](../type-aliases/Token.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **userAddress**: `string`

• **token**: `string`

#### Returns

`Promise`\<[`Token`](../type-aliases/Token.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:441](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L441)

***

### ~~getBalances()~~

> **getBalances**(`userAddress`): `Promise`\<[`Token`](../type-aliases/Token.md)[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **userAddress**: `string`

#### Returns

`Promise`\<[`Token`](../type-aliases/Token.md)[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:453](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L453)

***

### ~~getMarketNames()~~

> **getMarketNames**(): `Promise`\<`string`[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Returns

`Promise`\<`string`[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:432](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L432)

***

### ~~getRate()~~

> **getRate**(`srcToken`, `destToken`, `amount`, `userAddress`?, `side`?, `options`?, `srcDecimals`?, `destDecimals`?): `Promise`\<[`OptimalRate`](../type-aliases/OptimalRate.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **srcToken**: `string`

• **destToken**: `string`

• **amount**: `string`

• **userAddress?**: `string`

• **side?**: [`SwapSide`](../enumerations/SwapSide.md) = `SwapSide.SELL`

• **options?**: [`RateOptions`](../-internal-/type-aliases/RateOptions.md) = `{}`

• **srcDecimals?**: `number`

• **destDecimals?**: `number`

#### Returns

`Promise`\<[`OptimalRate`](../type-aliases/OptimalRate.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:278](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L278)

***

### ~~getRateByRoute()~~

> **getRateByRoute**(`route`, `amount`, `userAddress`?, `side`?, `options`?, `srcDecimals`?, `destDecimals`?): `Promise`\<[`OptimalRate`](../type-aliases/OptimalRate.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **route**: `string`[]

• **amount**: `string`

• **userAddress?**: `string`

• **side?**: [`SwapSide`](../enumerations/SwapSide.md) = `SwapSide.SELL`

• **options?**: [`RateOptions`](../-internal-/type-aliases/RateOptions.md)

• **srcDecimals?**: `number`

• **destDecimals?**: `number`

#### Returns

`Promise`\<[`OptimalRate`](../type-aliases/OptimalRate.md) \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:247](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L247)

***

### ~~getTokens()~~

> **getTokens**(): `Promise`\<[`Token`](../type-aliases/Token.md)[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Returns

`Promise`\<[`Token`](../type-aliases/Token.md)[] \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:229](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L229)

***

### ~~getTokenTransferProxy()~~

> **getTokenTransferProxy**(`_provider`?): `Promise`\<`string` \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Parameters

• **\_provider?**: `any`

#### Returns

`Promise`\<`string` \| [`APIError`](../-internal-/type-aliases/APIError.md)\>

#### Defined in

[src/legacy/index.ts:348](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L348)

***

### ~~setEthersProvider()~~

> **setEthersProvider**(`ethersDeps`, `account`?): `this`

#### Parameters

• **ethersDeps**: [`EthersProviderDeps`](../type-aliases/EthersProviderDeps.md)

• **account?**: `string`

#### Returns

`this`

#### Defined in

[src/legacy/index.ts:192](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L192)

***

### ~~setWeb3Provider()~~

> **setWeb3Provider**(`web3Provider`, `account`?): `this`

#### Parameters

• **web3Provider**: [`Web3`](../-internal-/classes/Web3.md)\<[`RegisteredSubscription`](../-internal-/type-aliases/RegisteredSubscription.md)\>

• **account?**: `string`

#### Returns

`this`

#### Defined in

[src/legacy/index.ts:173](https://github.com/paraswap/paraswap-sdk/blob/master/src/legacy/index.ts#L173)
