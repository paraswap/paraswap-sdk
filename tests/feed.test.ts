import * as dotenv from "dotenv";

import {ParaswapFeed, ParaSwap, OptimalRates, Token, APIError} from "../src";
import Web3 from "web3";

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const apiURL = process.env.API_URL || 'https://paraswap.io/api';
const network = 1;//0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
const srcToken = '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c';
const destToken = '0x6b175474e89094c44da98b954eedeac495271d0f';
const srcAmount = '1000000000000000000000000'; //The source amount multiplied by its decimal
const web3 = new Web3("https://mainnet.infura.io/v3/25828999a1a34c00845f18df8e5053fd");

describe("ParaswapFeed SDL", () => {
  let paraSwap: ParaswapFeed;
  let paraSwapAPI: ParaSwap;
  beforeAll(async () => {
    paraSwap = new ParaswapFeed(network, web3);
    paraSwapAPI = new ParaSwap(network, apiURL);
  });

  afterAll(async done => {
    done();
  });

  test("Get_Rates", async () => {
    const ratesOrError = await paraSwap.getRate(srcToken, destToken, srcAmount);
    console.log("PRICE FROM FEED!!");
    console.log(ratesOrError);

    const paraswapAPIPrice = await paraSwapAPI.getRate(srcToken, destToken, srcAmount);
    console.log("PARASWAP API PRICE");
    console.log(paraswapAPIPrice)
    /**const priceRoute = ratesOrError as OptimalRates;

    const {amount, bestRoute, others} = priceRoute;

    expect(typeof amount).toBe('string');

    expect(Array.isArray(bestRoute)).toBe(true);

    expect(typeof bestRoute[0].amount).toBe('string');
    expect(new BigNumber(bestRoute[0].amount).isNaN()).toBe(false);

    expect(typeof bestRoute[0].exchange).toBe('string');

    expect(typeof bestRoute[0].percent).toBe('string');
    expect(new BigNumber(bestRoute[0].percent).isNaN()).toBe(false);

    expect(typeof bestRoute[0].srcAmount).toBe('string');
    expect(new BigNumber(bestRoute[0].srcAmount).isNaN()).toBe(false);

    expect(Array.isArray(others)).toBe(true);

    expect(typeof others![0].exchange).toBe('string');

    expect(typeof others![0].rate).toBe('string');
    expect(new BigNumber(others![0].rate).isNaN()).toBe(false);

    expect(typeof others![0].unit).toBe('string');
    expect(new BigNumber(others![0].unit).isNaN()).toBe(false);*/
  });
});
