[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PayableMethodObject

# Interface: PayableMethodObject\<Inputs, Outputs\>

## Type Parameters

• **Inputs** = `unknown`[]

• **Outputs** = `unknown`[]

## Properties

### arguments

> **arguments**: `Inputs`

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:202

## Methods

### call()

> **call**\<`SpecialOutput`\>(`tx`?, `block`?): `Promise`\<`SpecialOutput`\>

Will call a method and execute its smart contract method in the EVM without sending any transaction. Note calling cannot alter the smart contract state.

```ts
// using the promise
const result = await myContract.methods.myMethod(123).call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});

// MULTI-ARGUMENT RETURN:
// Solidity
contract MyContract {
  function myFunction() returns(uint256 myNumber, string myString) {
      return (23456, "Hello!%");
  }
}

// web3.js
var MyContract = new web3.eth.Contract(abi, address);
const result = MyContract.methods.myFunction().call()
console.log(result)
> Result {
  myNumber: '23456',
  myString: 'Hello!%',
  0: '23456', // these are here as fallbacks if the name is not know or given
  1: 'Hello!%'
}

// SINGLE-ARGUMENT RETURN:
// Solidity
contract MyContract {
  function myFunction() returns(string myString) {
      return "Hello!%";
  }
}

// web3.js
const MyContract = new web3.eth.Contract(abi, address);
const result = await MyContract.methods.myFunction().call();
console.log(result);
> "Hello!%"
```

#### Type Parameters

• **SpecialOutput** = `Outputs`

#### Parameters

• **tx?**: [`PayableCallOptions`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/PayableCallOptions.md)

The options used for calling.

• **block?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

If you pass this parameter it will not use the default block set with contract.defaultBlock. Pre-defined block numbers as `earliest`, `latest`, `pending`, `safe` or `finalized can also be used. Useful for requesting data from or replaying transactions in past blocks.

#### Returns

`Promise`\<`SpecialOutput`\>

- The return value(s) of the smart contract method. If it returns a single value, it’s returned as is. If it has multiple return values they are returned as an object with properties and indices.

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:249

***

### createAccessList()

> **createAccessList**(`tx`?, `block`?): `Promise`\<[`AccessListResult`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AccessListResult.md)\>

This method generates an access list for a transaction. You must specify a `from` address and `gas` if it’s not specified in options.

#### Parameters

• **tx?**: [`PayableCallOptions`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/PayableCallOptions.md)

• **block?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

If you pass this parameter it will not use the default block set with contract.defaultBlock. Pre-defined block numbers as `earliest`, `latest`, `pending`, `safe` or `finalized can also be used. Useful for requesting data from or replaying transactions in past blocks.

#### Returns

`Promise`\<[`AccessListResult`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/AccessListResult.md)\>

The returned data of the createAccessList,  e.g. The generated access list for transaction.

```ts
 const result = await MyContract.methods.myFunction().createAccessList();
 console.log(result);

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

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:382

***

### decodeData()

> **decodeData**\<`SpecialInputs`\>(`data`): `SpecialInputs`

Decode raw result of method call into readable value(s).

#### Type Parameters

• **SpecialInputs** = `Inputs`

#### Parameters

• **data**: `string`

The data to decode.

#### Returns

`SpecialInputs`

- The decoded data.

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:357

***

### encodeABI()

> **encodeABI**(): `string`

Encodes the ABI for this method. The resulting hex string is 32-bit function signature hash plus the passed parameters in Solidity tightly packed format.
This can be used to send a transaction, call a method, or pass it into another smart contract’s method as arguments.
Set the data field on `web3.eth.sendTransaction` options as the encodeABI() result and it is the same as calling the contract method with `contract.myMethod.send()`.

Some use cases for encodeABI() include: preparing a smart contract transaction for a multi signature wallet,
working with offline wallets and cold storage and creating transaction payload for complex smart contract proxy calls.

#### Returns

`string`

- The encoded ABI byte code to send via a transaction or call.

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:350

***

### estimateGas()

> **estimateGas**\<`ReturnFormat`\>(`options`?, `returnFormat`?): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

Returns the amount of gas consumed by executing the method locally without creating a new transaction on the blockchain.
The returned amount can be used as a gas estimate for executing the transaction publicly. The actual gas used can be
different when sending the transaction later, as the state of the smart contract can be different at that time.

```ts
const gasAmount = await myContract.methods.myMethod(123).estimateGas({gas: 5000000});
if(gasAmount == 5000000) {
  console.log('Method ran out of gas');
}
```

#### Type Parameters

• **ReturnFormat** *extends* [`DataFormat`](../type-aliases/DataFormat.md) = `object`

#### Parameters

• **options?**: [`PayableCallOptions`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/PayableCallOptions.md)

The options used for calling

• **returnFormat?**: `ReturnFormat`

The data format you want the output in.

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

- The gas amount estimated.

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:339

***

### populateTransaction()

> **populateTransaction**(`tx`?, `contractOptions`?): [`TransactionCall`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionCall.md)

#### Parameters

• **tx?**: [`PayableCallOptions`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/PayableCallOptions.md) \| [`NonPayableCallOptions`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/NonPayableCallOptions.md)

• **contractOptions?**: [`ContractOptions`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/ContractOptions.md)

#### Returns

[`TransactionCall`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/TransactionCall.md)

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:322

***

### send()

> **send**(`tx`?): [`Web3PromiEvent`](../classes/Web3PromiEvent.md)\<`object`, [`SendTransactionEvents`](../type-aliases/SendTransactionEvents.md)\<`object`\>\>

Will send a transaction to the smart contract and execute its method. Note this can alter the smart contract state.

```ts
await myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});

const receipt = await myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});

// using the event emitter
const sendObj = myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'})
sendObj.on('transactionHash', function(hash){
  ...
});

sendObj.on('confirmation', function(confirmationNumber, receipt){
  ...
});

sendObj.on('receipt', function(receipt){
  // receipt example
  console.log(receipt);
  > {
      "transactionHash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
      "transactionIndex": 0,
      "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
      "blockNumber": 3,
      "contractAddress": "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
      "cumulativeGasUsed": 314159,
      "gasUsed": 30234,
      "events": {
          "MyEvent": {
              returnValues: {
                  myIndexedParam: 20,
                  myOtherIndexedParam: '0x123456789...',
                  myNonIndexParam: 'My String'
              },
              raw: {
                  data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
                  topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
              },
              event: 'MyEvent',
              signature: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
              logIndex: 0,
              transactionIndex: 0,
              transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
              blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
              blockNumber: 1234,
              address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
          },
          "MyOtherEvent": {
              ...
          },
          "MyMultipleEvent":[{...}, {...}] // If there are multiple of the same event, they will be in an array
      }
  }
});

sendObj.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
  ...
});
```

#### Parameters

• **tx?**: [`PayableCallOptions`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/PayableCallOptions.md)

The options used for sending.

#### Returns

[`Web3PromiEvent`](../classes/Web3PromiEvent.md)\<`object`, [`SendTransactionEvents`](../type-aliases/SendTransactionEvents.md)\<`object`\>\>

- Returns a PromiEvent object resolved with transaction receipt.

##### blockHash

> `readonly` **blockHash**: `string`

##### blockNumber

> `readonly` **blockNumber**: `bigint`

##### contractAddress?

> `readonly` `optional` **contractAddress**: `string`

##### cumulativeGasUsed

> `readonly` **cumulativeGasUsed**: `bigint`

##### effectiveGasPrice?

> `readonly` `optional` **effectiveGasPrice**: `bigint`

##### events?

> `optional` **events**: `object`

##### from

> `readonly` **from**: `string`

##### gasUsed

> `readonly` **gasUsed**: `bigint`

##### logs

> `readonly` **logs**: `object`[]

##### logsBloom

> `readonly` **logsBloom**: `string`

##### root

> `readonly` **root**: `string`

##### status

> `readonly` **status**: `bigint`

##### to

> `readonly` **to**: `string`

##### transactionHash

> `readonly` **transactionHash**: `string`

##### transactionIndex

> `readonly` **transactionIndex**: `bigint`

##### type?

> `readonly` `optional` **type**: `bigint`

#### Defined in

node\_modules/web3-eth-contract/lib/commonjs/types.d.ts:316
