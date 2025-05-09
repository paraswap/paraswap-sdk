[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEventEmitterInterface

# Type Alias: ContractEventEmitterInterface\<Abi\>

> **ContractEventEmitterInterface**\<`Abi`\>: `{ [EventAbi in FilterAbis<Abi, AbiFunctionFragment & Object> as EventAbi["name"]]: ContractEvent<EventAbi>["Inputs"] }`

## Type Parameters

• **Abi** *extends* [`ContractAbi`](ContractAbi.md)

## Defined in

node\_modules/web3-eth-contract/lib/commonjs/contract.d.ts:37
