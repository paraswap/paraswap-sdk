import * as dotenv from 'dotenv';
dotenv.config();

import * as utils from '@0x/protocol-utils';
import { BigNumber } from '@0x/utils';
import Web3 from 'web3';

import { Zerox } from '../src/lib/dexs/zerox';

const MAKER_ADDRESS = process.env.MAKER_ADDRESS;
const MAKER_KEY = process.env.MAKER_KEY;

const PROVIDER_URL = process.env.PROVIDER_URL;
const provider = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL!));

function buildTest0xOrder() {
  let _order = {
    makerToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    takerToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
    makerAmount: new BigNumber('100000000000000000') as any, // 0.1 ETH
    takerAmount: new BigNumber('100000000000000000000') as any, // 100 DAI
    maker: MAKER_ADDRESS,
    taker: '0x615312fb74c31303eab07dea520019bb23f4c6c2',
    txOrigin: '0x0000000000000000000000000000000000000000',
    expiry: new BigNumber(Date.now() + 60 * 4) as any,
    salt: new BigNumber(2001) as any, // should be random
  };
  const order = new utils.RfqOrder(_order);
  const signature = order.getSignatureWithKey(MAKER_KEY!);
  return {
    orders: [order],
    signatures: [signature],
    version: 4,
    srcAmount: '100000000000000000',
    destAmount: '1',
    minConversionRate: '1',
    name: '0xv4',
  };
}

describe('0x v4', () => {
  test('simple swap', async () => {
    const zrx = new Zerox(1, provider);
    console.log(zrx.buildSwapData(buildTest0xOrder()));
  });
});
