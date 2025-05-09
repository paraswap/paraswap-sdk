[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SmartAccountImplementation

# Type Alias: SmartAccountImplementation\<entryPointAbi, entryPointVersion, extend\>

> **SmartAccountImplementation**\<`entryPointAbi`, `entryPointVersion`, `extend`\>: `object`

## Type Parameters

• **entryPointAbi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **entryPointVersion** *extends* [`EntryPointVersion`](EntryPointVersion.md) = [`EntryPointVersion`](EntryPointVersion.md)

• **extend** *extends* `object` = `object`

## Type declaration

### client

> **client**: [`Client`](Client.md)

Client used to retrieve Smart Account data, and perform signing (if owner is a JSON-RPC Account).

### decodeCalls()?

> `optional` **decodeCalls**: (`data`) => `Promise`\<readonly [`Call`](Call.md)[]\>

Decodes calldata into structured calls.

#### Parameters

• **data**: [`Hex`](Hex.md)

#### Returns

`Promise`\<readonly [`Call`](Call.md)[]\>

#### Example

```ts
const calls = await account.decodeCalls('0x...')
// [{ to: '0x...', data: '0x...', value: 100n }, ...]
```

### encodeCalls()

> **encodeCalls**: (`calls`) => `Promise`\<[`Hex`](Hex.md)\>

Encodes the calls into calldata for executing a User Operation.

#### Parameters

• **calls**: readonly [`Call`](Call.md)[]

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

#### Example

```ts
const callData = await account.encodeCalls([
  { to: '0x...', data: '0x...' },
  { to: '0x...', data: '0x...', value: 100n },
])
// '0x...'
```

### entryPoint

> **entryPoint**: `object`

Compatible EntryPoint of the Smart Account.

### entryPoint.abi

> **abi**: `entryPointAbi`

Compatible EntryPoint ABI.

### entryPoint.address

> **address**: [`Address`](Address.md)

Compatible EntryPoint address.

### entryPoint.version

> **version**: `entryPointVersion`

Compatible EntryPoint version.

### extend?

> `optional` **extend**: `extend`

Extend the Smart Account with custom properties.

### getAddress()

> **getAddress**: () => `Promise`\<[`Address`](Address.md)\>

Retrieves the Smart Account's address.

#### Returns

`Promise`\<[`Address`](Address.md)\>

#### Example

```ts
const address = await account.getAddress()
// '0x...'
```

### getFactoryArgs()

> **getFactoryArgs**: () => `Promise`\<`object`\>

Retrieves the calldata for factory call to deploy a Smart Account.
If the Smart Account has already been deployed, this will return undefined values.

#### Returns

`Promise`\<`object`\>

##### factory?

> `optional` **factory**: [`Address`](Address.md)

##### factoryData?

> `optional` **factoryData**: [`Hex`](Hex.md)

#### Examples

```ts
const { factory, factoryData } = await account.getFactoryArgs()
// { factory: '0x...', factoryData: '0x...' }
```

```ts
const { factory, factoryData } = await account.getFactoryArgs()
// { factory: undefined, factoryData: undefined }
```

### getNonce()?

> `optional` **getNonce**: (`parameters`?) => `Promise`\<`bigint`\>

Retrieves the nonce of the Account.

#### Parameters

• **parameters?**

• **parameters.key?**: `bigint`

#### Returns

`Promise`\<`bigint`\>

#### Example

```ts
const nonce = await account.getNonce()
// 1n
```

### getStubSignature()

> **getStubSignature**: (`parameters`?) => `Promise`\<[`Hex`](Hex.md)\>

Retrieves the User Operation "stub" signature for gas estimation.

```ts
const signature = await account.getStubSignature()
// '0x...'
```

#### Parameters

• **parameters?**: [`UserOperationRequest`](UserOperationRequest.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

### nonceKeyManager?

> `optional` **nonceKeyManager**: [`NonceManager`](NonceManager.md)

Custom nonce key manager.

### sign()?

> `optional` **sign**: (`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

Signs a hash via the Smart Account's owner.

#### Parameters

• **parameters**

• **parameters.hash**: [`Hash`](Hash.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

#### Example

```ts
const signature = await account.sign({
  hash: '0x...'
})
// '0x...'
```

### signMessage()

> **signMessage**: (`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

Signs a [EIP-191 Personal Sign message](https://eips.ethereum.org/EIPS/eip-191).

#### Parameters

• **parameters**

• **parameters.message**: [`SignableMessage`](SignableMessage.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

#### Example

```ts
const signature = await account.signMessage({
  message: 'Hello, World!'
})
// '0x...'
```

### signTypedData()

> **signTypedData**: \<`typedData`, `primaryType`\>(`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

Signs [EIP-712 Typed Data](https://eips.ethereum.org/EIPS/eip-712).

#### Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\>

• **primaryType** *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

#### Parameters

• **parameters**: [`TypedDataDefinition`](TypedDataDefinition.md)\<`typedData`, `primaryType`\>

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

#### Example

```ts
const signature = await account.signTypedData({
  domain,
  types,
  primaryType: 'Mail',
  message,
})
```

### signUserOperation()

> **signUserOperation**: (`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

Signs the User Operation.

#### Parameters

• **parameters**: [`UnionPartialBy`](UnionPartialBy.md)\<[`UserOperation`](UserOperation.md), `"sender"`\> & `object`

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

#### Example

```ts
const signature = await account.signUserOperation({
  chainId: 1,
  userOperation,
})
```

### userOperation?

> `optional` **userOperation**: `object`

User Operation configuration properties.

### userOperation.estimateGas()?

> `optional` **estimateGas**: (`userOperation`) => `Promise`\<[`ExactPartial`](ExactPartial.md)\<[`EstimateUserOperationGasReturnType`](EstimateUserOperationGasReturnType.md)\> \| `undefined`\>

Prepares gas properties for the User Operation request.

#### Parameters

• **userOperation**: [`UserOperationRequest`](UserOperationRequest.md)

#### Returns

`Promise`\<[`ExactPartial`](ExactPartial.md)\<[`EstimateUserOperationGasReturnType`](EstimateUserOperationGasReturnType.md)\> \| `undefined`\>

## Defined in

node\_modules/viem/\_types/account-abstraction/accounts/types.d.ts:15
