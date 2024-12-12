**ParaSwap Delta** is an intent-based protocol that enables a ParaSwap user to make gasless swaps where multiple agents compete to execute the trade at the best price possible.
This way the user doesn't need to make a transaction themselve but only to sign a Delta Order.
The easiest way to make use of the Delta Order is to use the SDK following these steps:

### 1. Construct an SDK object

```ts
const account = userAddress;
const paraSwap = constructSimpleSDK(
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
const PSP_TOKEN = '0xcafe001067cdef266afb7eb5a286dcfd277f3de5';
const amount = '1000000000000'; // in wei

const deltaPrice = await deltaSDK.getDeltaPrice({
  srcToken: DAI_TOKEN,
  destToken: PSP_TOKEN,
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 18,
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

See more on accepted Permit variants in [ParaSwap documentation](https://developers.paraswap.network/api/paraswap-delta/build-and-sign-a-delta-order#supported-permits)


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
  destToken: PSP_TOKEN,
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