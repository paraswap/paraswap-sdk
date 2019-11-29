# ParaSwap SDK

<img src="https://paraswap.io/public/images/800_200.png" width="400px" >

---

You can use this SDK in order to swap or pay using ERC-20 tokens.

We've built an example dApp that can found on the "example" folder

You can also check a live example at: https://paraswap-sdk.netlify.com

<img src="https://paraswap-achirecture.netlify.com/sdk-example.gif" width="400px" >

---

### API docs are available here :

https://paraswapapi.docs.apiary.io

### To use ParaSwap SDK :

Install the lib using npm or yarn

```bash
yarn install paraswap
```

##### Then on a Javascript file:

```javascript
const {ParaSwap} = require("paraswap");
```
ES6 or TypeScript

```typescript
import {ParaSwap} from "paraswap";
```


##### To retrieve the list all available tokens:

```javascript
const tokens = await paraSwap.getTokens();
```

##### To get the rate of a token pair using the API:

```javascript
const srcToken = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'; //ETH
const destToken = '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359'; //DAI
const srcAmount = '1000000000000000000'; //The source amount multiplied by its decimals: 10 ** 18 here

const priceRoute:OptimalRates = await paraSwap.getRate(srcToken, destToken, srcAmount);
```
Where priceRoute contains the rate and the distribution among exchanges, checkout the OptimalRates type for more details.

##### To get the rate of a token pair using the Price Feed Contract:
```javascript
const paraswapFeed = new ParaswapFeed(1);
const priceRoute:OptimalRates = await paraswapFeed.getRate(srcToken, destToken, srcAmount);

```
This is a schema that describes the data flow from price query to executing a Swap:

<img src="https://paraswap-achirecture.netlify.com/CoTraderParaSwapSDK.png" width="400px" >
  
##### To build and sign a transaction

```javascript
const srcToken = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const destToken = '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359';
const srcAmount = '1000000000000000000'; //The source amount multiplied by its decimals
const senderAddress = '0xfceA770875E7e6f25E33CEa5188d12Ef234606b4';
const payTo = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A'; // Useful in case of a payment

const txParams = await paraSwap.buildTx(srcToken, destToken, srcAmount, destAmount, priceRoute, senderAddress, payTo);

web3.eth.sendTransaction(txParams, async (err: Error, transactionHash: string) => {
  if (err) {
    return this.setState({error: err.toString(), loading: false});
  }

  console.log('transactionHash', transactionHash);
});
```

---

### To run the example locally:

Created an .env file with these 2 env variables:
```bash
PROVIDER_URL=YOUR_PROVIDRER_URL_OR_INFURA_URL
NODE_ENV=production
```

run 

```bash
yarn install paraswap
```

For local developement you can run
```bash
yarn dev
```

For production build:

```bash
yarn build
```

Which will generate a production build on "dist" folder 
