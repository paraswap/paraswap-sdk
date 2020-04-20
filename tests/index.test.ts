import * as dotenv from "dotenv";

import {ParaSwap, OptimalRates, Token, APIError} from "../src";
import BigNumber from "bignumber.js";

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const apiURL = process.env.API_URL || 'https://paraswap.io/api';
const network = 1;
const srcToken = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const destToken = '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359';
const srcAmount = '1000000000000000000'; //The source amount multiplied by its decimals
const senderAddress = '0xfceA770875E7e6f25E33CEa5188d12Ef234606b4';
const referrer = 'sdk-test';
const payTo = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A'; // Useful in case of a payment

describe("ParaSwap SDL", () => {
  let paraSwap: ParaSwap;

  beforeAll(async () => {
    paraSwap = new ParaSwap(network, apiURL);
  });

  afterAll(async done => {
    done();
  });

  test("Get_Tokens", async () => {
    const tokensOrError = await paraSwap.getTokens();

    const tokens = tokensOrError as Token[];

    expect(Array.isArray(tokens)).toBe(true);
    expect(tokens.length).toBeGreaterThan(0);
    expect(tokens[0]).toBeInstanceOf(Token);
  });

  test("Get_Rates", async () => {
    const ratesOrError = await paraSwap.getRate(srcToken, destToken, srcAmount, {excludeDEXS: "Bancor"});

    const priceRoute = ratesOrError as OptimalRates;

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
    expect(new BigNumber(others![0].unit).isNaN()).toBe(false);
  });

  test("Get_Build_Tx", async () => {
    const ratesOrError = await paraSwap.getRate(srcToken, destToken, srcAmount);
    const priceRoute = ratesOrError as OptimalRates;

    const destAmount = priceRoute.amount;
    const txOrError = await paraSwap.buildTx(srcToken, destToken, srcAmount, destAmount, priceRoute, senderAddress, referrer, payTo);

    const error = txOrError as APIError;

    expect(typeof error.status).toBe("number");
    expect(error.status).toBe(403);
    expect(error.message).toBe('ETH_BALANCE_ERROR: Not Enough ETH Balance');
  });
});
