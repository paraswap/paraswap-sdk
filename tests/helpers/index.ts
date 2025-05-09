import BigNumber from 'bignumber.js';
import { ethers } from 'ethersV5';
import { SwapSide } from '@paraswap/core';
import {
  constructSimpleSDK,
  FetcherOptions,
  ProviderOptions,
} from '../../src/sdk/simple';
import erc20abi from '../abi/ERC20.json';

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const referrer = 'sdk-test';

type BuyErc20TokenForEthInput = {
  fetcherOptions: FetcherOptions;
  providerOptions: ProviderOptions;
  amount: string;
  tokenAddress: string;
  signer: ethers.Wallet;
  chainId: number;
  ethersProvider: ethers.providers.JsonRpcProvider;
  srcDecimals?: number;
  destDecimals?: number;
};

type BuyErc20TokenForEthReturn = {
  balance: string;
};
export async function buyErc20TokenForEth({
  fetcherOptions,
  providerOptions,
  tokenAddress,
  amount,
  signer,
  chainId,
  ethersProvider,
  srcDecimals = 18,
  destDecimals = 18,
}: BuyErc20TokenForEthInput): Promise<BuyErc20TokenForEthReturn> {
  const _sdk = constructSimpleSDK(
    { chainId, ...fetcherOptions },
    providerOptions
  );

  const priceRoute = await _sdk.swap.getRate({
    srcDecimals,
    destDecimals,
    srcToken: ETH,
    destToken: tokenAddress,
    amount,
    userAddress: signer.address,
    side: SwapSide.BUY,
  });

  const srcAmount = new BigNumber(priceRoute.srcAmount).times(1.1).toFixed(0);

  const txParams = await _sdk.swap.buildTx(
    {
      srcDecimals,
      destDecimals,
      srcToken: ETH,
      srcAmount,
      destToken: tokenAddress,
      destAmount: amount,
      priceRoute,
      userAddress: signer.address,
      partner: referrer,
    },
    { ignoreChecks: true }
  );

  const transaction = {
    ...txParams,
    gasPrice:
      txParams.gasPrice && '0x' + new BigNumber(txParams.gasPrice).toString(16),
    maxFeePerGas:
      txParams.maxFeePerGas &&
      '0x' + new BigNumber(txParams.maxFeePerGas).toString(16),
    maxPriorityFeePerGas:
      txParams.maxPriorityFeePerGas &&
      '0x' + new BigNumber(txParams.maxPriorityFeePerGas).toString(16),
    gasLimit: '0x' + new BigNumber(5000000).toString(16),
    value: '0x' + new BigNumber(txParams.value).toString(16),
  };

  const toContract = new ethers.Contract(
    tokenAddress,
    erc20abi,
    ethersProvider
  );

  const txr = await signer.sendTransaction(transaction);
  await txr.wait(1);

  const afterBalance = await toContract.balanceOf(signer.address);

  return { balance: afterBalance.toString() };
}
