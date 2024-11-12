[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / RunningEvent

# Class: RunningEvent

## Constructors

### new RunningEvent()

> **new RunningEvent**(`tag`, `filter`): [`RunningEvent`](RunningEvent.md)

#### Parameters

• **tag**: `string`

• **filter**: [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

[`RunningEvent`](RunningEvent.md)

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:67

## Properties

### filter

> `readonly` **filter**: [`EventFilter`](../type-aliases/EventFilter.md)

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:65

***

### tag

> `readonly` **tag**: `string`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:64

## Methods

### addListener()

> **addListener**(`listener`, `once`): `void`

#### Parameters

• **listener**: [`Listener`](../type-aliases/Listener.md)

• **once**: `boolean`

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:68

***

### getEmit()

> **getEmit**(`event`): `any`[]

#### Parameters

• **event**: [`Event`](../interfaces/Event.md)

#### Returns

`any`[]

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:75

***

### listenerCount()

> **listenerCount**(): `number`

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:72

***

### listeners()

> **listeners**(): [`Listener`](../type-aliases/Listener.md)[]

#### Returns

[`Listener`](../type-aliases/Listener.md)[]

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:71

***

### prepareEvent()

> **prepareEvent**(`event`): `void`

#### Parameters

• **event**: [`Event`](../interfaces/Event.md)

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:74

***

### removeAllListeners()

> **removeAllListeners**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:70

***

### removeListener()

> **removeListener**(`listener`): `void`

#### Parameters

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:69

***

### run()

> **run**(`args`): `number`

#### Parameters

• **args**: `any`[]

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/contracts/lib/index.d.ts:73
