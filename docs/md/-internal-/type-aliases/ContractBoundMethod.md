[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractBoundMethod

# Type Alias: ContractBoundMethod()\<Abi, Method\>

> **ContractBoundMethod**\<`Abi`, `Method`\>: (...`args`) => `Method`\[`"Abi"`\]\[`"stateMutability"`\] *extends* `"payable"` \| `"pure"` ? [`PayableMethodObject`](../interfaces/PayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\> : [`NonPayableMethodObject`](../interfaces/NonPayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\>

## Type Parameters

• **Abi** *extends* [`AbiFunctionFragment`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiFunctionFragment.md)

• **Method** *extends* [`ContractMethod`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/ContractMethod.md)\<`Abi`\> = [`ContractMethod`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/ContractMethod.md)\<`Abi`\>

## Parameters

• ...**args**: `Method`\[`"Inputs"`\] *extends* `undefined` \| `unknown` ? `any`[] : `Method`\[`"Inputs"`\]

## Returns

`Method`\[`"Abi"`\]\[`"stateMutability"`\] *extends* `"payable"` \| `"pure"` ? [`PayableMethodObject`](../interfaces/PayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\> : [`NonPayableMethodObject`](../interfaces/NonPayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\>

## Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract.d.ts:7
