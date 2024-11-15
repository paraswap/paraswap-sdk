[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3EthInterface

# Interface: Web3EthInterface

The Ethereum interface for main web3 object. It provides extra methods in addition to `web3-eth` interface.

web3_eth.Web3Eth for details about the `Eth` interface.

## Extends

- [`Web3Eth`](../classes/Web3Eth.md)

## Properties

### \_accountProvider?

> `protected` `optional` **\_accountProvider**: [`Web3AccountProvider`](Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`_accountProvider`](../classes/Web3Eth.md#_accountprovider)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:51

***

### \_requestManager

> `protected` **\_requestManager**: [`Web3RequestManager`](../classes/Web3RequestManager.md)\<[`Web3EthExecutionAPI`](../type-aliases/Web3EthExecutionAPI.md)\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`_requestManager`](../classes/Web3Eth.md#_requestmanager)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:49

***

### \_subscriptionManager

> `protected` **\_subscriptionManager**: [`Web3SubscriptionManager`](../classes/Web3SubscriptionManager.md)\<[`Web3EthExecutionAPI`](../type-aliases/Web3EthExecutionAPI.md), [`RegisteredSubscription`](../type-aliases/RegisteredSubscription.md)\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`_subscriptionManager`](../classes/Web3Eth.md#_subscriptionmanager)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:50

***

### \_wallet?

> `protected` `optional` **\_wallet**: [`Web3BaseWallet`](../classes/Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`_wallet`](../classes/Web3Eth.md#_wallet)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:52

***

### abi

> **abi**: `object`

#### decodeLog()

> **decodeLog**: \<`ReturnType_1`\>(`inputs`, `data`, `topics`) => `ReturnType_1`

Decodes ABI-encoded log data and indexed topic data.

##### Type Parameters

• **ReturnType_1** *extends* [`DecodedParams`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/DecodedParams.md)

##### Parameters

• **inputs**: readonly [`AbiParameter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiParameter.md)[] \| [`AbiParameter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiParameter.md)[]

A [AbiParameter](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiParameter.md) input array. See the [Solidity documentation](https://docs.soliditylang.org/en/develop/types.html) for a list of types.

• **data**: `string`

The ABI byte code in the `data` field of a log.

• **topics**: `string` \| `string`[]

An array with the index parameter topics of the log, without the topic[0] if its a non-anonymous event, otherwise with topic[0]

##### Returns

`ReturnType_1`

- The result object containing the decoded parameters.

##### Example

```ts
let res = web3.eth.abi.decodeLog(
   [
     {
       type: "string",
       name: "myString",
     },
     {
       type: "uint256",
       name: "myNumber",
       indexed: true,
     },
     {
       type: "uint8",
       name: "mySmallNumber",
       indexed: true,
     },
   ],
   "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000748656c6c6f252100000000000000000000000000000000000000000000000000",
   [
     "0x000000000000000000000000000000000000000000000000000000000000f310",
     "0x0000000000000000000000000000000000000000000000000000000000000010",
   ]
 );
> {
 '0': 'Hello%!',
 '1': 62224n,
 '2': 16n,
 __length__: 3,
 myString: 'Hello%!',
 myNumber: 62224n,
 mySmallNumber: 16n
}
```

#### decodeParameter()

> **decodeParameter**: (`abi`, `bytes`) => `unknown`

Decodes an ABI encoded parameter to its JavaScript type.

##### Parameters

• **abi**: [`AbiInput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiInput.md)

The type of the parameter. See the [Solidity documentation](https://docs.soliditylang.org/en/develop/types.html) for a list of types.

• **bytes**: `string`

The ABI byte code to decode

##### Returns

`unknown`

- The decoded parameter

##### Example

```ts
  const res = web3.eth.abi.decodeParameter(
   "uint256",
   "0x0000000000000000000000000000000000000000000000000000000000000010"
 );
 console.log(res);
> 16n

 const res = web3.eth.abi.decodeParameter(
   "string",
   "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000"
 );

 console.log(res);
 > Hello!%!

 const res = web3.eth.abi.decodeParameter(
   {
     ParentStruct: {
       propertyOne: "uint256",
       propertyTwo: "uint256",
       childStruct: {
         propertyOne: "uint256",
         propertyTwo: "uint256",
       },
     },
   },
   "0x000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000004e"
 );

 console.log(res);
  {
 '0': 42n,
 '1': 56n,
 '2': {
   '0': 45n,
   '1': 78n,
   __length__: 2,
   propertyOne: 45n,
   propertyTwo: 78n
 },
 __length__: 3,
 propertyOne: 42n,
 propertyTwo: 56n,
 childStruct: {
   '0': 45n,
   '1': 78n,
   __length__: 2,
   propertyOne: 45n,
   propertyTwo: 78n
 }
}
```

#### decodeParameters()

> **decodeParameters**: (`abi`, `bytes`) => `object`

Decodes ABI encoded parameters to its JavaScript types.

##### Parameters

• **abi**: readonly [`AbiInput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiInput.md)[] \| [`AbiInput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiInput.md)[]

An array of [AbiInput](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiInput.md). See the [Solidity documentation](https://docs.soliditylang.org/en/develop/types.html) for a list of types.

• **bytes**: `string`

The ABI byte code to decode

##### Returns

`object`

- The result object containing the decoded parameters.

###### \_\_length\_\_

> **\_\_length\_\_**: `number`

##### Example

```ts
let res = web3.eth.abi.decodeParameters(
   ["string", "uint256"],
   "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000"
 );
 console.log(res);
 > { '0': 'Hello!%!', '1': 234n, __length__: 2 }

let res = web3.eth.abi.decodeParameters(
   [
     {
       type: "string",
       name: "myString",
     },
     {
       type: "uint256",
       name: "myNumber",
     },
   ],
   "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000"
 );
console.log(res);
 > {
 '0': 'Hello!%!',
 '1': 234n,
 __length__: 2,
 myString: 'Hello!%!',
 myNumber: 234n
}

const res = web3.eth.abi.decodeParameters(
   [
     "uint8[]",
     {
       ParentStruct: {
         propertyOne: "uint256",
         propertyTwo: "uint256",
         childStruct: {
           propertyOne: "uint256",
           propertyTwo: "uint256",
         },
       },
     },
   ],
   "0x00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000004e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000018"
 );
 console.log(res);
 >
 '0': [ 42n, 24n ],
 '1': {
   '0': 42n,
   '1': 56n,
   '2': {
     '0': 45n,
     '1': 78n,
     __length__: 2,
     propertyOne: 45n,
     propertyTwo: 78n
   },
   __length__: 3,
   propertyOne: 42n,
   propertyTwo: 56n,
   childStruct: {
     '0': 45n,
     '1': 78n,
     __length__: 2,
     propertyOne: 45n,
     propertyTwo: 78n
   }
 },
 __length__: 2,
 ParentStruct: {
   '0': 42n,
   '1': 56n,
   '2': {
     '0': 45n,
     '1': 78n,
     __length__: 2,
     propertyOne: 45n,
     propertyTwo: 78n
   },
   __length__: 3,
   propertyOne: 42n,
   propertyTwo: 56n,
   childStruct: {
     '0': 45n,
     '1': 78n,
     __length__: 2,
     propertyOne: 45n,
     propertyTwo: 78n
   }
 }
}
```

#### encodeEventSignature()

> **encodeEventSignature**: (`functionName`) => `string`

Encodes the function name to its ABI representation, which are the first 4 bytes of the sha3 of the function name including  types.
The JSON interface spec documentation https://docs.soliditylang.org/en/latest/abi-spec.html#json

##### Parameters

• **functionName**: `string` \| [`AbiFunctionFragment`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiFunctionFragment.md)

The function name to encode or the `JSON interface` object of the function.
If the passed parameter is a string, it has to be in the form of `functionName(param1Type,param2Type,...)`. eg: myFunction(uint256,uint32[],bytes10,bytes)

##### Returns

`string`

- The ABI signature of the function.

##### Example

```ts
const signature = web3.eth.abi.encodeFunctionSignature({
  name: "myMethod",
  type: "function",
  inputs: [
    {
      type: "uint256",
      name: "myNumber",
    },
    {
      type: "string",
      name: "myString",
    },
  ],
});
console.log(signature);
> 0x24ee0097

const signature = web3.eth.abi.encodeFunctionSignature('myMethod(uint256,string)')
console.log(signature);
> 0x24ee0097

const signature = web3.eth.abi.encodeFunctionSignature('safeTransferFrom(address,address,uint256,bytes)');
console.log(signature);
> 0xb88d4fde
```

#### encodeFunctionCall()

> **encodeFunctionCall**: (`jsonInterface`, `params`) => `string`

Encodes a function call using its `JSON interface` object and given parameters.
The JSON interface spec documentation https://docs.soliditylang.org/en/latest/abi-spec.html#json

##### Parameters

• **jsonInterface**: [`AbiFunctionFragment`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiFunctionFragment.md)

The `JSON interface` object of the function.

• **params**: `unknown`[]

The parameters to encode

##### Returns

`string`

- The ABI encoded function call, which, means the function signature and the parameters passed.

##### Example

```ts
const sig = web3.eth.abi.encodeFunctionCall(
  {
    name: "myMethod",
    type: "function",
    inputs: [
      {
        type: "uint256",
        name: "myNumber",
      },
      {
        type: "string",
        name: "myString",
      },
    ],
  },
  ["2345675643", "Hello!%"]
);
console.log(sig);
> 0x24ee0097000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000748656c6c6f212500000000000000000000000000000000000000000000000000

const sig = web3.eth.abi.encodeFunctionCall(
  {
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  ["0x1234567890123456789012345678901234567890"]
);

console.log(sig);
> 0x70a082310000000000000000000000001234567890123456789012345678901234567890
```

#### encodeFunctionSignature()

> **encodeFunctionSignature**: (`functionName`) => `string`

Encodes the function name to its ABI representation, which are the first 4 bytes of the sha3 of the function name including  types.
The JSON interface spec documentation https://docs.soliditylang.org/en/latest/abi-spec.html#json

##### Parameters

• **functionName**: `string` \| [`AbiFunctionFragment`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiFunctionFragment.md)

The function name to encode or the `JSON interface` object of the function.
If the passed parameter is a string, it has to be in the form of `functionName(param1Type,param2Type,...)`. eg: myFunction(uint256,uint32[],bytes10,bytes)

##### Returns

`string`

- The ABI signature of the function.

##### Example

```ts
const signature = web3.eth.abi.encodeFunctionSignature({
  name: "myMethod",
  type: "function",
  inputs: [
    {
      type: "uint256",
      name: "myNumber",
    },
    {
      type: "string",
      name: "myString",
    },
  ],
});
console.log(signature);
> 0x24ee0097

const signature = web3.eth.abi.encodeFunctionSignature('myMethod(uint256,string)')
console.log(signature);
> 0x24ee0097

const signature = web3.eth.abi.encodeFunctionSignature('safeTransferFrom(address,address,uint256,bytes)');
console.log(signature);
> 0xb88d4fde
```

#### encodeParameter()

> **encodeParameter**: (`abi`, `param`) => `string`

Encodes a parameter based on its type to its ABI representation.

##### Parameters

• **abi**: [`AbiInput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiInput.md)

The type of the parameter. See the [Solidity documentation](https://docs.soliditylang.org/en/develop/types.html) for a list of types.

• **param**: `unknown`

The actual parameter to encode.

##### Returns

`string`

-  The ABI encoded parameter

##### Example

```ts
 const res = web3.eth.abi.encodeParameter("uint256", "2345675643");
 console.log(res);
 0x000000000000000000000000000000000000000000000000000000008bd02b7b

 const res = web3.eth.abi.encodeParameter("uint", "2345675643");

 console.log(res);
 >0x000000000000000000000000000000000000000000000000000000008bd02b7b

   const res = web3.eth.abi.encodeParameter("bytes32", "0xdf3234");

 console.log(res);
 >0xdf32340000000000000000000000000000000000000000000000000000000000

  const res = web3.eth.abi.encodeParameter("bytes", "0xdf3234");

 console.log(res);
 > 0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003df32340000000000000000000000000000000000000000000000000000000000

  const res = web3.eth.abi.encodeParameter("bytes32[]", ["0xdf3234", "0xfdfd"]);

 console.log(res);
 > 0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002df32340000000000000000000000000000000000000000000000000000000000fdfd000000000000000000000000000000000000000000000000000000000000

 const res = web3.eth.abi.encodeParameter(
   {
     ParentStruct: {
       propertyOne: "uint256",
       propertyTwo: "uint256",
       childStruct: {
         propertyOne: "uint256",
         propertyTwo: "uint256",
       },
     },
   },
   {
     propertyOne: 42,
     propertyTwo: 56,
     childStruct: {
       propertyOne: 45,
       propertyTwo: 78,
     },
   }
 );

 console.log(res);
 > 0x000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000004e
```

#### encodeParameters()

> **encodeParameters**: (`abi`, `params`) => `string`

Encodes a parameter based on its type to its ABI representation.

##### Parameters

• **abi**: readonly [`AbiInput`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiInput.md)[]

An array of [AbiInput](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AbiInput.md). See [Solidity's documentation](https://solidity.readthedocs.io/en/v0.5.3/abi-spec.html#json) for more details.

• **params**: `unknown`[]

The actual parameters to encode.

##### Returns

`string`

- The ABI encoded parameters

##### Example

```ts
const res = web3.eth.abi.encodeParameters(
   ["uint256", "string"],
   ["2345675643", "Hello!%"]
 );

 console.log(res);
 > 0x000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000748656c6c6f212500000000000000000000000000000000000000000000000000
```

#### Defined in

node\_modules/web3/lib/commonjs/types.d.ts:30

***

### accounts

> **accounts**: `object`

#### create()

> **create**: () => [`Web3Account`](Web3Account.md)

##### Returns

[`Web3Account`](Web3Account.md)

#### decrypt()

> **decrypt**: (`keystore`, `password`, `options`?) => `Promise`\<[`Web3Account`](Web3Account.md)\>

##### Parameters

• **keystore**: `string`

• **password**: `string`

• **options?**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

##### Returns

`Promise`\<[`Web3Account`](Web3Account.md)\>

#### encrypt()

> **encrypt**: (`privateKey`, `password`, `options`?) => `Promise`\<[`KeyStore`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)\>

encrypt a private key with a password, returns a V3 JSON Keystore

Read more: https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition

##### Parameters

• **privateKey**: [`Bytes`](../type-aliases/Bytes.md)

The private key to encrypt, 32 bytes.

• **password**: `string` \| `Uint8Array`

The password used for encryption.

• **options?**: [`CipherOptions`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/CipherOptions.md)

Options to configure to encrypt the keystore either scrypt or pbkdf2

##### Returns

`Promise`\<[`KeyStore`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)\>

Returns a V3 JSON Keystore

Encrypt using scrypt options:
```ts

web3.eth.accounts.encrypt(
   '0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a6',
   '123',
   {
       n: 8192,
	    iv: web3.utils.hexToBytes('0xbfb43120ae00e9de110f8325143a2709'),
	    salt: web3.utils.hexToBytes('0x210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd'),
	}).then(console.log)

> {
version: 3,
id: 'c0cb0a94-4702-4492-b6e6-eb2ac404344a',
address: 'cda9a91875fc35c8ac1320e098e584495d66e47c',
crypto: {
  ciphertext: 'cb3e13e3281ff3861a3f0257fad4c9a51b0eb046f9c7821825c46b210f040b8f',
  cipherparams: { iv: 'bfb43120ae00e9de110f8325143a2709' },
  cipher: 'aes-128-ctr',
  kdf: 'scrypt',
  kdfparams: {
    n: 8192,
    r: 8,
    p: 1,
    dklen: 32,
    salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd'
  },
  mac: 'efbf6d3409f37c0084a79d5fdf9a6f5d97d11447517ef1ea8374f51e581b7efd'
}
}
```

Encrypting using pbkdf2 options:
```ts
web3.eth.accounts.encrypt('0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
'123',
{
	iv: 'bfb43120ae00e9de110f8325143a2709',
	salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
	c: 262144,
	kdf: 'pbkdf2',
}).then(console.log)

>
{
  version: 3,
  id: '77381417-0973-4e4b-b590-8eb3ace0fe2d',
  address: 'b8ce9ab6943e0eced004cde8e3bbed6568b2fa01',
  crypto: {
    ciphertext: '76512156a34105fa6473ad040c666ae7b917d14c06543accc0d2dc28e6073b12',
    cipherparams: { iv: 'bfb43120ae00e9de110f8325143a2709' },
    cipher: 'aes-128-ctr',
    kdf: 'pbkdf2',
    kdfparams: {
      dklen: 32,
      salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
      c: 262144,
      prf: 'hmac-sha256'
    },
  mac: '46eb4884e82dc43b5aa415faba53cc653b7038e9d61cc32fd643cf8c396189b7'
  }
}
```

#### hashMessage()

> **hashMessage**: (`message`) => `string`

Hashes the given message. The data will be `UTF-8 HEX` decoded and enveloped as follows:
`"\x19Ethereum Signed Message:\n" + message.length + message` and hashed using keccak256.

##### Parameters

• **message**: `string`

A message to hash, if its HEX it will be UTF8 decoded.

##### Returns

`string`

The hashed message

```ts
web3.eth.accounts.hashMessage("Hello world")

> "0x8144a6fa26be252b86456491fbcd43c1de7e022241845ffea1c3df066f7cfede"

web3.eth.accounts.hashMessage(web3.utils.utf8ToHex("Hello world")) // Will be hex decoded in hashMessage

> "0x8144a6fa26be252b86456491fbcd43c1de7e022241845ffea1c3df066f7cfede"
```

#### parseAndValidatePrivateKey()

> **parseAndValidatePrivateKey**: (`data`, `ignoreLength`?) => `Uint8Array`

##### Parameters

• **data**: [`Bytes`](../type-aliases/Bytes.md)

• **ignoreLength?**: `boolean`

##### Returns

`Uint8Array`

#### privateKeyToAccount()

> **privateKeyToAccount**: (`privateKey`) => [`Web3Account`](Web3Account.md)

##### Parameters

• **privateKey**: `string` \| `Uint8Array`

##### Returns

[`Web3Account`](Web3Account.md)

#### privateKeyToAddress()

> **privateKeyToAddress**: (`privateKey`) => `string`

##### Parameters

• **privateKey**: [`Bytes`](../type-aliases/Bytes.md)

##### Returns

`string`

#### privateKeyToPublicKey()

> **privateKeyToPublicKey**: (`privateKey`, `isCompressed`) => `string`

##### Parameters

• **privateKey**: [`Bytes`](../type-aliases/Bytes.md)

• **isCompressed**: `boolean`

##### Returns

`string`

#### recover()

> **recover**: (`data`, `signatureOrV`?, `prefixedOrR`?, `s`?, `prefixed`?) => `string`

Recovers the Ethereum address which was used to sign the given data

##### Parameters

• **data**: `string` \| [`SignatureObject`](../type-aliases/SignatureObject.md)

Either a signed message, hash, or the signatureObject

• **signatureOrV?**: `string`

signature or V

• **prefixedOrR?**: `string` \| `boolean`

prefixed or R

• **s?**: `string`

S value in signature

• **prefixed?**: `boolean`

(default: false) If the last parameter is true, the given message will NOT automatically be prefixed with `"\\x19Ethereum Signed Message:\\n" + message.length + message`, and assumed to be already prefixed.

##### Returns

`string`

The Ethereum address used to sign this data

```ts
const data = 'Some data';
const sigObj = web3.eth.accounts.sign(data, '0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728')

> {
  message: 'Some data',
  messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
  v: '0x1b',
  r: '0xa8037a6116c176a25e6fc224947fde9e79a2deaa0dd8b67b366fbdfdbffc01f9',
  s: '0x53e41351267b20d4a89ebfe9c8f03c04de9b345add4a52f15bd026b63c8fb150',
  signature: '0xa8037a6116c176a25e6fc224947fde9e79a2deaa0dd8b67b366fbdfdbffc01f953e41351267b20d4a89ebfe9c8f03c04de9b345add4a52f15bd026b63c8fb1501b'
}

// now recover
web3.eth.accounts.recover(data, sigObj.v, sigObj.r, sigObj.s)

> 0xEB014f8c8B418Db6b45774c326A0E64C78914dC0
```

#### recoverTransaction()

> **recoverTransaction**: (`rawTransaction`) => `string`

Recovers the Ethereum address which was used to sign the given RLP encoded transaction.

##### Parameters

• **rawTransaction**: `string`

The hex string having RLP encoded transaction

##### Returns

`string`

The Ethereum address used to sign this transaction
```ts
web3.eth.accounts.recoverTransaction('0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68');
> "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23"
```

#### sign()

> **sign**: (`data`, `privateKey`) => [`SignResult`](../type-aliases/SignResult.md)

Signs arbitrary data with a given private key.
:::info
The value passed as the data parameter will be UTF-8 HEX decoded and wrapped as follows: "\\x19Ethereum Signed Message:\\n" + message.length + message
:::

##### Parameters

• **data**: `string`

The data to sign

• **privateKey**: [`Bytes`](../type-aliases/Bytes.md)

The 32 byte private key to sign with

##### Returns

[`SignResult`](../type-aliases/SignResult.md)

The signature Object containing the message, messageHash, signature r, s, v

```ts
web3.eth.accounts.sign('Some data', '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')
> {
message: 'Some data',
messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
v: '0x1c',
r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029',
signature: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c'
}
```

#### signTransaction()

> **signTransaction**: (`transaction`, `privateKey`) => `Promise`\<[`SignTransactionResult`](../type-aliases/SignTransactionResult.md)\>

##### Parameters

• **transaction**: [`Transaction`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md)

• **privateKey**: [`Bytes`](../type-aliases/Bytes.md)

##### Returns

`Promise`\<[`SignTransactionResult`](../type-aliases/SignTransactionResult.md)\>

#### wallet

> **wallet**: [`Wallet`](../classes/Wallet.md)\<[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)\>

#### Defined in

node\_modules/web3/lib/commonjs/types.d.ts:40

***

### config

> **config**: [`Web3ConfigOptions`](Web3ConfigOptions.md)

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`config`](../classes/Web3Eth.md#config)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:46

***

### Contract

> **Contract**: *typeof* [`Contract`](../classes/Contract.md)

Extended [Contract](/api/web3-eth-contract/class/Contract) constructor for main `web3` object. See [Contract](/api/web3-eth-contract/class/Contract) for further details.

You can use `.setProvider` on this constructor to set provider for **all the instances** of the contracts which were created by `web3.eth.Contract`.
Please check the {@doclink guides/web3_upgrade_guide/providers_migration_guide | following guide} to understand more about setting provider.

```ts
web3.eth.Contract.setProvider(myProvider)
```

#### Defined in

node\_modules/web3/lib/commonjs/types.d.ts:26

***

### ens

> **ens**: [`ENS`](../classes/ENS.md)

#### Defined in

node\_modules/web3/lib/commonjs/types.d.ts:29

***

### getFeeData()

> **getFeeData**: (`baseFeePerGasFactor`?, `alternativeMaxPriorityFeePerGas`?) => `Promise`\<[`FeeData`](FeeData.md)\>

#### Parameters

• **baseFeePerGasFactor?**: `bigint`

• **alternativeMaxPriorityFeePerGas?**: `bigint`

#### Returns

`Promise`\<[`FeeData`](FeeData.md)\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getFeeData`](../classes/Web3Eth.md#getfeedata)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:187

***

### Iban

> **Iban**: *typeof* [`Iban`](../classes/Iban.md)

#### Defined in

node\_modules/web3/lib/commonjs/types.d.ts:27

***

### net

> **net**: [`Net`](../classes/Net.md)

#### Defined in

node\_modules/web3/lib/commonjs/types.d.ts:28

***

### personal

> **personal**: [`Personal`](../classes/Personal.md)

#### Defined in

node\_modules/web3/lib/commonjs/types.d.ts:55

***

### providers

> `readonly` **providers**: `object`

#### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`providers`](../classes/Web3Eth.md#providers)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:45

## Accessors

### accountProvider

#### Get Signature

> **get** **accountProvider**(): `undefined` \| [`Web3AccountProvider`](Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)\>

##### Returns

`undefined` \| [`Web3AccountProvider`](Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`accountProvider`](../classes/Web3Eth.md#accountprovider)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:60

***

### BatchRequest

#### Get Signature

> **get** **BatchRequest**(): () => [`Web3BatchRequest`](../classes/Web3BatchRequest.md)

Will return the [Web3BatchRequest](../classes/Web3BatchRequest.md) constructor.

##### Returns

`Function`

###### Returns

[`Web3BatchRequest`](../classes/Web3BatchRequest.md)

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`BatchRequest`](../classes/Web3Eth.md#batchrequest)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:160

***

### blockHeaderTimeout

#### Get Signature

> **get** **blockHeaderTimeout**(): `number`

The blockHeaderTimeout is used over socket-based connections. This option defines the amount seconds it should wait for `'newBlockHeaders'` event before falling back to polling to fetch transaction receipt.
Default is `10` seconds.

##### Returns

`number`

#### Set Signature

> **set** **blockHeaderTimeout**(`val`): `void`

Will set the blockHeaderTimeout

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`blockHeaderTimeout`](../classes/Web3Eth.md#blockheadertimeout)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:169

***

### contractDataInputFill

#### Get Signature

> **get** **contractDataInputFill**(): `"data"` \| `"input"` \| `"both"`

The `contractDataInputFill` options property will allow you to set the hash of the method signature and encoded parameters to the property
either `data`, `input` or both within your contract.
This will affect the contracts send, call and estimateGas methods
Default is `data`.

##### Returns

`"data"` \| `"input"` \| `"both"`

#### Set Signature

> **set** **contractDataInputFill**(`val`): `void`

Will set the contractDataInputFill

##### Parameters

• **val**: `"data"` \| `"input"` \| `"both"`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`contractDataInputFill`](../classes/Web3Eth.md#contractdatainputfill)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:70

***

### currentProvider

#### Get Signature

> **get** **currentProvider**(): `undefined` \| [`Web3BaseProvider`](../classes/Web3BaseProvider.md)\<`API`\>

Will return the current provider. (The same as `provider`)

##### Example

```ts
const web3Context = new Web3Context("http://localhost:8545");
console.log(web3Context.provider);
> HttpProvider {
	clientUrl: 'http://localhost:8545',
	httpProviderOptions: undefined
 }
```

##### Returns

`undefined` \| [`Web3BaseProvider`](../classes/Web3BaseProvider.md)\<`API`\>

Returns the current provider

#### Set Signature

> **set** **currentProvider**(`provider`): `void`

Will set the current provider. (The same as `provider`)

##### Example

```ts
 const web3Context = new Web3Context("http://localhost:8545");
web3Context.currentProvider = "ws://localhost:8545";
console.log(web3Context.provider);
> WebSocketProvider {
_eventEmitter: EventEmitter {
_events: [Object: null prototype] {},
_eventsCount: 0,
...
}
```

##### Parameters

• **provider**: `undefined` \| `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

[SupportedProviders](../type-aliases/SupportedProviders.md) The provider to set

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`currentProvider`](../classes/Web3Eth.md#currentprovider)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:123

***

### customTransactionSchema

#### Get Signature

> **get** **customTransactionSchema**(): `undefined` \| [`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md)

##### Returns

`undefined` \| [`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md)

#### Set Signature

> **set** **customTransactionSchema**(`schema`): `void`

##### Parameters

• **schema**: `undefined` \| [`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`customTransactionSchema`](../classes/Web3Eth.md#customtransactionschema)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:255

***

### defaultAccount

#### Get Signature

> **get** **defaultAccount**(): `undefined` \| `string`

This default address is used as the default `from` property, if no `from` property is specified in for the following methods:
- web3.eth.sendTransaction()
- web3.eth.call()
- myContract.methods.myMethod().call()
- myContract.methods.myMethod().send()

##### Returns

`undefined` \| `string`

#### Set Signature

> **set** **defaultAccount**(`val`): `void`

Will set the default account.

##### Parameters

• **val**: `undefined` \| `string`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultAccount`](../classes/Web3Eth.md#defaultaccount)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:82

***

### defaultBlock

#### Get Signature

> **get** **defaultBlock**(): [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is `"latest"`.
- web3.eth.getBalance()
- web3.eth.getCode()
- web3.eth.getTransactionCount()
- web3.eth.getStorageAt()
- web3.eth.call()
- myContract.methods.myMethod().call()

##### Returns

[`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

#### Set Signature

> **set** **defaultBlock**(`val`): `void`

Will set the default block.

- A block number
- `"earliest"` - String: The genesis block
- `"latest"` - String: The latest block (current head of the blockchain)
- `"pending"` - String: The currently mined block (including pending transactions)
- `"finalized"` - String: (For POS networks) The finalized block is one which has been accepted as canonical by greater than 2/3 of validators
- `"safe"` - String: (For POS networks) The safe head block is one which under normal network conditions, is expected to be included in the canonical chain. Under normal network conditions the safe head and the actual tip of the chain will be equivalent (with safe head trailing only by a few seconds). Safe heads will be less likely to be reorged than the proof of work network's latest blocks.

##### Parameters

• **val**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultBlock`](../classes/Web3Eth.md#defaultblock)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:96

***

### defaultChain

#### Get Signature

> **get** **defaultChain**(): `string`

##### Returns

`string`

#### Set Signature

> **set** **defaultChain**(`val`): `void`

##### Parameters

• **val**: `string`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultChain`](../classes/Web3Eth.md#defaultchain)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:195

***

### defaultCommon

#### Get Signature

> **get** **defaultCommon**(): `undefined` \| [`Common`](Common.md)

Will get the default common property
The default common property does contain the following Common object:
- `customChain` - `Object`: The custom chain properties
	- `name` - `string`: (optional) The name of the chain
	- `networkId` - `number`: Network ID of the custom chain
	- `chainId` - `number`: Chain ID of the custom chain
- `baseChain` - `string`: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
- `hardfork` - `string`: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, or london
Default is `undefined`.

##### Returns

`undefined` \| [`Common`](Common.md)

#### Set Signature

> **set** **defaultCommon**(`val`): `void`

Will set the default common property

##### Parameters

• **val**: `undefined` \| [`Common`](Common.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultCommon`](../classes/Web3Eth.md#defaultcommon)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:235

***

### defaultHardfork

#### Get Signature

> **get** **defaultHardfork**(): `string`

Will return the default hardfork. Default is `london`
The default hardfork property can be one of the following:
- `chainstart`
- `homestead`
- `dao`
- `tangerineWhistle`
- `spuriousDragon`
- `byzantium`
- `constantinople`
- `petersburg`
- `istanbul`
- `berlin`
- `london`
- 'arrowGlacier',
- 'tangerineWhistle',
- 'muirGlacier'

##### Returns

`string`

#### Set Signature

> **set** **defaultHardfork**(`val`): `void`

Will set the default hardfork.

##### Parameters

• **val**: `string`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultHardfork`](../classes/Web3Eth.md#defaulthardfork)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:216

***

### defaultMaxPriorityFeePerGas

#### Get Signature

> **get** **defaultMaxPriorityFeePerGas**(): [`Numbers`](../type-aliases/Numbers.md)

##### Returns

[`Numbers`](../type-aliases/Numbers.md)

#### Set Signature

> **set** **defaultMaxPriorityFeePerGas**(`val`): `void`

##### Parameters

• **val**: [`Numbers`](../type-aliases/Numbers.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultMaxPriorityFeePerGas`](../classes/Web3Eth.md#defaultmaxpriorityfeepergas)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:249

***

### defaultNetworkId

#### Get Signature

> **get** **defaultNetworkId**(): `undefined` \| [`Numbers`](../type-aliases/Numbers.md)

##### Returns

`undefined` \| [`Numbers`](../type-aliases/Numbers.md)

#### Set Signature

> **set** **defaultNetworkId**(`val`): `void`

##### Parameters

• **val**: `undefined` \| [`Numbers`](../type-aliases/Numbers.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultNetworkId`](../classes/Web3Eth.md#defaultnetworkid)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:193

***

### defaultReturnFormat

#### Get Signature

> **get** **defaultReturnFormat**(): [`DataFormat`](../type-aliases/DataFormat.md)

##### Returns

[`DataFormat`](../type-aliases/DataFormat.md)

#### Set Signature

> **set** **defaultReturnFormat**(`val`): `void`

##### Parameters

• **val**: [`DataFormat`](../type-aliases/DataFormat.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultReturnFormat`](../classes/Web3Eth.md#defaultreturnformat)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:191

***

### defaultTransactionType

#### Get Signature

> **get** **defaultTransactionType**(): [`Numbers`](../type-aliases/Numbers.md)

##### Returns

[`Numbers`](../type-aliases/Numbers.md)

#### Set Signature

> **set** **defaultTransactionType**(`val`): `void`

##### Parameters

• **val**: [`Numbers`](../type-aliases/Numbers.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`defaultTransactionType`](../classes/Web3Eth.md#defaulttransactiontype)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:247

***

### enableExperimentalFeatures

#### Get Signature

> **get** **enableExperimentalFeatures**(): `object`

The enableExperimentalFeatures is used to enable trying new experimental features that are still not fully implemented or not fully tested or still have some related issues.
Default is `false` for every feature.

##### Returns

`object`

###### useRpcCallSpecification

> **useRpcCallSpecification**: `boolean`

###### useSubscriptionWhenCheckingBlockTimeout

> **useSubscriptionWhenCheckingBlockTimeout**: `boolean`

#### Set Signature

> **set** **enableExperimentalFeatures**(`val`): `void`

Will set the enableExperimentalFeatures

##### Parameters

• **val**

• **val.useRpcCallSpecification**: `boolean`

• **val.useSubscriptionWhenCheckingBlockTimeout**: `boolean`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`enableExperimentalFeatures`](../classes/Web3Eth.md#enableexperimentalfeatures)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:178

***

### givenProvider

#### Get Signature

> **get** **givenProvider**(): `undefined` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\>

Will return the givenProvider if available.

When using web3.js in an Ethereum compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise `undefined`.

##### Returns

`undefined` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`givenProvider`](../classes/Web3Eth.md#givenprovider-1)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:148

***

### handleRevert

#### Get Signature

> **get** **handleRevert**(): `boolean`

The `handleRevert` options property returns the revert reason string if enabled for the following methods:
- web3.eth.sendTransaction()
- web3.eth.call()
- myContract.methods.myMethod().call()
- myContract.methods.myMethod().send()
Default is `false`.

`Note`: At the moment `handleRevert` is only supported for `sendTransaction` and not for `sendSignedTransaction`

##### Returns

`boolean`

#### Set Signature

> **set** **handleRevert**(`val`): `void`

Will set the handleRevert

##### Parameters

• **val**: `boolean`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`handleRevert`](../classes/Web3Eth.md#handlerevert)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:59

***

### ignoreGasPricing

#### Get Signature

> **get** **ignoreGasPricing**(): `boolean`

Will get the ignoreGasPricing property. When true, the gasPrice, maxPriorityFeePerGas, and maxFeePerGas will not be autofilled in the transaction object.
 Useful when you want wallets to handle gas pricing.

##### Returns

`boolean`

#### Set Signature

> **set** **ignoreGasPricing**(`val`): `void`

##### Parameters

• **val**: `boolean`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`ignoreGasPricing`](../classes/Web3Eth.md#ignoregaspricing)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:245

***

### maxListenersWarningThreshold

#### Get Signature

> **get** **maxListenersWarningThreshold**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **maxListenersWarningThreshold**(`val`): `void`

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`maxListenersWarningThreshold`](../classes/Web3Eth.md#maxlistenerswarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:189

***

### provider

#### Get Signature

> **get** **provider**(): `undefined` \| [`Web3BaseProvider`](../classes/Web3BaseProvider.md)\<`API`\>

Will return the current provider.

##### Example

```ts
const web3 = new Web3Context("http://localhost:8545");
console.log(web3.provider);
> HttpProvider {
	clientUrl: 'http://localhost:8545',
	httpProviderOptions: undefined
 }
```

##### Returns

`undefined` \| [`Web3BaseProvider`](../classes/Web3BaseProvider.md)\<`API`\>

Returns the current provider

#### Set Signature

> **set** **provider**(`provider`): `void`

Will set the current provider.

##### Example

```ts
 const web3Context = new web3ContextContext("http://localhost:8545");
web3Context.provider = "ws://localhost:8545";
console.log(web3Context.provider);
> WebSocketProvider {
_eventEmitter: EventEmitter {
_events: [Object: null prototype] {},
_eventsCount: 0,
...
}
```

##### Parameters

• **provider**: `undefined` \| `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

The provider to set

Accepted providers are of type [SupportedProviders](../type-aliases/SupportedProviders.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`provider`](../classes/Web3Eth.md#provider)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:88

***

### requestManager

#### Get Signature

> **get** **requestManager**(): [`Web3RequestManager`](../classes/Web3RequestManager.md)\<`API`\>

##### Returns

[`Web3RequestManager`](../classes/Web3RequestManager.md)\<`API`\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`requestManager`](../classes/Web3Eth.md#requestmanager)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:54

***

### subscriptionManager

#### Get Signature

> **get** **subscriptionManager**(): [`Web3SubscriptionManager`](../classes/Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

Will return the current subscriptionManager ([Web3SubscriptionManager](../classes/Web3SubscriptionManager.md))

##### Returns

[`Web3SubscriptionManager`](../classes/Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`subscriptionManager`](../classes/Web3Eth.md#subscriptionmanager)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:58

***

### transactionBlockTimeout

#### Get Signature

> **get** **transactionBlockTimeout**(): `number`

The `transactionBlockTimeout` is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
Default is `50`.

##### Returns

`number`

#### Set Signature

> **set** **transactionBlockTimeout**(`val`): `void`

Will set the transactionBlockTimeout.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionBlockTimeout`](../classes/Web3Eth.md#transactionblocktimeout)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:122

***

### transactionBuilder

#### Get Signature

> **get** **transactionBuilder**(): `undefined` \| [`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\>

##### Returns

`undefined` \| [`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\>

#### Set Signature

> **set** **transactionBuilder**(`val`): `void`

##### Parameters

• **val**: `undefined` \| [`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\>

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionBuilder`](../classes/Web3Eth.md#transactionbuilder)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:251

***

### transactionConfirmationBlocks

#### Get Signature

> **get** **transactionConfirmationBlocks**(): `number`

This defines the number of blocks it requires until a transaction is considered confirmed.
Default is `24`.

##### Returns

`number`

#### Set Signature

> **set** **transactionConfirmationBlocks**(`val`): `void`

Will set the transactionConfirmationBlocks.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionConfirmationBlocks`](../classes/Web3Eth.md#transactionconfirmationblocks)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:131

***

### transactionConfirmationPollingInterval

#### Get Signature

> **get** **transactionConfirmationPollingInterval**(): `undefined` \| `number`

##### Returns

`undefined` \| `number`

#### Set Signature

> **set** **transactionConfirmationPollingInterval**(`val`): `void`

##### Parameters

• **val**: `undefined` \| `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionConfirmationPollingInterval`](../classes/Web3Eth.md#transactionconfirmationpollinginterval)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:163

***

### transactionPollingInterval

#### Get Signature

> **get** **transactionPollingInterval**(): `number`

Used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
Default is `1000` ms.

##### Returns

`number`

#### Set Signature

> **set** **transactionPollingInterval**(`val`): `void`

Will set the transactionPollingInterval.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionPollingInterval`](../classes/Web3Eth.md#transactionpollinginterval)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:140

***

### transactionPollingTimeout

#### Get Signature

> **get** **transactionPollingTimeout**(): `number`

Used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
Default is `750` seconds (12.5 minutes).

##### Returns

`number`

#### Set Signature

> **set** **transactionPollingTimeout**(`val`): `void`

Will set the transactionPollingTimeout.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionPollingTimeout`](../classes/Web3Eth.md#transactionpollingtimeout)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:149

***

### transactionReceiptPollingInterval

#### Get Signature

> **get** **transactionReceiptPollingInterval**(): `undefined` \| `number`

The `transactionPollingInterval` is used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
Default is `undefined`

##### Returns

`undefined` \| `number`

#### Set Signature

> **set** **transactionReceiptPollingInterval**(`val`): `void`

Will set the transactionReceiptPollingInterval

##### Parameters

• **val**: `undefined` \| `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionReceiptPollingInterval`](../classes/Web3Eth.md#transactionreceiptpollinginterval)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:158

***

### transactionSendTimeout

#### Get Signature

> **get** **transactionSendTimeout**(): `number`

The time used to wait for Ethereum Node to return the sent transaction result.
Note: If the RPC call stuck at the Node and therefor timed-out, the transaction may still be pending or even mined by the Network. We recommend checking the pending transactions in such a case.
Default is `750` seconds (12.5 minutes).

##### Returns

`number`

#### Set Signature

> **set** **transactionSendTimeout**(`val`): `void`

Will set the transactionSendTimeout.

##### Parameters

• **val**: `number`

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionSendTimeout`](../classes/Web3Eth.md#transactionsendtimeout)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:113

***

### transactionTypeParser

#### Get Signature

> **get** **transactionTypeParser**(): `undefined` \| [`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md)

##### Returns

`undefined` \| [`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md)

#### Set Signature

> **set** **transactionTypeParser**(`val`): `void`

##### Parameters

• **val**: `undefined` \| [`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md)

##### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`transactionTypeParser`](../classes/Web3Eth.md#transactiontypeparser)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:253

***

### wallet

#### Get Signature

> **get** **wallet**(): `undefined` \| [`Web3BaseWallet`](../classes/Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)\>

##### Returns

`undefined` \| [`Web3BaseWallet`](../classes/Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`wallet`](../classes/Web3Eth.md#wallet)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:59

## Methods

### calculateFeeData()

> **calculateFeeData**(`baseFeePerGasFactor`?, `alternativeMaxPriorityFeePerGas`?): `Promise`\<[`FeeData`](FeeData.md)\>

Calculates the current Fee Data.
If the node supports EIP-1559, then `baseFeePerGas` and `maxPriorityFeePerGas` will be returned along with the calculated `maxFeePerGas` value.
`maxFeePerGas` is calculated as `baseFeePerGas` * `baseFeePerGasFactor` + `maxPriorityFeePerGas`.
If the node does not support EIP-1559, then the `gasPrice` will be returned and the other values will be undefined.

#### Parameters

• **baseFeePerGasFactor?**: `bigint`

(optional) The factor to multiply the `baseFeePerGas` with when calculating `maxFeePerGas`, if the node supports EIP-1559. The default value is 2.

• **alternativeMaxPriorityFeePerGas?**: `bigint`

(optional) The alternative `maxPriorityFeePerGas` to use when calculating `maxFeePerGas`, if the node supports EIP-1559, but does not support the method `eth_maxPriorityFeePerGas`. The default value is 1 gwei.

#### Returns

`Promise`\<[`FeeData`](FeeData.md)\>

The current fee data.

```ts
web3.eth.calculateFeeData().then(console.log);
> {
    gasPrice: 20000000000n,
    maxFeePerGas: 60000000000n,
    maxPriorityFeePerGas: 20000000000n,
    baseFeePerGas: 20000000000n
}

web3.eth.calculateFeeData(1n).then(console.log);
> {
    gasPrice: 20000000000n,
    maxFeePerGas: 40000000000n,
    maxPriorityFeePerGas: 20000000000n,
    baseFeePerGas: 20000000000n
}

web3.eth.calculateFeeData(3n).then(console.log);
> {
    gasPrice: 20000000000n,
    maxFeePerGas: 80000000000n,
    maxPriorityFeePerGas: 20000000000n,
    baseFeePerGas: 20000000000n
}
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`calculateFeeData`](../classes/Web3Eth.md#calculatefeedata)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:186

***

### call()

> **call**\<`ReturnFormat`\>(`transaction`, `blockNumber`?, `returnFormat`?): `Promise`\<[`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]\>

Executes a message call within the EVM without creating a transaction.
It does not publish anything to the blockchain and does not consume any gas.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **transaction**: [`TransactionCall`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionCall.md)

A transaction object where all properties are optional except `to`, however it's recommended to include the `from` property or it may default to `0x0000000000000000000000000000000000000000` depending on your node or provider.

• **blockNumber?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

([BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) - Specifies what block to use as the current state of the blockchain while processing the transaction.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) - Specifies how the return data from the call should be formatted.

#### Returns

`Promise`\<[`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]\>

The returned data of the call, e.g. a smart contract function's return value.

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`call`](../classes/Web3Eth.md#call)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1325

***

### clearSubscriptions()

> **clearSubscriptions**(`notClearSyncing`?): `undefined` \| `Promise`\<`string`[]\>

Resets subscriptions.

#### Parameters

• **notClearSyncing?**: `boolean`

If `true` it keeps the `syncing` subscription.

#### Returns

`undefined` \| `Promise`\<`string`[]\>

A promise to an array of subscription ids that were cleared.

```ts
web3.eth.clearSubscriptions().then(console.log);
> [...] An array of subscription ids that were cleared
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`clearSubscriptions`](../classes/Web3Eth.md#clearsubscriptions)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1824

***

### createAccessList()

> **createAccessList**\<`ReturnFormat`\>(`transaction`, `blockNumber`?, `returnFormat`?): `Promise`\<`object`\>

This method generates an access list for a transaction.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **transaction**: [`TransactionForAccessList`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionForAccessList.md)

A transaction object where all properties are optional except `from`, however it's recommended to include the `to` property.

• **blockNumber?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

([BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) - Specifies what block to use as the current state of the blockchain while processing the transaction.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) - Specifies how the return data from the createAccessList should be formatted.

#### Returns

`Promise`\<`object`\>

The returned data of the createAccessList,  e.g. The generated access list for transaction.

##### accessList?

> `readonly` `optional` **accessList**: `object`[]

##### gasUsed?

> `readonly` `optional` **gasUsed**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

#### Example

```ts
web3.eth.createAccessList({
from: '0xDe95305a63302C3aa4d3A9B42654659AeA72b694',
data: '0x9a67c8b100000000000000000000000000000000000000000000000000000000000004d0',
gasPrice: '0x3b9aca00',
gas: '0x3d0900',
to: '0x940b25304947ae863568B3804434EC77E2160b87'
})
.then(console.log);

> {
 "accessList": [
    {
      "address": "0x15859bdf5aff2080a9968f6a410361e9598df62f",
      "storageKeys": [
        "0x0000000000000000000000000000000000000000000000000000000000000000"
      ]
    }
  ],
  "gasUsed": "0x7671"
}
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`createAccessList`](../classes/Web3Eth.md#createaccesslist)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1662

***

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

• **params**: `object`\[`K`\]

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`emit`](../classes/Web3Eth.md#emit)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

***

### estimateGas()

> **estimateGas**\<`ReturnFormat`\>(`transaction`, `blockNumber`?, `returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

Simulates the transaction within the EVM to estimate the amount of gas to be used by the transaction.
The transaction will not be added to the blockchain, and actual gas usage can vary when interacting
with a contract as a result of updating the contract's state.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **transaction**: [`Transaction`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md)

The [Transaction](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md) object to estimate the gas for.

• **blockNumber?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

([BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) - Specifies how the return data from the call should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The used gas for the simulated transaction execution.

```ts
const transaction = {
      from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
      to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
      value: '0x1',
      nonce: '0x1',
      type: '0x0'
}

web3.eth.estimateGas(transaction).then(console.log);
> 21000n

web3.eth.estimateGas(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
> 21000
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`estimateGas`](../classes/Web3Eth.md#estimategas)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1352

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`eventNames`](../classes/Web3Eth.md#eventnames)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

***

### extend()

> **extend**(`extendObj`): `this`

This method allows extending the web3 modules.
Note: This method is only for backward compatibility, and It is recommended to use Web3 v4 Plugin feature for extending web3.js functionality if you are developing something new.

#### Parameters

• **extendObj**: [`ExtensionObject`](ExtensionObject.md)

#### Returns

`this`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`extend`](../classes/Web3Eth.md#extend)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:165

***

### getAccounts()

> **getAccounts**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

A list of accounts the node controls (addresses are checksummed).

```ts
web3.eth.getAccounts().then(console.log);
> ["0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "0xDCc6960376d6C6dEa93647383FfB245CfCed97Cf"]
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getAccounts`](../classes/Web3Eth.md#getaccounts)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:196

***

### getBalance()

> **getBalance**\<`ReturnFormat`\>(`address`, `blockNumber`?, `returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

Get the balance of an address at a given block.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **address**: `string`

The address to get the balance of.

• **blockNumber?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

([BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) Specifies what block to use as the current state for the balance query.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The current balance for the given address in `wei`.

```ts
web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
> 1000000000000n

web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
> "0xe8d4a51000"
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getBalance`](../classes/Web3Eth.md#getbalance)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:226

***

### getBlock()

> **getBlock**\<`ReturnFormat`\>(`block`?, `hydrated`?, `returnFormat`?): `Promise`\<`object`\>

Retrieves a [Block](../classes/Block.md) matching the provided block number, block hash or block tag.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **block?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

The [BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) (defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) or block hash of the desired block.

• **hydrated?**: `boolean`

If specified `true`, the returned block will contain all transactions as objects. If `false` it will only contain transaction hashes.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted (does not format transaction objects or hashes).

#### Returns

`Promise`\<`object`\>

A [Block](../classes/Block.md) object matching the provided block number or block hash.

```ts
web3.eth.getBlock(0).then(console.log);
> {
   hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   miner: '0x0000000000000000000000000000000000000000',
   stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   difficulty: 1n,
   number: 0n,
   gasLimit: 30000000n,
   gasUsed: 0n,
   timestamp: 1658281638n,
   extraData: '0x',
   mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   nonce: 0n,
   totalDifficulty: 1n,
   baseFeePerGas: 1000000000n,
   size: 514n,
   transactions: [],
   uncles: []
 }

web3.eth.getBlock(
     "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
     false,
     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
> {
   hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   miner: '0x0000000000000000000000000000000000000000',
   stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   difficulty: 1,
   number: 0,
   gasLimit: 30000000,
   gasUsed: 0,
   timestamp: 1658281638,
   extraData: '0x',
   mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   nonce: 0,
   totalDifficulty: 1,
   baseFeePerGas: 1000000000,
   size: 514,
   transactions: [],
   uncles: []
 }
```

##### baseFeePerGas?

> `optional` **baseFeePerGas**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### difficulty?

> `optional` **difficulty**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### extraData

> **extraData**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### gasLimit

> **gasLimit**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### gasUsed

> **gasUsed**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### hash?

> `optional` **hash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### logsBloom?

> `optional` **logsBloom**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### miner

> **miner**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### mixHash

> **mixHash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### nonce

> **nonce**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### number

> **number**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### parentHash

> **parentHash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### receiptsRoot

> **receiptsRoot**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### sha3Uncles

> **sha3Uncles**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### size

> **size**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### stateRoot

> **stateRoot**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### timestamp

> **timestamp**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### totalDifficulty

> **totalDifficulty**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### transactions

> **transactions**: `string`[] \| `object`[]

##### transactionsRoot

> **transactionsRoot**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### uncles

> **uncles**: `string`[]

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getBlock`](../classes/Web3Eth.md#getblock)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:346

***

### getBlockNumber()

> **getBlockNumber**\<`ReturnFormat`\>(`returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The current block number.

```ts
web3.eth.getBlockNumber().then(console.log);
> 2744n

web3.eth.getBlockNumber({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
> "0xab8"
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getBlockNumber`](../classes/Web3Eth.md#getblocknumber)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:209

***

### getBlockTransactionCount()

> **getBlockTransactionCount**\<`ReturnFormat`\>(`block`?, `returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **block?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

The [BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) (defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) or block hash of the desired block.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The number of transactions in the provided block.

```ts
web3.eth.getBlockTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
> 1n

web3.eth.getBlockTransactionCount(
    "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
> 1
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getBlockTransactionCount`](../classes/Web3Eth.md#getblocktransactioncount)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:423

***

### getBlockUncleCount()

> **getBlockUncleCount**\<`ReturnFormat`\>(`block`?, `returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **block?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

The [BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) (defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) or block hash of the desired block.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The number of [uncles](https://ethereum.org/en/glossary/#ommer) in the provided block.

```ts
web3.eth.getBlockUncleCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
> 1n

web3.eth.getBlockUncleCount(
    "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
> 1
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getBlockUncleCount`](../classes/Web3Eth.md#getblockunclecount)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:440

***

### getChainId()

> **getChainId**\<`ReturnFormat`\>(`returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) - Specifies how the return data from the call should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The chain ID of the current connected node as described in the [EIP-695](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-695.md).

```ts
web3.eth.getChainId().then(console.log);
> 61n

web3.eth.getChainId({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
> 61
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getChainId`](../classes/Web3Eth.md#getchainid)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1472

***

### getCode()

> **getCode**\<`ReturnFormat`\>(`address`, `blockNumber`?, `returnFormat`?): `Promise`\<[`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]\>

Get the code at a specific address.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **address**: `string`

The address to get the code from.

• **blockNumber?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

([BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) Specifies what block to use as the current state for the code query.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]\>

The [data](https://ethereum.org/en/developers/docs/transactions/#the-data-field) at the provided `address`.

```ts
web3.eth.getCode("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234").then(console.log);
> "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"

web3.eth.getCode(
     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
     undefined,
     { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
).then(console.log);
> Uint8Array(50) [
  96,  1,  96,   0, 128, 53, 129, 26, 129, 129, 129,
  20, 96,  18,  87, 131,  1,   0, 91,  96,  27,  96,
  1, 53,  96,  37,  86, 91, 128, 96,   0,  82,  96,
  32, 96,   0, 242,  91, 96,   0, 96,   7, 130,   2,
  144, 80, 145, 144,  80, 86
]
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getCode`](../classes/Web3Eth.md#getcode)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:281

***

### getCoinbase()

> **getCoinbase**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

Returns the coinbase address to which mining rewards will go.

```ts
web3.eth.getCoinbase().then(console.log);
> "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getCoinbase`](../classes/Web3Eth.md#getcoinbase)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:84

***

### getContextObject()

> **getContextObject**(): [`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<[`Web3EthExecutionAPI`](../type-aliases/Web3EthExecutionAPI.md), [`RegisteredSubscription`](../type-aliases/RegisteredSubscription.md)\>

#### Returns

[`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<[`Web3EthExecutionAPI`](../type-aliases/Web3EthExecutionAPI.md), [`RegisteredSubscription`](../type-aliases/RegisteredSubscription.md)\>

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getContextObject`](../classes/Web3Eth.md#getcontextobject)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:62

***

### getFeeHistory()

> **getFeeHistory**\<`ReturnFormat`\>(`blockCount`, `newestBlock`, `rewardPercentiles`, `returnFormat`?): `Promise`\<`object`\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **blockCount**: [`Numbers`](../type-aliases/Numbers.md)

Number of blocks in the requested range. Between `1` and `1024` blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.

• **newestBlock**: `undefined` \| [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

Highest number block of the requested range.

• **rewardPercentiles**: [`Numbers`](../type-aliases/Numbers.md)[]

A monotonically increasing list of percentile values to sample from each block’s effective priority fees per gas in ascending order, weighted by gas used. Example: `['0', '25', '50', '75', '100']` or `['0', '0.5', '1', '1.5', '3', '80']`

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) - Specifies how the return data from the call should be formatted.

#### Returns

`Promise`\<`object`\>

`baseFeePerGas` and transaction effective `priorityFeePerGas` history for the requested block range if available.
The range between `headBlock - 4` and `headBlock` is guaranteed to be available while retrieving data from the `pending` block and older history are optional to support.
For pre-EIP-1559 blocks the `gasPrice`s are returned as `rewards` and zeroes are returned for the `baseFeePerGas`.

```ts
web3.eth.getFeeHistory(4, 'pending', [0, 25, 75, 100]).then(console.log);
> {
    baseFeePerGas: [
        22983878621n,
        21417903463n,
        19989260230n,
        17770954829n,
        18850641304n
    ],
    gasUsedRatio: [
        0.22746546666666667,
        0.2331871,
        0.05610054885262125,
        0.7430227268212117
    ],
    oldestBlock: 15216343n,
    reward: [
        [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
        [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
        [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
        [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
    ]
}

web3.eth.getFeeHistory(4, BlockTags.LATEST, [0, 25, 75, 100], { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
> {
    baseFeePerGas: [
        22983878621,
        21417903463,
        19989260230,
        17770954829,
        18850641304
    ],
    gasUsedRatio: [
        0.22746546666666667,
        0.2331871,
        0.05610054885262125,
        0.7430227268212117
    ],
    oldestBlock: 15216343,
    reward: [
        [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
        [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
        [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
        [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
    ]
}
```

##### baseFeePerGas

> `readonly` **baseFeePerGas**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\][]

##### gasUsedRatio

> `readonly` **gasUsedRatio**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\][]

##### oldestBlock

> `readonly` **oldestBlock**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### reward

> `readonly` **reward**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\][][]

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getFeeHistory`](../classes/Web3Eth.md#getfeehistory)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1625

***

### getGasPrice()

> **getGasPrice**\<`ReturnFormat`\>(`returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The gas price determined by the last few blocks median gas price.

```ts
web3.eth.getGasPrice().then(console.log);
> 20000000000n

web3.eth.getGasPrice({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
> "0x4a817c800"
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getGasPrice`](../classes/Web3Eth.md#getgasprice)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:136

***

### ~~getHashrate()~~

> **getHashrate**\<`ReturnFormat`\>(`returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The number of hashes per second that the node is mining with.

```ts
web3.eth.getHashrate().then(console.log);
> 493736n

web3.eth.getHashrate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
> "0x788a8"
```

#### Deprecated

Will be removed in the future, please use [Web3Eth.getHashRate](../classes/Web3Eth.md#gethashrate-1) method instead.

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getHashrate`](../classes/Web3Eth.md#gethashrate)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:110

***

### getHashRate()

> **getHashRate**\<`ReturnFormat`\>(`returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The number of hashes per second that the node is mining with.

```ts
web3.eth.getHashRate().then(console.log);
> 493736n

web3.eth.getHashRate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
> "0x788a8"
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getHashRate`](../classes/Web3Eth.md#gethashrate-1)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:123

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getMaxListeners`](../classes/Web3Eth.md#getmaxlisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

***

### getMaxPriorityFeePerGas()

> **getMaxPriorityFeePerGas**\<`ReturnFormat`\>(`returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

the current maxPriorityFeePerGas per gas in wei.

```ts
web3.eth.getMaxPriorityFeePerGas().then(console.log);
> 20000000000n

web3.eth.getMaxPriorityFeePerGas({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
> "0x4a817c800"
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getMaxPriorityFeePerGas`](../classes/Web3Eth.md#getmaxpriorityfeepergas)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:149

***

### getNodeInfo()

> **getNodeInfo**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

The current client version.

```ts
web3.eth.getNodeInfo().then(console.log);
> "Mist/v0.9.3/darwin/go1.4.1"
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getNodeInfo`](../classes/Web3Eth.md#getnodeinfo)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1481

***

### getPastLogs()

> **getPastLogs**\<`ReturnFormat`\>(`filter`, `returnFormat`?): `Promise`\<(`string` \| `object`)[]\>

Gets past logs, matching the provided `filter`.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **filter**: [`Filter`](Filter.md)

A [Filter](Filter.md) object containing the properties for the desired logs.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) - Specifies how the return data from the call should be formatted.

#### Returns

`Promise`\<(`string` \| `object`)[]\>

[FilterResultsAPI](../type-aliases/FilterResultsAPI.md), an array of [Log](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Log.md) objects.

```ts
web3.eth.getPastLogs({
     address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
     topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
 }).then(console.log);
> [{
      data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
      logIndex: 0n,
      transactionIndex: 0n,
      transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
      blockNumber: 1234n,
      address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
  },
  {...}]

web3.eth.getPastLogs(
    {
      address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
      topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
    },
    { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
> [{
      data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
      logIndex: 0,
      transactionIndex: 0,
      transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
      blockNumber: 1234,
      address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
  },
  {...}]
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getPastLogs`](../classes/Web3Eth.md#getpastlogs)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1397

***

### getPendingTransactions()

> **getPendingTransactions**\<`ReturnFormat`\>(`returnFormat`?): `Promise`\<`object`[]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<`object`[]\>

A list of pending transactions.

```ts
web3.eth.getPendingTransactions().then(console.log);
> [
     {
         hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
         type: 0n,
         nonce: 0n,
         blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
         blockNumber: null,
         transactionIndex: 0n,
         from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
         to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
         value: 1n,
         gas: 90000n,
         gasPrice: 2000000000n,
         input: '0x',
         v: 2709n,
         r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
         s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
     },
     {
         hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
         type: 0n,
         nonce: 1n,
         blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
         blockNumber: null,
         transactionIndex: 0n,
         from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
         to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
         value: 1n,
         gas: 90000n,
         gasPrice: 2000000000n,
         input: '0x',
         v: 2710n,
         r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
         s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
     }
  ]

* web3.eth.getPendingTransactions({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
> [
     {
         hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
         type: 0,
         nonce: 0,
         blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
         blockNumber: null,
         transactionIndex: 0,
         from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
         to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
         value: 1,
         gas: 90000,
         gasPrice: 2000000000,
         input: '0x',
         v: 2709,
         r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
         s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
     },
     {
         hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
         type: 0,
         nonce: 1,
         blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
         blockNumber: null,
         transactionIndex: 0,
         from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
         to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
         value: 1,
         gas: 90000,
         gasPrice: 2000000000,
         input: '0x',
         v: 2710,
         r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
         s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
     }
  ]
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getPendingTransactions`](../classes/Web3Eth.md#getpendingtransactions)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:767

***

### getProof()

> **getProof**\<`ReturnFormat`\>(`address`, `storageKeys`, `blockNumber`?, `returnFormat`?): `Promise`\<`object`\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **address**: `string`

The Address of the account or contract.

• **storageKeys**: [`Bytes`](../type-aliases/Bytes.md)[]

Array of storage-keys which should be proofed and included. See web3.getStorageAt.

• **blockNumber?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

([BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) - Specifies how the return data from the call should be formatted.

#### Returns

`Promise`\<`object`\>

The account and storage-values of the specified account including the Merkle-proof as described in [EIP-1186](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1186.md).

```ts
web3.eth.getProof(
    "0x1234567890123456789012345678901234567890",
    ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
    "latest"
).then(console.log);
> {
    "address": "0x1234567890123456789012345678901234567890",
    "accountProof": [
        "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
        "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
        "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
        "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
    ],
    "balance": 0n,
    "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
    "nonce": 0n,
    "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "storageProof": [
        {
            "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "value": 0n,
            "proof": []
        },
        {
            "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
            "value": 0n,
            "proof": []
        }
    ]
}

web3.eth.getProof(
    "0x1234567890123456789012345678901234567890",
    ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
    undefined,
    { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
> {
    "address": "0x1234567890123456789012345678901234567890",
    "accountProof": [
        "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
        "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
        "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
        "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
    ],
    "balance": 0,
    "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
    "nonce": 0,
    "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "storageProof": [
        {
            "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "value": 0,
            "proof": []
        },
        {
            "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
            "value": 0,
            "proof": []
        }
    ]
}
```

##### accountProof

> `readonly` **accountProof**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\][]

##### balance

> `readonly` **balance**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### codeHash

> `readonly` **codeHash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### nonce

> `readonly` **nonce**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### storageHash

> `readonly` **storageHash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### storageProof

> `readonly` **storageProof**: `object`[]

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getProof`](../classes/Web3Eth.md#getproof)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1554

***

### getProtocolVersion()

> **getProtocolVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

Returns the ethereum protocol version of the node.

```ts
web3.eth.getProtocolVersion().then(console.log);
> "63"
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getProtocolVersion`](../classes/Web3Eth.md#getprotocolversion)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:58

***

### getStorageAt()

> **getStorageAt**\<`ReturnFormat`\>(`address`, `storageSlot`, `blockNumber`?, `returnFormat`?): `Promise`\<[`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]\>

Get the storage at a specific position of an address.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **address**: `string`

The address to get the storage from.

• **storageSlot**: [`Numbers`](../type-aliases/Numbers.md)

The index position of the storage.

• **blockNumber?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

([BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) Specifies what block to use as the current state for the storage query.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]\>

The value in storage at the given position.

```ts
web3.eth.getStorageAt("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234", 0).then(console.log);
> "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"

web3.eth.getStorageAt(
     "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234",
     0,
     undefined,
     { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
).then(console.log);
> Uint8Array(31) [
      3, 52,  86, 115,  33,  35, 255, 255,
      35, 66,  52,  45, 209,  35,  66,  67,
      67, 36,  35,  66,  52, 253,  35,  79,
      210, 63, 212, 242,  61,  66,  52
   ]
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getStorageAt`](../classes/Web3Eth.md#getstorageat)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:254

***

### getTransaction()

> **getTransaction**\<`ReturnFormat`\>(`transactionHash`, `returnFormat`?): `Promise`\<`object` \| `object` \| `object`\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **transactionHash**: [`Bytes`](../type-aliases/Bytes.md)

The hash of the desired transaction.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<`object` \| `object` \| `object`\>

The desired transaction object.

```ts
web3.eth.getTransaction('0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc').then(console.log);
{
   hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   type: 0n,
   nonce: 0n,
   blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   blockNumber: 1n,
   transactionIndex: 0n,
   from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   value: 1n,
   gas: 90000n,
   gasPrice: 2000000000n,
   input: '0x',
   v: 2709n,
   r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
 }

web3.eth.getTransaction(
    web3.utils.hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
    { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
{
   hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   type: 0,
   nonce: 0,
   blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   blockNumber: 1,
   transactionIndex: 0,
   from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   value: 1,
   gas: 90000,
   gasPrice: 2000000000,
   input: '0x',
   v: 2709,
   r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
 }
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getTransaction`](../classes/Web3Eth.md#gettransaction)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:613

***

### getTransactionCount()

> **getTransactionCount**\<`ReturnFormat`\>(`address`, `blockNumber`?, `returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **address**: `string`

The address to get the number of transactions for.

• **blockNumber?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

([BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) Specifies what block to use as the current state for the query.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

The number of transactions sent from the provided address.

```ts
web3.eth.getTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
> 1n

web3.eth.getTransactionCount(
    "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    undefined,
    { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
> 1
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getTransactionCount`](../classes/Web3Eth.md#gettransactioncount)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1036

***

### getTransactionFromBlock()

> **getTransactionFromBlock**\<`ReturnFormat`\>(`block`, `transactionIndex`, `returnFormat`?): `Promise`\<`undefined` \| `object` \| `object` \| `object`\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **block**: `undefined` \| [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

The [BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) (defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) or block hash of the desired block.

• **transactionIndex**: [`Numbers`](../type-aliases/Numbers.md)

The index position of the transaction.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<`undefined` \| `object` \| `object` \| `object`\>

The desired transaction object.

```ts
web3.eth.getTransactionFromBlock('0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00', 0).then(console.log);
{
   hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   type: 0n,
   nonce: 0n,
   blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   blockNumber: 1n,
   transactionIndex: 0n,
   from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   value: 1n,
   gas: 90000n,
   gasPrice: 2000000000n,
   input: '0x',
   v: 2709n,
   r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
 }

web3.eth.getTransactionFromBlock(
    hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
    0,
    { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
{
   hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   type: 0,
   nonce: 0,
   blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   blockNumber: 1,
   transactionIndex: 0,
   from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   value: 1,
   gas: 90000,
   gasPrice: 2000000000,
   input: '0x',
   v: 2709,
   r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
 }
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getTransactionFromBlock`](../classes/Web3Eth.md#gettransactionfromblock)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:852

***

### getTransactionMiddleware()

> **getTransactionMiddleware**(): `undefined` \| [`TransactionMiddleware`](TransactionMiddleware.md)

#### Returns

`undefined` \| [`TransactionMiddleware`](TransactionMiddleware.md)

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getTransactionMiddleware`](../classes/Web3Eth.md#gettransactionmiddleware)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:49

***

### getTransactionReceipt()

> **getTransactionReceipt**\<`ReturnFormat`\>(`transactionHash`, `returnFormat`?): `Promise`\<`object`\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **transactionHash**: [`Bytes`](../type-aliases/Bytes.md)

Hash of the transaction to retrieve the receipt for.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<`object`\>

The desired [TransactionReceipt](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md) object.

```ts
web3.eth.getTransactionReceipt("0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f").then(console.log);
> {
     transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
     transactionIndex: 0n,
     blockNumber: 2n,
     blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
     from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     cumulativeGasUsed: 21000n,
     gasUsed: 21000n,
     logs: [],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     status: 1n,
     effectiveGasPrice: 2000000000n,
     type: 0n
 }

web3.eth.getTransactionReceipt(
     "0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f",
     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
> {
     transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
     transactionIndex: 0,
     blockNumber: 2,
     blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
     from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     cumulativeGasUsed: 21000,
     gasUsed: 21000,
     logs: [],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     status: 1,
     effectiveGasPrice: 2000000000,
     type: 0n
 }
```

##### blockHash

> `readonly` **blockHash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### blockNumber

> `readonly` **blockNumber**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### contractAddress?

> `readonly` `optional` **contractAddress**: `string`

##### cumulativeGasUsed

> `readonly` **cumulativeGasUsed**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### effectiveGasPrice?

> `readonly` `optional` **effectiveGasPrice**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### events?

> `optional` **events**: `object`

###### Index Signature

 \[`x`: `string`\]: `object`

##### from

> `readonly` **from**: `string`

##### gasUsed

> `readonly` **gasUsed**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### logs

> `readonly` **logs**: `object`[]

##### logsBloom

> `readonly` **logsBloom**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### root

> `readonly` **root**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### status

> `readonly` **status**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### to

> `readonly` **to**: `string`

##### transactionHash

> `readonly` **transactionHash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### transactionIndex

> `readonly` **transactionIndex**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### type?

> `readonly` `optional` **type**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getTransactionReceipt`](../classes/Web3Eth.md#gettransactionreceipt)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:968

***

### getUncle()

> **getUncle**\<`ReturnFormat`\>(`block`, `uncleIndex`, `returnFormat`?): `Promise`\<`object`\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **block**: `undefined` \| [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

The [BlockNumberOrTag](../type-aliases/BlockNumberOrTag.md) (defaults to [Web3Eth.defaultBlock](../classes/Web3Eth.md#defaultblock)) or block hash of the desired block.

• **uncleIndex**: [`Numbers`](../type-aliases/Numbers.md)

The index position of the uncle.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<`object`\>

A blocks [uncle](https://ethereum.org/en/glossary/#ommer) by a given uncle index position.

```ts
web3.eth.getUncle(0, 1).then(console.log);
> {
   hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   miner: '0x0000000000000000000000000000000000000000',
   stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   difficulty: 1n,
   number: 0n,
   gasLimit: 30000000n,
   gasUsed: 0n,
   timestamp: 1658281638n,
   extraData: '0x',
   mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   nonce: 0n,
   totalDifficulty: 1n,
   baseFeePerGas: 1000000000n,
   size: 514n,
   transactions: [],
   uncles: []
 }

web3.eth.getUncle(
     "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
     1,
     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
).then(console.log);
> {
   hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   miner: '0x0000000000000000000000000000000000000000',
   stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   difficulty: 1,
   number: 0,
   gasLimit: 30000000,
   gasUsed: 0,
   timestamp: 1658281638,
   extraData: '0x',
   mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   nonce: 0,
   totalDifficulty: 1,
   baseFeePerGas: 1000000000,
   size: 514,
   transactions: [],
   uncles: []
 }
```

##### baseFeePerGas?

> `readonly` `optional` **baseFeePerGas**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### difficulty?

> `readonly` `optional` **difficulty**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### extraData

> `readonly` **extraData**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### gasLimit

> `readonly` **gasLimit**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### gasUsed

> `readonly` **gasUsed**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### hash?

> `readonly` `optional` **hash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### logsBloom?

> `readonly` `optional` **logsBloom**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### miner

> `readonly` **miner**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### mixHash

> `readonly` **mixHash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### nonce

> `readonly` **nonce**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### number

> `readonly` **number**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### parentHash

> `readonly` **parentHash**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### receiptsRoot

> `readonly` **receiptsRoot**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### sha3Uncles

> `readonly` **sha3Uncles**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### size

> `readonly` **size**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### stateRoot

> `readonly` **stateRoot**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### timestamp

> `readonly` **timestamp**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### totalDifficulty

> `readonly` **totalDifficulty**: [`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]

##### transactions

> `readonly` **transactions**: `string`[] \| `object`[]

##### transactionsRoot

> `readonly` **transactionsRoot**: [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]

##### uncles

> `readonly` **uncles**: `string`[]

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getUncle`](../classes/Web3Eth.md#getuncle)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:504

***

### getWork()

> **getWork**(): `Promise`\<[`string`, `string`, `string`]\>

Gets work for miners to mine on. Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').

#### Returns

`Promise`\<[`string`, `string`, `string`]\>

The mining work as an array of strings with the following structure:

String 32 Bytes - at index 0: current block header pow-hash
String 32 Bytes - at index 1: the seed hash used for the DAG.
String 32 Bytes - at index 2: the boundary condition ('target'), 2^256 / difficulty.

```ts
web3.eth.getWork().then(console.log);
> [
    "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
    "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
]
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`getWork`](../classes/Web3Eth.md#getwork)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1427

***

### isMining()

> **isMining**(): `Promise`\<`boolean`\>

Checks whether the node is mining or not.

#### Returns

`Promise`\<`boolean`\>

`true` if the node is mining, otherwise `false`.

```ts
web3.eth.isMining().then(console.log);
> true
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`isMining`](../classes/Web3Eth.md#ismining)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:95

***

### isSyncing()

> **isSyncing**(): `Promise`\<[`SyncingStatusAPI`](../type-aliases/SyncingStatusAPI.md)\>

Checks if the node is currently syncing.

#### Returns

`Promise`\<[`SyncingStatusAPI`](../type-aliases/SyncingStatusAPI.md)\>

Either a [SyncingStatusAPI](../type-aliases/SyncingStatusAPI.md), or `false`.

```ts
web3.eth.isSyncing().then(console.log);
> {
    startingBlock: 100,
    currentBlock: 312,
    highestBlock: 512,
    knownStates: 234566,
    pulledStates: 123455
}
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`isSyncing`](../classes/Web3Eth.md#issyncing)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:75

***

### link()

> **link**\<`T`\>(`parentContext`): `void`

Link current context to another context.

#### Type Parameters

• **T** *extends* [`Web3Context`](../classes/Web3Context.md)\<`unknown`, `any`\>

#### Parameters

• **parentContext**: `T`

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`link`](../classes/Web3Eth.md#link)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:72

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`): `number`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

#### Returns

`number`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`listenerCount`](../classes/Web3Eth.md#listenercount)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:17

***

### listeners()

> **listeners**\<`K`\>(`eventName`): (...`args`) => `void`[]

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`listeners`](../classes/Web3Eth.md#listeners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`off`](../classes/Web3Eth.md#off)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`on`](../classes/Web3Eth.md#on)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:13

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`once`](../classes/Web3Eth.md#once)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

***

### registerPlugin()

> **registerPlugin**(`plugin`): `void`

#### Parameters

• **plugin**: [`Web3PluginBase`](../classes/Web3PluginBase.md)\<`unknown`\>

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`registerPlugin`](../classes/Web3Eth.md#registerplugin)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:73

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`removeAllListeners`](../classes/Web3Eth.md#removealllisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

***

### requestAccounts()

> **requestAccounts**(): `Promise`\<`string`[]\>

This method will request/enable the accounts from the current environment and for supporting [EIP 1102](https://eips.ethereum.org/EIPS/eip-1102)
This method will only work if you’re using the injected provider from a application like Metamask, Status or TrustWallet.
It doesn’t work if you’re connected to a node with a default Web3.js provider (WebsocketProvider, HttpProvider and IpcProvider).
For more information about the behavior of this method please read [EIP-1102](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md): Opt-in account exposure.

#### Returns

`Promise`\<`string`[]\>

An array of enabled accounts.

```ts
web3.eth.requestAccounts().then(console.log);
> ['0aae0B295369a9FD31d5F28D9Ec85E40f4cb692BAf', '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe']
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`requestAccounts`](../classes/Web3Eth.md#requestaccounts)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1459

***

### sendSignedTransaction()

> **sendSignedTransaction**\<`ReturnFormat`\>(`transaction`, `returnFormat`?, `options`?): [`Web3PromiEvent`](../classes/Web3PromiEvent.md)\<[`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), [`SendSignedTransactionEvents`](../type-aliases/SendSignedTransactionEvents.md)\<`ReturnFormat`\>\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **transaction**: [`Bytes`](../type-aliases/Bytes.md)

Signed transaction in one of the valid [Bytes](../type-aliases/Bytes.md) format.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

• **options?**: [`SendTransactionOptions`](SendTransactionOptions.md)\<[`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)\>

A configuration object used to change the behavior of the method

#### Returns

[`Web3PromiEvent`](../classes/Web3PromiEvent.md)\<[`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), [`SendSignedTransactionEvents`](../type-aliases/SendSignedTransactionEvents.md)\<`ReturnFormat`\>\>

If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
```ts
const signedTransaction = "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"

const transactionHash = await web3.eth.sendSignedTransaction(signedTransaction);
console.log(transactionHash);
> 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700

web3.eth.sendSignedTransaction(signedTransaction).then(console.log);
> 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700

web3.eth.sendSignedTransaction(signedTransaction).catch(console.log);
> <Some TransactionError>
```

Otherwise, a [Web3PromiEvent](../classes/Web3PromiEvent.md) is returned which has several events than can be listened to using the `.on` syntax, such as:
- `sending`
```ts
web3.eth.sendSignedTransaction(signedTransaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
> "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
```
- `sent`
```ts
web3.eth.sendSignedTransaction(signedTransaction).on('sent', sentTransaction => console.log(sentTransaction));
> "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
```
- `transactionHash`
```ts
web3.eth.sendSignedTransaction(signedTransaction).on('transactionHash', transactionHash => console.log(transactionHash));
> 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
```
- `receipt`
```ts
web3.eth.sendSignedTransaction(signedTransaction).on('receipt', receipt => console.log(receipt));
> {
     blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
     blockNumber: 1n,
     cumulativeGasUsed: 21000n,
     effectiveGasPrice: 1000000001n,
     from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     gasUsed: 21000n,
     logs: [],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     status: 1n,
     to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
     transactionIndex: 0n,
     type: 0n
}
```
- `confirmation`
```ts
web3.eth.sendSignedTransaction(signedTransaction).on('confirmation', confirmation => console.log(confirmation));
> {
    confirmations: 1n,
    receipt: {
         blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
         blockNumber: 1n,
         cumulativeGasUsed: 21000n,
         effectiveGasPrice: 1000000001n,
         from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
         gasUsed: 21000n,
         logs: [],
         logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
         status: 1n,
         to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
         transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
         transactionIndex: 0n,
         type: 0n
    },
    latestBlockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081'
}
```
- `error`
```ts
web3.eth.sendSignedTransaction(signedTransaction).on('error', error => console.log(error));
> <Some TransactionError>
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`sendSignedTransaction`](../classes/Web3Eth.md#sendsignedtransaction)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1228

***

### sendTransaction()

> **sendTransaction**\<`ReturnFormat`\>(`transaction`, `returnFormat`?, `options`?): [`Web3PromiEvent`](../classes/Web3PromiEvent.md)\<[`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), [`SendTransactionEvents`](../type-aliases/SendTransactionEvents.md)\<`ReturnFormat`\>\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **transaction**: [`Transaction`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md) \| [`TransactionWithFromLocalWalletIndex`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionWithFromLocalWalletIndex.md) \| [`TransactionWithToLocalWalletIndex`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionWithToLocalWalletIndex.md) \| [`TransactionWithFromAndToLocalWalletIndex`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionWithFromAndToLocalWalletIndex.md)

The [Transaction](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md), [TransactionWithFromLocalWalletIndex](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionWithFromLocalWalletIndex.md), [TransactionWithToLocalWalletIndex](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionWithToLocalWalletIndex.md) or [TransactionWithFromAndToLocalWalletIndex](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionWithFromAndToLocalWalletIndex.md) to send. __Note:__ In the `to` and `from` fields when hex strings are used, it is assumed they are addresses, for any other form (number, string number, etc.) it is assumed they are wallet indexes.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

• **options?**: [`SendTransactionOptions`](SendTransactionOptions.md)\<[`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)\>

A configuration object used to change the behavior of the `sendTransaction` method.

#### Returns

[`Web3PromiEvent`](../classes/Web3PromiEvent.md)\<[`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md), [`SendTransactionEvents`](../type-aliases/SendTransactionEvents.md)\<`ReturnFormat`\>\>

If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
```ts
const transaction = {
  from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
  to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
  value: '0x1'
}

const transactionHash = await web3.eth.sendTransaction(transaction);
console.log(transactionHash);
> 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f

web3.eth.sendTransaction(transaction).then(console.log);
> 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f

web3.eth.sendTransaction(transaction).catch(console.log);
> <Some TransactionError>

// Example using options.ignoreGasPricing = true
web3.eth.sendTransaction(transaction, undefined, { ignoreGasPricing: true }).then(console.log);
> 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
```

Otherwise, a [Web3PromiEvent](../classes/Web3PromiEvent.md) is returned which has several events than can be listened to using the `.on` syntax, such as:
- `sending`
```ts
web3.eth.sendTransaction(transaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
> {
   from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   value: '0x1',
   gasPrice: '0x77359400',
   maxPriorityFeePerGas: undefined,
   maxFeePerGas: undefined
}
```
- `sent`
```ts
web3.eth.sendTransaction(transaction).on('sent', sentTransaction => console.log(sentTransaction));
> {
   from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   value: '0x1',
   gasPrice: '0x77359400',
   maxPriorityFeePerGas: undefined,
   maxFeePerGas: undefined
}
```
- `transactionHash`
```ts
web3.eth.sendTransaction(transaction).on('transactionHash', transactionHash => console.log(transactionHash));
> 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
```
- `receipt`
```ts
web3.eth.sendTransaction(transaction).on('receipt', receipt => console.log(receipt));
> {
     transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
     transactionIndex: 0n,
     blockNumber: 2n,
     blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
     from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     cumulativeGasUsed: 21000n,
     gasUsed: 21000n,
     logs: [],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     status: 1n,
     effectiveGasPrice: 2000000000n,
     type: 0n
}
```
- `confirmation`
```ts
web3.eth.sendTransaction(transaction).on('confirmation', confirmation => console.log(confirmation));
> {
    confirmations: 1n,
    receipt: {
        transactionHash: '0xb4a3a35ae0f3e77ef0ff7be42010d948d011b21a4e341072ee18717b67e99ab8',
        transactionIndex: 0n,
        blockNumber: 5n,
        blockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548',
        from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
        to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
        cumulativeGasUsed: 21000n,
        gasUsed: 21000n,
        logs: [],
        logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        status: 1n,
        effectiveGasPrice: 2000000000n,
        type: 0n
    },
    latestBlockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548'
}
```
- `error`
```ts
web3.eth.sendTransaction(transaction).on('error', error => console.log);
> <Some TransactionError>
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`sendTransaction`](../classes/Web3Eth.md#sendtransaction)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1143

***

### setConfig()

> **setConfig**(`options`): `void`

#### Parameters

• **options**: [`Partial`](../type-aliases/Partial.md)\<[`Web3ConfigOptions`](Web3ConfigOptions.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`setConfig`](../classes/Web3Eth.md#setconfig)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:48

***

### setMaxListenerWarningThreshold()

> **setMaxListenerWarningThreshold**(`maxListenersWarningThreshold`): `void`

#### Parameters

• **maxListenersWarningThreshold**: `number`

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`setMaxListenerWarningThreshold`](../classes/Web3Eth.md#setmaxlistenerwarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21

***

### setProvider()

> **setProvider**(`provider`?): `boolean`

Will set the provider.

#### Parameters

• **provider?**: `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<[`Web3EthExecutionAPI`](../type-aliases/Web3EthExecutionAPI.md)\>

[SupportedProviders](../type-aliases/SupportedProviders.md) The provider to set

#### Returns

`boolean`

Returns true if the provider was set

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`setProvider`](../classes/Web3Eth.md#setprovider)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:155

***

### setRequestManagerMiddleware()

> **setRequestManagerMiddleware**(`requestManagerMiddleware`): `void`

#### Parameters

• **requestManagerMiddleware**: [`RequestManagerMiddleware`](RequestManagerMiddleware.md)\<[`Web3EthExecutionAPI`](../type-aliases/Web3EthExecutionAPI.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`setRequestManagerMiddleware`](../classes/Web3Eth.md#setrequestmanagermiddleware)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:156

***

### setTransactionMiddleware()

> **setTransactionMiddleware**(`transactionMiddleware`): `void`

#### Parameters

• **transactionMiddleware**: [`TransactionMiddleware`](TransactionMiddleware.md)

#### Returns

`void`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`setTransactionMiddleware`](../classes/Web3Eth.md#settransactionmiddleware)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:48

***

### sign()

> **sign**\<`ReturnFormat`\>(`message`, `addressOrIndex`, `returnFormat`?): `Promise`\<`object` \| [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **message**: [`Bytes`](../type-aliases/Bytes.md)

Data to sign in one of the valid [Bytes](../type-aliases/Bytes.md) format.

• **addressOrIndex**: `string` \| `number`

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<`object` \| [`ByteTypes`](../type-aliases/ByteTypes.md)\[`ReturnFormat`\[`"bytes"`\]\]\>

The signed `message`.

```ts
// Using an unlocked account managed by connected RPC client
web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe").then(console.log);
> "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"

// Using an unlocked account managed by connected RPC client
web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.UINT8ARRAY }).then(console.log);
> Uint8Array(65) [
   48, 117,  94, 214,  83, 150, 250, 207, 134, 197,  62,
   98,  23, 197,  43,  77, 174, 190, 114, 170,  73,  65,
  216, 150,  53,  64, 157, 228, 201, 199, 249,  70, 109,
   78, 154, 174, 199, 151, 127,   5, 233,  35, 136, 155,
   51, 192, 208, 221,  39, 215,  34, 107, 110, 111,  86,
  206, 115, 116, 101, 197, 207, 208,  75, 228,   0
]
```

// Using an indexed account managed by local Web3 wallet
web3.eth.sign("0x48656c6c6f20776f726c64", 0).then(console.log);
> "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`sign`](../classes/Web3Eth.md#sign)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1256

***

### signTransaction()

> **signTransaction**\<`ReturnFormat`\>(`transaction`, `returnFormat`?): `Promise`\<[`SignedTransactionInfoAPI`](SignedTransactionInfoAPI.md)\>

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **transaction**: [`Transaction`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md)

The transaction object to sign.

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) Specifies how the return data should be formatted.

#### Returns

`Promise`\<[`SignedTransactionInfoAPI`](SignedTransactionInfoAPI.md)\>

[SignedTransactionInfoAPI](SignedTransactionInfoAPI.md), an object containing the [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/#top) encoded signed transaction (accessed via the `raw` property) and the signed transaction object (accessed via the `tx` property).

```ts
const transaction = {
     from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
     to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
     value: '0x1',
     gas: '21000',
     gasPrice: await web3Eth.getGasPrice(),
     nonce: '0x1',
     type: '0x0'
}

web3.eth.signTransaction(transaction).then(console.log);
> {
  raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
  tx: {
     type: 0n,
     nonce: 1n,
     gasPrice: 1000000001n,
     gas: 21000n,
     value: 1n,
     v: 2710n,
     r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
     s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
     to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     data: '0x'
  }
}

web3.eth.signTransaction(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
> {
  raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
  tx: {
     type: 0,
     nonce: 1,
     gasPrice: 1000000001,
     gas: 21000,
     value: 1,
     v: 2710,
     r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
     s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
     to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     data: '0x'
  }
}
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`signTransaction`](../classes/Web3Eth.md#signtransaction)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1315

***

### signTypedData()

> **signTypedData**\<`ReturnFormat`\>(`address`, `typedData`, `useLegacy`?, `returnFormat`?): `Promise`\<`string`\>

This method sends EIP-712 typed data to the RPC provider to be signed.

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **address**: `string`

The address that corresponds with the private key used to sign the typed data.

• **typedData**: [`Eip712TypedData`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Eip712TypedData.md)

The EIP-712 typed data object.

• **useLegacy?**: `boolean`

A boolean flag determining whether the RPC call uses the legacy method `eth_signTypedData` or the newer method `eth_signTypedData_v4`

• **returnFormat?**: `ReturnFormat`

([DataFormat](../type-aliases/DataFormat.md) defaults to [DEFAULT_RETURN_FORMAT](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/variables/DEFAULT_RETURN_FORMAT.md)) - Specifies how the signed typed data should be formatted.

#### Returns

`Promise`\<`string`\>

The signed typed data.

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`signTypedData`](../classes/Web3Eth.md#signtypeddata)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1678

***

### submitWork()

> **submitWork**(`nonce`, `hash`, `digest`): `Promise`\<`boolean`\>

Used for submitting a proof-of-work solution.

#### Parameters

• **nonce**: `string`

The nonce found (8 bytes).

• **hash**: `string`

The header’s pow-hash (32 bytes).

• **digest**: `string`

The mix digest (32 bytes).

#### Returns

`Promise`\<`boolean`\>

Returns `true` if the provided solution is valid, otherwise `false`.

```ts
web3.eth.submitWork([
    "0x0000000000000001",
    "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
]).then(console.log);
> true
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`submitWork`](../classes/Web3Eth.md#submitwork)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1445

***

### subscribe()

> **subscribe**\<`T`, `ReturnType`\>(`name`, `args`?, `returnFormat`?): `Promise`\<[`InstanceType`](../type-aliases/InstanceType.md)\<[`RegisteredSubscription`](../type-aliases/RegisteredSubscription.md)\[`T`\]\>\>

Lets you subscribe to specific events in the blockchain.

#### Type Parameters

• **T** *extends* keyof [`RegisteredSubscription`](../type-aliases/RegisteredSubscription.md)

• **ReturnType** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = [`DataFormat`](../type-aliases/DataFormat.md)

#### Parameters

• **name**: `T`

The subscription you want to subscribe to.

• **args?**: [`ConstructorParameters`](../type-aliases/ConstructorParameters.md)\<[`RegisteredSubscription`](../type-aliases/RegisteredSubscription.md)\[`T`\]\>\[`0`\]

Optional additional parameters, depending on the subscription type.

• **returnFormat?**: `ReturnType`

#### Returns

`Promise`\<[`InstanceType`](../type-aliases/InstanceType.md)\<[`RegisteredSubscription`](../type-aliases/RegisteredSubscription.md)\[`T`\]\>\>

A subscription object of type [RegisteredSubscription](../type-aliases/RegisteredSubscription.md). The object contains:
 - subscription.id: The subscription id, used to identify and unsubscribing the subscription.
 - subscription.subscribe(): Can be used to re-subscribe with the same parameters.
 - subscription.unsubscribe(): Unsubscribes the subscription and returns TRUE in the callback if successful.
 - subscription.args: The subscription arguments, used when re-subscribing.

You can use the subscription object to listen on:

- on("data") - Fires on each incoming log with the log object as argument.
- on("changed") - Fires on each log which was removed from the blockchain. The log will have the additional property "removed: true".
- on("error") - Fires when an error in the subscription occurs.
- on("connected") - Fires once after the subscription successfully connected. Returns the subscription id.

#### Examples

```ts
// Subscribe to `logs`
const logSubscription = web3.eth.subscribe('logs', {
    address: '0x1234567890123456789012345678901234567890',
    topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
});
logSubscription.on('data', (data: any) => console.log(data));
logSubscription.on('error', (error: any) => console.log(error));

```

```ts
// Subscribe to `newBlockHeaders`
const newBlocksSubscription = await web3.eth.subscribe('newBlockHeaders');

newBlocksSubscription.on('data', async blockhead => {
	console.log('New block header: ', blockhead);

	// You do not need the next line, if you like to keep notified for every new block
	await newBlocksSubscription.unsubscribe();
	console.log('Unsubscribed from new block headers.');
});
newBlocksSubscription.on('error', error =>
	console.log('Error when subscribing to New block header: ', error),
);
```

	### subscribe('pendingTransactions')

Subscribes to incoming pending transactions.
You can subscribe to pending transactions by calling web3.eth.subscribe('pendingTransactions').

```ts
(await web3.eth.subscribe('pendingTransactions')).on('data', console.log);
```

### subscribe('newHeads')
( same as subscribe('newBlockHeaders'))
Subscribes to incoming block headers. This can be used as timer to check for changes on the blockchain.

The structure of a returned block header is [BlockHeaderOutput](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/BlockHeaderOutput.md):

```ts
(await web3.eth.subscribe('newHeads')).on( // 'newBlockHeaders' would work as well
 'data',
console.log
);
>{
parentHash: '0x9e746a1d906b299def98c75b06f714d62dacadd567c7515d76eeaa8c8074c738',
sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
miner: '0x0000000000000000000000000000000000000000',
stateRoot: '0xe0f04b04861ecfa95e82a9310d6a7ef7aef8d7417f5209c182582bfb98a8e307',
transactionsRoot: '0x31ab4ea571a9e10d3a19aaed07d190595b1dfa34e03960c04293fec565dea536',
logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
difficulty: 2n,
number: 21n,
gasLimit: 11738125n,
gasUsed: 830006n,
timestamp: 1678797237n,
extraData: '0xd883010b02846765746888676f312e32302e31856c696e757800000000000000e0a6e93cf40e2e71a72e493272210c3f43738ccc7e7d7b14ffd51833797d896c09117e8dc4fbcbc969bd21b42e5af3e276a911524038c001b2109b63b8e0352601',
nonce: 0n
}
```

### subscribe('syncing')
Subscribe to syncing events. This will return `true` when the node is syncing and when it’s finished syncing will return `false`, for the `changed` event.

```ts
(await web3.eth.subscribe('syncing')).on('changed', console.log);
> `true` // when syncing

(await web3.eth.subscribe('syncing')).on('data', console.log);
> {
     startingBlock: 0,
     currentBlock: 0,
     highestBlock: 0,
     pulledStates: 0,
     knownStates: 0
  }
```

### subscribe('logs', options)
Subscribes to incoming logs, filtered by the given options. If a valid numerical fromBlock options property is set, web3.js will retrieve logs beginning from this point, backfilling the response as necessary.

options: You can subscribe to logs matching a given filter object, which can take the following parameters:
- `fromBlock`: (optional, default: 'latest') Integer block number, or `'latest'` for the last mined block or `'pending'`, `'earliest'` for not yet mined transactions.
- `address`: (optional) Contract address or a list of addresses from which logs should originate.
- `topics`: (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with `or` options.

```ts
 (await web3.eth.subscribe('logs', {
   address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  })).on('data', console.log);

> {
removed: false,
logIndex: 119n,
transactionIndex: 58n,
transactionHash: '0x61533efa77937360215069d5d6cb0be09a22af9721e6dc3df59d957833ed8870',
blockHash: '0xe32bb97084479d32247f66f8b46d00af2fbc3c2db2bc6e5843fe2e4d1ca9b099',
blockNumber: 18771966n,
address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
data: '0x00000000000000000000000000000000000000000000000000000000d88b2e40',
topics: [
'0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
'0x0000000000000000000000002fb2457f6ec1865dc0d4e7300c696b69c2a1b989',
'0x00000000000000000000000027fd43babfbe83a81d14665b1a6fb8030a60c9b4'
]
}
```

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`subscribe`](../classes/Web3Eth.md#subscribe)

#### Defined in

node\_modules/web3-eth/lib/commonjs/web3\_eth.d.ts:1811

***

### use()

> **use**\<`T`, `T2`\>(`ContextRef`, ...`args`): `T`

Use to create new object of any type extended by `Web3Context`
and link it to current context. This can be used to initiate a global context object
and then use it to create new objects of any type extended by `Web3Context`.

#### Type Parameters

• **T** *extends* [`Web3Context`](../classes/Web3Context.md)\<`unknown`, `any`\>

• **T2** *extends* `unknown`[]

#### Parameters

• **ContextRef**: [`Web3ContextConstructor`](../type-aliases/Web3ContextConstructor.md)\<`T`, `T2`\>

• ...**args**: [`...T2[]`]

#### Returns

`T`

#### Inherited from

[`Web3Eth`](../classes/Web3Eth.md).[`use`](../classes/Web3Eth.md#use)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:68
