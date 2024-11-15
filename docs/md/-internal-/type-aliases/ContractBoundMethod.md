[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractBoundMethod

# Type Alias: ContractBoundMethod()\<Abi, Method\>

> **ContractBoundMethod**\<`Abi`, `Method`\>: (...`args`) => `Method`\[`"Abi"`\]\[`"stateMutability"`\] *extends* `"payable"` \| `"pure"` ? [`PayableMethodObject`](../interfaces/PayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\> : [`NonPayableMethodObject`](../interfaces/NonPayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\>

## Type Parameters

• **Abi** *extends* [`AbiFunctionFragment`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiFunctionFragment.md)

• **Method** *extends* [`ContractMethod`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/ContractMethod.md)\<`Abi`\> = [`ContractMethod`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/ContractMethod.md)\<`Abi`\>

## Parameters

• ...**args**: `Method`\[`"Inputs"`\] *extends* `undefined` \| `unknown` ? `any`[] : `Method`\[`"Inputs"`\]

## Returns

`Method`\[`"Abi"`\]\[`"stateMutability"`\] *extends* `"payable"` \| `"pure"` ? [`PayableMethodObject`](../interfaces/PayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\> : [`NonPayableMethodObject`](../interfaces/NonPayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\>

## Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract.d.ts:7
