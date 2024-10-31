import hre from 'hardhat';
import type { EthereumProvider } from 'hardhat/types';
// jest doesn't pick up hardhat-config.ts, so we need to import the type extensions here
import 'hardhat-switch-network/src/type-extensions';

interface SetBalanceInput {
  address: string;
  balance: number | bigint;
}

interface ForkChainResult {
  setBalance: (options: SetBalanceInput) => Promise<void>;
  impersonateAccount: (address: string) => Promise<void>;
  provider: EthereumProvider;
  setupFork: (options: { accounts?: SetBalanceInput[] }) => Promise<void>;
  switchNetwork: (networkName: string) => Promise<void>;
}

export const HardhatProvider = hre.network.provider;

export const impersonateAccount: ForkChainResult['impersonateAccount'] = async (
  address
) => {
  await hre.network.provider.request({
    method: 'hardhat_impersonateAccount',
    params: [address],
  });
};

export const setBalance: ForkChainResult['setBalance'] = async ({
  address,
  balance,
}) => {
  await hre.network.provider.send('hardhat_setBalance', [
    address,
    `0x${balance.toString(16)}`,
  ]);
};

export const setupFork: ForkChainResult['setupFork'] = async ({ accounts }) => {
  if (accounts) {
    for (const accountSetup of accounts) {
      await setBalance(accountSetup);
      await impersonateAccount(accountSetup.address);
    }
  }
};

export const switchNetwork: ForkChainResult['switchNetwork'] = async (
  networkName
) => {
  await hre.switchNetwork(networkName);
};
