[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / UserOperationRequest

# Type Alias: UserOperationRequest\<entryPointVersion, uint256\>

> **UserOperationRequest**\<`entryPointVersion`, `uint256`\>: [`OneOf`](OneOf.md)\<`entryPointVersion` *extends* `"0.7"` ? [`UnionPartialBy`](UnionPartialBy.md)\<[`UserOperation`](UserOperation.md)\<`"0.7"`, `uint256`\>, keyof [`EstimateUserOperationGasReturnType`](EstimateUserOperationGasReturnType.md)\<`"0.7"`\> \| `"callData"` \| `"maxFeePerGas"` \| `"maxPriorityFeePerGas"` \| `"nonce"` \| `"sender"` \| `"signature"`\> : `never` \| `entryPointVersion` *extends* `"0.6"` ? [`UnionPartialBy`](UnionPartialBy.md)\<[`UserOperation`](UserOperation.md)\<`"0.6"`, `uint256`\>, keyof [`EstimateUserOperationGasReturnType`](EstimateUserOperationGasReturnType.md)\<`"0.6"`\> \| `"callData"` \| `"maxFeePerGas"` \| `"maxPriorityFeePerGas"` \| `"nonce"` \| `"sender"` \| `"signature"`\> : `never`\>

## Type Parameters

• **entryPointVersion** *extends* [`EntryPointVersion`](EntryPointVersion.md) = [`EntryPointVersion`](EntryPointVersion.md)

• **uint256** = `bigint`

## Defined in

node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:106
