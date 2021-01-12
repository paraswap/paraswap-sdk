import { DEXData, DexParams, SwapData, ExchangeData } from './dexs/dex-types';
import { Address, EXCHANGES } from '../types';
import { UniswapV1 } from './dexs/uniswap-v1';
import { UniswapV2 } from './dexs/uniswap-v2';

export class Swapper {
  constructor(private network: number, private web3Provider: any, private augustus: any) {
  }

  private buildExchangeData(dataObject: DexParams): ExchangeData {
    const calldata = dataObject.calldata;

    let concatenatedCallData = "0x";

    let startIndex = [0];

    for (let i = 0; i < calldata.length; i++) {
      const tempCalldata = calldata[i].substring(2);

      const index = tempCalldata.length / 2;

      startIndex.push(startIndex[i] + index);

      concatenatedCallData = concatenatedCallData.concat(tempCalldata);
    }

    return {
      callees: dataObject.callees,
      values: dataObject.values,
      calldata: concatenatedCallData,
      startIndexes: startIndex,
    };
  };

  async buildSwap(srcToken: Address, destToken: Address, srcAmount: string, minDestinationAmount: string, exchangeData: DEXData[]): Promise<SwapData> {
    //TODO: add data validation

    let dataObject: DexParams = {
      callees: [],
      calldata: [],
      values: []
    };

    for (let i = 0; i < exchangeData.length; i++) {
      switch (exchangeData[i].name.toLowerCase()) {
        case "uniswap":
          const uniswapV1 = await new UniswapV1(this.network, this.web3Provider, this.augustus).buildSwap(
            srcToken,
            destToken,
            exchangeData[i]
          );

          dataObject.callees = dataObject.callees.concat(uniswapV1.callees);
          dataObject.calldata = dataObject.calldata.concat(uniswapV1.calldata);
          dataObject.values = dataObject.values.concat(uniswapV1.values);
          break;

        case "uniswapv2":
        case "sushiswap":
        case "defiswap":
        case "linkswap":
          const uniswapV2 = await new UniswapV2(this.network, this.web3Provider, this.augustus).buildSwap(
            srcToken,
            destToken,
            exchangeData[i]
          );

          dataObject.callees = dataObject.callees.concat(uniswapV2.callees);
          dataObject.calldata = dataObject.calldata.concat(uniswapV2.calldata);
          dataObject.values = dataObject.values.concat(uniswapV2.values);

          break;
        default:
          throw new Error("Unsupported Exchange: " + exchangeData[i].name)
      }
    }

    const returnData = this.buildExchangeData(dataObject);

    if (!returnData) {
      throw new Error("Operation failed!!");
    }

    return {
      ...returnData,
      srcToken,
      destToken,
      srcAmount,
      minDestinationAmount
    };
  }

}
