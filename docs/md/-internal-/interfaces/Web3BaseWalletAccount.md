[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3BaseWalletAccount

# Interface: Web3BaseWalletAccount

## Extended by

- [`Web3Account`](Web3Account.md)

## Indexable

 \[`key`: `string`\]: `unknown`

## Properties

### address

> `readonly` **address**: `string`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:44

***

### encrypt()

> `readonly` **encrypt**: (`password`, `options`?) => `Promise`\<[`KeyStore`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)\>

#### Parameters

• **password**: `string`

• **options?**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Returns

`Promise`\<[`KeyStore`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)\>

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:62

***

### privateKey

> `readonly` **privateKey**: `string`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:45

***

### sign()

> `readonly` **sign**: (`data`) => `object`

#### Parameters

• **data**: `string` \| [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Returns

`object`

##### message?

> `readonly` `optional` **message**: `string`

##### messageHash

> `readonly` **messageHash**: `string`

##### r

> `readonly` **r**: `string`

##### s

> `readonly` **s**: `string`

##### signature

> `readonly` **signature**: `string`

##### v

> `readonly` **v**: `string`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:54

***

### signTransaction()

> `readonly` **signTransaction**: (`tx`) => `Promise`\<`object`\>

#### Parameters

• **tx**: [`Transaction`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md)

#### Returns

`Promise`\<`object`\>

##### messageHash

> `readonly` **messageHash**: `string`

##### r

> `readonly` **r**: `string`

##### rawTransaction

> `readonly` **rawTransaction**: `string`

##### s

> `readonly` **s**: `string`

##### transactionHash

> `readonly` **transactionHash**: `string`

##### v

> `readonly` **v**: `string`

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:46
