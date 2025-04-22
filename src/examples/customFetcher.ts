/* eslint-disable @typescript-eslint/no-unused-vars */
import { constructSimpleSDK, FetcherFunction } from '../';

// mock superagent module without adding a dependency
interface SuperAgentStatic
  extends Promise<{
    body: any;
    ok: boolean;
    status: number;
    statusCode: number;
    error: false | { status: number; textx: string };
  }> {
  set(headers: Record<string, string>): this;
  get(url: string): this;
  post(url: string): this;
  send(body: any): this;
}
// pretend we do `import superagent from "superagent"
declare const superagent: SuperAgentStatic;

export const superagentFetcher = (): FetcherFunction =>
  async function (options) {
    if (options.method.toLowerCase() === 'post' && 'data' in options) {
      const response = await superagent
        .post(options.url)
        .set(options?.headers || {})
        .send(options.data);

      return response.body;
    } else {
      const response = await superagent
        .get(options.url)
        .set(options?.headers || {});

      return response.body;
    }

    // Add error handling with FetcherError;
    // handle options.requestParams.signal;
    // pass any other paramteres in requestParams
  };

const fetcher: FetcherFunction = superagentFetcher();
const sdk = constructSimpleSDK({ fetcher, chainId: 1 });
