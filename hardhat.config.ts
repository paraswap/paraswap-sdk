import * as dotenv from 'dotenv';
import type { HardhatUserConfig } from 'hardhat/config';
import 'hardhat-switch-network';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    hardhat: {
      forking: {
        url: process.env.PROVIDER_URL!, // Replace with your actual Alchemy/Infura URL
        // Optional forking configurations (e.g., block number):
        // blockNumber: 12345678,
      },
      chainId: 1,
      // dynamically switch between networks configured here
      // by calling `hre.switchNetwork(networkName)` thanks to hardhat-switch-network plugin
      gasPrice: 8e9,
      initialBaseFeePerGas: 1e9, // will break if used with a chain without eip1559
    },
  },
};

export default config;
