[@paraswap/sdk](../README.md) / [Exports](../modules.md) / ParaSwap

# Class: ParaSwap

**`Deprecated`**

## Table of contents

### Constructors

- [constructor](ParaSwap.md#constructor)

### Properties

- [account](ParaSwap.md#account)
- [apiURL](ParaSwap.md#apiurl)
- [chainId](ParaSwap.md#chainid)
- [ethersDeps](ParaSwap.md#ethersdeps)
- [fetcher](ParaSwap.md#fetcher)
- [sdk](ParaSwap.md#sdk)
- [web3Provider](ParaSwap.md#web3provider)

### Methods

- [approveToken](ParaSwap.md#approvetoken)
- [approveTokenBulk](ParaSwap.md#approvetokenbulk)
- [buildTx](ParaSwap.md#buildtx)
- [getAdapters](ParaSwap.md#getadapters)
- [getAllowance](ParaSwap.md#getallowance)
- [getAllowances](ParaSwap.md#getallowances)
- [getBalance](ParaSwap.md#getbalance)
- [getBalances](ParaSwap.md#getbalances)
- [getMarketNames](ParaSwap.md#getmarketnames)
- [getRate](ParaSwap.md#getrate)
- [getRateByRoute](ParaSwap.md#getratebyroute)
- [getTokenTransferProxy](ParaSwap.md#gettokentransferproxy)
- [getTokens](ParaSwap.md#gettokens)
- [setEthersProvider](ParaSwap.md#setethersprovider)
- [setWeb3Provider](ParaSwap.md#setweb3provider)
- [extractHashFromTxResponse](ParaSwap.md#extracthashfromtxresponse)
- [handleAPIError](ParaSwap.md#handleapierror)

## Constructors

### constructor

• **new ParaSwap**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LegacyOptions`](../modules/internal_.md#legacyoptions) |

## Properties

### account

• `Optional` **account**: `string`

#### Defined in

[src/legacy/index.ts:69](https://github.com/paraswap/paraswap-sdk/blob/feat/token-transfer-fees-types/src/legacy/index.ts#L69)

___

### apiURL

• **apiURL**: `string`

#### Defined in

[src/legacy/index.ts:66](https://github.com/paraswap/paraswap-sdk/blob/feat/token-transfer-fees-types/src/legacy/index.ts#L66)

___

### chainId

• **chainId**: `number`

#### Defined in

[src/legacy/index.ts:65](https://github.com/paraswap/paraswap-sdk/blob/feat/token-transfer-fees-types/src/legacy/index.ts#L65)

___

### ethersDeps

• `Optional` **ethersDeps**: [`EthersProviderDeps`](../interfaces/EthersProviderDeps.md)

#### Defined in

[src/legacy/index.ts:68](https://github.com/paraswap/paraswap-sdk/blob/feat/token-transfer-fees-types/src/legacy/index.ts#L68)

___

### fetcher

• **fetcher**: [`FetcherFunction`](../modules/internal_.md#fetcherfunction)

#### Defined in

[src/legacy/index.ts:63](https://github.com/paraswap/paraswap-sdk/blob/feat/token-transfer-fees-types/src/legacy/index.ts#L63)

___

### sdk

• **sdk**: [`Partial`](../modules/internal_.md#partial)<[`SwapSDKMethods`](../modules.md#swapsdkmethods)<[`TxResponse`](../modules/internal_.md#txresponse)\>\> = `{}`

#### Defined in

[src/legacy/index.ts:62](https://github.com/paraswap/paraswap-sdk/blob/feat/token-transfer-fees-types/src/legacy/index.ts#L62)

___

### web3Provider

• `Optional` **web3Provider**: [`default`](internal_.default.md)

#### Defined in

[src/legacy/index.ts:67](https://github.com/paraswap/paraswap-sdk/blob/feat/token-transfer-fees-types/src/legacy/index.ts#L67)

## Methods

### approveToken

▸ **approveToken**(`amount`, `userAddress`, `tokenAddress`, `_provider?`, `sendOptions?`): `Promise`<`string` \| [`APIError`](../modules/internal_.md#apierror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `userAddress` | `string` |
| `tokenAddress` | `string` |
| `_provider?` | `any` |
| `sendOptions?` | [`Omit`](../modules/internal_.md#omit)<[`SendOptions`](../interfaces/internal_.SendOptions.md), ``"from"``\> |

#### Returns

`Promise`<`string` \| [`APIError`](../modules/internal_.md#apierror)\>

___

### approveTokenBulk

▸ **approveTokenBulk**(`amount`, `userAddress`, `tokenAddresses`, `_provider?`): `Promise`<[`APIError`](../modules/internal_.md#apierror) \| `string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `userAddress` | `string` |
| `tokenAddresses` | `string`[] |
| `_provider?` | `any` |

#### Returns

`Promise`<[`APIError`](../modules/internal_.md#apierror) \| `string`[]\>

___

### buildTx

▸ **buildTx**(`srcToken`, `destToken`, `srcAmount`, `destAmount`, `priceRoute`, `userAddress`, `partner?`, `partnerAddress?`, `partnerFeeBps?`, `receiver?`, `options?`, `srcDecimals?`, `destDecimals?`, `permit?`, `deadline?`): `Promise`<[`TransactionParams`](../interfaces/TransactionParams.md) \| [`APIError`](../modules/internal_.md#apierror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcToken` | `string` |
| `destToken` | `string` |
| `srcAmount` | `string` |
| `destAmount` | `string` |
| `priceRoute` | [`OptimalRate`](../modules.md#optimalrate) |
| `userAddress` | `string` |
| `partner?` | `string` |
| `partnerAddress?` | `string` |
| `partnerFeeBps?` | `number` |
| `receiver?` | `string` |
| `options` | [`BuildOptions`](../modules.md#buildoptions) |
| `srcDecimals?` | `number` |
| `destDecimals?` | `number` |
| `permit?` | `string` |
| `deadline?` | `string` |

#### Returns

`Promise`<[`TransactionParams`](../interfaces/TransactionParams.md) \| [`APIError`](../modules/internal_.md#apierror)\>

___

### getAdapters

▸ **getAdapters**(): `Promise`<[`APIError`](../modules/internal_.md#apierror) \| [`AdaptersAsObject`](../modules/internal_.md#adaptersasobject)\>

#### Returns

`Promise`<[`APIError`](../modules/internal_.md#apierror) \| [`AdaptersAsObject`](../modules/internal_.md#adaptersasobject)\>

___

### getAllowance

▸ **getAllowance**(`userAddress`, `tokenAddress`): `Promise`<[`Allowance`](../interfaces/Allowance.md) \| [`APIError`](../modules/internal_.md#apierror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `tokenAddress` | `string` |

#### Returns

`Promise`<[`Allowance`](../interfaces/Allowance.md) \| [`APIError`](../modules/internal_.md#apierror)\>

___

### getAllowances

▸ **getAllowances**(`userAddress`, `tokenAddresses`): `Promise`<[`APIError`](../modules/internal_.md#apierror) \| [`Allowance`](../interfaces/Allowance.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `tokenAddresses` | `string`[] |

#### Returns

`Promise`<[`APIError`](../modules/internal_.md#apierror) \| [`Allowance`](../interfaces/Allowance.md)[]\>

___

### getBalance

▸ **getBalance**(`userAddress`, `token`): `Promise`<[`Token`](../modules.md#token) \| [`APIError`](../modules/internal_.md#apierror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `token` | `string` |

#### Returns

`Promise`<[`Token`](../modules.md#token) \| [`APIError`](../modules/internal_.md#apierror)\>

___

### getBalances

▸ **getBalances**(`userAddress`): `Promise`<[`APIError`](../modules/internal_.md#apierror) \| [`Token`](../modules.md#token)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |

#### Returns

`Promise`<[`APIError`](../modules/internal_.md#apierror) \| [`Token`](../modules.md#token)[]\>

___

### getMarketNames

▸ **getMarketNames**(): `Promise`<[`APIError`](../modules/internal_.md#apierror) \| `string`[]\>

#### Returns

`Promise`<[`APIError`](../modules/internal_.md#apierror) \| `string`[]\>

___

### getRate

▸ **getRate**(`srcToken`, `destToken`, `amount`, `userAddress?`, `side?`, `options?`, `srcDecimals?`, `destDecimals?`): `Promise`<[`OptimalRate`](../modules.md#optimalrate) \| [`APIError`](../modules/internal_.md#apierror)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `srcToken` | `string` | `undefined` |
| `destToken` | `string` | `undefined` |
| `amount` | `string` | `undefined` |
| `userAddress?` | `string` | `undefined` |
| `side` | [`SwapSide`](../enums/SwapSide.md) | `SwapSide.SELL` |
| `options` | [`RateOptions`](../modules/internal_.md#rateoptions) | `{}` |
| `srcDecimals?` | `number` | `undefined` |
| `destDecimals?` | `number` | `undefined` |

#### Returns

`Promise`<[`OptimalRate`](../modules.md#optimalrate) \| [`APIError`](../modules/internal_.md#apierror)\>

___

### getRateByRoute

▸ **getRateByRoute**(`route`, `amount`, `userAddress?`, `side?`, `options?`, `srcDecimals?`, `destDecimals?`): `Promise`<[`OptimalRate`](../modules.md#optimalrate) \| [`APIError`](../modules/internal_.md#apierror)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `route` | `string`[] | `undefined` |
| `amount` | `string` | `undefined` |
| `userAddress?` | `string` | `undefined` |
| `side` | [`SwapSide`](../enums/SwapSide.md) | `SwapSide.SELL` |
| `options?` | [`RateOptions`](../modules/internal_.md#rateoptions) | `undefined` |
| `srcDecimals?` | `number` | `undefined` |
| `destDecimals?` | `number` | `undefined` |

#### Returns

`Promise`<[`OptimalRate`](../modules.md#optimalrate) \| [`APIError`](../modules/internal_.md#apierror)\>

___

### getTokenTransferProxy

▸ **getTokenTransferProxy**(`_provider?`): `Promise`<`string` \| [`APIError`](../modules/internal_.md#apierror)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_provider?` | `any` |

#### Returns

`Promise`<`string` \| [`APIError`](../modules/internal_.md#apierror)\>

___

### getTokens

▸ **getTokens**(): `Promise`<[`APIError`](../modules/internal_.md#apierror) \| [`Token`](../modules.md#token)[]\>

#### Returns

`Promise`<[`APIError`](../modules/internal_.md#apierror) \| [`Token`](../modules.md#token)[]\>

___

### setEthersProvider

▸ **setEthersProvider**(`ethersDeps`, `account?`): [`ParaSwap`](ParaSwap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethersDeps` | [`EthersProviderDeps`](../interfaces/EthersProviderDeps.md) |
| `account?` | `string` |

#### Returns

[`ParaSwap`](ParaSwap.md)

___

### setWeb3Provider

▸ **setWeb3Provider**(`web3Provider`, `account?`): [`ParaSwap`](ParaSwap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `web3Provider` | [`default`](internal_.default.md) |
| `account?` | `string` |

#### Returns

[`ParaSwap`](ParaSwap.md)

___

### extractHashFromTxResponse

▸ `Static` `Private` **extractHashFromTxResponse**(`txResponse`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txResponse` | [`TxResponse`](../modules/internal_.md#txresponse) |

#### Returns

`Promise`<`string`\>

___

### handleAPIError

▸ `Static` `Private` **handleAPIError**(`e`): [`APIError`](../modules/internal_.md#apierror)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `unknown` |

#### Returns

[`APIError`](../modules/internal_.md#apierror)
