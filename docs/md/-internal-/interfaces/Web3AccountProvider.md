[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3AccountProvider

# Interface: Web3AccountProvider\<T\>

## Type Parameters

• **T**

## Properties

### create()

> **create**: () => `T`

#### Returns

`T`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:66

***

### decrypt()

> **decrypt**: (`keystore`, `password`, `options`?) => `Promise`\<`T`\>

#### Parameters

• **keystore**: `string` \| [`KeyStore`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)

• **password**: `string`

• **options?**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Returns

`Promise`\<`T`\>

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:67

***

### privateKeyToAccount()

> **privateKeyToAccount**: (`privateKey`) => `T`

#### Parameters

• **privateKey**: `string`

#### Returns

`T`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:65
