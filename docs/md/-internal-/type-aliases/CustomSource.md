[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / CustomSource

# Type Alias: CustomSource

> **CustomSource**: `object`

## Type declaration

### address

> **address**: [`Address`](Address.md)

### experimental\_signAuthorization()?

> `optional` **experimental\_signAuthorization**: (`parameters`) => `Promise`\<[`SignAuthorizationReturnType`](SignAuthorizationReturnType.md)\>

#### Parameters

• **parameters**: [`Authorization`](Authorization.md)

#### Returns

`Promise`\<[`SignAuthorizationReturnType`](SignAuthorizationReturnType.md)\>

### nonceManager?

> `optional` **nonceManager**: [`NonceManager`](NonceManager.md)

### sign()?

> `optional` **sign**: (`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

#### Parameters

• **parameters**

• **parameters.hash**: [`Hash`](Hash.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

### signMessage()

> **signMessage**: (`{ message }`) => `Promise`\<[`Hex`](Hex.md)\>

#### Parameters

• **\{ message \}**

• **\{ message \}.message**: [`SignableMessage`](SignableMessage.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

### signTransaction()

> **signTransaction**: \<`serializer`, `transaction`\>(`transaction`, `options`?) => `Promise`\<[`IsNarrowable`](IsNarrowable.md)\<[`TransactionSerialized`](TransactionSerialized.md)\<[`GetTransactionType`](GetTransactionType.md)\<`transaction`\>\>, [`Hex`](Hex.md)\> *extends* `true` ? [`TransactionSerialized`](TransactionSerialized.md)\<[`GetTransactionType`](GetTransactionType.md)\<`transaction`\>\> : [`Hex`](Hex.md)\>

#### Type Parameters

• **serializer** *extends* [`SerializeTransactionFn`](SerializeTransactionFn.md)\<[`TransactionSerializable`](TransactionSerializable.md)\> = [`SerializeTransactionFn`](SerializeTransactionFn.md)\<[`TransactionSerializable`](TransactionSerializable.md)\>

• **transaction** *extends* [`Parameters`](Parameters.md)\<`serializer`\>\[`0`\] = [`Parameters`](Parameters.md)\<`serializer`\>\[`0`\]

#### Parameters

• **transaction**: `transaction`

• **options?**

• **options.serializer?**: `serializer`

#### Returns

`Promise`\<[`IsNarrowable`](IsNarrowable.md)\<[`TransactionSerialized`](TransactionSerialized.md)\<[`GetTransactionType`](GetTransactionType.md)\<`transaction`\>\>, [`Hex`](Hex.md)\> *extends* `true` ? [`TransactionSerialized`](TransactionSerialized.md)\<[`GetTransactionType`](GetTransactionType.md)\<`transaction`\>\> : [`Hex`](Hex.md)\>

### signTypedData()

> **signTypedData**: \<`typedData`, `primaryType`\>(`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

#### Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\>

• **primaryType** *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

#### Parameters

• **parameters**: [`TypedDataDefinition`](TypedDataDefinition.md)\<`typedData`, `primaryType`\>

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

## Defined in

node\_modules/viem/\_types/accounts/types.d.ts:15
