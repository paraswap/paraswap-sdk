import { Address } from '../types';

export type LendingToken =
  | 'cToken'
  | 'iToken'
  | 'aToken'
  | 'aToken2'
  | 'idleToken'
  | 'Chai'
  | 'bDAI';
export type TokenType = 'ETH' | 'ERC20' | 'SYNTH';

export class Token {
  constructor(
    public address: Address,
    public decimals: number,
    public symbol?: string,
    public tokenType: LendingToken | TokenType = 'ERC20',
    public mainConnector: string = '',
    public connectors: string[] = [],
    public network: number = 1,
    public img?: string,
    public allowance?: string,
    public balance?: string,
  ) {
    this.connectors = this.connectors.length
      ? this.connectors
      : this.mainConnector
      ? [this.mainConnector]
      : ['ETH'];

    this.tokenType =
      this.tokenType ||
      (this.symbol && this.symbol.toUpperCase() === 'ETH' ? 'ETH' : 'ERC20');
  }
}
