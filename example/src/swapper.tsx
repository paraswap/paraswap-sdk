import * as React from 'react';
import * as _ from 'lodash';
import BigNumber from "bignumber.js";
import {Button, Dropdown, Form, Icon, Input, Message, Image} from "semantic-ui-react";
import {OptimalRates, Token, User} from "./types";

const Web3 = require('web3');

const ParaSwap = require("../../src/paraswap");

declare let web3: any;

const apiURL = process.env.API_URL;

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
}

export default class Swapper extends React.Component<any, IState> {
  paraSwap: any;

  constructor(props: any) {
    super(props);

    this.state = {
      error: '',
      loading: false,
      tokens: [],
      srcAmount: '1',
    };
  }

  shortenAddress = (address?: string) => address && `${address.slice(0, 10)}....${address.slice(27)}` || '';

  private getDestAmount = () => {
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

  private getSrcAmount = (value: string) => {
    if (_.isNaN(Number(value))) {
      return this.state.srcAmount;
    }
    return value;
  };

  private setSrcAmount = (value: string) => {
    this.setState({srcAmount: this.getSrcAmount(value), priceRoute: undefined});

    this.getBestPrice();
  };

  private updatePair = async (fromOrTo: 'from' | 'to', symbol: string) => {
    if (fromOrTo === 'from') {
      if (symbol === this.state.tokenTo!.symbol) {
        return null;
      }

      const tokenFrom = this.state.tokens.find(t => t.symbol === symbol);

      this.setState({tokenFrom, priceRoute: undefined});

      if (symbol.toUpperCase() !== "ETH") {
        //await this.getSrcAllowance(tokenFrom!);
      }

    } else {
      if (symbol === this.state.tokenFrom!.symbol) {
        return null;
      }

      this.setState({priceRoute: undefined, tokenTo: this.state.tokens.find(t => t.symbol === symbol)})
    }

    this.getBestPrice();
  };

  public getTokens = async () => {
    try {
      this.setState({loading: true});

      const tokens: Token[] = await this.paraSwap.getTokens();

      const tokenFrom = tokens.find(t => t.symbol === PAIR.from);
      const tokenTo = tokens.find(t => t.symbol === PAIR.to);

      this.setState({tokens, tokenFrom, tokenTo, loading: false});

      if (tokenFrom!.symbol.toUpperCase() !== "ETH") {
        //await this.getSrcAllowance(tokenFrom!);
      }
    } catch (e) {
      console.error(e);
      this.setState({error: e.toString(), loading: false});
    }

  };

  getBestPrice = async () => {
    try {
      this.setState({loading: true});

      const {tokenFrom, tokenTo, srcAmount} = this.state;

      const _srcAmount = new BigNumber(srcAmount).times(10 ** tokenFrom!.decimals);

      const rate = await this.paraSwap.getRate(tokenFrom!.address, tokenTo!.address, _srcAmount);

      this.setState({loading: false, priceRoute: rate.priceRoute});

    } catch (e) {
      this.setState({error: e.toString(), loading: false});
      console.error("ERROR", e);
    }
  };

  swapOrPay = () => {

  };

  async componentDidMount() {
    if (typeof web3 !== 'undefined') {
      const addresses = await web3.currentProvider.enable();

      const {networkVersion} = web3.currentProvider;
      const user = new User(addresses[0], Number(networkVersion));
      this.setState({user});

      this.paraSwap = new ParaSwap(networkVersion, apiURL);

    } else {
      this.paraSwap = new ParaSwap(1, apiURL);
    }

    await this.getTokens();

    await this.getBestPrice();
  }

  render() {
    const {tokens, tokenFrom, tokenTo, srcAmount, priceRoute, payTo, loading, error} = this.state;

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
              placeholder='Token From'
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
              placeholder='Token To'
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
              onChange={(e: any) => this.setState({payTo: e.target.value})}
              value={this.shortenAddress(payTo)}
              placeholder='Pay To'
            />
          </Form.Field>

          <Form.Field>
            <Button
              loading={loading}
              onClick={() => this.getBestPrice()} primary fluid>
              GET RATES
            </Button>
          </Form.Field>

          <Form.Field>
            <Button
              positive
              disabled={loading || !priceRoute}
              onClick={() => this.swapOrPay()} primary fluid>
              {
                payTo ? 'PAY' : 'SWAP'
              }
            </Button>
          </Form.Field>

        </Form>
      </div>
    )
  }
}
