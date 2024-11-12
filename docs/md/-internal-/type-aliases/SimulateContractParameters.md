[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateContractParameters

# Type Alias: SimulateContractParameters\<abi, functionName, args, chain, chainOverride, accountOverride, derivedChain\>

> **SimulateContractParameters**\<`abi`, `functionName`, `args`, `chain`, `chainOverride`, `accountOverride`, `derivedChain`\>: `object` & [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`\> & [`UnionOmit`](UnionOmit.md)\<[`CallParameters`](CallParameters.md)\<`derivedChain`\>, `"account"` \| `"batch"` \| `"code"` \| `"to"` \| `"data"` \| `"factory"` \| `"factoryData"` \| `"value"`\> & [`GetMutabilityAwareValue`](GetMutabilityAwareValue.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, [`CallParameters`](CallParameters.md)\<`derivedChain`\> *extends* [`CallParameters`](CallParameters.md) ? [`CallParameters`](CallParameters.md)\<`derivedChain`\>\[`"value"`\] : [`CallParameters`](CallParameters.md)\[`"value"`\], `args`\>

## Type declaration

### account?

> `optional` **account**: `accountOverride`

### chain?

> `optional` **chain**: `chainOverride`

### dataSuffix?

> `optional` **dataSuffix**: [`Hex`](Hex.md)

Data to append to the end of the calldata. Useful for adding a ["domain" tag](https://opensea.notion.site/opensea/Seaport-Order-Attributions-ec2d69bf455041a5baa490941aad307f).

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **accountOverride** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = `undefined`

• **derivedChain** *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/public/simulateContract.d.ts:26
