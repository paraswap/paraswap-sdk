[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / BuildDeltaOrderDataParams

# Type Alias: BuildDeltaOrderDataParams

> **BuildDeltaOrderDataParams**: `object`

## Type declaration

### beneficiary?

> `optional` **beneficiary**: `string`

#### Description

The address of the order beneficiary

### bridge?

> `optional` **bridge**: [`BridgeInput`](BridgeInput.md)

#### Description

The bridge input

### deadline?

> `optional` **deadline**: `number`

#### Description

The deadline for the order

### deltaPrice

> **deltaPrice**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaPrice`](DeltaPrice.md), `"destAmount"` \| `"partner"` \| `"partnerFee"`\>

#### Description

price response received from /delta/prices (getDeltaPrice method)

### destAmount

> **destAmount**: `string`

#### Description

The minimum amount of dest token to receive

### destToken

> **destToken**: `string`

#### Description

The address of the dest token

### nonce?

> `optional` **nonce**: `number` \| `string`

#### Description

The nonce of the order

### owner

> **owner**: `string`

#### Description

The address of the order owner

### partner?

> `optional` **partner**: `string`

#### Description

Partner string.

### partnerAddress?

> `optional` **partnerAddress**: `string`

#### Description

partner address

### partnerFeeBps?

> `optional` **partnerFeeBps**: `number`

#### Description

partner fee in basis points (bps), 50bps=0.5%

### partnerTakesSurplus?

> `optional` **partnerTakesSurplus**: `boolean`

#### Description

take surplus

### permit?

> `optional` **permit**: `string`

#### Description

Optional permit signature for the src token https://developers.paraswap.network/api/paraswap-delta/build-and-sign-a-delta-order#supported-permits

### srcAmount

> **srcAmount**: `string`

#### Description

The amount of src token to swap

### srcToken

> **srcToken**: `string`

#### Description

The address of the src token

## Defined in

[src/methods/delta/buildDeltaOrder.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L14)
