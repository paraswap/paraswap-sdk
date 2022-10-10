[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TransactionResponse

# Interface: TransactionResponse

[<internal>](../modules/internal_.md).TransactionResponse

## Hierarchy

- [`Transaction`](internal_.Transaction.md)

  ↳ **`TransactionResponse`**

  ↳↳ [`ContractTransaction`](internal_.ContractTransaction.md)

## Table of contents

### Properties

- [accessList](internal_.TransactionResponse.md#accesslist)
- [blockHash](internal_.TransactionResponse.md#blockhash)
- [blockNumber](internal_.TransactionResponse.md#blocknumber)
- [chainId](internal_.TransactionResponse.md#chainid)
- [confirmations](internal_.TransactionResponse.md#confirmations)
- [data](internal_.TransactionResponse.md#data)
- [from](internal_.TransactionResponse.md#from)
- [gasLimit](internal_.TransactionResponse.md#gaslimit)
- [gasPrice](internal_.TransactionResponse.md#gasprice)
- [hash](internal_.TransactionResponse.md#hash)
- [maxFeePerGas](internal_.TransactionResponse.md#maxfeepergas)
- [maxPriorityFeePerGas](internal_.TransactionResponse.md#maxpriorityfeepergas)
- [nonce](internal_.TransactionResponse.md#nonce)
- [r](internal_.TransactionResponse.md#r)
- [raw](internal_.TransactionResponse.md#raw)
- [s](internal_.TransactionResponse.md#s)
- [timestamp](internal_.TransactionResponse.md#timestamp)
- [to](internal_.TransactionResponse.md#to)
- [type](internal_.TransactionResponse.md#type)
- [v](internal_.TransactionResponse.md#v)
- [value](internal_.TransactionResponse.md#value)
- [wait](internal_.TransactionResponse.md#wait)

## Properties

### accessList

• `Optional` **accessList**: [`AccessList`](../modules/internal_.md#accesslist)

#### Inherited from

[Transaction](internal_.Transaction.md).[accessList](internal_.Transaction.md#accesslist)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:40

___

### blockHash

• `Optional` **blockHash**: `string`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:26

___

### blockNumber

• `Optional` **blockNumber**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:25

___

### chainId

• **chainId**: `number`

#### Inherited from

[Transaction](internal_.Transaction.md).[chainId](internal_.Transaction.md#chainid)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:35

___

### confirmations

• **confirmations**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:28

___

### data

• **data**: `string`

#### Inherited from

[Transaction](internal_.Transaction.md).[data](internal_.Transaction.md#data)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:33

___

### from

• **from**: `string`

#### Overrides

[Transaction](internal_.Transaction.md).[from](internal_.Transaction.md#from)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:29

___

### gasLimit

• **gasLimit**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[Transaction](internal_.Transaction.md).[gasLimit](internal_.Transaction.md#gaslimit)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:31

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[Transaction](internal_.Transaction.md).[gasPrice](internal_.Transaction.md#gasprice)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:32

___

### hash

• **hash**: `string`

#### Overrides

[Transaction](internal_.Transaction.md).[hash](internal_.Transaction.md#hash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:24

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[Transaction](internal_.Transaction.md).[maxFeePerGas](internal_.Transaction.md#maxfeepergas)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:42

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[Transaction](internal_.Transaction.md).[maxPriorityFeePerGas](internal_.Transaction.md#maxpriorityfeepergas)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:41

___

### nonce

• **nonce**: `number`

#### Inherited from

[Transaction](internal_.Transaction.md).[nonce](internal_.Transaction.md#nonce)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:30

___

### r

• `Optional` **r**: `string`

#### Inherited from

[Transaction](internal_.Transaction.md).[r](internal_.Transaction.md#r)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:36

___

### raw

• `Optional` **raw**: `string`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:30

___

### s

• `Optional` **s**: `string`

#### Inherited from

[Transaction](internal_.Transaction.md).[s](internal_.Transaction.md#s)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:37

___

### timestamp

• `Optional` **timestamp**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:27

___

### to

• `Optional` **to**: `string`

#### Inherited from

[Transaction](internal_.Transaction.md).[to](internal_.Transaction.md#to)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:28

___

### type

• `Optional` **type**: ``null`` \| `number`

#### Inherited from

[Transaction](internal_.Transaction.md).[type](internal_.Transaction.md#type)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:39

___

### v

• `Optional` **v**: `number`

#### Inherited from

[Transaction](internal_.Transaction.md).[v](internal_.Transaction.md#v)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:38

___

### value

• **value**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[Transaction](internal_.Transaction.md).[value](internal_.Transaction.md#value)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:34

___

### wait

• **wait**: (`confirmations?`: `number`) => `Promise`<[`TransactionReceipt`](internal_.TransactionReceipt.md)\>

#### Type declaration

▸ (`confirmations?`): `Promise`<[`TransactionReceipt`](internal_.TransactionReceipt.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |

##### Returns

`Promise`<[`TransactionReceipt`](internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:31
