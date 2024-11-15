[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / UserOperationReceipt

# Type Alias: UserOperationReceipt\<_entryPointVersion, uint256, int32, status\>

> **UserOperationReceipt**\<`_entryPointVersion`, `uint256`, `int32`, `status`\>: `object`

## Type Parameters

• **_entryPointVersion** *extends* [`EntryPointVersion`](EntryPointVersion.md) = [`EntryPointVersion`](EntryPointVersion.md)

• **uint256** = `bigint`

• **int32** = `number`

• **status** = `"success"` \| `"reverted"`

## Type declaration

### actualGasCost

> **actualGasCost**: `uint256`

Actual gas cost.

### actualGasUsed

> **actualGasUsed**: `uint256`

Actual gas used.

### entryPoint

> **entryPoint**: [`Address`](Address.md)

Entrypoint address.

### logs

> **logs**: [`Log`](Log.md)\<`uint256`, `int32`, `false`\>[]

Logs emitted during execution.

### nonce

> **nonce**: `uint256`

Anti-replay parameter.

### paymaster?

> `optional` **paymaster**: [`Address`](Address.md)

Paymaster for the user operation.

### reason?

> `optional` **reason**: `string`

Revert reason, if unsuccessful.

### receipt

> **receipt**: [`TransactionReceipt`](TransactionReceipt.md)\<`uint256`, `int32`, `status`\>

Transaction receipt of the user operation execution.

### sender

> **sender**: [`Address`](Address.md)

### success

> **success**: `boolean`

If the user operation execution was successful.

### userOpHash

> **userOpHash**: [`Hash`](Hash.md)

Hash of the user operation.

## Link

https://eips.ethereum.org/EIPS/eip-4337#-eth_getuseroperationreceipt

## Defined in

node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:108
