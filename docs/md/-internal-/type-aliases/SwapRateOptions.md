[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SwapRateOptions

# Type Alias: SwapRateOptions

> **SwapRateOptions**: [`Omit`](Omit.md)\<[`SwapQueryParams`](SwapQueryParams.md), [`SwapTxInputFields`](SwapTxInputFields.md) \| [`SwapTxInputListFields`](SwapTxInputListFields.md) \| `"network"` \| `"version"`\> & `object`

## Type declaration

### excludeContractMethods?

> `optional` **excludeContractMethods**: [`ContractMethod`](../../type-aliases/ContractMethod.md)[]

#### Description

List of Contract Methods to exclude without spaces. (from the list of contract methods mentioned above).

### excludeDEXS?

> `optional` **excludeDEXS**: `string`[]

#### Description

List of DEXs to exclude. (from the list of DEXs mentioned above).

### includeContractMethods?

> `optional` **includeContractMethods**: [`ContractMethod`](../../type-aliases/ContractMethod.md)[]

#### Description

List of Contract Methods to include without spaces. **Available values:** swapOnUniswap, buyOnUniswap, swapOnUniswapFork, buyOnUniswapFork, swapOnUniswapV2Fork, buyOnUniswapV2Fork, simpleBuy, simpleSwap, multiSwap, megaSwap, protectedMultiSwap, protectedMegaSwap, protectedSimpleSwap, protectedSimpleBuy, swapOnZeroXv2, swapOnZeroXv4, buy. eg: `simpleSwap,multiSwap`.

### includeDEXS?

> `optional` **includeDEXS**: `string`[]

#### Description

List of DEXs to include. **Supported DEXs:** Uniswap, Kyber, Bancor, AugustusRFQ, Oasis, Compound, Fulcrum, 0x, MakerDAO, Chai, Aave, Aave2, MultiPath, MegaPath, Curve, Curve3, Saddle, IronV2, BDai, idle, Weth, Beth, UniswapV2, Balancer, 0xRFQt, SushiSwap, LINKSWAP, Synthetix, DefiSwap, Swerve, CoFiX, Shell, DODOV1, DODOV2, OnChainPricing, PancakeSwap, PancakeSwapV2, ApeSwap, Wbnb, acryptos, streetswap, bakeryswap, julswap, vswap, vpegswap, beltfi, ellipsis, QuickSwap, COMETH, Wmatic, Nerve, Dfyn, UniswapV3, Smoothy, PantherSwap, OMM1, OneInchLP, CurveV2, mStable, WaultFinance, MDEX, ShibaSwap, CoinSwap, SakeSwap, JetSwap, Biswap, BProtocol eg: `UniswapV3,0x`.

## Defined in

[src/methods/swap/swapTx.ts:172](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L172)
