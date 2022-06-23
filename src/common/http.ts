import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestTransformer,
  AxiosResponseTransformer,
  AxiosResponse,
  AxiosAdapter,
} from "axios";

import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from "axios-extensions";

export class Http {
  private readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "",
      timeout: 0,
      headers: {},
      adapter: throttleAdapterEnhancer(
        cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter)
      ),
      transformResponse: this.getTransformResponse(),
    });
  }

  private getTransformRequest(): AxiosRequestTransformer {
    //
    return {};
  }
  private getTransformResponse(): AxiosResponseTransformer {
    //
    return {};
  }
}
