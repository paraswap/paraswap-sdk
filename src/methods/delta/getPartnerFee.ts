import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput, RequestParameters } from '../../types';

export type PartnerFeeResponse = {
  partnerFee: number; // in %, e.g. 0.12
  partnerAddress: string;
  takeSurplus: boolean;
};

type PartnerFeeQueryParams = {
  partner: string;
};

type GetPartnerFee = (
  options: PartnerFeeQueryParams,
  requestParams?: RequestParameters
) => Promise<PartnerFeeResponse>;

export type GetPartnerFeeFunctions = {
  getPartnerFee: GetPartnerFee;
};

export const constructGetPartnerFee = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetPartnerFeeFunctions => {
  const partnerFeeUrl = `${apiURL}/prices/partnerfee/${chainId}` as const;

  // going on the assumption that one `partner` will correspond to one `partnerFee` during the lifetime of SDK instance,
  // to avoid unnecessary network requests
  const cachedPartnerFee = new Map<string, PartnerFeeResponse>();

  const getPartnerFee: GetPartnerFee = async (options, requestParams) => {
    if (cachedPartnerFee.has(options.partner)) {
      return cachedPartnerFee.get(options.partner)!;
    }

    const search = constructSearchString<PartnerFeeQueryParams>(options);

    const fetchURL = `${partnerFeeUrl}/${search}` as const;

    const data = await fetcher<PartnerFeeResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    cachedPartnerFee.set(options.partner, data);

    return data;
  };

  return {
    getPartnerFee,
  };
};
