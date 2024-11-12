[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Formatter

# Class: Formatter

## Constructors

### new Formatter()

> **new Formatter**(): [`Formatter`](Formatter.md)

#### Returns

[`Formatter`](Formatter.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:20

## Properties

### formats

> `readonly` **formats**: [`Formats`](../type-aliases/Formats.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:19

## Methods

### \_block()

> **\_block**(`value`, `format`): [`Block`](../interfaces/Block.md)

#### Parameters

• **value**: `any`

• **format**: `any`

#### Returns

[`Block`](../interfaces/Block.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:36

***

### accessList()

> **accessList**(`accessList`): [`AccessList`](../type-aliases/AccessList.md)

#### Parameters

• **accessList**: `any`[]

#### Returns

[`AccessList`](../type-aliases/AccessList.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:22

***

### address()

> **address**(`value`): `string`

#### Parameters

• **value**: `any`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:29

***

### bigNumber()

> **bigNumber**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

• **value**: `any`

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:25

***

### block()

> **block**(`value`): [`Block`](../interfaces/Block.md)

#### Parameters

• **value**: `any`

#### Returns

[`Block`](../interfaces/Block.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:37

***

### blockTag()

> **blockTag**(`blockTag`): `string`

#### Parameters

• **blockTag**: `any`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:32

***

### blockWithTransactions()

> **blockWithTransactions**(`value`): [`Block`](../interfaces/Block.md)

#### Parameters

• **value**: `any`

#### Returns

[`Block`](../interfaces/Block.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:38

***

### boolean()

> **boolean**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:26

***

### callAddress()

> **callAddress**(`value`): `string`

#### Parameters

• **value**: `any`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:30

***

### contractAddress()

> **contractAddress**(`value`): `string`

#### Parameters

• **value**: `any`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:31

***

### data()

> **data**(`value`, `strict`?): `string`

#### Parameters

• **value**: `any`

• **strict?**: `boolean`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:28

***

### difficulty()

> **difficulty**(`value`): `number`

#### Parameters

• **value**: `any`

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:34

***

### filter()

> **filter**(`value`): `any`

#### Parameters

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:45

***

### filterLog()

> **filterLog**(`value`): `any`

#### Parameters

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:46

***

### getDefaultFormats()

> **getDefaultFormats**(): [`Formats`](../type-aliases/Formats.md)

#### Returns

[`Formats`](../type-aliases/Formats.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:21

***

### hash()

> **hash**(`value`, `strict`?): `string`

#### Parameters

• **value**: `any`

• **strict?**: `boolean`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:33

***

### hex()

> **hex**(`value`, `strict`?): `string`

#### Parameters

• **value**: `any`

• **strict?**: `boolean`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:27

***

### number()

> **number**(`number`): `number`

#### Parameters

• **number**: `any`

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:23

***

### receipt()

> **receipt**(`value`): [`TransactionReceipt`](../interfaces/TransactionReceipt.md)

#### Parameters

• **value**: `any`

#### Returns

[`TransactionReceipt`](../interfaces/TransactionReceipt.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:43

***

### receiptLog()

> **receiptLog**(`value`): `any`

#### Parameters

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:42

***

### topics()

> **topics**(`value`): `any`

#### Parameters

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:44

***

### transaction()

> **transaction**(`value`): `any`

#### Parameters

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:41

***

### transactionRequest()

> **transactionRequest**(`value`): `any`

#### Parameters

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:39

***

### transactionResponse()

> **transactionResponse**(`transaction`): [`TransactionResponse`](../interfaces/TransactionResponse.md)

#### Parameters

• **transaction**: `any`

#### Returns

[`TransactionResponse`](../interfaces/TransactionResponse.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:40

***

### type()

> **type**(`number`): `number`

#### Parameters

• **number**: `any`

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:24

***

### uint256()

> **uint256**(`value`): `string`

#### Parameters

• **value**: `any`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:35

***

### allowFalsish()

> `static` **allowFalsish**(`format`, `replaceValue`): [`FormatFunc`](../type-aliases/FormatFunc.md)

#### Parameters

• **format**: [`FormatFunc`](../type-aliases/FormatFunc.md)

• **replaceValue**: `any`

#### Returns

[`FormatFunc`](../type-aliases/FormatFunc.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:51

***

### allowNull()

> `static` **allowNull**(`format`, `nullValue`?): [`FormatFunc`](../type-aliases/FormatFunc.md)

#### Parameters

• **format**: [`FormatFunc`](../type-aliases/FormatFunc.md)

• **nullValue?**: `any`

#### Returns

[`FormatFunc`](../type-aliases/FormatFunc.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:50

***

### arrayOf()

> `static` **arrayOf**(`format`): [`FormatFunc`](../type-aliases/FormatFunc.md)

#### Parameters

• **format**: [`FormatFunc`](../type-aliases/FormatFunc.md)

#### Returns

[`FormatFunc`](../type-aliases/FormatFunc.md)

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:52

***

### check()

> `static` **check**(`format`, `object`): `any`

#### Parameters

• **format**

• **object**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/providers/lib/formatter.d.ts:47
