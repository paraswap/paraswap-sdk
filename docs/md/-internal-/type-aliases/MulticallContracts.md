[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallContracts

# Type Alias: MulticallContracts\<contracts, options, result\>

> **MulticallContracts**\<`contracts`, `options`, `result`\>: `contracts` *extends* readonly [] ? readonly [] : `contracts` *extends* readonly [infer contract] ? readonly [`...result`, [`MaybePartial`](MaybePartial.md)\<[`Prettify`](Prettify.md)\<[`GetMulticallContractParameters`](GetMulticallContractParameters.md)\<`contract`, `options`\[`"mutability"`\]\> & `options`\[`"properties"`\]\>, `options`\[`"optional"`\]\>] : `contracts` *extends* readonly [infer contract, `...(infer rest)`] ? [`MulticallContracts`](MulticallContracts.md)\<[`...rest`], `options`, [`...result`, [`MaybePartial`](MaybePartial.md)\<[`Prettify`](Prettify.md)\<[`GetMulticallContractParameters`](GetMulticallContractParameters.md)\<`contract`, `options`\[`"mutability"`\]\> & `options`\[`"properties"`\]\>, `options`\[`"optional"`\]\>]\> : readonly `unknown`[] *extends* `contracts` ? `contracts` : `contracts` *extends* readonly infer contract[] ? readonly [`MaybePartial`](MaybePartial.md)\<[`Prettify`](Prettify.md)\<`contract` & ...\[...\]\>, `options`\[`"optional"`\]\>[] : readonly [`MaybePartial`](MaybePartial.md)\<[`Prettify`](Prettify.md)\<[`ContractFunctionParameters`](ContractFunctionParameters.md) & ...\[...\]\>, `options`\[`"optional"`\]\>[]

## Type Parameters

• **contracts** *extends* readonly `unknown`[]

• **options** *extends* `object` = `object`

• **result** *extends* readonly `any`[] = []

## Defined in

node\_modules/viem/\_types/types/multicall.d.ts:4
