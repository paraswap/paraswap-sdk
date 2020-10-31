import {Curve} from "./curve";

const pools: { [pool: string]: any } = {
  Swerve: {
    underlying: [],
    coins: ['DAI', 'USDC', 'USDT', 'TUSD'],
    exchange: '0x329239599afB305DA0A2eC69c58F8a6697F9F88d',
    name: 'Swerve',
  },
}

export class Swerve extends Curve {
  constructor(){
    super();
    this.pools = pools;
  }
}
