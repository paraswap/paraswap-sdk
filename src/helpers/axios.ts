import { FetcherFunction } from "../types";
import type Axios from "axios";
import type { AxiosError } from "axios";

type FetcherErrorConstructorInput = Pick<
  AxiosError,
  "code" | "request" | "response" | "isAxiosError" | "message"
>;

interface FetcherErrorInterface extends FetcherErrorConstructorInput {
  status?: number;
  code?: string;
}

export const isFetcherError = (error: unknown): error is FetcherError => {
  return error instanceof FetcherError;
};

export class FetcherError extends Error implements FetcherErrorInterface {
  code;
  status;
  request;
  response;
  isAxiosError = false;

  public constructor({
    code,
    request,
    response,
    isAxiosError,
    message,
  }: FetcherErrorConstructorInput) {
    super();

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetcherError);
    }

    this.name = this.constructor.name;
    this.code = code;
    this.request = request;
    this.isAxiosError = isAxiosError;

    // no response on AxiosError
    if (!response) {
      this.message = message;
      return;
    }

    this.response = response;

    const { data, status } = response;
    this.status = status;
    this.message = data?.error || message;
  }
}

export const constructFetcher =
  (axios: typeof Axios): FetcherFunction =>
  async (params) => {
    try {
      const { data } = await axios.request(params);

      return data;
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error)) {
        // attach a more meaningful message and other props
        throw new FetcherError(error);
      }

      throw error;
    }
  };
