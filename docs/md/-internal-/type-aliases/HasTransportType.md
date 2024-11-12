[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / HasTransportType

# Type Alias: HasTransportType\<transport, type\>

> **HasTransportType**\<`transport`, `type`\>: [`GetTransportConfig`](GetTransportConfig.md)\<`transport`\>\[`"type"`\] *extends* `type` ? `true` : `transport` *extends* [`FallbackTransport`](FallbackTransport.md)\<infer transports\> ? [`Some`](Some.md)\<`{ [key in keyof transports]: GetTransportConfig<transports[key]>["type"] }`, `type`\> : `false`

## Type Parameters

• **transport** *extends* [`Transport`](Transport.md)

• **type** *extends* `string`

## Defined in

node\_modules/viem/\_types/types/transport.d.ts:26
