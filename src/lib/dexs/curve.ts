const pools: { [pool: string]: any } = {
  Compound: {
    underlying: ['DAI', 'USDC'],
    coins: ['cDAI', 'cUSDC'],
    exchange: "0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56",
    name: 'Compound',
  },
  USDT: {
    underlying: ['DAI', 'USDC', 'USDT'],
    coins: ['cDAI', 'cUSDC', 'USDT'],
    exchange: "0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C",
    name: 'USDT'
  },
  iEarn: {
    underlying: ['DAI', 'USDC', 'USDT', 'TUSD'],
    coins: ['yDAI', 'yUSDC', 'yUSDT', 'yTUSD'],
    exchange: "0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51",
    name: 'iEarn'
  },
  iEarnUSDB: {
    underlying: ['DAI', 'USDC', 'USDT', 'BUSD'],
    coins: ['yDAIv3', 'yUSDCv3', 'yUSDTv3', 'yBUSD'],
    exchange: "0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27",
    name: 'iEarnUSDB'
  },
  sUSD: {
    underlying: ['DAI', 'USDC', 'USDT', 'sUSD'],
    coins: ['DAI', 'USDC', 'USDT', 'sUSD'],
    exchange: "0xA5407eAE9Ba41422680e2e00537571bcC53efBfD",
    name: 'sUSD'
  },
  pax: {
    underlying: ['DAI', 'USDC', 'USDT', 'PAX'],
    coins: ['ycDAI', 'ycUSDC', 'ycUSDT', 'PAX'],
    exchange: "0x06364f10B501e868329afBc005b3492902d6C763",
    name: 'pax'
  },
  "3pool": {
    underlying: [],
    coins: ['DAI', 'USDC', 'USDT'],
    exchange: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
    name: '3pool'
  },
  renBTC: {
    underlying: [],
    coins: ['renBTC', 'WBTC'],
    exchange: "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
    name: 'renBTC'
  },
  sBTC: {
    underlying: [],
    coins: ['renBTC', 'WBTC', 'sBTC'],
    exchange: "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
    name: 'sBTC'
  }
};

export class Curve {

  static getPool(srcToken: string, destToken: string, exchange: string) {
    const pool = Object.keys(pools).find(p => (
      pools[p].exchange === exchange && (
        (pools[p].underlying && pools[p].underlying.includes(srcToken) && pools[p].underlying.includes(destToken)) ||
        (pools[p].coins && pools[p].coins.includes(srcToken) && pools[p].coins.includes(destToken))
      )
    ));

    return pool && pools[pool];
  }

  static getSwapIndexes = (srcToken: string, destToken: string, exchange: string) => {
    const pool = Curve.getPool(srcToken, destToken, exchange);

    if (!pool) {
      return [-1, -1, -1];
    }

    const isUnderlyingSwap = (
      (pool.name !== 'pax' || pool.name !== 'sUSD') &&
      (pool.underlying && pool.underlying.includes(srcToken) && pool.underlying.includes(destToken))
    );

    const fromIndex = isUnderlyingSwap ? pool.underlying.indexOf(srcToken) : pool.coins.indexOf(srcToken);

    const toIndex = isUnderlyingSwap ? pool.underlying.indexOf(destToken) : pool.coins.indexOf(destToken);

    return [fromIndex, toIndex, isUnderlyingSwap];
  };

}
