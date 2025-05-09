[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BuildDeltaOrderDataParams

# Type Alias: BuildDeltaOrderDataParams

> **BuildDeltaOrderDataParams**: `object`

## Type declaration

### beneficiary?

> `optional` **beneficiary**: `string`

#### Description

The address of the order beneficiary

### beneficiaryType?

> `optional` **beneficiaryType**: [`BeneficiaryType`](../-internal-/type-aliases/BeneficiaryType.md)

#### Description

Whether the beneficiary is a contract. Needed to automatically fill in crosschain Bridge

### bridge?

> `optional` **bridge**: [`Bridge`](Bridge.md)

#### Description

The bridge input

### deadline?

> `optional` **deadline**: `number`

#### Description

The deadline for the order

### deltaPrice

> **deltaPrice**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaPrice`](DeltaPrice.md), `"destAmount"` \| `"partner"` \| `"partnerFee"` \| `"destToken"`\> & [`Partial`](../-internal-/type-aliases/Partial.md)\<[`Pick`](../-internal-/type-aliases/Pick.md)\<[`BridgePrice`](BridgePrice.md), `"bridgeFee"`\>\>

#### Description

price response received from /delta/prices (getDeltaPrice method)

### destAmount

> **destAmount**: `string`

#### Description

The minimum amount of dest token to receive

### destChainId?

> `optional` **destChainId**: `number`

#### Description

Destination Chain ID for Crosschain Orders

### destToken

> **destToken**: `string`

#### Description

The address of the dest token. For Crosschain Order - destination token on the destination chain

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

Optional permit signature for the src token https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits-order#supported-permits

### srcAmount

> **srcAmount**: `string`

#### Description

The amount of src token to swap

### srcToken

> **srcToken**: `string`

#### Description

The address of the src token

## Defined in

[src/methods/delta/buildDeltaOrder.ts:17](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/delta/buildDeltaOrder.ts#L17)
