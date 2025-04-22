[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SwapQueryParams

# Type Alias: SwapQueryParams

> **SwapQueryParams**: `object`

Types for transaction parameters.

## Type declaration

### amount

> **amount**: `string`

#### Description

srcToken amount (in case of SELL) or destToken amount (in case of BUY). The amount should be in **WEI/Raw units** (eg. 1WBTC -> 100000000).

### destDecimals?

> `optional` **destDecimals**: `number`

#### Description

Destination Token Decimals. (Can be omitted if Token Symbol is used in `destToken`).

### destToken

> **destToken**: `string`

#### Description

Destination Token Address. Instead, **Token Symbol** could be used for tokens listed in the `/tokens` endpoint.

### destTokenDexTransferFee?

> `optional` **destTokenDexTransferFee**: `string`

#### Description

If the destination token is a tax token, you should specify the tax amount in BPS. Some tokens only charge tax when swapped in/out DEXs, not on ordinary transfers.

### destTokenTransferFee?

> `optional` **destTokenTransferFee**: `string`

#### Description

If the destination token is a tax token, you should specify the tax amount in BPS. For example: for a token with a 5% tax, you should set it to 500 as `[(500/10000)*100=5%]`. Note: not all DEXs and contract methods support trading tax tokens, so we will filter those that don't.

### excludeContractMethods?

> `optional` **excludeContractMethods**: `string`

#### Description

Comma Separated List of Contract Methods to exclude without spaces. (from the list of contract methods mentioned above).

### excludeDEXS?

> `optional` **excludeDEXS**: `string`

#### Description

Comma Separated List of DEXs to exclude. (from the list of DEXs mentioned above).

### ignoreBadUsdPrice?

> `optional` **ignoreBadUsdPrice**: `boolean`

#### Description

If tokens USD prices are not available, `Bad USD Price` error will be thrown. Use this param to skip this check. Default: `false`.

### includeContractMethods?

> `optional` **includeContractMethods**: `string`

#### Description

Comma Separated List of Contract Methods to include without spaces. **Available values:** swapOnUniswap, buyOnUniswap, swapOnUniswapFork, buyOnUniswapFork, swapOnUniswapV2Fork, buyOnUniswapV2Fork, simpleBuy, simpleSwap, multiSwap, megaSwap, protectedMultiSwap, protectedMegaSwap, protectedSimpleSwap, protectedSimpleBuy, swapOnZeroXv2, swapOnZeroXv4, buy. eg: `simpleSwap,multiSwap`.

### includeDEXS?

> `optional` **includeDEXS**: `string`

#### Description

Comma Separated List of DEXs to include. **Supported DEXs:** Uniswap, Kyber, Bancor, AugustusRFQ, Oasis, Compound, Fulcrum, 0x, MakerDAO, Chai, Aave, Aave2, MultiPath, MegaPath, Curve, Curve3, Saddle, IronV2, BDai, idle, Weth, Beth, UniswapV2, Balancer, 0xRFQt, SushiSwap, LINKSWAP, Synthetix, DefiSwap, Swerve, CoFiX, Shell, DODOV1, DODOV2, OnChainPricing, PancakeSwap, PancakeSwapV2, ApeSwap, Wbnb, acryptos, streetswap, bakeryswap, julswap, vswap, vpegswap, beltfi, ellipsis, QuickSwap, COMETH, Wmatic, Nerve, Dfyn, UniswapV3, Smoothy, PantherSwap, OMM1, OneInchLP, CurveV2, mStable, WaultFinance, MDEX, ShibaSwap, CoinSwap, SakeSwap, JetSwap, Biswap, BProtocol eg: `UniswapV3,0x`.

### isCapSurplus?

> `optional` **isCapSurplus**: `boolean`

#### Description

Allows for capping the surplus at 1% maximum. Default: `true`.

### isDirectFeeTransfer?

> `optional` **isDirectFeeTransfer**: `boolean`

#### Description

Specify if fees should be sent directly to the partner instead of registering them on FeeClaimer. Default: `false`.

### isSurplusToUser?

> `optional` **isSurplusToUser**: `boolean`

#### Description

Specify if user should receive surplus instead of partner. Default: `false`.

### maxImpact?

> `optional` **maxImpact**: `number`

#### Description

In %. It's a way to bypass the API price impact check (default = 15%).

### network?

> `optional` **network**: `number`

#### Description

Network ID. (Mainnet - 1, Optimism - 10, BSC - 56, Polygon - 137, Fantom - 250, zkEVM - 1101, Base - 8453, Arbitrum - 42161, Avalanche - 43114). Default: `1`.

### partner?

> `optional` **partner**: `string`

#### Description

Partner string.

### partnerAddress?

> `optional` **partnerAddress**: `string`

#### Description

Address that will be entitled to claim fees or surplus. Fees have to be claimed from the Fee Claimer contract unless `_isSurplusToUser_` or `_isDirectFeeTransfer_` are used.

### partnerFeeBps?

> `optional` **partnerFeeBps**: `string`

#### Description

If provided it is used together with `partnerAddress`. Should be in basis points percentage. Look at `slippage` parameter description for understanding better. Eg: `200` (for 2% fee percent). Fees have to be claimed from the Fee Claimer contract unless `_isSurplusToUser_` or `_isDirectFeeTransfer_` are used.

### receiver?

> `optional` **receiver**: `string`

#### Description

Receiver's Wallet address. (Can be omitted if swapping tokens from and to same account).

### route?

> `optional` **route**: `string`

#### Description

Dash (-) separated list of tokens (addresses or symbols from `/tokens`) to comprise the price route. _Max 4 tokens._ _**\*Note:**_ _If_ `_route_` _is specified, the response will only comprise of the route specified which might not be the optimal route._

### side

> **side**: `"SELL"` \| `"BUY"`

#### Description

**SELL** or **BUY**. Default: `SELL`.

### slippage

> **slippage**: `number`

#### Description

Allowed slippage percentage represented in basis points. _Eg:_ for **2.5%** slippage, set the value to **2.5 \* 100 = 250**; for 10% = 1000.

### srcDecimals?

> `optional` **srcDecimals**: `number`

#### Description

Source Token Decimals. (Can be omitted if Token Symbol is used in `srcToken`).

### srcToken

> **srcToken**: `string`

#### Description

Source Token Address. Instead, **Token Symbol** could be used for tokens listed in the `/tokens` endpoint.

### srcTokenDexTransferFee?

> `optional` **srcTokenDexTransferFee**: `string`

#### Description

If the source token is a tax token, you should specify the tax amount in BPS. Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.

### srcTokenTransferFee?

> `optional` **srcTokenTransferFee**: `string`

#### Description

If the source token is a tax token, you should specify the tax amount in BPS. For example: for a token with a 5% tax, you should set it to 500 as `[(500/10000)*100=5%]`. Note: not all DEXs and contract methods support trading tax tokens, so we will filter those that don't.

### takeSurplus?

> `optional` **takeSurplus**: `boolean`

#### Description

Allows to collect surplus. Works with `partnerAddress`. Default: `false`.

### userAddress

> **userAddress**: `string`

#### Description

User's Wallet Address.

### version?

> `optional` **version**: `number` \| `string`

#### Description

To specify the protocol version. **Values:** 5 or 6.2 **Default**: 5.

## Defined in

[src/methods/swap/swapTx.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L17)
