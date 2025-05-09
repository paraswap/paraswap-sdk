[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetTransactionType

# Type Alias: GetTransactionType\<transaction, result\>

> **GetTransactionType**\<`transaction`, `result`\>: [`IsNever`](IsNever.md)\<keyof `transaction`\> *extends* `true` ? `string` : [`IsNever`](IsNever.md)\<`result`\> *extends* `false` ? `result` : `string`

## Type Parameters

• **transaction** *extends* [`OneOf`](OneOf.md)\<[`TransactionSerializableGeneric`](TransactionSerializableGeneric.md) \| [`TransactionRequestGeneric`](TransactionRequestGeneric.md)\> = [`TransactionSerializableGeneric`](TransactionSerializableGeneric.md)

• **result** = `transaction` *extends* [`LegacyProperties`](LegacyProperties.md) ? `"legacy"` : `never` \| `transaction` *extends* [`EIP1559Properties`](EIP1559Properties.md) ? `"eip1559"` : `never` \| `transaction` *extends* [`EIP2930Properties`](EIP2930Properties.md) ? `"eip2930"` : `never` \| `transaction` *extends* [`EIP4844Properties`](EIP4844Properties.md) ? `"eip4844"` : `never` \| `transaction` *extends* [`EIP7702Properties`](EIP7702Properties.md) ? `"eip7702"` : `never` \| `transaction`\[`"type"`\] *extends* [`TransactionSerializableGeneric`](TransactionSerializableGeneric.md)\[`"type"`\] ? [`Extract`](Extract.md)\<`transaction`\[`"type"`\], `string`\> : `never`

## Defined in

node\_modules/viem/\_types/utils/transaction/getTransactionType.d.ts:6
