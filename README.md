<p align="center">
  <a href="https://paraswap.io">
    <img src="https://cdn.paraswap.io/brand/paraswap.png" width="400px" >
  </a>
</p>

# SDK for the ParaSwap API

Refer to the documentation of the ParaSwap API: https://developers.paraswap.network

## Features
**Versatility**: works with both [web3](https://www.npmjs.com/package/web3) and [ethers](https://www.npmjs.com/package/ethers) without direct dependency

**Canonical**: bring only the functions you actually need

**Lightweight**: 400B Gzipped for the minimal variant

## Installing ParaSwap SDK

```bash
yarn add @paraswap/sdk
```

## Using ParaSwap SDK

### Import the necessary functions
```typescript
import { constructSDK, constructAxiosFetcher, constructEthersContractCaller } from '@paraswap/sdk';
```
### Construct the ParaSwap object

```typescript
const signer = ethers.Wallet.fromMnmemonic('__your_mnemonic__') // or any other signer/provider 
const account = '__signer_address__'

const contractCaller = constructEthersContractCaller({
  providerOrSigner: signer,
  Contract: ethers.Contract,
}, account); // alternatively constructWeb3ContractCaller
const fetcher = constructAxiosFetcher(axios); // alternatively constructFetchFetcher

const paraswap = constructSDK({
  network: 1,
  fetcher,
  contractCaller,
});
```

### To approve ParaSwap contracts to swap an ERC20 token

```typescript
const txHash = await paraSwap.approveToken(amount, tokenAddress);
```

### To get the rate of a token pair

```typescript
const srcToken = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'; // ETH
const destToken = '0xcAfE001067cDEF266AfB7Eb5A286dCFD277f3dE5'; // PSP
const srcAmount = '1000000000000000000'; //The source amount multiplied by its decimals: 10 ** 18 here
const srcDecimals = 18
const destDecimals = 18

const priceRoute = await paraSwap.getRate(
  {
    srcToken,
    destToken,
    amount,
    srcDecimals,
    destDecimals,
  }
);
```

Where priceRoute contains the rate and the distribution among exchanges, checkout the OptimalRates type for more details.

### To build a transaction

```typescript
const srcToken = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const srcDecimals = 18
const srcAmount = '1000000000000000000'; // The source amount multiplied by its decimals
const destToken = '0xcAfE001067cDEF266AfB7Eb5A286dCFD277f3dE5';
const destDecimals = 18
const destAmount = priceRoute.destAmount // price route being output of paraSwap.getRate()
const senderAddress = '__sender_address__'; // mandatory
const receiver = '__receiver_address__'; // optional: for swap and transfer
const partnerAddress = '__fee_receiver_address__' // optional: for permission-less monetization
const partnerFeeBps = 50 // optional: fee in base point, for permission-less monetization


const txParams = await paraSwap.buildTx(
  {
    srcAmount,
    srcToken,
    srcDecimals,
    destAmount,
    destToken,
    destDecimals,
    priceRoute,
    senderAddress,
    receiver,
    partnerAddress,
    partnerFeeBps,
  }
);

const transactionResponse = await signer.sendTransaction(txParams);
const transactionReceipt = await transactionResponse.wait();
```

## Playground
Interact with the ParaSwap SDK in a CodeSandbox playground [here](https://codesandbox.io/s/gallant-flower-7yuker)

## Bundle Optimization
For bundle-size savvy developers, you can construct a lightweight version of the SDK and bring only the functions you need.

e.g. for only getting rates and allowances:

```typescript
import { constructPartialSDK, constructFetchFetcher, constructGetRate, constructGetAllowance } from '@paraswap/sdk';

const fetcher = constructFetchFetcher(window.fetch)

const minParaSwap = constructPartialSDK({
  network: 1,
  fetcher,
}, constructGetRate, constructGetAllowance)

const priceRoute = await minParaSwap.getRate(params)
const allowance = await minParaSwap.getAllowance(userAddress, tokenAddress);
```

## Legacy
The `ParaSwap` class is exposed for backwards compatibility with previous versions of the SDK.

```typescript
import { ParaSwap } from '@paraswap/sdk'
import axios from 'axios'
import Web3 from 'web3'

const web3Provider = new Web3(window.ethereum)
const account = '__user_address__'

const paraswap = new ParaSwap(
  1, 
  undefined, 
  web3Provider, 
  undefined, 
  account, 
  axios
)

```

By analogy to ```constructPartialSDK```, you can leverage a lightweight version of the sdk for fetching only.

```typescript
import { ParaSwap } from '@paraswap/sdk'

const paraswap = new ParaSwap(
  1, 
  undefined, 
  undefined, 
  undefined, 
  undefined, 
  undefined,
  window.fetch
)

```

Refer to [this README for depecreated documentation](https://github.com/paraswap/paraswap-sdk/blob/c4c70c674fb2be4ec528064649d992d4b38c654b/README.md) for functions usage.
