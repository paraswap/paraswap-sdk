[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DeployContractParameters

# Type Alias: DeployContractParameters\<abi, chain, account, chainOverride, allArgs\>

> **DeployContractParameters**\<`abi`, `chain`, `account`, `chainOverride`, `allArgs`\>: [`UnionOmit`](UnionOmit.md)\<[`SendTransactionParameters`](SendTransactionParameters.md)\<`chain`, `account`, `chainOverride`\>, `"accessList"` \| `"chain"` \| `"to"` \| `"data"`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`UnionEvaluate`](UnionEvaluate.md)\<readonly [] *extends* `allArgs` ? `object` : `object`\> & `object`

## Type declaration

### abi

> **abi**: `abi`

### bytecode

> **bytecode**: [`Hex`](Hex.md)

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **allArgs** = [`ContractConstructorArgs`](ContractConstructorArgs.md)\<`abi`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/deployContract.d.ts:12
