import { Address, ETHER_ADDRESS, OptimalRate } from '../../types';
import { DEXData, DexParams } from './dex-types';
import {Weth} from "./weth";

export default abstract class Adapter {
  constructor(protected network: number, protected web3Provider: any, protected augustus: any) {
  }

  isETHAddress = (address: string) => address.toLowerCase() === ETHER_ADDRESS.toLowerCase();

  isWETHAddress = (address: string, network: number) => address.toLowerCase() === Weth.getAddress(network).toLowerCase();

  static getDexData(_: OptimalRate): DEXData {
    throw new Error('not implemented!');
  };

  async getBlock() {
    return this.web3Provider.eth.getBlock('latest');
  }

  async getDeadline() {
    const block = await this.getBlock();
    return block.timestamp + 600;
  }

  async buildSwap(srcToken: Address, destToken: Address, data: Required<DEXData>): Promise<DexParams> {
    try {
      if (this.isETHAddress(srcToken)) {
        return this.ethToTokenSwap(srcToken, destToken, data);
      } else if (this.isETHAddress(destToken)) {
        return this.tokenToEthSwap(srcToken, destToken, data);
      } else {
        return this.tokenToTokenSwap(srcToken, destToken, data);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  protected abstract async ethToTokenSwap(srcToken: Address, destToken: Address, data: DEXData): Promise<DexParams>;

  protected abstract async tokenToEthSwap(srcToken: Address, destToken: Address, data: DEXData): Promise<DexParams>;

  protected abstract async tokenToTokenSwap(srcToken: Address, destToken: Address, data: DEXData): Promise<DexParams>;
}
