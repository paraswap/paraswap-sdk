import { Address } from "./token";
import { ConstructFetchInput } from "./types";

type GetSpender = () => Promise<Address>;

export type GetSpenderFunctions = {
  getSpender: GetSpender;
};

interface AdaptersContractsResult {
  AugustusSwapper: string;
  TokenTransferProxy: string;
}

export const constructGetSpender = ({
  apiURL,
  network,
  fetcher,
}: ConstructFetchInput): GetSpenderFunctions => {
  const fetchURL = `${apiURL}/adapters/contracts?network=${network}`;

  const getSpender: GetSpender = async () => {
    const data = await fetcher<AdaptersContractsResult>({
      url: fetchURL,
      method: "GET",
    });

    return data.TokenTransferProxy;
  };

  return { getSpender };
};
