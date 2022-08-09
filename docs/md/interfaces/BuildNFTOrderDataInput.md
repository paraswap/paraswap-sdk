[@paraswap/sdk](../README.md) / [Exports](../modules.md) / BuildNFTOrderDataInput

# Interface: BuildNFTOrderDataInput

## Table of contents

### Properties

- [AugustusAddress](BuildNFTOrderDataInput.md#augustusaddress)
- [chainId](BuildNFTOrderDataInput.md#chainid)
- [expiry](BuildNFTOrderDataInput.md#expiry)
- [maker](BuildNFTOrderDataInput.md#maker)
- [makerAmount](BuildNFTOrderDataInput.md#makeramount)
- [makerAsset](BuildNFTOrderDataInput.md#makerasset)
- [makerAssetId](BuildNFTOrderDataInput.md#makerassetid)
- [makerAssetType](BuildNFTOrderDataInput.md#makerassettype)
- [nonce](BuildNFTOrderDataInput.md#nonce)
- [taker](BuildNFTOrderDataInput.md#taker)
- [takerAmount](BuildNFTOrderDataInput.md#takeramount)
- [takerAsset](BuildNFTOrderDataInput.md#takerasset)
- [takerAssetId](BuildNFTOrderDataInput.md#takerassetid)
- [takerAssetType](BuildNFTOrderDataInput.md#takerassettype)
- [verifyingContract](BuildNFTOrderDataInput.md#verifyingcontract)

## Properties

### AugustusAddress

• **AugustusAddress**: `string`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:45](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L45)

___

### chainId

• **chainId**: `number`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:25](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L25)

___

### expiry

• **expiry**: `number`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:28](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L28)

___

### maker

• **maker**: `string`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:41](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L41)

___

### makerAmount

• **makerAmount**: `string`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:31](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L31)

___

### makerAsset

• **makerAsset**: `string`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:29](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L29)

___

### makerAssetId

• **makerAssetId**: `string`

**`Description`**

NFT Token id, will default to 0 (ERC20), provide for NFT

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:34](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L34)

___

### makerAssetType

• **makerAssetType**: [`AssetTypeVariant`](../modules.md#assettypevariant)

**`Description`**

Token type: ERC20 = 0, ERC1155 = 1, ERC721 = 2

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:38](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L38)

___

### nonce

• `Optional` **nonce**: `number`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:27](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L27)

___

### taker

• `Optional` **taker**: `string`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:44](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L44)

___

### takerAmount

• **takerAmount**: `string`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:32](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L32)

___

### takerAsset

• **takerAsset**: `string`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:30](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L30)

___

### takerAssetId

• `Optional` **takerAssetId**: `string`

**`Description`**

NFT Token id, will default to 0 (ERC20), provide for NFT

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:36](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L36)

___

### takerAssetType

• **takerAssetType**: [`AssetTypeVariant`](../modules.md#assettypevariant)

**`Description`**

Token type: ERC20 = 0, ERC1155 = 1, ERC721 = 2

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:40](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L40)

___

### verifyingContract

• **verifyingContract**: `string`

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:26](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/LO_pagination_params/src/methods/nftOrders/helpers/buildOrderData.ts#L26)
