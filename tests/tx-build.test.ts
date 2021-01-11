import * as dotenv from 'dotenv';
dotenv.config();
import { ParaSwap } from '../src';
import Web3 from 'web3';
const web3 = new Web3();

async function buildTxLocally(paraSwap: ParaSwap, params: any) {
  return await paraSwap.buildTxLocally(
    params.srcToken,
    params.destToken,
    params.srcAmount,
    params.minMaxAmount,
    params.priceRoute,
    params.userAddress,
    params.referrer,
    params.gasPrice,
    params.receiver,
    params.donatePercent,
    params.options,
  );
}

describe('ParaSwap buildTxLocally', () => {
  let paraSwap: ParaSwap;

  beforeAll(async () => {
    paraSwap = new ParaSwap();
    paraSwap.setWeb3Provider(web3);
  });

  test('Uniswap_ETH_DAI', async () => {
    console.log(
      'buildTxLocally output:',
      await buildTxLocally(paraSwap, {
        srcToken: {
          address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
          decimals: 18,
          symbol: 'ETH',
          name: 'Ether',
          newToken: false,
          tokenType: 'ERC20',
          mainConnector: '',
          connectors: ['DAI', 'USDT'],
          network: 1,
          img: 'https://img.paraswap.network/ETH.png',
          bancor: {
            USDB: {
              smartToken: '0x482c31355F4f7966fFcD38eC5c9635ACAe5F4D4F',
              converter: '0x5C8c7Ef16DaC7596C280E70C6905432F7470965E',
              symbol: 'ETHUSDB',
              tokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            },
            BNT: {
              smartToken: '0xb1CD6e4153B2a390Cf00A6556b0fC1458C4A5533',
              converter: '0xE870D00176b2C71AFD4c43ceA550228E22be4ABd',
              symbol: 'ETHBNT',
              tokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            },
          },
        },
        destToken: {
          address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          decimals: 18,
          symbol: 'DAI',
          name: 'DAI',
          newToken: false,
          tokenType: 'ERC20',
          mainConnector: '',
          connectors: ['ETH', 'USDT'],
          network: 1,
          img: 'https://img.paraswap.network/DAI.png',
          bancor: {
            USDB: {
              smartToken: '0xcb913ED43e43cc7Cec1D77243bA381615101E7E4',
              converter: '0x06f7Bf937Dec0C413a2E0464Bb300C4d464bb891',
              symbol: 'DAIUSDB',
              tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            },
            BNT: {
              smartToken: '0xE5Df055773Bf9710053923599504831c7DBdD697',
              converter: '0xd99b0EFeeA095b87C5aD8BCc8B955eD5Ca5Ba146',
              symbol: 'DAIBNT',
              tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            },
          },
        },
        srcAmount: '1000000000000000000',
        minMaxAmount: '933754707426863900000',
        priceRoute: {
          destAmount: '1033754707426863900000',
          srcAmount: '1000000000000000000',
          bestRoute: [
            {
              exchange: 'Uniswap',
              srcAmount: '1000000000000000000',
              percent: 100,
              data: {
                tokenFrom: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
                tokenTo: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                gasUSD: '8.93536981843968',
              },
              destAmount: '1033754707426863900000',
              destAmountFeeDeducted: '1033754707426863900000',
            },
          ],
          multiRoute: [],
          side: 'SELL',
        },
        userAddress: '0x1234123412341234123412341234123412341234',
        referrer: 'ps',
        gasPrice: '105600000000',
        receiver: '0x0000000000000000000000000000000000000000',
        options: {
          ignoreChecks: true,
          onlyParams: false,
        },
      }),
    );
  });

  test('UniswapV2_ETH_DAI', async () => {
    console.log(
      'buildTxLocally output:',
      await buildTxLocally(paraSwap, {
        srcToken: {
          address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
          decimals: 18,
          symbol: 'ETH',
          name: 'Ether',
          newToken: false,
          tokenType: 'ERC20',
          mainConnector: '',
          connectors: ['DAI', 'USDT'],
          network: 1,
          img: 'https://img.paraswap.network/ETH.png',
          bancor: {
            USDB: {
              smartToken: '0x482c31355F4f7966fFcD38eC5c9635ACAe5F4D4F',
              converter: '0x5C8c7Ef16DaC7596C280E70C6905432F7470965E',
              symbol: 'ETHUSDB',
              tokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            },
            BNT: {
              smartToken: '0xb1CD6e4153B2a390Cf00A6556b0fC1458C4A5533',
              converter: '0xE870D00176b2C71AFD4c43ceA550228E22be4ABd',
              symbol: 'ETHBNT',
              tokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            },
          },
        },
        destToken: {
          address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          decimals: 18,
          symbol: 'DAI',
          name: 'DAI',
          newToken: false,
          tokenType: 'ERC20',
          mainConnector: '',
          connectors: ['ETH', 'USDT'],
          network: 1,
          img: 'https://img.paraswap.network/DAI.png',
          bancor: {
            USDB: {
              smartToken: '0xcb913ED43e43cc7Cec1D77243bA381615101E7E4',
              converter: '0x06f7Bf937Dec0C413a2E0464Bb300C4d464bb891',
              symbol: 'DAIUSDB',
              tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            },
            BNT: {
              smartToken: '0xE5Df055773Bf9710053923599504831c7DBdD697',
              converter: '0xd99b0EFeeA095b87C5aD8BCc8B955eD5Ca5Ba146',
              symbol: 'DAIBNT',
              tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            },
          },
        },
        srcAmount: '1000000000000000000',
        minMaxAmount: '931393787205290000000',
        priceRoute: {
          destAmount: '1031393787205290000000',
          srcAmount: '1000000000000000000',
          bestRoute: [
            {
              exchange: 'UniswapV2',
              srcAmount: '1000000000000000000',
              percent: 100,
              data: {
                tokenFrom: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
                tokenTo: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                path: [
                  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
                  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                ],
                gasUSD: '16.1825089335',
              },
              destAmount: '1031393787205290000000',
              destAmountFeeDeducted: '1031393787205290000000',
            },
          ],
          multiRoute: [],
          side: 'SELL',
        },
        userAddress: '0x1234123412341234123412341234123412341234',
        referrer: 'ps',
        gasPrice: '126550000000',
        receiver: '0x0000000000000000000000000000000000000000',
        options: {
          ignoreChecks: true,
          onlyParams: false,
        },
      }),
    );
  });
});
