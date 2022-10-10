[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Providers

# Interface: Providers

[<internal>](../modules/internal_.md).Providers

## Table of contents

### Properties

- [HttpProvider](internal_.Providers.md#httpprovider)
- [IpcProvider](internal_.Providers.md#ipcprovider)
- [WebsocketProvider](internal_.Providers.md#websocketprovider)

## Properties

### HttpProvider

• **HttpProvider**: (`host`: `string`, `options?`: [`HttpProviderOptions`](internal_.HttpProviderOptions.md)) => [`HttpProvider`](../classes/internal_.HttpProvider.md)

#### Type declaration

• **new Providers**(`host`, `options?`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `options?` | [`HttpProviderOptions`](internal_.HttpProviderOptions.md) |

#### Defined in

node_modules/web3-core/types/index.d.ts:50

___

### IpcProvider

• **IpcProvider**: (`path`: `string`, `net`: `any`) => [`IpcProvider`](../classes/internal_.IpcProvider.md)

#### Type declaration

• **new Providers**(`path`, `net`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `net` | `any` |

#### Defined in

node_modules/web3-core/types/index.d.ts:58

___

### WebsocketProvider

• **WebsocketProvider**: (`host`: `string`, `options?`: [`WebsocketProviderOptions`](internal_.WebsocketProviderOptions.md)) => [`WebsocketProvider`](../classes/internal_.WebsocketProvider.md)

#### Type declaration

• **new Providers**(`host`, `options?`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `options?` | [`WebsocketProviderOptions`](internal_.WebsocketProviderOptions.md) |

#### Defined in

node_modules/web3-core/types/index.d.ts:54
