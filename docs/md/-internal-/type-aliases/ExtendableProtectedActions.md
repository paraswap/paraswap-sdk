[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtendableProtectedActions

# Type Alias: ExtendableProtectedActions\<transport, chain, account\>

> **ExtendableProtectedActions**\<`transport`, `chain`, `account`\>: [`Pick`](Pick.md)\<[`PublicActions`](PublicActions.md)\<`transport`, `chain`, `account`\>, `"call"` \| `"createContractEventFilter"` \| `"createEventFilter"` \| `"estimateContractGas"` \| `"estimateGas"` \| `"getBlock"` \| `"getBlockNumber"` \| `"getChainId"` \| `"getContractEvents"` \| `"getEnsText"` \| `"getFilterChanges"` \| `"getGasPrice"` \| `"getLogs"` \| `"getTransaction"` \| `"getTransactionCount"` \| `"getTransactionReceipt"` \| `"prepareTransactionRequest"` \| `"readContract"` \| `"sendRawTransaction"` \| `"simulateContract"` \| `"uninstallFilter"` \| `"watchBlockNumber"` \| `"watchContractEvent"`\> & [`Pick`](Pick.md)\<[`WalletActions`](WalletActions.md)\<`chain`, `account`\>, `"sendTransaction"` \| `"writeContract"`\>

## Type Parameters

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/clients/createClient.d.ts:57
