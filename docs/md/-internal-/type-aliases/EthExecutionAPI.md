[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / EthExecutionAPI

# Type Alias: EthExecutionAPI

> **EthExecutionAPI**: `object`

## Type declaration

### eth\_accounts()

> **eth\_accounts**: () => [`Address`](Address.md)[]

#### Returns

[`Address`](Address.md)[]

### eth\_blockNumber()

> **eth\_blockNumber**: () => [`Uint`](Uint.md)

#### Returns

[`Uint`](Uint.md)

### eth\_call()

> **eth\_call**: (`transaction`, `blockNumber`) => [`HexStringBytes`](HexStringBytes.md)

#### Parameters

• **transaction**: [`TransactionCallAPI`](../interfaces/TransactionCallAPI.md)

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`HexStringBytes`](HexStringBytes.md)

### eth\_clearSubscriptions()

> **eth\_clearSubscriptions**: (`keepSyncing`?) => `void`

#### Parameters

• **keepSyncing?**: `boolean`

#### Returns

`void`

### eth\_coinbase()

> **eth\_coinbase**: () => [`Address`](Address.md)

#### Returns

[`Address`](Address.md)

### eth\_compileLLL()

> **eth\_compileLLL**: (`code`) => [`HexStringBytes`](HexStringBytes.md)

#### Parameters

• **code**: `string`

#### Returns

[`HexStringBytes`](HexStringBytes.md)

### eth\_compileSerpent()

> **eth\_compileSerpent**: (`code`) => [`HexStringBytes`](HexStringBytes.md)

#### Parameters

• **code**: `string`

#### Returns

[`HexStringBytes`](HexStringBytes.md)

### eth\_compileSolidity()

> **eth\_compileSolidity**: (`code`) => [`CompileResultAPI`](../interfaces/CompileResultAPI.md)

#### Parameters

• **code**: `string`

#### Returns

[`CompileResultAPI`](../interfaces/CompileResultAPI.md)

### eth\_estimateGas()

> **eth\_estimateGas**: (`transaction`, `blockNumber`) => [`Uint`](Uint.md)

#### Parameters

• **transaction**: [`Partial`](Partial.md)\<[`TransactionWithSenderAPI`](TransactionWithSenderAPI.md)\>

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

### eth\_feeHistory()

> **eth\_feeHistory**: (`blockCount`, `newestBlock`, `rewardPercentiles`) => [`FeeHistoryResultAPI`](FeeHistoryResultAPI.md)

#### Parameters

• **blockCount**: [`Uint`](Uint.md)

• **newestBlock**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

• **rewardPercentiles**: `number`[]

#### Returns

[`FeeHistoryResultAPI`](FeeHistoryResultAPI.md)

### eth\_gasPrice()

> **eth\_gasPrice**: () => [`Uint`](Uint.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getBalance()

> **eth\_getBalance**: (`address`, `blockNumber`) => [`Uint`](Uint.md)

#### Parameters

• **address**: [`Address`](Address.md)

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getBlockByHash()

> **eth\_getBlockByHash**: (`blockHash`, `hydrated`) => [`BlockAPI`](BlockAPI.md)

#### Parameters

• **blockHash**: [`HexString32Bytes`](HexString32Bytes.md)

• **hydrated**: `boolean`

#### Returns

[`BlockAPI`](BlockAPI.md)

### eth\_getBlockByNumber()

> **eth\_getBlockByNumber**: (`blockNumber`, `hydrated`) => [`BlockAPI`](BlockAPI.md)

#### Parameters

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

• **hydrated**: `boolean`

#### Returns

[`BlockAPI`](BlockAPI.md)

### eth\_getBlockTransactionCountByHash()

> **eth\_getBlockTransactionCountByHash**: (`blockHash`) => [`Uint`](Uint.md)

#### Parameters

• **blockHash**: [`HexString32Bytes`](HexString32Bytes.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getBlockTransactionCountByNumber()

> **eth\_getBlockTransactionCountByNumber**: (`blockNumber`) => [`Uint`](Uint.md)

#### Parameters

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getCode()

> **eth\_getCode**: (`address`, `blockNumber`) => [`HexStringBytes`](HexStringBytes.md)

#### Parameters

• **address**: [`Address`](Address.md)

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`HexStringBytes`](HexStringBytes.md)

### eth\_getCompilers()

> **eth\_getCompilers**: () => `string`[]

#### Returns

`string`[]

### eth\_getFilterChanges()

> **eth\_getFilterChanges**: (`filterIdentifier`) => [`FilterResultsAPI`](FilterResultsAPI.md)

#### Parameters

• **filterIdentifier**: [`Uint`](Uint.md)

#### Returns

[`FilterResultsAPI`](FilterResultsAPI.md)

### eth\_getFilterLogs()

> **eth\_getFilterLogs**: (`filterIdentifier`) => [`FilterResultsAPI`](FilterResultsAPI.md)

#### Parameters

• **filterIdentifier**: [`Uint`](Uint.md)

#### Returns

[`FilterResultsAPI`](FilterResultsAPI.md)

### eth\_getLogs()

> **eth\_getLogs**: (`filter`) => [`FilterResultsAPI`](FilterResultsAPI.md)

#### Parameters

• **filter**: [`Filter`](../interfaces/Filter.md)

#### Returns

[`FilterResultsAPI`](FilterResultsAPI.md)

### eth\_getStorageAt()

> **eth\_getStorageAt**: (`address`, `storageSlot`, `blockNumber`) => [`HexStringBytes`](HexStringBytes.md)

#### Parameters

• **address**: [`Address`](Address.md)

• **storageSlot**: [`Uint256`](Uint256.md)

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`HexStringBytes`](HexStringBytes.md)

### eth\_getTransactionByBlockHashAndIndex()

> **eth\_getTransactionByBlockHashAndIndex**: (`blockHash`, `transactionIndex`) => [`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

#### Parameters

• **blockHash**: [`HexString32Bytes`](HexString32Bytes.md)

• **transactionIndex**: [`Uint`](Uint.md)

#### Returns

[`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

### eth\_getTransactionByBlockNumberAndIndex()

> **eth\_getTransactionByBlockNumberAndIndex**: (`blockNumber`, `transactionIndex`) => [`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

#### Parameters

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

• **transactionIndex**: [`Uint`](Uint.md)

#### Returns

[`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

### eth\_getTransactionByHash()

> **eth\_getTransactionByHash**: (`transactionHash`) => [`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

#### Parameters

• **transactionHash**: [`HexString32Bytes`](HexString32Bytes.md)

#### Returns

[`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

### eth\_getTransactionCount()

> **eth\_getTransactionCount**: (`address`, `blockNumber`) => [`Uint`](Uint.md)

#### Parameters

• **address**: [`Address`](Address.md)

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getTransactionReceipt()

> **eth\_getTransactionReceipt**: (`transactionHash`) => [`TransactionReceiptAPI`](TransactionReceiptAPI.md) \| `undefined`

#### Parameters

• **transactionHash**: [`HexString32Bytes`](HexString32Bytes.md)

#### Returns

[`TransactionReceiptAPI`](TransactionReceiptAPI.md) \| `undefined`

### eth\_getUncleByBlockHashAndIndex()

> **eth\_getUncleByBlockHashAndIndex**: (`blockHash`, `uncleIndex`) => [`BlockAPI`](BlockAPI.md)

#### Parameters

• **blockHash**: [`HexString32Bytes`](HexString32Bytes.md)

• **uncleIndex**: [`Uint`](Uint.md)

#### Returns

[`BlockAPI`](BlockAPI.md)

### eth\_getUncleByBlockNumberAndIndex()

> **eth\_getUncleByBlockNumberAndIndex**: (`blockNumber`, `uncleIndex`) => [`BlockAPI`](BlockAPI.md)

#### Parameters

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

• **uncleIndex**: [`Uint`](Uint.md)

#### Returns

[`BlockAPI`](BlockAPI.md)

### eth\_getUncleCountByBlockHash()

> **eth\_getUncleCountByBlockHash**: (`blockHash`) => [`Uint`](Uint.md)

#### Parameters

• **blockHash**: [`HexString32Bytes`](HexString32Bytes.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getUncleCountByBlockNumber()

> **eth\_getUncleCountByBlockNumber**: (`blockNumber`) => [`Uint`](Uint.md)

#### Parameters

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getWork()

> **eth\_getWork**: () => [[`HexString32Bytes`](HexString32Bytes.md), [`HexString32Bytes`](HexString32Bytes.md), [`HexString32Bytes`](HexString32Bytes.md)]

#### Returns

[[`HexString32Bytes`](HexString32Bytes.md), [`HexString32Bytes`](HexString32Bytes.md), [`HexString32Bytes`](HexString32Bytes.md)]

### eth\_hashrate()

> **eth\_hashrate**: () => [`Uint`](Uint.md)

#### Returns

[`Uint`](Uint.md)

### eth\_maxPriorityFeePerGas()

> **eth\_maxPriorityFeePerGas**: () => [`Uint`](Uint.md)

#### Returns

[`Uint`](Uint.md)

### eth\_mining()

> **eth\_mining**: () => `boolean`

#### Returns

`boolean`

### eth\_newBlockFilter()

> **eth\_newBlockFilter**: () => [`Uint`](Uint.md)

#### Returns

[`Uint`](Uint.md)

### eth\_newFilter()

> **eth\_newFilter**: (`filter`) => [`Uint`](Uint.md)

#### Parameters

• **filter**: [`Filter`](../interfaces/Filter.md)

#### Returns

[`Uint`](Uint.md)

### eth\_newPendingTransactionFilter()

> **eth\_newPendingTransactionFilter**: () => [`Uint`](Uint.md)

#### Returns

[`Uint`](Uint.md)

### eth\_protocolVersion()

> **eth\_protocolVersion**: () => `string`

#### Returns

`string`

### eth\_sendRawTransaction()

> **eth\_sendRawTransaction**: (`transaction`) => [`HexString32Bytes`](HexString32Bytes.md)

#### Parameters

• **transaction**: [`HexStringBytes`](HexStringBytes.md)

#### Returns

[`HexString32Bytes`](HexString32Bytes.md)

### eth\_sendTransaction()

> **eth\_sendTransaction**: (`transaction`) => [`HexString32Bytes`](HexString32Bytes.md)

#### Parameters

• **transaction**: [`TransactionWithSenderAPI`](TransactionWithSenderAPI.md) \| [`Partial`](Partial.md)\<[`TransactionWithSenderAPI`](TransactionWithSenderAPI.md)\>

#### Returns

[`HexString32Bytes`](HexString32Bytes.md)

### eth\_sign()

> **eth\_sign**: (`address`, `message`) => [`HexString256Bytes`](HexString256Bytes.md)

#### Parameters

• **address**: [`Address`](Address.md)

• **message**: [`HexStringBytes`](HexStringBytes.md)

#### Returns

[`HexString256Bytes`](HexString256Bytes.md)

### eth\_signTransaction()

> **eth\_signTransaction**: (`transaction`) => [`HexStringBytes`](HexStringBytes.md) \| [`SignedTransactionInfoAPI`](../interfaces/SignedTransactionInfoAPI.md)

#### Parameters

• **transaction**: [`TransactionWithSenderAPI`](TransactionWithSenderAPI.md) \| [`Partial`](Partial.md)\<[`TransactionWithSenderAPI`](TransactionWithSenderAPI.md)\>

#### Returns

[`HexStringBytes`](HexStringBytes.md) \| [`SignedTransactionInfoAPI`](../interfaces/SignedTransactionInfoAPI.md)

### eth\_submitHashrate()

> **eth\_submitHashrate**: (`hashRate`, `id`) => `boolean`

#### Parameters

• **hashRate**: [`HexString32Bytes`](HexString32Bytes.md)

• **id**: [`HexString32Bytes`](HexString32Bytes.md)

#### Returns

`boolean`

### eth\_submitWork()

> **eth\_submitWork**: (`nonce`, `hash`, `digest`) => `boolean`

#### Parameters

• **nonce**: [`HexString8Bytes`](HexString8Bytes.md)

• **hash**: [`HexString32Bytes`](HexString32Bytes.md)

• **digest**: [`HexString32Bytes`](HexString32Bytes.md)

#### Returns

`boolean`

### eth\_subscribe()

> **eth\_subscribe**: (...`params`) => [`HexString`](HexString.md)

#### Parameters

• ...**params**: [`"newHeads"`] \| [`"newPendingTransactions"`] \| [`"syncing"`] \| [`"logs"`, `object`]

#### Returns

[`HexString`](HexString.md)

### eth\_syncing()

> **eth\_syncing**: () => [`SyncingStatusAPI`](SyncingStatusAPI.md)

#### Returns

[`SyncingStatusAPI`](SyncingStatusAPI.md)

### eth\_uninstallFilter()

> **eth\_uninstallFilter**: (`filterIdentifier`) => `boolean`

#### Parameters

• **filterIdentifier**: [`Uint`](Uint.md)

#### Returns

`boolean`

### eth\_unsubscribe()

> **eth\_unsubscribe**: (`subscriptionId`) => [`HexString`](HexString.md)

#### Parameters

• **subscriptionId**: [`HexString`](HexString.md)

#### Returns

[`HexString`](HexString.md)

## Defined in

node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:103
