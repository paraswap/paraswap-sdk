import Adapter from './adapter';

import { UniswapV2 } from './uniswap-v2';
import { UniswapV1 } from './uniswap-v1';
import { Kyber } from './kyber';
import { Bancor } from './bancor';
import { Zerox } from './zerox';
import { Curve } from './curve';
import { Aave } from './aave';
import { Compound } from './compound';
import { Weth } from './weth';
import { Balancer } from './balancer';
import { Shell } from './shell';
import { Cofix } from './cofix';
import { DODO } from './dodo';

export const DEXS: { [dex: string]: typeof Adapter } = {
  uniswap: UniswapV1,
  uniswapv2: UniswapV2,
  sushiswap: UniswapV2,
  defiswap: UniswapV2,
  linkswap: UniswapV2,
  pancakeswap: UniswapV2,
  julswap: UniswapV2,
  streetswap: UniswapV2,
  kyber: Kyber,
  bancor: Bancor,
  paraswappool: Zerox,
  paraswappool3: Zerox,
  zerox: Zerox,
  curve: Curve,
  curve3: Curve,
  acryptos: Curve,
  beltfi: Curve,
  aave: Aave,
  aave2: Aave,
  compound: Compound,
  weth: Weth,
  wbnb: Weth,
  balancer: Balancer,
  shell: Shell,
  cofix: Cofix,
  dodov1: DODO,
};

export function getDEX(dex: string): typeof Adapter {
  return dex.toLowerCase().match(/^paraswappool(.*)/)
    ? DEXS.paraswappool
    : DEXS[dex];
}
