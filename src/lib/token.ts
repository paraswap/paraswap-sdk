import {Address} from "../types";

export type LendingToken = 'cToken' | 'iToken' | 'aToken' | 'idleToken' | 'Chai' | 'bDAI';
export type TokenType = 'ETH' | 'ERC20';

export class Token {
  getConnectors() {
    const DAI = this.network === 1 ? 'DAI' : 'SAI';

    if (this.symbol === 'ETH') {
      return [DAI, 'USDC'];
    }

    if (this.symbol === 'DAI') {
      return ['ETH', 'USDC'];
    }

    return this.mainConnector ? [this.mainConnector] : ['ETH', DAI];
  }

  constructor(
    public address: Address,
    public decimals: number,
    public symbol: string,
    public tokenType: LendingToken | TokenType = 'ERC20',
    public mainConnector: string = '',
    public connectors: string[] = [],
    public network: number = 1,
    public img?: string,
    public allowance?: string,
    public balance?: string,
  ) {
    this.connectors = this.connectors.length ? this.connectors : this.getConnectors();

    this.tokenType = this.tokenType || (this.symbol.toUpperCase() === "ETH" ? "ETH" : "ERC20");
  }
}
