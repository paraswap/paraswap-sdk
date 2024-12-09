import * as dotenv from 'dotenv';
import type { HardhatUserConfig } from 'hardhat/config';
import 'hardhat-switch-network';

dotenv.config();

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';

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
      // have to config hardhat with fixed accounts unlocked, otherwise signTx and signTyped data fail when used in RPC calls to Node
      // which breaks web3.js
      // ethers signs data and txs locally off-chain as long as it has private key
      // web3 is a bit harder to init wallets for locally.
      // impersonateAccounts doesn't work, even though it should logically fully unlock accounts,
      // but only remore accounts are unlocked, fixed are not,
      // so we always need to only use accounts generated from this mnemonic

      // refs:
      // https://github.com/NomicFoundation/hardhat/issues/3059
      // https://github.com/NomicFoundation/hardhat/issues/1226
      accounts: { mnemonic: TEST_MNEMONIC }, // and with fixed
      // dynamically switch between networks configured here
      // by calling `hre.switchNetwork(networkName)` thanks to hardhat-switch-network plugin
      gasPrice: 8e9,
      initialBaseFeePerGas: 1e8, // will break if used with a chain without eip1559
    },
  },
};

export default config;
