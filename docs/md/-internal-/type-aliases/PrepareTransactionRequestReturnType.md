[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / PrepareTransactionRequestReturnType

# Type Alias: PrepareTransactionRequestReturnType\<chain, account, chainOverride, accountOverride, request, _derivedAccount, _derivedChain, _transactionType, _transactionRequest\>

> **PrepareTransactionRequestReturnType**\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`, `_derivedAccount`, `_derivedChain`, `_transactionType`, `_transactionRequest`\>: [`Prettify`](Prettify.md)\<[`UnionRequiredBy`](UnionRequiredBy.md)\<[`Extract`](Extract.md)\<[`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`_derivedChain`\>, `"from"`\> & `_derivedChain` *extends* [`Chain`](Chain.md) ? `object` : `object` & `_derivedAccount` *extends* [`Account`](Account.md) ? `object` : `object`, [`IsNever`](IsNever.md)\<`_transactionRequest`\> *extends* `true` ? `unknown` : [`ExactPartial`](ExactPartial.md)\<`_transactionRequest`\>\> & `object`, [`ParameterTypeToParameters`](ParameterTypeToParameters.md)\<`request`\[`"parameters"`\] *extends* readonly [`PrepareTransactionRequestParameterType`](PrepareTransactionRequestParameterType.md)[] ? `request`\[`"parameters"`\]\[`number`\] : *typeof* [`defaultParameters`](../variables/defaultParameters.md)\[`number`\]\>\> & `unknown` *extends* `request`\[`"kzg"`\] ? `object` : [`Pick`](Pick.md)\<`request`, `"kzg"`\>\>

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **accountOverride** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined`

• **request** *extends* [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\> = [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\>

• **_derivedAccount** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = [`DeriveAccount`](DeriveAccount.md)\<`account`, `accountOverride`\>

• **_derivedChain** *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

• **_transactionType** = `request`\[`"type"`\] *extends* `string` \| `undefined` ? `request`\[`"type"`\] : [`GetTransactionType`](GetTransactionType.md)\<`request`\> *extends* `"legacy"` ? `unknown` : [`GetTransactionType`](GetTransactionType.md)\<`request`\>

• **_transactionRequest** *extends* [`TransactionRequest`](TransactionRequest.md) = `_transactionType` *extends* `"legacy"` ? [`TransactionRequestLegacy`](TransactionRequestLegacy.md) : `never` \| `_transactionType` *extends* `"eip1559"` ? [`TransactionRequestEIP1559`](TransactionRequestEIP1559.md) : `never` \| `_transactionType` *extends* `"eip2930"` ? [`TransactionRequestEIP2930`](TransactionRequestEIP2930.md) : `never` \| `_transactionType` *extends* `"eip4844"` ? [`TransactionRequestEIP4844`](TransactionRequestEIP4844.md) : `never` \| `_transactionType` *extends* `"eip7702"` ? [`TransactionRequestEIP7702`](TransactionRequestEIP7702.md) : `never`

## Defined in

node\_modules/viem/\_types/actions/wallet/prepareTransactionRequest.d.ts:39
