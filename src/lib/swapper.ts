import { DEXData, DexParams, SwapData, ExchangeData } from './dexs/dex-types';
import { Address } from '../types';
import { getDEX } from './dexs';

export class Swapper {
  constructor(
    private network: number,
    private web3Provider: any,
    private augustus: any,
  ) {}

  private buildExchangeData(dataObject: DexParams): ExchangeData {
    const calldata = dataObject.calldata;

    let concatenatedCallData = '0x';

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
  }

  appendToDataObject(dataObject: DexParams, dexData: DexParams) {
    dataObject.callees = dataObject.callees.concat(dexData.callees);
    dataObject.calldata = dataObject.calldata.concat(dexData.calldata);
    dataObject.values = dataObject.values.concat(dexData.values);

    return dataObject;
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    srcAmount: string,
    minDestinationAmount: string,
    exchangeData: DEXData[],
  ): Promise<SwapData> {
    //TODO: add data validation

    let dataObject: DexParams = {
      callees: [],
      calldata: [],
      values: [],
    };

    for (let i = 0; i < exchangeData.length; i++) {
      const Dex = getDEX(exchangeData[i].name.toLowerCase());

      if (Dex) {
        const dexData = await new Dex(
          this.network,
          this.web3Provider,
          this.augustus,
        ).buildSwap(srcToken, destToken, exchangeData[i]);
        dataObject = this.appendToDataObject(dataObject, dexData);
      } else {
        throw new Error('Unsupported Exchange: ' + exchangeData[i].name);
      }
    }

    const returnData = this.buildExchangeData(dataObject);

    if (!returnData) {
      throw new Error('Operation failed!!');
    }

    return {
      ...returnData,
      srcToken,
      destToken,
      srcAmount,
      minDestinationAmount,
    };
  }
}
