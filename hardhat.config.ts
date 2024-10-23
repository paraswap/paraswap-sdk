import * as dotenv from 'dotenv';
import type { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    hardhat: {
      forking: {
        url: process.env.PROVIDER_URL!, // Replace with your actual Alchemy/Infura URL
      },
      // Can't dynamically switch chain between tests, very inflexible, "hardhat_reset" doesn't work
      chainId: 1,
      // Optional forking configurations (e.g., block number):
      // blockNumber: 12345678,
    },
  },
};

export default config;
