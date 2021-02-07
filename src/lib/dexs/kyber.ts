import Adapter from './adapter';

import KYBER_STORAGE_ABI = require('../../abi/kyberStorage.json');
import KYBER_HINT_ABI = require('../../abi/kyberHint.json');
import KYBER_PROXY_ABI = require('../../abi/kyberProxy.json');

import { Address, OptimalRate } from '../../types';
import { DexParams, KyberDEXData } from './dex-types';

const MAX_DEST_AMOUNT =
  '57896044618658097711785492504343953926634992332820282019728792003956564819968';
const KYBER_FEE_WALLET = '0x52262274dF4dB2586407F95454dea18eC1153662';

const DEX_PARAMS: any = {
  1: {
    kyberStorage: '0xC8fb12402cB16970F3C5F4b48Ff68Eb9D1289301',
    kyberHint: '0xa1C0Fa73c39CFBcC11ec9Eb1Afc665aba9996E2C',
  },
};

export class Kyber extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): KyberDEXData {
    return {
      name,
      exchange: optimalRate.data.exchange,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      minConversionRate: '1',
    };
  }

  async buildHint(srcToken: Address, destToken: Address) {
    const kyberHintContract = new this.web3Provider.eth.Contract(
      KYBER_HINT_ABI,
      DEX_PARAMS[this.network].kyberHint,
    );

    //ethToToken
    if (this.isETHAddress(srcToken)) {
      const excludedReserves = await this.getKyberReservesToExclude(
        destToken,
        false,
      );
      return await kyberHintContract.methods
        .buildEthToTokenHint(destToken, 2, excludedReserves, [])
        .call();
    }
    //tokenToEth
    else if (this.isETHAddress(destToken)) {
      const excludedReserves = await this.getKyberReservesToExclude(
        srcToken,
        true,
      );
      return await kyberHintContract.methods
        .buildEthToTokenHint(srcToken, 2, excludedReserves, [])
        .call();
    }
    //tokenToToken
    else {
      const srcExcludedReserves = await this.getKyberReservesToExclude(
        srcToken,
        true,
      );
      const destExcludedReserves = await this.getKyberReservesToExclude(
        destToken,
        false,
      );
      return await kyberHintContract.methods
        .buildTokenToTokenHint(
          srcToken,
          2,
          srcExcludedReserves,
          [],
          destToken,
          2,
          destExcludedReserves,
          [],
        )
        .call();
    }
  }

  private getKyberReservesToExclude = async (
    token: Address,
    isSrc: boolean,
  ) => {
    const kyberStorageContract = new this.web3Provider.eth.Contract(
      KYBER_STORAGE_ABI,
      DEX_PARAMS[this.network]['kyberStorage'],
    );

    if (isSrc) {
      const srcTokenReserveIds = await kyberStorageContract.methods
        .getReserveIdsPerTokenSrc(token)
        .call();
      return srcTokenReserveIds.filter(
        (srcTokenReserveId: string) =>
          srcTokenReserveId.substring(0, 4) === '0xbb',
      );
    } else {
      const destTokenReserveIds = await kyberStorageContract.methods
        .getReserveIdsPerTokenDest(token)
        .call();
      return destTokenReserveIds.filter(
        (destTokenReserveId: string) =>
          destTokenReserveId.substring(0, 4) === '0xbb',
      );
    }
  };

  private _swap(srcToken: Address, destToken: Address, data: KyberDEXData) {
    data.maxDestAmount = data.maxDestAmount || MAX_DEST_AMOUNT;
    data.hint = data.hint || '0x';

    const kyberContract = new this.web3Provider.eth.Contract(
      KYBER_PROXY_ABI,
      data.exchange,
    );

    const swapData = kyberContract.methods
      .tradeWithHintAndFee(
        srcToken,
        data.srcAmount,
        destToken,
        this.augustus._address,
        data.maxDestAmount,
        data.minConversionRate,
        KYBER_FEE_WALLET,
        '0',
        data.hint,
      )
      .encodeABI();

    return super.swap(srcToken, destToken, data, swapData, data.exchange);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: KyberDEXData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
