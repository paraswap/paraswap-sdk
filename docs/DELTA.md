**Velora Delta** is an intent-based protocol that enables a Velora user to make gasless swaps where multiple agents compete to execute the trade at the best price possible.
This way the user doesn't need to make a transaction themselves but only to sign a Delta Order.
The easiest way to make use of the Delta Order is to use the SDK following these steps:

### 1. Construct an SDK object

```ts
const account = userAddress;
const deltaSDK = constructSimpleSDK(
  {chainId: 1, axios},
  {
    ethersProviderOrSigner: provider, // JsonRpcProvider
    EthersContract: ethers.Contract,
    account,
  });
  // for usage with different web3 provider libraries refer to the main [README](./README.md)
```

### 2. Request prices for a Token pair

```ts
const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
const USDC_TOKEN = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const amount = '1000000000000'; // in wei

const deltaPrice = await deltaSDK.getDeltaPrice({
  srcToken: DAI_TOKEN,
  destToken: USDC_TOKEN,
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 6,
  // partner: "..." // if available
});
```


### 3. Approve srcToken for DeltaContract

```ts
const tx = await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);
await tx.wait();
```

Alternatively sign Permit (DAI or Permit1) or Permit2 TransferFrom with DeltaContract as the verifyingContract

```ts
const DeltaContract = await deltaSDK.getDeltaContract();

// values depend on the Permit type and the srcToken
const signature = await signer._signTypedData(domain, types, message);
```

See more on accepted Permit variants in [Velora documentation](https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits)


### 4. Sign and submit a Delta Order

```ts
// calculate acceptable destAmount
const slippagePercent = 0.5;
  const destAmountAfterSlippage = (
    +deltaPrice.destAmount *
    (1 - slippagePercent / 100)
  ).toString(10);

const deltaAuction = await deltaSDK.submitDeltaOrder({
  deltaPrice,
  owner: account,
  // beneficiary: anotherAccount, // if need to send destToken to another account
  // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
  srcToken: DAI_TOKEN,
  destToken: USDC_TOKEN,
  srcAmount: amount,
  destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
});
```

### 5. Wait for Delta Order execution

```ts
// poll if necessary
const auction = await deltaSDK.getDeltaOrderById(deltaAuction.id);
if (auction?.status === 'EXECUTED') {
  console.log('Auction was executed');
}
```

#### A more detailed example of Delta Order usage can be found in [examples/delta](./src/examples/delta.ts)




---------------------------------------------------

## Crosschain Delta Orders

In case you want to perform a crosschain swap, the process is a little more involved.

### 1. Construct an SDK object

```ts
const SRC_CHAIN_ID = 1 // Ethereum
const DEST_CHAIN_ID = 10; // Optimism

const account = userAddress;
const deltaSDK = constructSimpleSDK(
  {chainId: SRC_CHAIN_ID, axios},
  {
    ethersProviderOrSigner: provider, // JsonRpcProvider
    EthersContract: ethers.Contract,
    account,
  });
  // for usage with different web3 provider libraries refer to the main [README](./README.md)
```

### 2. Check which tokens are available on the destination chain.

A limited list of tokens are available in Across, the service facilitating crosschain bridging

```ts
const bridgeInfo = await deltaSDK.getBridgeInfo();

const tokensAvailableForBridging = bridgeInfo[SRC_CHAIN_ID]?.[DEST_CHAIN_ID]
```


### 3. Request prices for a Token pair

```ts
const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';

const USDC_TOKEN_ON_DEST_CHAIN = '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85'; // available for bridging on Optimism
const amount = '1000000000000'; // in wei

const deltaPrice = await deltaSDK.getDeltaPrice({
  srcToken: DAI_TOKEN,
  destToken: USDC_TOKEN_ON_DEST_CHAIN,
  destChainId: DEST_CHAIN_ID, // required to get deltaPrice for a Crosschain Order
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 6,
  // partner: "..." // if available
});
```


### 4. Approve srcToken for DeltaContract

```ts
const tx = await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);
await tx.wait();
```

Alternatively sign Permit (DAI or Permit1) or Permit2 TransferFrom with DeltaContract as the verifyingContract

```ts
const DeltaContract = await deltaSDK.getDeltaContract();

// values depend on the Permit type and the srcToken
const signature = await signer._signTypedData(domain, types, message);
```

See more on accepted Permit variants in [Velora documentation](https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits)


### 5. Sign and submit a Delta Order

```ts
// calculate acceptable destAmount
const slippagePercent = 0.5;
const destAmountAfterSlippage = (
  +deltaPrice.destAmount *
  (1 - slippagePercent / 100)
).toString(10);

const deltaAuction = await deltaSDK.submitDeltaOrder({
  deltaPrice,
  owner: account,
  // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
  srcToken: DAI_TOKEN,
  destToken: USDC_TOKEN_ON_DEST_CHAIN,
  srcAmount: amount,
  destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
  destChainId: DEST_CHAIN_ID, // required to construct a Crosschain Order
  beneficiary: anotherAccount, // if need to send destToken to another account on destChain
  beneficiaryType: 'EOA', // whether the beneficiary on destChain is a smart contract
  // bridge, // user-constructed Bridge object for Crosschain Orders
});
```

To construct a Crosschain Delta Order it is required to either:
* construct Bridge object. Refer to [documentation](https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#sign-an-order-cross-chain) for how to do that.
* provide both `beneficiary` address and `isBeneficiaryContract` boolean, so that the `Order.bridge` can be constructed automatically by the SDK.

This is necessary because Across, the service facilitating crosschain bridging, has [special logic when it comes to transferring ETH and WETH](https://docs.across.to/introduction/technical-faq#what-is-the-behavior-of-eth-weth-in-transfers).

### 5. Wait for Delta Order execution

```ts
// poll if necessary
const auction = await deltaSDK.getDeltaOrderById(deltaAuction.id);
if (auction?.status === 'EXECUTED' && auction.bridgeStatus === "filled") {
  console.log('Auction was executed');
}
```