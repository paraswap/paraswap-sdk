pragma solidity 0.5.10;

interface IPriceFeed {
  struct OptimalRate {
    uint rate;
    RateDistribution distribution;
  }

  struct RateDistribution {
    uint Uniswap;
    uint Bancor;
    uint Kyber;
    uint Oasis;
  }

  function getBestPrice(address fromToken, address toToken, uint srcAmount) public view returns (OptimalRate memory optimalRate);

  function getBancorRelayer(address token) external view returns (address);
}
