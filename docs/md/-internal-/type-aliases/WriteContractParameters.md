[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / WriteContractParameters

# Type Alias: WriteContractParameters\<abi, functionName, args, chain, account, chainOverride, allFunctionNames, derivedChain\>

> **WriteContractParameters**\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`, `allFunctionNames`, `derivedChain`\>: [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`, `false`, `allFunctionNames`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`Prettify`](Prettify.md)\<[`GetAccountParameter`](GetAccountParameter.md)\<`account`, [`Account`](Account.md) \| [`Address`](Address.md), `true`, `true`\> & [`GetMutabilityAwareValue`](GetMutabilityAwareValue.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, [`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`derivedChain`\>\[`"value"`\], `args`\> & `object`\> & [`UnionEvaluate`](UnionEvaluate.md)\<[`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`derivedChain`\>, `"data"` \| `"from"` \| `"to"` \| `"value"`\>\>

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **allFunctionNames** = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

• **derivedChain** *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/writeContract.d.ts:18
