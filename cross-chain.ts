import axios from 'axios';
import { ethers, TypedDataEncoder } from 'ethers';
import {
  constructPartialSDK,
  constructAxiosFetcher,
  constructEthersV6ContractCaller,
  constructSignDeltaOrder,
  SignableDeltaOrderData,
} from './src';
import dotenv from 'dotenv';
import { BridgePrice } from './src/methods/delta/getDeltaPrice';

dotenv.config();

const SWAP_ORDER_EIP_712_TYPES = {
  Order: [
    { name: 'owner', type: 'address' },
    { name: 'beneficiary', type: 'address' },
    { name: 'srcToken', type: 'address' },
    { name: 'destToken', type: 'address' },
    { name: 'srcAmount', type: 'uint256' },
    { name: 'destAmount', type: 'uint256' },
    { name: 'expectedDestAmount', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'partnerAndFee', type: 'uint256' },
    { name: 'permit', type: 'bytes' },
    { name: 'bridge', type: 'Bridge' },
  ],
  Bridge: [
    { name: 'maxRelayerFee', type: 'uint256' },
    { name: 'destinationChainId', type: 'uint256' },
    { name: 'outputToken', type: 'address' },
    { name: 'multiCallHandler', type: 'address' },
  ],
};

const RELAYER_URL = 'https://api.staging.paraswap.io/delta';
const USER_PK = process.env.PRIVATE_KEY; // SET PRIVATE KEY
const chainId = 8453;
const DAI = '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb';
const USDbC = '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA';
const USDC_BASE = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913';
const ABASWETH = '0xd4a0e0b9149bcee3c920d2e00b5de09138fd8bb7';
const AERO_BASE = '0x940181a94A35A4569E4529A3CDfB74e38FD98631';

const userWallet = new ethers.Wallet(USER_PK!);
const userAddress = userWallet.address;
const amount = (10 ** 18).toString(); // 1 dai

const USDC_OP = '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85'.toLowerCase();

const deltaAddress = '0x1b6c933c4a855c9f4ad1afbd05eb3f51dbb83cf8';

function buildOrder(
  price: BridgePrice,
  userAddress: string
): SignableDeltaOrderData['data'] {
  return {
    owner: userAddress,
    beneficiary: userAddress,
    srcToken: price.srcToken,
    destToken: price.destToken,
    srcAmount: price.srcAmount,
    destAmount: ((BigInt(price.destAmount) * 95n) / 100n).toString(),
    expectedDestAmount: price.destAmount,
    deadline: +(Date.now() / 1000 + 60 * 60 * 24).toFixed(0),
    nonce: '2300009',
    partnerAndFee: '0',
    permit: '0x',
    bridge: {
      destinationChainId: 10,
      maxRelayerFee: (BigInt(price.bridgeFee) * 2n).toString(),
      outputToken: USDC_OP,
      multiCallHandler: '0x924a9f036260DdD5808007E1AA95f08eD08aA569',
    },
  };
}

async function happyPath() {
  try {
    ///// fetch prices
    const {
      data: { price },
    } = await axios.get<{ price: BridgePrice }>(`${RELAYER_URL}/prices`, {
      params: {
        srcToken: DAI,
        destToken: USDC_OP,
        srcDecimals: 18,
        destDecimals: 6,
        amount,
        chainId,
        userAddress,
        side: 'SELL',
        destChainId: 10,
      },
    });
    console.log('PRICE: ', price);

    ///// prepare signed order and signature

    const order = buildOrder(price, userAddress);

    const domain = {
      name: 'Portikus',
      version: '2.0.0',
      chainId,
      verifyingContract: deltaAddress,
    };

    const typedHash = TypedDataEncoder.hash(
      domain,
      SWAP_ORDER_EIP_712_TYPES,
      order
    );

    const signature = userWallet.signingKey.sign(typedHash).compactSerialized;
    console.log('Signature: ', signature);

    const fetcher = constructAxiosFetcher(axios);
    const contractCaller = constructEthersV6ContractCaller({
      ethersV6ProviderOrSigner: userWallet,
      EthersV6Contract: ethers.Contract,
    });

    const sdk = constructPartialSDK(
      {
        chainId,
        fetcher,
        contractCaller,
      },
      constructSignDeltaOrder
    );

    const signableOrder: SignableDeltaOrderData = {
      types: SWAP_ORDER_EIP_712_TYPES,
      domain,
      data: order,
    };

    const signedOrder = await sdk.signDeltaOrder(signableOrder);

    ///// send intent to execute order

    /* const { data } = await axios.post(`${RELAYER_URL}/orders`, newOrderParams);

    if (data.error) {
      console.log(data);
      console.log(data.error);
      return;
    }

    const id = data.id;

    ///// lister for status

    let timer;

    timer = setInterval(async () => {
      const { data } = await axios.get(`${RELAYER_URL}/orders/${id}`);
      console.log(data);

      if (
        data.status === 'EXECUTED' ||
        (data.status === 'FAILED' &&
          data.bridgeMetadata.fillStatus &&
          data.bridgeMetadata.fillStatus !== 'pending')
      ) {
        clearInterval(timer);
      }
    }, 1000); */
  } catch (error: any) {
    console.log(error);
    console.log(error.response.data);
  }
}

happyPath();
