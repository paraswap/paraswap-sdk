const kyberStorageABI = require("../../abi/kyberStorage.json");
const kyberHintABI = require("../../abi/kyberHint.json");

import {
  Address
} from "../../types";

export const ETHER_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';


const DEX_PARAMS: any = {
  1: {
    kyberStorage: "0xC8fb12402cB16970F3C5F4b48Ff68Eb9D1289301",
    kyberHint: "0xa1C0Fa73c39CFBcC11ec9Eb1Afc665aba9996E2C"
  }
};

export class Kyber {

  constructor(private network: number = 1, private web3Provider: any) {

  }

  private isETHAddress = (address: string) => address.toLowerCase() === ETHER_ADDRESS.toLowerCase();

  buildHint = async (srcToken: Address, destToken: Address) => {
    const kyberHintContract = new this.web3Provider.eth.Contract(kyberHintABI, DEX_PARAMS[this.network].kyberHint);

    //ethToToken
    if (this.isETHAddress(srcToken)) {
      const excludedReserves = await this.getKyberReservesToExclude(destToken, false);
      return await kyberHintContract.methods.buildEthToTokenHint(destToken, 2, excludedReserves, []).call();
    }
    //tokenToEth
    else if (this.isETHAddress(destToken)) {
      const excludedReserves = await this.getKyberReservesToExclude(srcToken, true);
      return await kyberHintContract.methods.buildEthToTokenHint(srcToken, 2, excludedReserves, []).call();
    }
    //tokenToToken
    else {
      const srcExcludedReserves = await this.getKyberReservesToExclude(srcToken, true);
      const destExcludedReserves = await this.getKyberReservesToExclude(destToken, false);
      return await kyberHintContract.methods.buildTokenToTokenHint(srcToken, 2, srcExcludedReserves, [], destToken, 2, destExcludedReserves, []).call();
    }
  }

  private getKyberReservesToExclude = async (token: Address, isSrc: boolean) => {
    const kyberStorageContract = new this.web3Provider.eth.Contract(kyberStorageABI, DEX_PARAMS[this.network]['kyberStorage']);

    if (isSrc) {
      const srcTokenReserveIds = await kyberStorageContract.methods.getReserveIdsPerTokenSrc(token).call();
      return srcTokenReserveIds.filter((srcTokenReserveId: string) => srcTokenReserveId.substring(0, 4) === "0xbb");

    } else {
      const destTokenReserveIds = await kyberStorageContract.methods.getReserveIdsPerTokenDest(token).call();
      return destTokenReserveIds.filter((destTokenReserveId: string) => destTokenReserveId.substring(0, 4) === "0xbb");
    }
  }
}
