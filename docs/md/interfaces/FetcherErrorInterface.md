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

[src/helpers/misc.ts:98](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/fix/tests-misc/src/helpers/misc.ts#L98)

___

### isAxiosError

• **isAxiosError**: `boolean`

#### Inherited from

FetcherErrorConstructorInput.isAxiosError

#### Defined in

node_modules/axios/index.d.ts:155

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

node_modules/axios/index.d.ts:153

___

### response

• `Optional` **response**: [`AxiosResponse`](internal_.AxiosResponse.md)<`unknown`, `any`\>

#### Inherited from

FetcherErrorConstructorInput.response

#### Defined in

node_modules/axios/index.d.ts:154

___

### status

• `Optional` **status**: `number`

#### Defined in

[src/helpers/misc.ts:97](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/fix/tests-misc/src/helpers/misc.ts#L97)
