[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / RateOptions

# Type Alias: RateOptions

> **RateOptions**: `object`

## Type declaration

### destTokenDexTransferFee?

> `optional` **destTokenDexTransferFee**: `string`

#### Description

Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.

### destTokenTransferFee?

> `optional` **destTokenTransferFee**: `string`

#### Description

If the destination token is a tax token, you should specify the tax amount in BPS.

### excludeContractMethods?

> `optional` **excludeContractMethods**: [`ContractMethodByName`](../../type-aliases/ContractMethodByName.md)[]

### excludeContractMethodsWithoutFeeModel?

> `optional` **excludeContractMethodsWithoutFeeModel**: `boolean`

#### Description

Specify that methods without fee support should be excluded from the price route. Default: false

### excludeDEXS?

> `optional` **excludeDEXS**: `string`[]

### excludePools?

> `optional` **excludePools**: `string`[]

### excludePricingMethods?

> `optional` **excludePricingMethods**: [`PricingMethodByName`](PricingMethodByName.md)[]

### excludeRFQ?

> `optional` **excludeRFQ**: `boolean`

#### Description

Exclude all RFQs from pricing, e.g.: AugustusRFQ, Hashflow. Default: false

### ignoreBadUsdPrice?

> `optional` **ignoreBadUsdPrice**: `boolean`

#### Description

proceed with priceRoute building even when tokens don't have USD price. Default: false

### includeContractMethods?

> `optional` **includeContractMethods**: [`ContractMethodByName`](../../type-aliases/ContractMethodByName.md)[]

### includeDEXS?

> `optional` **includeDEXS**: `string`[]

### maxImpact?

> `optional` **maxImpact**: `number`

#### Description

In %. It's a way to bypass the API price impact check (default = 15%)

### maxUSDImpact?

> `optional` **maxUSDImpact**: `number`

### otherExchangePrices?

> `optional` **otherExchangePrices**: `boolean`

### partner?

> `optional` **partner**: `string`

### srcTokenDexTransferFee?

> `optional` **srcTokenDexTransferFee**: `string`

#### Description

Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.

### srcTokenTransferFee?

> `optional` **srcTokenTransferFee**: `string`

#### Description

If the source token is a tax token, you should specify the tax amount in BPS.

## Defined in

[src/methods/swap/rates.ts:155](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L155)
