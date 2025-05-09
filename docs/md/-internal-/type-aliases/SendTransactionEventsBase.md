[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionEventsBase

# Type Alias: SendTransactionEventsBase\<ReturnFormat, TxType\>

> **SendTransactionEventsBase**\<`ReturnFormat`, `TxType`\>: `object`

## Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](DataFormat.md)

• **TxType**

## Type declaration

### confirmation

> **confirmation**: `object`

### confirmation.confirmations

> **confirmations**: [`FormatType`](FormatType.md)\<[`Numbers`](Numbers.md), `ReturnFormat`\>

### confirmation.latestBlockHash

> **latestBlockHash**: [`FormatType`](FormatType.md)\<[`Bytes`](Bytes.md), `ReturnFormat`\>

### confirmation.receipt

> **receipt**: [`FormatType`](FormatType.md)\<[`TransactionReceipt`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), `ReturnFormat`\>

### error

> **error**: [`TransactionRevertedWithoutReasonError`](../classes/TransactionRevertedWithoutReasonError.md)\<[`FormatType`](FormatType.md)\<[`TransactionReceipt`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), `ReturnFormat`\>\> \| [`TransactionRevertInstructionError`](../classes/TransactionRevertInstructionError.md)\<[`FormatType`](FormatType.md)\<[`TransactionReceipt`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), `ReturnFormat`\>\> \| [`TransactionRevertWithCustomError`](../classes/TransactionRevertWithCustomError.md)\<[`FormatType`](FormatType.md)\<[`TransactionReceipt`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), `ReturnFormat`\>\> \| [`TransactionPollingTimeoutError`](../classes/TransactionPollingTimeoutError.md) \| [`InvalidResponseError`](../classes/InvalidResponseError.md) \| [`ContractExecutionError`](../classes/ContractExecutionError.md)

### receipt

> **receipt**: [`FormatType`](FormatType.md)\<[`TransactionReceipt`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), `ReturnFormat`\>

### sending

> **sending**: [`FormatType`](FormatType.md)\<`TxType`, *typeof* [`ETH_DATA_FORMAT`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/ETH_DATA_FORMAT.md)\>

### sent

> **sent**: [`FormatType`](FormatType.md)\<`TxType`, *typeof* [`ETH_DATA_FORMAT`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/ETH_DATA_FORMAT.md)\>

### transactionHash

> **transactionHash**: [`FormatType`](FormatType.md)\<[`Bytes`](Bytes.md), `ReturnFormat`\>

## Defined in

node\_modules/web3-eth/lib/commonjs/types.d.ts:5
