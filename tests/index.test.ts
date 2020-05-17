import * as dotenv from "dotenv";
import Web3 from "web3";

import {ParaSwap, OptimalRates, Token, APIError} from "../src";
import BigNumber from "bignumber.js";
import {Adapters, Allowance} from "../src/types";

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const ETH = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const BAT = "0x0d8775f648430679a709e98d2b0cb6250d2887ef";
const MANA = "0x0f5d2fb29fb7d3cfee444a200298f468908cc942";

const PROVIDER_URL = process.env.PROVIDER_URL;
const apiURL = process.env.API_URL || 'https://paraswap.io/api';
const network = 1;
const srcToken = ETH;
const destToken = DAI;
const srcAmount = (10 * 1e18).toString(); //The source amount multiplied by its decimals
const senderAddress = '0xfceA770875E7e6f25E33CEa5188d12Ef234606b4';
const referrer = 'sdk-test';
const receiver = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A'; // Useful in case of a payment

const provider = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL));

describe("ParaSwap SDK", () => {
  let paraSwap: ParaSwap;

  beforeAll(async () => {
    paraSwap = new ParaSwap(network, apiURL).setWeb3Provider(provider);
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

  test("Get_Spender", async () => {
    const spender = await paraSwap.getSpender();
    expect(provider.utils.isAddress(spender as string));
  });

  test("Get_Allowance", async () => {
    const allowance = await paraSwap.getAllowance(senderAddress, DAI);
    expect(new BigNumber(allowance).isNaN()).toBe(false);
  });

  test("Get_Allowances", async () => {
    const allowancesOrError = await paraSwap.getAllowances(senderAddress, [DAI, BAT, MANA]);

    const allowances = allowancesOrError as Allowance[];

    await Promise.all(
      allowances.map(allowance => expect(new BigNumber(allowance.allowance).isNaN()).toBe(false))
    );
  });

  test("Get_Adapters", async () => {
    const adaptersOrError = await paraSwap.getAdapters();

    const adapters = adaptersOrError as Adapters;

    expect(adapters.augustus.exchange).toBeDefined();
    expect(adapters.uniswap.exchange).toBeDefined();
    expect(adapters.uniswap.targetExchange).toBeDefined();
    expect(adapters.kyber.exchange).toBeDefined();
    expect(adapters.kyber.targetExchange).toBeDefined();
  });

  test("Build_Tx_Locally", async () => {
    const srcToken = new Token(ETH, 18, 'ETH');
    const destToken = new Token(DAI, 18, 'DAI');

    const ratesOrError = await paraSwap.getRate(srcToken.address, destToken.address, srcAmount, {excludeDEXS: '0x'});
    const priceRoute = ratesOrError as OptimalRates;

    const destAmount = priceRoute.amount;

    const gasPrice = new BigNumber(10).times(10 ** 9).toFixed();

    const build = await paraSwap.buildTxLocally(srcToken, destToken, srcAmount, destAmount, priceRoute, senderAddress, referrer, gasPrice);

    console.log('build',  build)
  });

  test("Build_Tx", async () => {
    const ratesOrError = await paraSwap.getRate(srcToken, destToken, srcAmount, {includeDEXS: 'ParaSwapPool'});
    const priceRoute = ratesOrError as OptimalRates;

    const destAmount = new BigNumber(priceRoute.amount).times(0.99).toFixed();

    const txOrError = await paraSwap.buildTx(srcToken, destToken, srcAmount, destAmount, priceRoute, senderAddress, referrer);

    const error = txOrError as APIError;

    expect(typeof error.status).toBe("number");
    expect(error.status).toBe(403);
    expect(error.message).toBe('ETH_BALANCE_ERROR: Not Enough ETH Balance');
  });
});
