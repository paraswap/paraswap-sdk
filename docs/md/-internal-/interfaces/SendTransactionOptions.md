[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionOptions

# Interface: SendTransactionOptions\<ResolveType\>

## Type Parameters

• **ResolveType** = [`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)

## Properties

### checkRevertBeforeSending?

> `optional` **checkRevertBeforeSending**: `boolean`

#### Defined in

node\_modules/web3-eth/lib/commonjs/types.d.ts:23

***

### contractAbi?

> `optional` **contractAbi**: [`ContractAbi`](../type-aliases/ContractAbi.md)

#### Defined in

node\_modules/web3-eth/lib/commonjs/types.d.ts:22

***

### ignoreFillingGasLimit?

> `optional` **ignoreFillingGasLimit**: `boolean`

#### Defined in

node\_modules/web3-eth/lib/commonjs/types.d.ts:24

***

### ignoreGasPricing?

> `optional` **ignoreGasPricing**: `boolean`

#### Defined in

node\_modules/web3-eth/lib/commonjs/types.d.ts:20

***

### transactionResolver()?

> `optional` **transactionResolver**: (`receipt`) => `ResolveType`

#### Parameters

• **receipt**: [`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)

#### Returns

`ResolveType`

#### Defined in

node\_modules/web3-eth/lib/commonjs/types.d.ts:21
