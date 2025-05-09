[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DefaultRegister

# Type Alias: DefaultRegister

> **DefaultRegister**: `object`

## Type declaration

### addressType

> **addressType**: \`0x$\{string\}\`

TypeScript type to use for `address` values

### ~~AddressType~~

> **AddressType**: [`DefaultRegister`](DefaultRegister.md)\[`"addressType"`\]

#### Deprecated

Use `addressType` instead

### arrayMaxDepth

> **arrayMaxDepth**: `false`

Maximum depth for nested array types (e.g. string[][])

### ~~ArrayMaxDepth~~

> **ArrayMaxDepth**: [`DefaultRegister`](DefaultRegister.md)\[`"arrayMaxDepth"`\]

#### Deprecated

Use `arrayMaxDepth` instead

### bigIntType

> **bigIntType**: `bigint`

TypeScript type to use for `int<M>` and `uint<M>` values, where `M > 48`

### ~~BigIntType~~

> **BigIntType**: [`DefaultRegister`](DefaultRegister.md)\[`"bigIntType"`\]

#### Deprecated

Use `bigIntType` instead

### bytesType

> **bytesType**: `object`

TypeScript type to use for `bytes` values

### bytesType.inputs

> **inputs**: \`0x$\{string\}\`

TypeScript type to use for `bytes` input values

### bytesType.outputs

> **outputs**: \`0x$\{string\}\`

TypeScript type to use for `bytes` output values

### ~~BytesType~~

> **BytesType**: `object`

#### Deprecated

Use `bytesType` instead

### BytesType.inputs

> **inputs**: [`DefaultRegister`](DefaultRegister.md)\[`"bytesType"`\]\[`"inputs"`\]

### BytesType.outputs

> **outputs**: [`DefaultRegister`](DefaultRegister.md)\[`"bytesType"`\]\[`"outputs"`\]

### fixedArrayMaxLength

> **fixedArrayMaxLength**: `99`

Upper bound for fixed array length

### ~~FixedArrayMaxLength~~

> **FixedArrayMaxLength**: [`DefaultRegister`](DefaultRegister.md)\[`"fixedArrayMaxLength"`\]

#### Deprecated

Use `fixedArrayMaxLength` instead

### fixedArrayMinLength

> **fixedArrayMinLength**: `1`

Lower bound for fixed array length

### ~~FixedArrayMinLength~~

> **FixedArrayMinLength**: [`DefaultRegister`](DefaultRegister.md)\[`"fixedArrayMinLength"`\]

#### Deprecated

Use `fixedArrayMinLength` instead

### intType

> **intType**: `number`

TypeScript type to use for `int<M>` and `uint<M>` values, where `M <= 48`

### ~~IntType~~

> **IntType**: [`DefaultRegister`](DefaultRegister.md)\[`"intType"`\]

#### Deprecated

Use `intType` instead

### strictAbiType

> **strictAbiType**: `false`

When set, validates [AbiParameter](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiParameter.md)'s `type` against [AbiType](AbiType.md)

### ~~StrictAbiType~~

> **StrictAbiType**: [`DefaultRegister`](DefaultRegister.md)\[`"strictAbiType"`\]

#### Deprecated

Use `strictAbiType` instead

## Defined in

node\_modules/abitype/dist/types/register.d.ts:107
