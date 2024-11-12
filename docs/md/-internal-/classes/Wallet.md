[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Wallet

# Class: Wallet\<T\>

Wallet is an in memory `wallet` that can hold multiple accounts.
These accounts can be used when using web3.eth.sendTransaction() or web3.eth.contract.methods.contractfunction().send();

For using Wallet functionality, install Web3 package using `npm i web3` or `yarn add web3`.
After that, Wallet functionality will be available as mentioned below.

```ts
import { Web3 } from 'web3';
const web3 = new Web3('http://127.0.0.1:7545');

const wallet = await web3.eth.accounts.wallet.create(2);

const signature = wallet.at(0).sign("Test Data"); // use wallet

// fund account before sending following transaction ...

const receipt = await web3.eth.sendTransaction({ // internally sign transaction using wallet
   from: wallet.at(0).address,
   to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
   value: 1
   //....
});
```

## Extends

- [`Web3BaseWallet`](Web3BaseWallet.md)\<`T`\>

## Type Parameters

• **T** *extends* [`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md) = [`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)

## Constructors

### new Wallet()

> **new Wallet**\<`T`\>(`accountProvider`): [`Wallet`](Wallet.md)\<`T`\>

#### Parameters

• **accountProvider**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<`T`\>

#### Returns

[`Wallet`](Wallet.md)\<`T`\>

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`constructor`](Web3BaseWallet.md#constructors)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:71

## Properties

### \_accountProvider

> `protected` `readonly` **\_accountProvider**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<`T`\>

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`_accountProvider`](Web3BaseWallet.md#_accountprovider)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:70

***

### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### \[unscopables\]?

> `readonly` `optional` **\[unscopables\]**: `boolean`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### length?

> `optional` **length**: `boolean`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### \[iterator\]?

> `optional` **\[iterator\]**

#### at?

> `optional` **at**

#### concat?

> `optional` **concat**

#### copyWithin?

> `optional` **copyWithin**

#### entries?

> `optional` **entries**

#### every?

> `optional` **every**

#### fill?

> `optional` **fill**

#### filter?

> `optional` **filter**

#### find?

> `optional` **find**

#### findIndex?

> `optional` **findIndex**

#### flat?

> `optional` **flat**

#### flatMap?

> `optional` **flatMap**

#### forEach?

> `optional` **forEach**

#### includes?

> `optional` **includes**

#### indexOf?

> `optional` **indexOf**

#### join?

> `optional` **join**

#### keys?

> `optional` **keys**

#### lastIndexOf?

> `optional` **lastIndexOf**

#### map?

> `optional` **map**

#### pop?

> `optional` **pop**

#### push?

> `optional` **push**

#### reduce?

> `optional` **reduce**

#### reduceRight?

> `optional` **reduceRight**

#### reverse?

> `optional` **reverse**

#### shift?

> `optional` **shift**

#### slice?

> `optional` **slice**

#### some?

> `optional` **some**

#### sort?

> `optional` **sort**

#### splice?

> `optional` **splice**

#### toLocaleString?

> `optional` **toLocaleString**

#### toString?

> `optional` **toString**

#### unshift?

> `optional` **unshift**

#### values?

> `optional` **values**

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`[unscopables]`](Web3BaseWallet.md#%5Bunscopables%5D)

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

***

### length

> **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`length`](Web3BaseWallet.md#length-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1326

***

### \[species\]

> `readonly` `static` **\[species\]**: `ArrayConstructor`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`[species]`](Web3BaseWallet.md#%5Bspecies%5D)

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`ArrayIterator`](../interfaces/ArrayIterator.md)\<`T`\>

Iterator

#### Returns

[`ArrayIterator`](../interfaces/ArrayIterator.md)\<`T`\>

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`[iterator]`](Web3BaseWallet.md#%5Biterator%5D-1)

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:78

***

### add()

> **add**(`account`): `this`

Adds an account using a private key or account object to the wallet.

#### Parameters

• **account**: `string` \| `T`

A private key or account object

#### Returns

`this`

The wallet

```ts
web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
> Wallet(1) [
  {
    address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
    privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
  },
  _accountProvider: {
    create: [Function: create],
    privateKeyToAccount: [Function: privateKeyToAccount],
    decrypt: [Function: decrypt]
  },
  _addressMap: Map(1) { '0x85d70633b90e03e0276b98880286d0d055685ed7' => 0 },
  _defaultKeyName: 'web3js_wallet'
]
```

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`add`](Web3BaseWallet.md#add)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:100

***

### at()

> **at**(`index`): `undefined` \| `T`

#### Parameters

• **index**: `number`

#### Returns

`undefined` \| `T`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`at`](Web3BaseWallet.md#at-1)

#### Defined in

node\_modules/@types/node/compatibility/indexable.d.ts:7

***

### clear()

> **clear**(): `this`

Securely empties the wallet and removes all its accounts.
Use this with *caution as it will remove all accounts stored in local wallet.

#### Returns

`this`

The wallet object
```ts

web3.eth.accounts.wallet.clear();
> Wallet(0) [
_accountProvider: {
  create: [Function: create],
  privateKeyToAccount: [Function: privateKeyToAccount],
  decrypt: [Function: decrypt]
},
_addressMap: Map(0) {},
_defaultKeyName: 'web3js_wallet'
]
```

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`clear`](Web3BaseWallet.md#clear)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:150

***

### concat()

#### concat(items)

> **concat**(...`items`): `T`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

• ...**items**: [`ConcatArray`](../interfaces/ConcatArray.md)\<`T`\>[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`T`[]

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`concat`](Web3BaseWallet.md#concat-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1350

#### concat(items)

> **concat**(...`items`): `T`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

• ...**items**: (`T` \| [`ConcatArray`](../interfaces/ConcatArray.md)\<`T`\>)[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`T`[]

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`concat`](Web3BaseWallet.md#concat-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1356

***

### copyWithin()

> **copyWithin**(`target`, `start`, `end`?): `this`

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

• **target**: `number`

If target is negative, it is treated as length+target where length is the
length of the array.

• **start**: `number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

• **end?**: `number`

If not specified, length of the this object is used as its default value.

#### Returns

`this`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`copyWithin`](Web3BaseWallet.md#copywithin-1)

#### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:62

***

### create()

> **create**(`numberOfAccounts`): `this`

Generates one or more accounts in the wallet. If wallets already exist they will not be overridden.

#### Parameters

• **numberOfAccounts**: `number`

Number of accounts to create. Leave empty to create an empty wallet.

#### Returns

`this`

The wallet
```ts
web3.eth.accounts.wallet.create(2)
> Wallet(2) [
  {
    address: '0xde38310a42B751AE57d30cFFF4a0A3c52A442fCE',
    privateKey: '0x6422c9d28efdcbee93c1d32a5fc6fd6fa081b985487885296cf8c9bbb5872600',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
  },
  {
    address: '0x766BF755246d924B1d017Fdb5390f38a60166691',
    privateKey: '0x756530f13c0eb636ebdda655335f5dea9921e3362e2e588b0ad59e556f7751f0',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
  },
  _accountProvider: {
    create: [Function: create],
    privateKeyToAccount: [Function: privateKeyToAccount],
    decrypt: [Function: decrypt]
  },
  _addressMap: Map(2) {
    '0xde38310a42b751ae57d30cfff4a0a3c52a442fce' => 0,
    '0x766bf755246d924b1d017fdb5390f38a60166691' => 1
  },
  _defaultKeyName: 'web3js_wallet'
]

```

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`create`](Web3BaseWallet.md#create)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:73

***

### decrypt()

> **decrypt**(`encryptedWallets`, `password`, `options`?): `Promise`\<[`Wallet`](Wallet.md)\<`T`\>\>

Decrypts keystore v3 objects.

#### Parameters

• **encryptedWallets**: [`KeyStore`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)[]

An array of encrypted keystore v3 objects to decrypt

• **password**: `string`

The password to encrypt with

• **options?**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

decrypt options for the wallets

#### Returns

`Promise`\<[`Wallet`](Wallet.md)\<`T`\>\>

The decrypted wallet object

```ts
web3.eth.accounts.wallet.decrypt([
{ version: 3,
id: '83191a81-aaca-451f-b63d-0c5f3b849289',
address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
crypto:
{ ciphertext: '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
  cipherparams: { iv: '497f4d26997a84d570778eae874b2333' },
  cipher: 'aes-128-ctr',
  kdf: 'scrypt',
  kdfparams:
   { dklen: 32,
     salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
     n: 262144,
     r: 8,
     p: 1 },
  mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9' } },
{ version: 3,
id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
crypto:
{ ciphertext: 'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
  cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
  cipher: 'aes-128-ctr',
  kdf: 'scrypt',
  kdfparams:
   { dklen: 32,
     salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
     n: 262144,
     r: 8,
     p: 1 },
  mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0' } }
], 'test').then(console.log)
> Wallet {
  _accountProvider: {
    create: [Function: create],
    privateKeyToAccount: [Function: privateKeyToAccount],
    decrypt: [Function: decrypt]
  },
  _defaultKeyName: 'web3js_wallet',
  _accounts: {
    '0x85d70633b90e03e0276b98880286d0d055685ed7': {
      address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
      signTransaction: [Function: signTransaction],
      sign: [Function: sign],
      encrypt: [Function: encrypt]
    },
    '0x06f702337909c06c82b09b7a22f0a2f0855d1f68': {
      address: '0x06F702337909C06C82B09B7A22F0a2f0855d1F68',
      privateKey: '87a51da18900da7398b3bab03996833138f269f8f66dd1237b98df6b9ce14573',
      signTransaction: [Function: signTransaction],
      sign: [Function: sign],
      encrypt: [Function: encrypt]
    },
    '0xb5d89661b59a9af0b34f58d19138baa2de48baaf': {
      address: '0xB5d89661B59a9aF0b34f58D19138bAa2de48BAaf',
      privateKey: '7ee61c5282979aae9dd795bb6a54e8bdc2bfe009acb64eb9a67322eec3b3da6e',
      signTransaction: [Function: signTransaction],
      sign: [Function: sign],
      encrypt: [Function: encrypt]
    }
  }
}
```

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`decrypt`](Web3BaseWallet.md#decrypt)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:246

***

### encrypt()

> **encrypt**(`password`, `options`?): `Promise`\<[`KeyStore`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)[]\>

Encrypts all wallet accounts to an array of encrypted keystore v3 objects.

#### Parameters

• **password**: `string`

The password which will be used for encryption

• **options?**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

encryption options

#### Returns

`Promise`\<[`KeyStore`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)[]\>

An array of the encrypted keystore v3.

```ts
web3.eth.accounts.wallet.create(1)
web3.eth.accounts.wallet.encrypt("abc").then(console.log);
> [
'{"version":3,"id":"fa46e213-a7c3-4844-b903-dd14d39cc7db",
"address":"fa3e41a401609103c241431cbdee8623ae2a321a","crypto":
{"ciphertext":"8d179a911d6146ad2924e86bf493ed89b8ff3596ffec0816e761c542016ab13c",
"cipherparams":{"iv":"acc888c6cf4a19b86846cef0185a7164"},"cipher":"aes-128-ctr",
"kdf":"scrypt","kdfparams":{"n":8192,"r":8,"p":1,"dklen":32,"salt":"6a743c9b367d15f4758e4f3f3378ff0fd443708d1c64854e07588ea5331823ae"},
"mac":"410544c8307e3691fda305eb3722d82c3431f212a87daa119a21587d96698b57"}}'
]
```

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`encrypt`](Web3BaseWallet.md#encrypt)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:171

***

### entries()

> **entries**(): [`ArrayIterator`](../interfaces/ArrayIterator.md)\<[`number`, `T`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

[`ArrayIterator`](../interfaces/ArrayIterator.md)\<[`number`, `T`]\>

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`entries`](Web3BaseWallet.md#entries-1)

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:83

***

### every()

#### every(predicate, thisArg)

> **every**\<`S`\>(`predicate`, `thisArg`?): `this is S[]`

Determines whether all the members of an array satisfy the specified test.

##### Type Parameters

• **S** *extends* [`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)

##### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`this is S[]`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`every`](Web3BaseWallet.md#every-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1433

#### every(predicate, thisArg)

> **every**(`predicate`, `thisArg`?): `boolean`

Determines whether all the members of an array satisfy the specified test.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`every`](Web3BaseWallet.md#every-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1442

***

### fill()

> **fill**(`value`, `start`?, `end`?): `this`

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

• **value**: `T`

value to fill array section with

• **start?**: `number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

• **end?**: `number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

#### Returns

`this`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`fill`](Web3BaseWallet.md#fill-1)

#### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:51

***

### filter()

#### filter(predicate, thisArg)

> **filter**\<`S`\>(`predicate`, `thisArg`?): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Type Parameters

• **S** *extends* [`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`filter`](Web3BaseWallet.md#filter-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1469

#### filter(predicate, thisArg)

> **filter**(`predicate`, `thisArg`?): `T`[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`T`[]

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`filter`](Web3BaseWallet.md#filter-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1475

***

### find()

#### find(predicate, thisArg)

> **find**\<`S`\>(`predicate`, `thisArg`?): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

• **S** *extends* [`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)

##### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`undefined` \| `S`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`find`](Web3BaseWallet.md#find-1)

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:29

#### find(predicate, thisArg)

> **find**(`predicate`, `thisArg`?): `undefined` \| `T`

##### Parameters

• **predicate**

• **thisArg?**: `any`

##### Returns

`undefined` \| `T`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`find`](Web3BaseWallet.md#find-1)

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:30

***

### findIndex()

> **findIndex**(`predicate`, `thisArg`?): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`findIndex`](Web3BaseWallet.md#findindex-1)

#### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:41

***

### flat()

> **flat**\<`A`, `D`\>(`this`, `depth`?): [`FlatArray`](../type-aliases/FlatArray.md)\<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type Parameters

• **A**

• **D** *extends* `number` = `1`

#### Parameters

• **this**: `A`

• **depth?**: `D`

The maximum recursion depth

#### Returns

[`FlatArray`](../type-aliases/FlatArray.md)\<`A`, `D`\>[]

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`flat`](Web3BaseWallet.md#flat-1)

#### Defined in

node\_modules/typescript/lib/lib.es2019.array.d.ts:75

***

### flatMap()

> **flatMap**\<`U`, `This`\>(`callback`, `thisArg`?): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type Parameters

• **U**

• **This** = `undefined`

#### Parameters

• **callback**

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

• **thisArg?**: `This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`flatMap`](Web3BaseWallet.md#flatmap-1)

#### Defined in

node\_modules/typescript/lib/lib.es2019.array.d.ts:64

***

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Performs the specified action for each element in an array.

#### Parameters

• **callbackfn**

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`forEach`](Web3BaseWallet.md#foreach-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1457

***

### get()

> **get**(`addressOrIndex`): `undefined` \| `T`

Get the account of the wallet with either the index or public address.

#### Parameters

• **addressOrIndex**: `string` \| `number`

A string of the address or number index within the wallet.

#### Returns

`undefined` \| `T`

The account object or undefined if the account doesn't exist

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`get`](Web3BaseWallet.md#get)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:107

***

### includes()

> **includes**(`searchElement`, `fromIndex`?): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

• **searchElement**: `T`

The element to search for.

• **fromIndex?**: `number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`includes`](Web3BaseWallet.md#includes-1)

#### Defined in

node\_modules/typescript/lib/lib.es2016.array.include.d.ts:25

***

### indexOf()

> **indexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

• **searchElement**: `T`

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`indexOf`](Web3BaseWallet.md#indexof-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1418

***

### join()

> **join**(`separator`?): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

• **separator?**: `string`

A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`join`](Web3BaseWallet.md#join-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1361

***

### keys()

> **keys**(): [`ArrayIterator`](../interfaces/ArrayIterator.md)\<`number`\>

Returns an iterable of keys in the array

#### Returns

[`ArrayIterator`](../interfaces/ArrayIterator.md)\<`number`\>

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`keys`](Web3BaseWallet.md#keys-1)

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:88

***

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

• **searchElement**: `T`

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`lastIndexOf`](Web3BaseWallet.md#lastindexof-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1424

***

### load()

> **load**(`password`, `keyName`?): `Promise`\<[`Wallet`](Wallet.md)\<`T`\>\>

Loads a wallet from local storage and decrypts it.
**__NOTE:__** Browser only

#### Parameters

• **password**: `string`

The password to decrypt the wallet.

• **keyName?**: `string`

(optional)The key used for local storage position, defaults to `web3js_wallet"`

#### Returns

`Promise`\<[`Wallet`](Wallet.md)\<`T`\>\>

Returns the wallet object

```ts
web3.eth.accounts.wallet.save('test#!$');
> true
web3.eth.accounts.wallet.load('test#!$');
{ defaultKeyName: "web3js_wallet",
  length: 0,
  _accounts: Accounts {_requestManager: RequestManager, givenProvider: Proxy, providers: {…}, _provider: WebsocketProvider, …},
  [[Prototype]]: Object
}
```

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`load`](Web3BaseWallet.md#load)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:279

***

### map()

> **map**\<`U`\>(`callbackfn`, `thisArg`?): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type Parameters

• **U**

#### Parameters

• **callbackfn**

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`map`](Web3BaseWallet.md#map-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1463

***

### pop()

> **pop**(): `undefined` \| `T`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `T`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`pop`](Web3BaseWallet.md#pop-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1339

***

### push()

> **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

• ...**items**: `T`[]

New elements to add to the array.

#### Returns

`number`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`push`](Web3BaseWallet.md#push-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1344

***

### reduce()

#### reduce(callbackfn)

> **reduce**(`callbackfn`): `T`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

`T`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`reduce`](Web3BaseWallet.md#reduce-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1481

#### reduce(callbackfn, initialValue)

> **reduce**(`callbackfn`, `initialValue`): `T`

##### Parameters

• **callbackfn**

• **initialValue**: `T`

##### Returns

`T`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`reduce`](Web3BaseWallet.md#reduce-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1482

#### reduce(callbackfn, initialValue)

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`reduce`](Web3BaseWallet.md#reduce-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1488

***

### reduceRight()

#### reduceRight(callbackfn)

> **reduceRight**(`callbackfn`): `T`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

`T`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`reduceRight`](Web3BaseWallet.md#reduceright-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1494

#### reduceRight(callbackfn, initialValue)

> **reduceRight**(`callbackfn`, `initialValue`): `T`

##### Parameters

• **callbackfn**

• **initialValue**: `T`

##### Returns

`T`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`reduceRight`](Web3BaseWallet.md#reduceright-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1495

#### reduceRight(callbackfn, initialValue)

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`reduceRight`](Web3BaseWallet.md#reduceright-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1501

***

### remove()

> **remove**(`addressOrIndex`): `boolean`

Removes an account from the wallet.

#### Parameters

• **addressOrIndex**: `string` \| `number`

The account address, or index in the wallet.

#### Returns

`boolean`

true if the wallet was removed. false if it couldn't be found.
```ts
web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');

web3.eth.accounts.wallet.remove('0x85D70633b90e03e0276B98880286D0D055685ed7');
> true
web3.eth.accounts.wallet
> Wallet(0) [
_accountProvider: {
  create: [Function: create],
  privateKeyToAccount: [Function: privateKeyToAccount],
  decrypt: [Function: decrypt]
},
_addressMap: Map(0) {},
_defaultKeyName: 'web3js_wallet'
]
```

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`remove`](Web3BaseWallet.md#remove)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:130

***

### reverse()

> **reverse**(): `T`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`T`[]

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`reverse`](Web3BaseWallet.md#reverse-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1366

***

### save()

> **save**(`password`, `keyName`?): `Promise`\<`boolean`\>

Stores the wallet encrypted and as string in local storage.
**__NOTE:__** Browser only

#### Parameters

• **password**: `string`

The password to encrypt the wallet

• **keyName?**: `string`

(optional) The key used for the local storage position, defaults to `"web3js_wallet"`.

#### Returns

`Promise`\<`boolean`\>

Will return boolean value true if saved properly
```ts
web3.eth.accounts.wallet.save('test#!$');
>true
```

#### Overrides

[`Web3BaseWallet`](Web3BaseWallet.md).[`save`](Web3BaseWallet.md#save)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:259

***

### shift()

> **shift**(): `undefined` \| `T`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `T`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`shift`](Web3BaseWallet.md#shift-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1371

***

### slice()

> **slice**(`start`?, `end`?): `T`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

• **start?**: `number`

The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.

• **end?**: `number`

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.

#### Returns

`T`[]

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`slice`](Web3BaseWallet.md#slice-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1381

***

### some()

> **some**(`predicate`, `thisArg`?): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

• **predicate**

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`some`](Web3BaseWallet.md#some-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1451

***

### sort()

> **sort**(`compareFn`?): `this`

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

• **compareFn?**

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

#### Returns

`this`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`sort`](Web3BaseWallet.md#sort-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1392

***

### splice()

#### splice(start, deleteCount)

> **splice**(`start`, `deleteCount`?): `T`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount?**: `number`

The number of elements to remove.

##### Returns

`T`[]

An array containing the elements that were deleted.

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`splice`](Web3BaseWallet.md#splice-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1399

#### splice(start, deleteCount, items)

> **splice**(`start`, `deleteCount`, ...`items`): `T`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount**: `number`

The number of elements to remove.

• ...**items**: `T`[]

Elements to insert into the array in place of the deleted elements.

##### Returns

`T`[]

An array containing the elements that were deleted.

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`splice`](Web3BaseWallet.md#splice-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1407

***

### toLocaleString()

#### toLocaleString()

> **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`toLocaleString`](Web3BaseWallet.md#tolocalestring-1)

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1334

#### toLocaleString(locales, options)

> **toLocaleString**(`locales`, `options`?): `string`

##### Parameters

• **locales**: `string` \| `string`[]

• **options?**: `NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`toLocaleString`](Web3BaseWallet.md#tolocalestring-1)

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:64

***

### toString()

> **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`toString`](Web3BaseWallet.md#tostring-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1330

***

### unshift()

> **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

• ...**items**: `T`[]

Elements to insert at the start of the array.

#### Returns

`number`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`unshift`](Web3BaseWallet.md#unshift-1)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1412

***

### values()

> **values**(): [`ArrayIterator`](../interfaces/ArrayIterator.md)\<`T`\>

Returns an iterable of values in the array

#### Returns

[`ArrayIterator`](../interfaces/ArrayIterator.md)\<`T`\>

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`values`](Web3BaseWallet.md#values-1)

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:93

***

### from()

#### from(arrayLike)

> `static` **from**\<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

##### Type Parameters

• **T**

##### Parameters

• **arrayLike**: [`ArrayLike`](../interfaces/ArrayLike.md)\<`T`\>

An array-like object to convert to an array.

##### Returns

`T`[]

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`from`](Web3BaseWallet.md#from)

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:72

#### from(arrayLike, mapfn, thisArg)

> `static` **from**\<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg`?): `U`[]

Creates an array from an iterable object.

##### Type Parameters

• **T**

• **U**

##### Parameters

• **arrayLike**: [`ArrayLike`](../interfaces/ArrayLike.md)\<`T`\>

An array-like object to convert to an array.

• **mapfn**

A mapping function to call on every element of the array.

• **thisArg?**: `any`

Value of 'this' used to invoke the mapfn.

##### Returns

`U`[]

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`from`](Web3BaseWallet.md#from)

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:80

#### from(iterable)

> `static` **from**\<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

##### Type Parameters

• **T**

##### Parameters

• **iterable**: [`Iterable`](../interfaces/Iterable.md)\<`T`, `any`, `any`\> \| [`ArrayLike`](../interfaces/ArrayLike.md)\<`T`\>

An iterable object to convert to an array.

##### Returns

`T`[]

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`from`](Web3BaseWallet.md#from)

##### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:101

#### from(iterable, mapfn, thisArg)

> `static` **from**\<`T`, `U`\>(`iterable`, `mapfn`, `thisArg`?): `U`[]

Creates an array from an iterable object.

##### Type Parameters

• **T**

• **U**

##### Parameters

• **iterable**: [`Iterable`](../interfaces/Iterable.md)\<`T`, `any`, `any`\> \| [`ArrayLike`](../interfaces/ArrayLike.md)\<`T`\>

An iterable object to convert to an array.

• **mapfn**

A mapping function to call on every element of the array.

• **thisArg?**: `any`

Value of 'this' used to invoke the mapfn.

##### Returns

`U`[]

##### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`from`](Web3BaseWallet.md#from)

##### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:109

***

### getStorage()

> `static` **getStorage**(): `undefined` \| [`WebStorage`](../interfaces/WebStorage.md)

Get the storage object of the browser

#### Returns

`undefined` \| [`WebStorage`](../interfaces/WebStorage.md)

the storage

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/wallet.d.ts:36

***

### isArray()

> `static` **isArray**(`arg`): `arg is any[]`

#### Parameters

• **arg**: `any`

#### Returns

`arg is any[]`

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`isArray`](Web3BaseWallet.md#isarray)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1513

***

### of()

> `static` **of**\<`T`\>(...`items`): `T`[]

Returns a new array from a set of elements.

#### Type Parameters

• **T**

#### Parameters

• ...**items**: `T`[]

A set of elements to include in the new array object.

#### Returns

`T`[]

#### Inherited from

[`Web3BaseWallet`](Web3BaseWallet.md).[`of`](Web3BaseWallet.md#of)

#### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:86
