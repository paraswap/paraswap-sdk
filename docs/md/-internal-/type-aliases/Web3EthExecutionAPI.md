[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3EthExecutionAPI

# Type Alias: Web3EthExecutionAPI

> **Web3EthExecutionAPI**: [`EthExecutionAPI`](EthExecutionAPI.md) & `object`

## Type declaration

### eth\_chainId()

> **eth\_chainId**: () => [`Uint`](Uint.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getProof()

> **eth\_getProof**: (`address`, `storageKeys`, `blockNumber`) => [`AccountObject`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/AccountObject.md)

#### Parameters

• **address**: [`Address`](Address.md)

• **storageKeys**: [`HexString32Bytes`](HexString32Bytes.md)[]

• **blockNumber**: [`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`AccountObject`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/AccountObject.md)

### eth\_pendingTransactions()

> **eth\_pendingTransactions**: () => [`TransactionInfo`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionInfo.md)[]

#### Returns

[`TransactionInfo`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionInfo.md)[]

### eth\_requestAccounts()

> **eth\_requestAccounts**: () => [`Address`](Address.md)[]

#### Returns

[`Address`](Address.md)[]

### eth\_signTypedData()

> **eth\_signTypedData**: (`address`, `typedData`, `useLegacy`) => [`HexString256Bytes`](HexString256Bytes.md)

#### Parameters

• **address**: [`Address`](Address.md)

• **typedData**: [`Eip712TypedData`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Eip712TypedData.md)

• **useLegacy**: `true`

#### Returns

[`HexString256Bytes`](HexString256Bytes.md)

### eth\_signTypedData\_v4()

> **eth\_signTypedData\_v4**: (`address`, `typedData`, `useLegacy`) => [`HexString256Bytes`](HexString256Bytes.md)

#### Parameters

• **address**: [`Address`](Address.md)

• **typedData**: [`Eip712TypedData`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Eip712TypedData.md)

• **useLegacy**: `false` \| `undefined`

#### Returns

[`HexString256Bytes`](HexString256Bytes.md)

### web3\_clientVersion()

> **web3\_clientVersion**: () => `string`

#### Returns

`string`

## Defined in

node\_modules/web3-types/lib/commonjs/apis/web3\_eth\_execution\_api.d.ts:3
