[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Eth

# Class: Eth

[<internal>](../modules/internal_.md).Eth

## Table of contents

### Constructors

- [constructor](internal_.Eth.md#constructor)

### Properties

- [BatchRequest](internal_.Eth.md#batchrequest)
- [Contract](internal_.Eth.md#contract)
- [Iban](internal_.Eth.md#iban)
- [abi](internal_.Eth.md#abi)
- [accounts](internal_.Eth.md#accounts)
- [currentProvider](internal_.Eth.md#currentprovider)
- [defaultAccount](internal_.Eth.md#defaultaccount)
- [defaultBlock](internal_.Eth.md#defaultblock)
- [defaultChain](internal_.Eth.md#defaultchain)
- [defaultCommon](internal_.Eth.md#defaultcommon)
- [defaultHardfork](internal_.Eth.md#defaulthardfork)
- [ens](internal_.Eth.md#ens)
- [givenProvider](internal_.Eth.md#givenprovider)
- [handleRevert](internal_.Eth.md#handlerevert)
- [net](internal_.Eth.md#net)
- [personal](internal_.Eth.md#personal)
- [transactionBlockTimeout](internal_.Eth.md#transactionblocktimeout)
- [transactionConfirmationBlocks](internal_.Eth.md#transactionconfirmationblocks)
- [transactionPollingTimeout](internal_.Eth.md#transactionpollingtimeout)
- [givenProvider](internal_.Eth.md#givenprovider-1)
- [providers](internal_.Eth.md#providers)

### Methods

- [call](internal_.Eth.md#call)
- [clearSubscriptions](internal_.Eth.md#clearsubscriptions)
- [estimateGas](internal_.Eth.md#estimategas)
- [extend](internal_.Eth.md#extend)
- [getAccounts](internal_.Eth.md#getaccounts)
- [getBalance](internal_.Eth.md#getbalance)
- [getBlock](internal_.Eth.md#getblock)
- [getBlockNumber](internal_.Eth.md#getblocknumber)
- [getBlockTransactionCount](internal_.Eth.md#getblocktransactioncount)
- [getBlockUncleCount](internal_.Eth.md#getblockunclecount)
- [getChainId](internal_.Eth.md#getchainid)
- [getCode](internal_.Eth.md#getcode)
- [getCoinbase](internal_.Eth.md#getcoinbase)
- [getFeeHistory](internal_.Eth.md#getfeehistory)
- [getGasPrice](internal_.Eth.md#getgasprice)
- [getHashrate](internal_.Eth.md#gethashrate)
- [getNodeInfo](internal_.Eth.md#getnodeinfo)
- [getPastLogs](internal_.Eth.md#getpastlogs)
- [getPendingTransactions](internal_.Eth.md#getpendingtransactions)
- [getProof](internal_.Eth.md#getproof)
- [getProtocolVersion](internal_.Eth.md#getprotocolversion)
- [getStorageAt](internal_.Eth.md#getstorageat)
- [getTransaction](internal_.Eth.md#gettransaction)
- [getTransactionCount](internal_.Eth.md#gettransactioncount)
- [getTransactionFromBlock](internal_.Eth.md#gettransactionfromblock)
- [getTransactionReceipt](internal_.Eth.md#gettransactionreceipt)
- [getUncle](internal_.Eth.md#getuncle)
- [getWork](internal_.Eth.md#getwork)
- [isMining](internal_.Eth.md#ismining)
- [isSyncing](internal_.Eth.md#issyncing)
- [requestAccounts](internal_.Eth.md#requestaccounts)
- [sendSignedTransaction](internal_.Eth.md#sendsignedtransaction)
- [sendTransaction](internal_.Eth.md#sendtransaction)
- [setProvider](internal_.Eth.md#setprovider)
- [sign](internal_.Eth.md#sign)
- [signTransaction](internal_.Eth.md#signtransaction)
- [submitWork](internal_.Eth.md#submitwork)
- [subscribe](internal_.Eth.md#subscribe)

## Constructors

### constructor

• **new Eth**()

• **new Eth**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

• **new Eth**(`provider`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |
| `net` | [`Socket`](internal_.Socket.md) |

## Properties

### BatchRequest

• **BatchRequest**: () => [`BatchRequest`](internal_.BatchRequest.md)

#### Type declaration

• **new Eth**()

#### Defined in

node_modules/web3-eth/types/index.d.ts:95

___

### Contract

• **Contract**: (`jsonInterface`: [`AbiItem`](../interfaces/internal_.AbiItem.md) \| [`AbiItem`](../interfaces/internal_.AbiItem.md)[], `address?`: `string`, `options?`: [`ContractOptions`](../interfaces/internal_.ContractOptions.md)) => [`Contract`](internal_.Contract.md)

#### Type declaration

• **new Eth**(`jsonInterface`, `address?`, `options?`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `jsonInterface` | [`AbiItem`](../interfaces/internal_.AbiItem.md) \| [`AbiItem`](../interfaces/internal_.AbiItem.md)[] |
| `address?` | `string` |
| `options?` | [`ContractOptions`](../interfaces/internal_.ContractOptions.md) |

#### Defined in

node_modules/web3-eth/types/index.d.ts:68

___

### Iban

• **Iban**: (`iban`: `string`) => [`Iban`](internal_.Iban.md)

#### Type declaration

• **new Eth**(`iban`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `iban` | `string` |

#### Defined in

node_modules/web3-eth/types/index.d.ts:73

___

### abi

• **abi**: [`AbiCoder`](internal_.AbiCoder-1.md)

#### Defined in

node_modules/web3-eth/types/index.d.ts:77

___

### accounts

• **accounts**: [`Accounts`](internal_.Accounts.md)

#### Defined in

node_modules/web3-eth/types/index.d.ts:75

___

### currentProvider

• `Readonly` **currentProvider**: [`provider`](../modules/internal_.md#provider)

#### Defined in

node_modules/web3-eth/types/index.d.ts:91

___

### defaultAccount

• **defaultAccount**: ``null`` \| `string`

#### Defined in

node_modules/web3-eth/types/index.d.ts:82

___

### defaultBlock

• **defaultBlock**: [`BlockNumber`](../modules/internal_.md#blocknumber)

#### Defined in

node_modules/web3-eth/types/index.d.ts:83

___

### defaultChain

• **defaultChain**: [`chain`](../modules/internal_.md#chain)

#### Defined in

node_modules/web3-eth/types/index.d.ts:86

___

### defaultCommon

• **defaultCommon**: [`Common`](../interfaces/internal_.Common.md)

#### Defined in

node_modules/web3-eth/types/index.d.ts:84

___

### defaultHardfork

• **defaultHardfork**: [`hardfork`](../modules/internal_.md#hardfork)

#### Defined in

node_modules/web3-eth/types/index.d.ts:85

___

### ens

• **ens**: [`Ens`](internal_.Ens.md)

#### Defined in

node_modules/web3-eth/types/index.d.ts:76

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-eth/types/index.d.ts:80

___

### handleRevert

• **handleRevert**: `boolean`

#### Defined in

node_modules/web3-eth/types/index.d.ts:90

___

### net

• **net**: [`Network`](internal_.Network.md)

#### Defined in

node_modules/web3-eth/types/index.d.ts:78

___

### personal

• **personal**: [`Personal`](internal_.Personal.md)

#### Defined in

node_modules/web3-eth/types/index.d.ts:74

___

### transactionBlockTimeout

• **transactionBlockTimeout**: `number`

#### Defined in

node_modules/web3-eth/types/index.d.ts:89

___

### transactionConfirmationBlocks

• **transactionConfirmationBlocks**: `number`

#### Defined in

node_modules/web3-eth/types/index.d.ts:88

___

### transactionPollingTimeout

• **transactionPollingTimeout**: `number`

#### Defined in

node_modules/web3-eth/types/index.d.ts:87

___

### givenProvider

▪ `Static` `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-eth/types/index.d.ts:81

___

### providers

▪ `Static` `Readonly` **providers**: [`Providers`](../interfaces/internal_.Providers.md)

#### Defined in

node_modules/web3-eth/types/index.d.ts:96

## Methods

### call

▸ **call**(`transactionConfig`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |

#### Returns

`Promise`<`string`\>

▸ **call**(`transactionConfig`, `defaultBlock?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `defaultBlock?` | [`BlockNumber`](../modules/internal_.md#blocknumber) |

#### Returns

`Promise`<`string`\>

▸ **call**(`transactionConfig`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `data`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **call**(`transactionConfig`, `defaultBlock`, `callback`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback` | (`error`: [`Error`](../modules/internal_.md#error), `data`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### clearSubscriptions

▸ **clearSubscriptions**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`void`

___

### estimateGas

▸ **estimateGas**(`transactionConfig`, `callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `gas`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### extend

▸ **extend**(`extension`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extension` | [`Extension`](../interfaces/internal_.Extension.md) |

#### Returns

`any`

___

### getAccounts

▸ **getAccounts**(`callback?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `accounts`: `string`[]) => `void` |

#### Returns

`Promise`<`string`[]\>

___

### getBalance

▸ **getBalance**(`address`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

▸ **getBalance**(`address`, `defaultBlock`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |

#### Returns

`Promise`<`string`\>

▸ **getBalance**(`address`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `balance`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getBalance**(`address`, `defaultBlock`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `balance`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getBlock

▸ **getBlock**(`blockHashOrBlockNumber`): `Promise`<[`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |

#### Returns

`Promise`<[`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)\>

▸ **getBlock**(`blockHashOrBlockNumber`, `returnTransactionObjects`): `Promise`<[`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `returnTransactionObjects` | `boolean` |

#### Returns

`Promise`<[`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)\>

▸ **getBlock**(`blockHashOrBlockNumber`, `callback?`): `Promise`<[`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `block`: [`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)) => `void` |

#### Returns

`Promise`<[`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)\>

▸ **getBlock**(`blockHashOrBlockNumber`, `returnTransactionObjects`, `callback?`): `Promise`<[`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `returnTransactionObjects` | `boolean` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `block`: [`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)) => `void` |

#### Returns

`Promise`<[`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)\>

___

### getBlockNumber

▸ **getBlockNumber**(`callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `blockNumber`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### getBlockTransactionCount

▸ **getBlockTransactionCount**(`blockHashOrBlockNumber`, `callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `numberOfTransactions`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### getBlockUncleCount

▸ **getBlockUncleCount**(`blockHashOrBlockNumber`, `callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `numberOfTransactions`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### getChainId

▸ **getChainId**(`callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `version`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### getCode

▸ **getCode**(`address`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

▸ **getCode**(`address`, `defaultBlock`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |

#### Returns

`Promise`<`string`\>

▸ **getCode**(`address`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `code`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getCode**(`address`, `defaultBlock`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `code`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getCoinbase

▸ **getCoinbase**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `coinbaseAddress`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getFeeHistory

▸ **getFeeHistory**(`blockCount`, `lastBlock`, `rewardPercentiles`, `callback?`): `Promise`<[`FeeHistoryResult`](../interfaces/internal_.FeeHistoryResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockCount` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| [`BigNumber`](internal_.BigNumber-2.md) |
| `lastBlock` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| [`BigNumber`](internal_.BigNumber-2.md) |
| `rewardPercentiles` | `number`[] |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `feeHistory`: [`FeeHistoryResult`](../interfaces/internal_.FeeHistoryResult.md)) => `void` |

#### Returns

`Promise`<[`FeeHistoryResult`](../interfaces/internal_.FeeHistoryResult.md)\>

___

### getGasPrice

▸ **getGasPrice**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `gasPrice`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getHashrate

▸ **getHashrate**(`callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `hashes`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### getNodeInfo

▸ **getNodeInfo**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `version`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getPastLogs

▸ **getPastLogs**(`options`, `callback?`): `Promise`<[`Log`](../interfaces/internal_.Log-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PastLogsOptions`](../interfaces/internal_.PastLogsOptions.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `logs`: [`Log`](../interfaces/internal_.Log-1.md)[]) => `void` |

#### Returns

`Promise`<[`Log`](../interfaces/internal_.Log-1.md)[]\>

___

### getPendingTransactions

▸ **getPendingTransactions**(`callback?`): `Promise`<[`Transaction`](../interfaces/internal_.Transaction-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: [`Transaction`](../interfaces/internal_.Transaction-1.md)[]) => `void` |

#### Returns

`Promise`<[`Transaction`](../interfaces/internal_.Transaction-1.md)[]\>

___

### getProof

▸ **getProof**(`address`, `storageKey`, `blockNumber`, `callback?`): `Promise`<[`GetProof`](../interfaces/internal_.GetProof.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `storageKey` | `string`[] \| `number`[] \| [`BigNumber`](internal_.BigNumber-2.md)[] \| [`BN`](internal_.BN-1.md)[] |
| `blockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: [`GetProof`](../interfaces/internal_.GetProof.md)) => `void` |

#### Returns

`Promise`<[`GetProof`](../interfaces/internal_.GetProof.md)\>

▸ **getProof**(`address`, `storageKey`, `blockNumber`): `Promise`<[`GetProof`](../interfaces/internal_.GetProof.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `storageKey` | `string`[] \| `number`[] \| [`BigNumber`](internal_.BigNumber-2.md)[] \| [`BN`](internal_.BN-1.md)[] |
| `blockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |

#### Returns

`Promise`<[`GetProof`](../interfaces/internal_.GetProof.md)\>

___

### getProtocolVersion

▸ **getProtocolVersion**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `protocolVersion`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getStorageAt

▸ **getStorageAt**(`address`, `position`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `position` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| [`BigNumber`](internal_.BigNumber-2.md) |

#### Returns

`Promise`<`string`\>

▸ **getStorageAt**(`address`, `position`, `defaultBlock`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `position` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| [`BigNumber`](internal_.BigNumber-2.md) |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |

#### Returns

`Promise`<`string`\>

▸ **getStorageAt**(`address`, `position`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `position` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| [`BigNumber`](internal_.BigNumber-2.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `storageAt`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

▸ **getStorageAt**(`address`, `position`, `defaultBlock`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `position` | `string` \| `number` \| [`BN`](internal_.BN-1.md) \| [`BigNumber`](internal_.BigNumber-2.md) |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `storageAt`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getTransaction

▸ **getTransaction**(`transactionHash`, `callback?`): `Promise`<[`Transaction`](../interfaces/internal_.Transaction-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `transaction`: [`Transaction`](../interfaces/internal_.Transaction-1.md)) => `void` |

#### Returns

`Promise`<[`Transaction`](../interfaces/internal_.Transaction-1.md)\>

___

### getTransactionCount

▸ **getTransactionCount**(`address`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`number`\>

▸ **getTransactionCount**(`address`, `defaultBlock`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |

#### Returns

`Promise`<`number`\>

▸ **getTransactionCount**(`address`, `callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `count`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

▸ **getTransactionCount**(`address`, `defaultBlock`, `callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `defaultBlock` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `count`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### getTransactionFromBlock

▸ **getTransactionFromBlock**(`blockHashOrBlockNumber`, `indexNumber`, `callback?`): `Promise`<[`Transaction`](../interfaces/internal_.Transaction-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `indexNumber` | `string` \| `number` \| [`BN`](internal_.BN-1.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `transaction`: [`Transaction`](../interfaces/internal_.Transaction-1.md)) => `void` |

#### Returns

`Promise`<[`Transaction`](../interfaces/internal_.Transaction-1.md)\>

___

### getTransactionReceipt

▸ **getTransactionReceipt**(`hash`, `callback?`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `transactionReceipt`: [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)) => `void` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)\>

___

### getUncle

▸ **getUncle**(`blockHashOrBlockNumber`, `uncleIndex`): `Promise`<[`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `uncleIndex` | `string` \| `number` \| [`BN`](internal_.BN-1.md) |

#### Returns

`Promise`<[`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)\>

▸ **getUncle**(`blockHashOrBlockNumber`, `uncleIndex`, `returnTransactionObjects`): `Promise`<[`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `uncleIndex` | `string` \| `number` \| [`BN`](internal_.BN-1.md) |
| `returnTransactionObjects` | `boolean` |

#### Returns

`Promise`<[`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)\>

▸ **getUncle**(`blockHashOrBlockNumber`, `uncleIndex`, `callback?`): `Promise`<[`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `uncleIndex` | `string` \| `number` \| [`BN`](internal_.BN-1.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `uncle`: `any`) => `void` |

#### Returns

`Promise`<[`BlockTransactionString`](../interfaces/internal_.BlockTransactionString.md)\>

▸ **getUncle**(`blockHashOrBlockNumber`, `uncleIndex`, `returnTransactionObjects`, `callback?`): `Promise`<[`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockNumber` | [`BlockNumber`](../modules/internal_.md#blocknumber) |
| `uncleIndex` | `string` \| `number` \| [`BN`](internal_.BN-1.md) |
| `returnTransactionObjects` | `boolean` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `uncle`: `any`) => `void` |

#### Returns

`Promise`<[`BlockTransactionObject`](../interfaces/internal_.BlockTransactionObject.md)\>

___

### getWork

▸ **getWork**(`callback?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `string`[]) => `void` |

#### Returns

`Promise`<`string`[]\>

___

### isMining

▸ **isMining**(`callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `mining`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### isSyncing

▸ **isSyncing**(`callback?`): `Promise`<`boolean` \| [`Syncing`](../interfaces/internal_.Syncing.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `syncing`: [`Syncing`](../interfaces/internal_.Syncing.md)) => `void` |

#### Returns

`Promise`<`boolean` \| [`Syncing`](../interfaces/internal_.Syncing.md)\>

___

### requestAccounts

▸ **requestAccounts**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

▸ **requestAccounts**(`callback`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `string`[]) => `void` |

#### Returns

`Promise`<`string`[]\>

___

### sendSignedTransaction

▸ **sendSignedTransaction**(`signedTransactionData`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransactionData` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `hash`: `string`) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)\>

___

### sendTransaction

▸ **sendTransaction**(`transactionConfig`, `callback?`): [`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `hash`: `string`) => `void` |

#### Returns

[`PromiEvent`](../interfaces/internal_.PromiEvent.md)<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt-1.md)\>

___

### setProvider

▸ **setProvider**(`provider`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

#### Returns

`boolean`

___

### sign

▸ **sign**(`dataToSign`, `address`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataToSign` | `string` |
| `address` | `string` \| `number` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `signature`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### signTransaction

▸ **signTransaction**(`transactionConfig`, `callback?`): `Promise`<[`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `signedTransaction`: [`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)) => `void` |

#### Returns

`Promise`<[`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)\>

▸ **signTransaction**(`transactionConfig`, `address`): `Promise`<[`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `address` | `string` |

#### Returns

`Promise`<[`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)\>

▸ **signTransaction**(`transactionConfig`, `address`, `callback`): `Promise`<[`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `address` | `string` |
| `callback` | (`error`: [`Error`](../modules/internal_.md#error), `signedTransaction`: [`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)) => `void` |

#### Returns

`Promise`<[`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)\>

___

### submitWork

▸ **submitWork**(`data`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`string`, `string`, `string`] |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### subscribe

▸ **subscribe**(`type`, `options`, `callback?`): [`Subscription`](internal_.Subscription.md)<[`Log`](../interfaces/internal_.Log-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"logs"`` |
| `options` | [`LogsOptions`](../interfaces/internal_.LogsOptions.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `log`: [`Log`](../interfaces/internal_.Log-1.md)) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<[`Log`](../interfaces/internal_.Log-1.md)\>

▸ **subscribe**(`type`, `callback?`): [`Subscription`](internal_.Subscription.md)<[`Syncing`](../interfaces/internal_.Syncing.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"syncing"`` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: [`Syncing`](../interfaces/internal_.Syncing.md)) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<[`Syncing`](../interfaces/internal_.Syncing.md)\>

▸ **subscribe**(`type`, `callback?`): [`Subscription`](internal_.Subscription.md)<[`BlockHeader`](../interfaces/internal_.BlockHeader.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"newBlockHeaders"`` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `blockHeader`: [`BlockHeader`](../interfaces/internal_.BlockHeader.md)) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<[`BlockHeader`](../interfaces/internal_.BlockHeader.md)\>

▸ **subscribe**(`type`, `callback?`): [`Subscription`](internal_.Subscription.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"pendingTransactions"`` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `transactionHash`: `string`) => `void` |

#### Returns

[`Subscription`](internal_.Subscription.md)<`string`\>
