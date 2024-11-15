[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ResolvedRegister

# Type Alias: ResolvedRegister

> **ResolvedRegister**: `object`

## Type declaration

### addressType

> **addressType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"addressType"`\]

TypeScript type to use for `address` values

#### Default

`0x${string}`

### ~~AddressType~~

> **AddressType**: [`ResolvedRegister`](ResolvedRegister.md)\[`"addressType"`\]

#### Deprecated

Use `addressType` instead

### arrayMaxDepth

> **arrayMaxDepth**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"arrayMaxDepth"`\]

Maximum depth for nested array types (e.g. string[][])

Note: You probably only want to set this to a specific number if parsed types are returning as `unknown`
and you want to figure out why. If you set this, you should probably also reduce `FixedArrayMaxLength`.

#### Default

```ts
false
```

### ~~ArrayMaxDepth~~

> **ArrayMaxDepth**: [`ResolvedRegister`](ResolvedRegister.md)\[`"arrayMaxDepth"`\]

#### Deprecated

Use `arrayMaxDepth` instead

### bigIntType

> **bigIntType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"bigIntType"`\]

TypeScript type to use for `int<M>` and `uint<M>` values, where `M > 48`

#### Default

```ts
bigint
```

### ~~BigIntType~~

> **BigIntType**: [`ResolvedRegister`](ResolvedRegister.md)\[`"bigIntType"`\]

#### Deprecated

Use `addressType` instead

### bytesType

> **bytesType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"bytesType"`\]

TypeScript type to use for `bytes` values

#### Default

```ts
{ inputs: `0x${string}`; outputs: `0x${string}`; }
```

### ~~BytesType~~

> **BytesType**: [`ResolvedRegister`](ResolvedRegister.md)\[`"bytesType"`\]

#### Deprecated

Use `bytesType` instead

### fixedArrayMaxLength

> **fixedArrayMaxLength**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"fixedArrayMaxLength"`\]

Upper bound for fixed array length

#### Default

```ts
99
```

### ~~FixedArrayMaxLength~~

> **FixedArrayMaxLength**: [`ResolvedRegister`](ResolvedRegister.md)\[`"fixedArrayMaxLength"`\]

#### Deprecated

Use `fixedArrayMaxLength` instead

### fixedArrayMinLength

> **fixedArrayMinLength**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"fixedArrayMinLength"`\]

Lower bound for fixed array length

#### Default

```ts
1
```

### ~~FixedArrayMinLength~~

> **FixedArrayMinLength**: [`ResolvedRegister`](ResolvedRegister.md)\[`"fixedArrayMinLength"`\]

#### Deprecated

Use `fixedArrayMinLength` instead

### intType

> **intType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"intType"`\]

TypeScript type to use for `int<M>` and `uint<M>` values, where `M <= 48`

#### Default

```ts
number
```

### ~~IntType~~

> **IntType**: [`ResolvedRegister`](ResolvedRegister.md)\[`"intType"`\]

#### Deprecated

Use `intType` instead

### strictAbiType

> **strictAbiType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"strictAbiType"`\]

When set, validates [AbiParameter](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiParameter.md)'s `type` against [AbiType](AbiType.md)

Note: You probably only want to set this to `true` if parsed types are returning as `unknown`
and you want to figure out why.

#### Default

```ts
false
```

### ~~StrictAbiType~~

> **StrictAbiType**: [`ResolvedRegister`](ResolvedRegister.md)\[`"strictAbiType"`\]

#### Deprecated

Use `strictAbiType` instead

## Defined in

node\_modules/abitype/dist/types/register.d.ts:3
