[@paraswap/sdk](../README.md) / [Exports](../modules.md) / FetcherErrorInterface

# Interface: FetcherErrorInterface

## Hierarchy

- [`FetcherErrorConstructorInput`](../modules/internal_.md#fetchererrorconstructorinput)

  ↳ **`FetcherErrorInterface`**

## Implemented by

- [`FetcherError`](../classes/FetcherError.md)

## Table of contents

### Properties

- [code](FetcherErrorInterface.md#code)
- [isAxiosError](FetcherErrorInterface.md#isaxioserror)
- [message](FetcherErrorInterface.md#message)
- [request](FetcherErrorInterface.md#request)
- [response](FetcherErrorInterface.md#response)
- [status](FetcherErrorInterface.md#status)

## Properties

### code

• `Optional` **code**: `string`

#### Overrides

FetcherErrorConstructorInput.code

#### Defined in

[src/helpers/misc.ts:101](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/helpers/misc.ts#L101)

___

### isAxiosError

• **isAxiosError**: `boolean`

#### Inherited from

FetcherErrorConstructorInput.isAxiosError

#### Defined in

node_modules/axios/index.d.ts:362

___

### message

• **message**: `string`

#### Inherited from

FetcherErrorConstructorInput.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### request

• `Optional` **request**: `any`

#### Inherited from

FetcherErrorConstructorInput.request

#### Defined in

node_modules/axios/index.d.ts:360

___

### response

• `Optional` **response**: [`AxiosResponse`](internal_.AxiosResponse.md)<`unknown`, `any`\>

#### Inherited from

FetcherErrorConstructorInput.response

#### Defined in

node_modules/axios/index.d.ts:361

___

### status

• `Optional` **status**: `number`

#### Defined in

[src/helpers/misc.ts:100](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/helpers/misc.ts#L100)
