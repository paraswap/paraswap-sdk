[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionBase

# Type Alias: TransactionBase\<quantity, index, isPending\>

> **TransactionBase**\<`quantity`, `index`, `isPending`\>: `object`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **isPending** *extends* `boolean` = `boolean`

## Type declaration

### blockHash

> **blockHash**: `isPending` *extends* `true` ? `null` : [`Hash`](Hash.md)

Hash of block containing this transaction or `null` if pending

### blockNumber

> **blockNumber**: `isPending` *extends* `true` ? `null` : `quantity`

Number of block containing this transaction or `null` if pending

### from

> **from**: [`Address`](Address.md)

Transaction sender

### gas

> **gas**: `quantity`

Gas provided for transaction execution

### hash

> **hash**: [`Hash`](Hash.md)

Hash of this transaction

### input

> **input**: [`Hex`](Hex.md)

Contract code or a hashed method call

### nonce

> **nonce**: `index`

Unique number identifying this transaction

### r

> **r**: [`Hex`](Hex.md)

ECDSA signature r

### s

> **s**: [`Hex`](Hex.md)

ECDSA signature s

### to

> **to**: [`Address`](Address.md) \| `null`

Transaction recipient or `null` if deploying a contract

### transactionIndex

> **transactionIndex**: `isPending` *extends* `true` ? `null` : `index`

Index of this transaction in the block or `null` if pending

### typeHex

> **typeHex**: [`Hex`](Hex.md) \| `null`

The type represented as hex.

### v

> **v**: `quantity`

ECDSA recovery ID

### value

> **value**: `quantity`

Value in wei sent with this transaction

### yParity

> **yParity**: `index`

The parity of the y-value of the secp256k1 signature.

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:50
