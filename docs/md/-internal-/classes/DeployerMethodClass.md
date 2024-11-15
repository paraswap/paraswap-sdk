[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / DeployerMethodClass

# Class: DeployerMethodClass\<FullContractAbi\>

## Type Parameters

• **FullContractAbi** *extends* [`ContractAbi`](../type-aliases/ContractAbi.md)

## Constructors

### new DeployerMethodClass()

> **new DeployerMethodClass**\<`FullContractAbi`\>(`parent`, `deployOptions`): [`DeployerMethodClass`](DeployerMethodClass.md)\<`FullContractAbi`\>

#### Parameters

• **parent**: [`Contract`](Contract.md)\<`FullContractAbi`\>

• **deployOptions**: `undefined` \| `object`

#### Returns

[`DeployerMethodClass`](DeployerMethodClass.md)\<`FullContractAbi`\>

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:25

## Properties

### args

> `protected` `readonly` **args**: `never`[] \| [`ContractConstructorArgs`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/ContractConstructorArgs.md)\<`FullContractAbi`\>

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:20

***

### constructorAbi

> `protected` `readonly` **constructorAbi**: [`AbiConstructorFragment`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiConstructorFragment.md)

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:21

***

### contractOptions

> `protected` `readonly` **contractOptions**: [`ContractOptions`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/ContractOptions.md)

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:22

***

### deployData?

> `protected` `readonly` `optional` **deployData**: `string`

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:23

***

### deployOptions

> **deployOptions**: `undefined` \| `object`

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:9

***

### parent

> **parent**: [`Contract`](Contract.md)\<`FullContractAbi`\>

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:8

## Methods

### \_contractMethodDeploySend()

> `protected` **\_contractMethodDeploySend**(`tx`): [`Web3PromiEvent`](Web3PromiEvent.md)\<[`Contract`](Contract.md)\<`FullContractAbi`\>, [`SendTransactionEvents`](../type-aliases/SendTransactionEvents.md)\<[`DataFormat`](../type-aliases/DataFormat.md)\>\>

#### Parameters

• **tx**: [`TransactionCall`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionCall.md)

#### Returns

[`Web3PromiEvent`](Web3PromiEvent.md)\<[`Contract`](Contract.md)\<`FullContractAbi`\>, [`SendTransactionEvents`](../type-aliases/SendTransactionEvents.md)\<[`DataFormat`](../type-aliases/DataFormat.md)\>\>

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:24

***

### calculateDeployParams()

> `protected` **calculateDeployParams**(): `object`

#### Returns

`object`

##### abi

> **abi**: [`AbiConstructorFragment`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiConstructorFragment.md)

##### args

> **args**: `never`[] \| [`NonNullable`](../type-aliases/NonNullable.md)\<[`ContractConstructorArgs`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/ContractConstructorArgs.md)\<`FullContractAbi`\>\>

##### contractOptions

> **contractOptions**: [`ContractOptions`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/ContractOptions.md)

##### deployData

> **deployData**: `undefined` \| `string`

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:38

***

### decodeData()

> **decodeData**(`data`): `object`

#### Parameters

• **data**: `string`

#### Returns

`object`

##### \_\_length\_\_

> **\_\_length\_\_**: `number`

##### \_\_method\_\_

> **\_\_method\_\_**: `string`

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:46

***

### encodeABI()

> **encodeABI**(): `string`

#### Returns

`string`

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:45

***

### estimateGas()

> **estimateGas**\<`ReturnFormat`\>(`options`?, `returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **options?**: [`PayableCallOptions`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/PayableCallOptions.md)

• **returnFormat?**: `ReturnFormat`

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:44

***

### populateTransaction()

> **populateTransaction**(`txOptions`?): [`TransactionCall`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionCall.md)

#### Parameters

• **txOptions?**: [`PayableCallOptions`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/PayableCallOptions.md) \| [`NonPayableCallOptions`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/NonPayableCallOptions.md)

#### Returns

[`TransactionCall`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionCall.md)

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:37

***

### send()

> **send**(`options`?): [`ContractDeploySend`](../type-aliases/ContractDeploySend.md)\<`FullContractAbi`\>

#### Parameters

• **options?**: [`PayableCallOptions`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/PayableCallOptions.md)

#### Returns

[`ContractDeploySend`](../type-aliases/ContractDeploySend.md)\<`FullContractAbi`\>

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:36
