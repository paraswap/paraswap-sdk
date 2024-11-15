[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetUserOperationByHashReturnType

# Type Alias: GetUserOperationByHashReturnType\<entryPointVersion, uint256\>

> **GetUserOperationByHashReturnType**\<`entryPointVersion`, `uint256`\>: `object`

## Type Parameters

• **entryPointVersion** *extends* [`EntryPointVersion`](EntryPointVersion.md) = [`EntryPointVersion`](EntryPointVersion.md)

• **uint256** = `bigint`

## Type declaration

### blockHash

> **blockHash**: [`Hash`](Hash.md)

### blockNumber

> **blockNumber**: `uint256`

### entryPoint

> **entryPoint**: [`Address`](Address.md)

### transactionHash

> **transactionHash**: [`Hash`](Hash.md)

### userOperation

> **userOperation**: [`UserOperation`](UserOperation.md)\<`entryPointVersion`, `uint256`\>

## Link

https://eips.ethereum.org/EIPS/eip-4337#-eth_getuseroperationbyhash

## Defined in

node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:22
