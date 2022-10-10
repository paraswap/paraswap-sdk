[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ContractTransaction

# Interface: ContractTransaction

[<internal>](../modules/internal_.md).ContractTransaction

## Hierarchy

- [`TransactionResponse`](internal_.TransactionResponse.md)

  ↳ **`ContractTransaction`**

## Table of contents

### Properties

- [accessList](internal_.ContractTransaction.md#accesslist)
- [blockHash](internal_.ContractTransaction.md#blockhash)
- [blockNumber](internal_.ContractTransaction.md#blocknumber)
- [chainId](internal_.ContractTransaction.md#chainid)
- [confirmations](internal_.ContractTransaction.md#confirmations)
- [data](internal_.ContractTransaction.md#data)
- [from](internal_.ContractTransaction.md#from)
- [gasLimit](internal_.ContractTransaction.md#gaslimit)
- [gasPrice](internal_.ContractTransaction.md#gasprice)
- [hash](internal_.ContractTransaction.md#hash)
- [maxFeePerGas](internal_.ContractTransaction.md#maxfeepergas)
- [maxPriorityFeePerGas](internal_.ContractTransaction.md#maxpriorityfeepergas)
- [nonce](internal_.ContractTransaction.md#nonce)
- [r](internal_.ContractTransaction.md#r)
- [raw](internal_.ContractTransaction.md#raw)
- [s](internal_.ContractTransaction.md#s)
- [timestamp](internal_.ContractTransaction.md#timestamp)
- [to](internal_.ContractTransaction.md#to)
- [type](internal_.ContractTransaction.md#type)
- [v](internal_.ContractTransaction.md#v)
- [value](internal_.ContractTransaction.md#value)

### Methods

- [wait](internal_.ContractTransaction.md#wait)

## Properties

### accessList

• `Optional` **accessList**: [`AccessList`](../modules/internal_.md#accesslist)

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[accessList](internal_.TransactionResponse.md#accesslist)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:40

___

### blockHash

• `Optional` **blockHash**: `string`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[blockHash](internal_.TransactionResponse.md#blockhash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:26

___

### blockNumber

• `Optional` **blockNumber**: `number`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[blockNumber](internal_.TransactionResponse.md#blocknumber)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:25

___

### chainId

• **chainId**: `number`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[chainId](internal_.TransactionResponse.md#chainid)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:35

___

### confirmations

• **confirmations**: `number`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[confirmations](internal_.TransactionResponse.md#confirmations)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:28

___

### data

• **data**: `string`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[data](internal_.TransactionResponse.md#data)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:33

___

### from

• **from**: `string`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[from](internal_.TransactionResponse.md#from)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:29

___

### gasLimit

• **gasLimit**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[gasLimit](internal_.TransactionResponse.md#gaslimit)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:31

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[gasPrice](internal_.TransactionResponse.md#gasprice)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:32

___

### hash

• **hash**: `string`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[hash](internal_.TransactionResponse.md#hash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:24

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[maxFeePerGas](internal_.TransactionResponse.md#maxfeepergas)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:42

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[maxPriorityFeePerGas](internal_.TransactionResponse.md#maxpriorityfeepergas)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:41

___

### nonce

• **nonce**: `number`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[nonce](internal_.TransactionResponse.md#nonce)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:30

___

### r

• `Optional` **r**: `string`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[r](internal_.TransactionResponse.md#r)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:36

___

### raw

• `Optional` **raw**: `string`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[raw](internal_.TransactionResponse.md#raw)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:30

___

### s

• `Optional` **s**: `string`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[s](internal_.TransactionResponse.md#s)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:37

___

### timestamp

• `Optional` **timestamp**: `number`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[timestamp](internal_.TransactionResponse.md#timestamp)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:27

___

### to

• `Optional` **to**: `string`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[to](internal_.TransactionResponse.md#to)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:28

___

### type

• `Optional` **type**: ``null`` \| `number`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[type](internal_.TransactionResponse.md#type)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:39

___

### v

• `Optional` **v**: `number`

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[v](internal_.TransactionResponse.md#v)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:38

___

### value

• **value**: [`BigNumber`](../classes/internal_.BigNumber-1.md)

#### Inherited from

[TransactionResponse](internal_.TransactionResponse.md).[value](internal_.TransactionResponse.md#value)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:34

## Methods

### wait

▸ **wait**(`confirmations?`): `Promise`<[`ContractReceipt`](internal_.ContractReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |

#### Returns

`Promise`<[`ContractReceipt`](internal_.ContractReceipt.md)\>

#### Overrides

TransactionResponse.wait
