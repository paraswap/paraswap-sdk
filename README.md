<p align="center">
  <a href="https://paraswap.io">
    <img src="https://cdn.paraswap.io/brand/paraswap.png" width="400px" >
  </a>
</p>

# SDK for the ParaSwap API

Refer to the documentation of the ParaSwap API: https://developers.paraswap.network

## Features
**Versatility**: works with [web3](https://www.npmjs.com/package/web3), [ethers](https://www.npmjs.com/package/ethers) or [viem](https://viem.sh/) without direct dependency

**Canonical**: bring only the functions you actually need

**Lightweight**: 10KB Gzipped for the minimal variant

## Installing ParaSwap SDK

```bash
yarn add @paraswap/sdk
```

## Using ParaSwap SDK

There are multiple ways to use ParaSwap SDK, ranging from a simple construct-and-use approach to a fully composable _bring what you need_ approach which allows for advanced tree-shaking and minimizes bundle size.

You can see some examples in [/src/examples](src/examples) directory.

### Simple SDK

Can be created by providing `chainId` and either `axios` or `window.fetch` (or alternative `fetch` implementation), and an optional `version` (`'5'` or `'6.2'`) parameter that corresponds to the API version SDK will be making requests to. The resulting SDK will be able to use all methods that query the API.

```ts
  import { constructSimpleSDK } from '@paraswap/sdk';
  import axios from 'axios';

  // construct minimal SDK with fetcher only
  const paraSwapMin = constructSimpleSDK({chainId: 1, axios});
  // or
  const paraSwapMin = constructSimpleSDK({chainId: 1, fetch: window.fetch, version: '5'});

  const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
  const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

  async function swapExample() {
    //                                     or any other signer/provider 
    const signer: JsonRpcSigner = ethers.Wallet.fromMnmemonic('__your_mnemonic__');
    const senderAddress = signer.address;

    const priceRoute = await paraSwapMin.swap.getRate({
      srcToken: ETH,
      destToken: DAI,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
    });

    const txParams = await paraSwapMin.swap.buildTx(
      {
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
      }     
    );

    const transaction = {
      ...txParams,
      gasPrice: '0x' + new BigNumber(txParams.gasPrice).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(txParams.value).toString(16),
    };

    const txr = await signer.sendTransaction(transaction);
  }
```

If optional `providerOptions` is provided as the second parameter, then the resulting SDK will also be able to approve Tokens for swap.

```ts
  // with ethers.js
  const providerOptionsEther = {
    ethersProviderOrSigner: provider, // JsonRpcProvider
    EthersContract: ethers.Contract,
    account: senderAddress,
  };

  // or with viem (from wagmi or standalone)
    const providerOptionsViem = {
    viemClient, // made with createWalletClient()
    account: senderAddress,
  };

  // or with web3.js
  const providerOptionsWeb3 = {
    web3, // new Web3(...) instance
    account: senderAddress,
  };

  const paraSwap = constructSimpleSDK({chainId: 1, axios}, providerOptionsEther);

  // approve token through sdk
  const txHash = await paraSwap.approveToken(amountInWei, DAI);

  // await tx somehow
  await provider.waitForTransaction(txHash);
```

### Full SDK 
```typescript
import { constructFullSDK, constructAxiosFetcher, constructEthersContractCaller } from '@paraswap/sdk';

const signer = ethers.Wallet.fromMnmemonic('__your_mnemonic__'); // or any other signer/provider 
const account = '__signer_address__';

const contractCaller = constructEthersContractCaller({
  ethersProviderOrSigner: signer,
  EthersContract: ethers.Contract,
}, account); // alternatively constructViemContractCaller or constructWeb3ContractCaller
const fetcher = constructAxiosFetcher(axios); // alternatively constructFetchFetcher

const paraswap = constructFullSDK({
  chainId: 1,
  fetcher,
  contractCaller,
});
```

### Partial SDK
For bundle-size savvy developers, you can construct a lightweight version of the SDK and bring only the functions you need.

e.g. for only getting rates and allowances:

```typescript
import { constructPartialSDK, constructFetchFetcher, constructGetRate, constructGetBalances } from '@paraswap/sdk';

const fetcher = constructFetchFetcher(window.fetch);

const minParaSwap = constructPartialSDK({
  chainId: 1,
  fetcher,
}, constructGetRate, constructGetBalances);

const priceRoute = await minParaSwap.getRate(params);
const allowance = await minParaSwap.getAllowance(userAddress, tokenAddress);
```

### Basic usage

The easiest way to make a trade is to rely on Quote method that communicates with [/quote API endpoint](link to docs)

```typescript
import axios from 'axios';
import { ethers } from 'ethersV5';
import { constructSimpleSDK } from '@paraswap/sdk';

const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

const accounts = await ethersProvider.listAccounts();
const account = accounts[0]!;
const signer = ethersProvider.getSigner(account);

const simpleSDK = constructSimpleSDK(
  { chainId: 1, axios },
  {
    ethersProviderOrSigner: signer,
    EthersContract: ethers.Contract,
    account,
  }
);

const amount = '1000000000000'; // wei
const Token1 = '0x1234...'
const Token2 = '0xabcde...'

const quote = await simpleSDK.quote.getQuote({
  srcToken: Token1,
  destToken: Token2,
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 18,
  mode: 'all', // Delta quote if possible, with fallback to Market price
  side: 'SELL',
  // partner: "..." // if available
});

if ('delta' in quote) {
  const deltaPrice = quote.delta;

  const DeltaContract = await simpleSDK.delta.getDeltaContract();

  // or sign a Permit1 or Permit2 TransferFrom for DeltaContract
  await simpleSDK.delta.approveTokenForDelta(amount, Token1);

  const slippagePercent = 0.5;
  const destAmountAfterSlippage = BigInt(
    // get rid of exponential notation

    +(+deltaPrice.destAmount * (1 - slippagePercent / 100)).toFixed(0)
    // get rid of decimals
  ).toString(10);

  const deltaAuction = await simpleSDK.delta.submitDeltaOrder({
    deltaPrice,
    owner: account,
    // beneficiary: anotherAccount, // if need to send destToken to another account
    // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
    srcToken: Token1,
    destToken: Token2,
    srcAmount: amount,
    destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
  });

  // poll if necessary
  const auction = await simpleSDK.delta.getDeltaOrderById(deltaAuction.id);
  if (auction?.status === 'EXECUTED') {
    console.log('Auction was executed');
  }
} else {
  console.log(
    `Delta Quote failed: ${quote.fallback_reason.errorType} - ${quote.fallback_reason.details}`
  );
  const priceRoute = quote.market;

  const TokenTransferProxy = await simpleSDK.swap.getSpender();

  // or sign a Permit1 or Permit2 TransferFrom for TokenTransferProxy
  const approveTxHash = simpleSDK.swap.approveToken(amount, Token1);

  const txParams = await simpleSDK.swap.buildTx({
    srcToken: Token1,
    destToken: Token2,
    srcAmount: amount,
    slippage: 250, // 2.5%
    priceRoute,
    userAddress: account,
    // partner: '...' // if available
  });

  const swapTx = await signer.sendTransaction(txParams);
}
```

### Legacy
The `ParaSwap` class is exposed for backwards compatibility with previous versions of the SDK.

```typescript
import { ParaSwap } from '@paraswap/sdk';
import axios from 'axios';
import Web3 from 'web3';

const web3Provider = new Web3(window.ethereum);
const account = '__user_address__';

const paraswap = new ParaSwap({chainId: 1, web3Provider, account, axios});

```


Or you can use `ethers` in place of `web3`

```typescript
import { ParaSwap } from '@paraswap/sdk';
import { ethers } from "ethers";

const ethersProvider = new ethers.providers.Web3Provider(window.ethereum)
const account = '__user_address__';

const paraswap = new ParaSwap({
  chainId: 1,
  account,
  ethersDeps: {
    ethersProviderOrSigner: ethersProvider;
    EthersContract: ethers.Contract;
  },
  fetch: window.fetch,
 });

```

By analogy to ```constructPartialSDK```, you can leverage a lightweight version of the sdk for fetching only.

```typescript
import { ParaSwap } from '@paraswap/sdk';

const paraswap = new ParaSwap({chainId: 1, fetch: window.fetch});

```

Refer to [this README for depecreated documentation](https://github.com/paraswap/paraswap-sdk/blob/c4c70c674fb2be4ec528064649d992d4b38c654b/README.md) for functions usage.


Refer to [SDK API documentation](docs/md/modules.md) for detailed documentation on the methods provided in this SDK.

## Tests

To run `yarn test` it is necessary to provide `PROVIDER_URL=<mainnet_rpc_url>` environment variable.
If it is necessary to run tests against a different API endpoint, provide `API_URL=url_to_API` environment variable.

<img src="./docs/passed_tests.png" width=350 />