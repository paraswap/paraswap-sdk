[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Eip1193Compatible

# Type Alias: Eip1193Compatible\<API\>

> **Eip1193Compatible**\<`API`\>: [`Omit`](Omit.md)\<[`Omit`](Omit.md)\<[`Web3BaseProvider`](../classes/Web3BaseProvider.md), `"request"`\>, `"asEIP1193Provider"`\> & `object`

## Type declaration

### request()

#### Type Parameters

• **Method** *extends* `string`

• **ResultType** = `unknown`

#### Parameters

• **request**: [`Web3APIPayload`](../interfaces/Web3APIPayload.md)\<`API`, `Method`\>

#### Returns

`Promise`\<`ResultType`\>

## Type Parameters

• **API** *extends* [`Web3APISpec`](Web3APISpec.md) = [`EthExecutionAPI`](EthExecutionAPI.md)

## Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:62
