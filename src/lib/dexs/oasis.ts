import {Weth} from "./weth";

const DEX_PARAMS: any = {
  1: {
    otc: "0x794e6e91555438aFc3ccF1c5076A74F42133d08D",
    weth: Weth.getAddress(1),
    factory: "0x4678f0a6958e4d2bc4f1baf7bc52e8f3564f3fe4"
  }
};

export class Oasis {
  static getExchangeParams(network: number = 1) {
    return DEX_PARAMS[network];
  }
}
