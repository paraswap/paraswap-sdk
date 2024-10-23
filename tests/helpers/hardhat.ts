import hre from 'hardhat';
import type { EthereumProvider } from 'hardhat/types';

interface ForkChainInput {
  rpcUrl?: string;
  blockNumber?: number;
  chainId?: number;
}

interface SetBalanceInput {
  address: string;
  balance: number | bigint;
}

interface ForkChainResult {
  startFork: (options?: ForkChainInput) => Promise<void>;
  setBalance: (options: SetBalanceInput) => Promise<void>;
  impersonateAccount: (address: string) => Promise<void>;
  provider: EthereumProvider;
  setupFork: (options: {
    fork?: ForkChainInput;
    accounts?: SetBalanceInput[];
  }) => Promise<void>;
}

export function forkChain(): ForkChainResult {
  const startFork: ForkChainResult['startFork'] = async ({
    rpcUrl = process.env.PROVIDER_URL!,
    blockNumber,
    chainId,
  } = {}) => {
    await hre.network.provider.request({
      // forks chain
      method: 'hardhat_reset',
      params: [
        {
          forking: {
            jsonRpcUrl: rpcUrl,
            // Optionally, specify the block number
            // blockNumber: 12345678,
            blockNumber,
            chainId,
          },
          // chainId: 1, // Set to Ethereum Mainnet's chainId
          chainId,
        },
      ],
    });
  };

  const impersonateAccount: ForkChainResult['impersonateAccount'] = async (
    address
  ) => {
    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [address],
    });
  };

  const setBalance: ForkChainResult['setBalance'] = async ({
    address,
    balance,
  }) => {
    await hre.network.provider.send('hardhat_setBalance', [
      address,
      `0x${balance.toString(16)}`,
    ]);
  };

  const setupFork: ForkChainResult['setupFork'] = async ({
    fork,
    accounts,
  }) => {
    await startFork(fork);

    if (accounts) {
      for (const accountSetup of accounts) {
        await setBalance(accountSetup);
        await impersonateAccount(accountSetup.address);
      }
    }
  };

  return {
    startFork,
    provider: hre.network.provider,
    setBalance,
    impersonateAccount,
    setupFork,
  };
}
