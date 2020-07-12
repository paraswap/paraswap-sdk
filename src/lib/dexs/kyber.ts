import { kyberStorageABI } from "../../abi/kyberStorage.json";
import { kyberHintABI } from "../../abi/kyberHint.json";
import {
  Adapters,
  Address,
  NumberAsString,
  OptimalRates,
  PriceString,
  Rate, TransactionData,
  TransactionParams,
  TransactionPath, TransactionRoute
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

  buildHint = async(srcToken: Address, destToken: Address)=>{
    const kyberHintContract = new this.web3Provider.eth.Contract(kyberHintABI, DEX_PARAMS[this.network]['kyberHint']);

    var hint;
    //ethToToken
    if (this.isETHAddress(srcToken)){
      var excludedReserves = await this.getKyberReservesToExclude(destToken, false);
      hint = await kyberHintContract.methods.buildEthToTokenHint(destToken, 2, excludedReserves, []).call();
    }
    //tokenToEth
    else if (this.isETHAddress(destToken)) {
      var excludedReserves = await this.getKyberReservesToExclude(srcToken, true);
      hint = await kyberHintContract.methods.buildEthToTokenHint(srcToken, 2, excludedReserves, []).call();
    }
    //tokenToToken
    else {
      var srcExcludedReserves = await this.getKyberReservesToExclude(srcToken, true);
      var destExcludedReserves = await this.getKyberReservesToExclude(destToken, false);
      hint = await kyberHintContract.methods.buildKyberHint(srcToken, 2, srcExcludedReserves, [], destToken, 2, destExcludedReserves, []).call();
    }

    return hint;
  }

  private getKyberReservesToExclude = async(token: Address, isSrc: boolean) => {
    var reserveIds = new Array();
    const kyberStorageContract = new this.web3Provider.eth.Contract(kyberStorageABI, DEX_PARAMS[this.network]['kyberStorage']);

    if(isSrc) {
      let srcTokenReserveIds = await kyberStorageContract.methods.getReserveIdsPerTokenSrc(token).call();
      for(var i = 0; i < srcTokenReserveIds.length; i++) {
        if(srcTokenReserveIds[i].substring(0,4) === "0xbb"){
            reserveIds.push(srcTokenReserveIds[i])
        }
      }
    }
    else {
      let destTokenReserveIds = await kyberStorageContract.methods.getReserveIdsPerTokenDest(token).call();
      for(var i = 0; i < destTokenReserveIds.length; i++) {
        if(destTokenReserveIds[i].substring(0,4) === "0xbb"){
            reserveIds.push(destTokenReserveIds[i])
        }
      }
    }
    return reserveIds;
  }
}
