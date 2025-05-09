[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / duplexPair

# Function: duplexPair()

> **duplexPair**(`options`?): [[`Duplex`](../../../classes/Duplex.md), [`Duplex`](../../../classes/Duplex.md)]

The utility function `duplexPair` returns an Array with two items,
each being a `Duplex` stream connected to the other side:

```js
const [ sideA, sideB ] = duplexPair();
```

Whatever is written to one stream is made readable on the other. It provides
behavior analogous to a network connection, where the data written by the client
becomes readable by the server, and vice-versa.

The Duplex streams are symmetrical; one or the other may be used without any
difference in behavior.

## Parameters

• **options?**: [`DuplexOptions`](../../../interfaces/DuplexOptions.md)

A value to pass to both [Duplex](../../../classes/Duplex.md) constructors,
to set options such as buffering.

## Returns

[[`Duplex`](../../../classes/Duplex.md), [`Duplex`](../../../classes/Duplex.md)]

## Since

v22.6.0

## Defined in

node\_modules/@types/node/stream.d.ts:1271
