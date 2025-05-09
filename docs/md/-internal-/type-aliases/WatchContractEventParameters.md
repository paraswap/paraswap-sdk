[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchContractEventParameters

# Type Alias: WatchContractEventParameters\<abi, eventName, strict, transport\>

> **WatchContractEventParameters**\<`abi`, `eventName`, `strict`, `transport`\>: `object` & [`GetPollOptions`](GetPollOptions.md)\<`transport`\>

## Type declaration

### abi

> **abi**: `abi`

Contract ABI.

### address?

> `optional` **address**: [`Address`](Address.md) \| [`Address`](Address.md)[]

The address of the contract.

### args?

> `optional` **args**: [`ContractEventArgs`](ContractEventArgs.md)\<`abi`, `eventName` *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> ? `eventName` : [`ContractEventName`](ContractEventName.md)\<`abi`\>\>

### eventName?

> `optional` **eventName**: `eventName` \| [`ContractEventName`](ContractEventName.md)\<`abi`\>

Contract event.

### fromBlock?

> `optional` **fromBlock**: [`BlockNumber`](BlockNumber.md)\<`bigint`\>

Block to start listening from.

### onError()?

> `optional` **onError**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

• **error**: [`Error`](../interfaces/Error.md)

#### Returns

`void`

### onLogs

> **onLogs**: [`WatchContractEventOnLogsFn`](WatchContractEventOnLogsFn.md)\<`abi`, `eventName` *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> ? `eventName` : [`ContractEventName`](ContractEventName.md)\<`abi`\>, `strict`\>

The callback to call when new event logs are received.

### strict?

> `optional` **strict**: `strict` \| `boolean`

Whether or not the logs must match the indexed/non-indexed arguments on `event`.

#### Default

```ts
false
```

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **eventName** *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> \| `undefined` = [`ContractEventName`](ContractEventName.md)\<`abi`\>

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

## Defined in

node\_modules/viem/\_types/actions/public/watchContractEvent.d.ts:14
