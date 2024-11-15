[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractMethodOutputParametersRecursiveRecord

# Type Alias: ContractMethodOutputParametersRecursiveRecord\<Params\>

> **ContractMethodOutputParametersRecursiveRecord**\<`Params`\>: `Params` *extends* readonly [] ? [] : `Params` *extends* readonly [infer H, `...(infer R)`] ? `H` *extends* [`AbiParameter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiParameter.md) ? `H`\[`"name"`\] *extends* `""` ? [`ContractMethodOutputParametersRecursiveRecord`](ContractMethodOutputParametersRecursiveRecord.md)\<`R`\> : [`Record`](Record.md)\<`H`\[`"name"`\], [`MatchPrimitiveType`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/MatchPrimitiveType.md)\<`H`\[`"type"`\], `H`\[`"components"`\]\>\> & [`ContractMethodOutputParametersRecursiveRecord`](ContractMethodOutputParametersRecursiveRecord.md)\<`R`\> : [`ContractMethodOutputParametersRecursiveRecord`](ContractMethodOutputParametersRecursiveRecord.md)\<`R`\> : `Params` *extends* `undefined` \| `unknown` ? [] : `Params`

## Type Parameters

• **Params** *extends* `ReadonlyArray`\<`unknown`\> \| `undefined`

## Defined in

node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:122
