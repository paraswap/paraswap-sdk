import * as React from 'react';
import * as _ from 'lodash';
import BigNumber from "bignumber.js";
import {Button, Dropdown, Form, Icon, Input, Message, Image} from "semantic-ui-react";
import {ParaSwap, APIError, Token, User, OptimalRates, Transaction} from "../../src";
import Web3 = require("web3");

declare let web3: any;

const PROVIDER_URL = process.env.PROVIDER_URL;
const apiURL = process.env.API_URL || 'https://paraswap.io/api/v1';

const DEFAULT_ALLOWED_SLIPPAGE = 0.005;//0.5%

const PAIR = {from: 'ETH', to: 'DAI', amount: '1'};

interface IState {
  loading: boolean,
  error: string,
  tokens: Token[],
  srcAmount: string,
  priceRoute?: OptimalRates,
  user?: User,
  payTo?: string,
  tokenFrom?: Token,
  tokenTo?: Token,
  transactionHash?: string,
}

export default class Swapper extends React.Component<any, IState> {
  paraSwap?: ParaSwap;
  provider: Web3;

  constructor(props: any) {
    super(props);

    this.state = {
      error: '',
      loading: false,
      tokens: [],
      srcAmount: '1',
      payTo: '',
      transactionHash: ''
    };

    this.provider = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL!));
  }

  isValidAddress(address: string) {
    return this.provider.utils.isAddress(address);
  }

  getDestAmount = () => {
    const {priceRoute, tokenTo} = this.state;

    if (!priceRoute) {
      return '';
    }

    const destAmount = new BigNumber(priceRoute.amount).dividedBy(10 ** tokenTo!.decimals);

    if (destAmount.isNaN()) {
      return '';
    }

    return destAmount.toFixed();
  };

  getSrcAmount = (value: string) => {
    if (_.isNaN(Number(value))) {
      return this.state.srcAmount;
    }
    return value;
  };

  setSrcAmount = (value: string) => {
    const srcAmount = this.getSrcAmount(value)

    this.setState(
      {srcAmount, priceRoute: undefined},
      () => this.getBestPrice(srcAmount)
    );
  };

  switch = () => {
    const {tokenFrom, tokenTo} = this.state;
    this.setState({tokenFrom: tokenTo, tokenTo: tokenFrom});
  };

  getAllowance = async (token: Token) => {
    try {
      const {user} = this.state;

      this.setState({loading: true});

      const allowance = await this.paraSwap!.getAllowance(user!.address, token.address, user!.network);

      const tokenWithAllowance = new Token(token.address, token.decimals, token.symbol, allowance);

      this.setState({tokenFrom: tokenWithAllowance});

      this.setState({loading: false});
    } catch (e) {
      this.setState({error: e.toString(), loading: false});
    }
  };

  needsAllowance = () => {
    const {tokenFrom, priceRoute} = this.state;

    if (tokenFrom!.symbol === 'ETH') {
      return false;
    }

    return (
      new BigNumber(priceRoute!.amount).isGreaterThan(new BigNumber(tokenFrom!.allowance!))
    )
  };

  updatePair = (fromOrTo: 'from' | 'to', symbol: string) => {
    if (fromOrTo === 'from') {
      if (symbol === this.state.tokenTo!.symbol) {
        this.switch();
      }

      const tokenFrom = this.state.tokens.find(t => t.symbol === symbol);

      this.setState(
        {tokenFrom, priceRoute: undefined},
        () => this.getBestPrice(this.state.srcAmount)
      );

      if (symbol.toUpperCase() !== "ETH") {
        this.getAllowance(tokenFrom!);
      }

    } else {
      if (symbol === this.state.tokenFrom!.symbol) {
        this.switch();
      }

      this.setState(
        {priceRoute: undefined, tokenTo: this.state.tokens.find(t => t.symbol === symbol)},
        () => this.getBestPrice(this.state.srcAmount)
      );
    }
  };

  onPayToChanged = (e: any) => {
    const payTo = e.target.value;
    this.setState({payTo});

    if (payTo && !this.isValidAddress(payTo)) {
      this.setState({error: 'Invalid pay address'});
    } else {
      this.setState({error: ''});
    }
  };

  getTokens = async () => {
    try {
      this.setState({loading: true});

      const tokensOrError = await this.paraSwap!.getTokens();

      if ((tokensOrError as APIError).error) {
        return this.setState({error: (tokensOrError as APIError).error, loading: false});
      }

      const tokens: Token[] = tokensOrError as Token[];

      const tokenFrom = tokens.find(t => t.symbol === PAIR.from);
      const tokenTo = tokens.find(t => t.symbol === PAIR.to);

      this.setState({tokens, tokenFrom, tokenTo, loading: false});

    } catch (e) {
      console.error(e);
      this.setState({error: e.toString(), loading: false});
    }

  };

  getBestPrice = async (srcAmount: string) => {
    try {
      this.setState({loading: true, error: ''});

      const {tokenFrom, tokenTo} = this.state;

      if (!srcAmount) {
        return;
      }

      const _srcAmount = new BigNumber(srcAmount).times(10 ** tokenFrom!.decimals);

      const priceRouteOrError = await this.paraSwap!.getContractRate(tokenFrom!.address, tokenTo!.address, _srcAmount.toFixed(0));

      if ((priceRouteOrError as APIError).error) {
        return this.setState({error: (priceRouteOrError as APIError).error, loading: false});
      }

      const priceRoute = priceRouteOrError as OptimalRates;

      this.setState({loading: false, priceRoute});

    } catch (e) {
      this.setState({error: "Price Feed Error", loading: false});
    }
  };

  setAllowance = async () => {
    const {user, tokenFrom, srcAmount} = this.state;

    try {
      const amount = new BigNumber(srcAmount).times(10 ** tokenFrom!.decimals).toFixed(0);

      const transactionHash = await this.paraSwap!.approveToken(amount, user!.address, tokenFrom!.address, user!.network);

      console.log('transactionHash', transactionHash);
      this.setState({transactionHash});

    } catch (e) {
      this.setState({error: e.toString(), loading: false});
    }
  };

  swapOrPay = async () => {
    const {user, tokenFrom, tokenTo, srcAmount, priceRoute, payTo} = this.state;

    try {
      this.setState({loading: true, error: ''});

      const _srcAmount = new BigNumber(srcAmount).times(10 ** tokenFrom!.decimals).toFixed(0);

      const minDestinationAmount = new BigNumber(priceRoute!.amount).multipliedBy(1 - DEFAULT_ALLOWED_SLIPPAGE);

      const txParams = await this.paraSwap!.buildTx(
        tokenFrom!.address, tokenTo!.address, _srcAmount, minDestinationAmount.toFixed(), priceRoute!, user!.address, payTo
      );

      if ((txParams as APIError).error) {
        return this.setState({error: (txParams as APIError).error, loading: false});
      }

      await this.provider.eth.sendTransaction((txParams as Transaction), async (err: any, transactionHash: string) => {
        if (err) {
          return this.setState({error: err.toString(), loading: false});
        }

        console.log('transactionHash', transactionHash);
        this.setState({transactionHash});
      });

      this.setState({loading: false});
    } catch (e) {
      this.setState({error: e.toString(), loading: false});
      console.error("ERROR", e);
    }
  };

  async componentDidMount() {
    this.paraSwap = new ParaSwap(1, apiURL);

    await this.getTokens();
    await this.getBestPrice('1');

    if (typeof web3 !== 'undefined') {
      const addresses = await web3.currentProvider.enable();

      const {networkVersion} = web3.currentProvider;
      const user = new User(addresses[0], networkVersion);
      this.setState({user});

      const network = Number(networkVersion);

      this.paraSwap = new ParaSwap(network, apiURL);

      this.provider = new Web3(web3.currentProvider);

      if (network !== 1) {
        await this.getTokens();
        await this.getBestPrice('1');
      }
    }
  }

  render() {
    const {tokens, tokenFrom, tokenTo, srcAmount, priceRoute, payTo, loading, error, transactionHash} = this.state;

    const options = tokens.map((t: Token) => ({
      key: t.symbol,
      text: t.symbol,
      value: t.symbol
    }));

    return (
      <div>
        <Image src={require('./img/logo.png')}/>

        {
          error ? (
            <Message negative icon>
              <Icon name='exclamation'/>
              <Message.Content>
                <Message.Content>{error}</Message.Content>
              </Message.Content>
            </Message>
          ) : null
        }

        {
          transactionHash ? (
            <Message info>
              <a target={'_blank'} href={`https://etherscan.io/tx/${transactionHash}`}>Track transaction</a>
            </Message>
          ) : null
        }

        <Form>
          <Form.Field>
            <Input
              autoFocus={true}
              onChange={(e: any) => this.setSrcAmount(e.target.value)}
              value={srcAmount.toString()}
              placeholder='Amount'
            />
          </Form.Field>

          <Form.Field>
            <Dropdown
              placeholder='From'
              search
              fluid
              selection
              options={options}
              value={tokenFrom && tokenFrom.symbol}
              onChange={(_: any, data: any) => this.updatePair('from', data.value)}
            />
          </Form.Field>

          <Form.Field>
            <Dropdown
              placeholder='To'
              search
              fluid
              selection
              options={options}
              value={tokenTo && tokenTo.symbol}
              onChange={(_: any, data: any) => this.updatePair('to', data.value)}
            />
          </Form.Field>

          <Form.Field>
            <Input
              value={this.getDestAmount()}
              placeholder='Amount'
            />
          </Form.Field>

          <Form.Field>
            <Input
              className={'pay-to'}
              onChange={this.onPayToChanged}
              value={payTo}
              placeholder='Pay To'
            />
          </Form.Field>

          <Form.Field>
            <Button
              loading={loading}
              onClick={() => this.getBestPrice(srcAmount)} primary fluid>
              GET RATES
            </Button>
          </Form.Field>

          <Form.Field>
            {
              (tokenFrom && priceRoute && this.needsAllowance()) ? (
                <Button
                  positive
                  disabled={loading || !priceRoute}
                  onClick={() => this.setAllowance()} primary fluid>
                  APPROVE TOKEN
                </Button>
              ) : (
                <Button
                  positive
                  disabled={loading || !priceRoute}
                  onClick={() => this.swapOrPay()} primary fluid>
                  {
                    payTo ? 'PAY' : 'SWAP'
                  }
                </Button>
              )
            }

          </Form.Field>

        </Form>
      </div>
    )
  }
}
