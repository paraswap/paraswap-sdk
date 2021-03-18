import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { AaveDexData, DexParams } from './dex-types';
import ERC20_ABI = require('../../abi/erc20.json');
import AAVE_LENDING_POOL_ABI_V1 = require('../../abi/aave-lending-pool.v1.json');
import AAVE_LENDING_POOL_ABI_V2 = require('../../abi/aave-lending-pool.v2.json');
import WETH_GATEWAY_ABI = require('../../abi/aave-weth-gateway.json');

const aaveLendingPool: any = {
  v1: {
    1: '0x398eC7346DcD622eDc5ae82352F02bE94C62d119',
  },
  v2: {
    1: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
  },
};

const SPENDER: any = {
  1: '0x3dfd23a6c5e8bbcfc9581d2e864a68feb6a076d3',
};

const WETH_GATEWAY: any = {
  1: '0xDcD33426BA191383f1c9B431A342498fdac73488',
};

const REF_CODE = 1;

export class Aave extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): AaveDexData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      fromAToken: optimalRate.data.fromAToken,
      isV2: optimalRate.data.isV2,
    };
  }

  private async _swap(srcToken: Address, destToken: Address, data: AaveDexData): Promise<DexParams> {
    if (data.isV2) {

      if (this.isETHAddress(srcToken)) {
        const wethGateway = new this.web3Provider.eth.Contract(WETH_GATEWAY_ABI, WETH_GATEWAY[this.network]);
        const swapData = wethGateway.methods.depositETH(this.augustus._address, REF_CODE).encodeABI();

        return super.swap(
          srcToken,
          destToken,
          data,
          swapData,
          WETH_GATEWAY[this.network],
        );

      } else if (this.isETHAddress(destToken)) {
        const wethGateway = new this.web3Provider.eth.Contract(WETH_GATEWAY_ABI, WETH_GATEWAY[this.network]);
        const swapData = wethGateway.methods.withdrawETH(data.srcAmount, this.augustus._address).encodeABI();

        return super.swap(
          srcToken,
          destToken,
          data,
          swapData,
          WETH_GATEWAY[this.network],
        );

      } else {
        if (data.fromAToken) {
          const lpContract = new this.web3Provider.eth.Contract(AAVE_LENDING_POOL_ABI_V2, aaveLendingPool.v2[this.network]);
          const swapData = lpContract.methods.withdraw(destToken, data.srcAmount, this.augustus._address).encodeABI();

          return super.swap(
            srcToken,
            destToken,
            data,
            swapData,
            aaveLendingPool.v2[this.network],
          );

        } else {
          const lpContract = new this.web3Provider.eth.Contract(AAVE_LENDING_POOL_ABI_V2, aaveLendingPool.v2[this.network]);
          const swapData = lpContract.methods.deposit(srcToken, data.srcAmount, this.augustus._address, REF_CODE).encodeABI();

          return super.swap(
            srcToken,
            destToken,
            data,
            swapData,
            aaveLendingPool.v2[this.network],
          );
        }
      }
    } else {
      if (data.fromAToken) {
        const aContract = new this.web3Provider.eth.Contract(ERC20_ABI, srcToken);
        const swapData = aContract.methods.redeem(data.srcAmount).encodeABI();

        return super.swap(
          srcToken,
          destToken,
          data,
          swapData,
          srcToken,
        );

      } else {
        const approveCallData = await this.getApproveCallData(srcToken, data.srcAmount, SPENDER[this.network]);

        const lpContract = new this.web3Provider.eth.Contract(AAVE_LENDING_POOL_ABI_V1, aaveLendingPool.v1[this.network]);
        const swapData = lpContract.methods.deposit(srcToken, data.srcAmount, REF_CODE).encodeABI();

        const mintValue = this.isETHAddress(srcToken) ? data.srcAmount : '0';

        const callees = approveCallData ? [this.augustus._address, aaveLendingPool.v1[this.network]] : [aaveLendingPool.v1[this.network]];
        const calldata = approveCallData ? [approveCallData.calldata, swapData] : [swapData];
        const values = approveCallData ? ['0', mintValue] : [mintValue];

        return {
          callees,
          calldata,
          values,
        };
      }
    }
  }

  async buildSwap(srcToken: Address, destToken: Address, data: AaveDexData): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
