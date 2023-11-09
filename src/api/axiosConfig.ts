import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  CancelTokenSource,
} from "axios";
import { Store } from "redux";

interface BaseUrlParams {
  url: string;
  body?: any;
  params?: object;
  config?: AxiosRequestConfig;
  contentType?: string;
}

class BaseAPIClient {
  private axiosInstance: AxiosInstance;
  private cancelTokenSource: CancelTokenSource;

  constructor(baseURL: string) {
    this.cancelTokenSource = axios.CancelToken.source();
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 3000,
    });

    this.axiosInstance.interceptors.request.use(
      this.handleRequestSuccess,
      this.handleRequestError
    );
  }

  private handleRequestSuccess = (config: any): any => {
    // const state = this.store?.getState();
    const token = "";

    if (token) {
      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${token}`,
      };
    }
    // this.store?.dispatch(logoutHandler());
    config.cancelToken = this.cancelTokenSource.token;
    return config;
  };

  private handleRequestError = (error: AxiosError): Promise<never> => {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 403 || error.response.status === 401) {
        // this.store?.dispatch(logoutHandler());
      }
    }

    // Reject the promise with the error
    return Promise.reject(error);
  };
  private addAuthorizationHeader(
    config: AxiosRequestConfig
  ): AxiosRequestConfig {
    const token = "";

    if (token) {
      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  }

  public async get<T>({ url, params, config }: BaseUrlParams) {
    try {
      const fullUrl = this.buildUrlWithParams(url, params);
      config = config || {};
      config = this.addAuthorizationHeader(config);

      const response = await this.axiosInstance.get<T>(fullUrl, config);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 403 || error.response.status === 401) {
          // this.store?.dispatch(logoutHandler());
        }
      }
      throw error;
    }
  }

  public post<T>({
    url,
    body,
    params,
    config,
    contentType = "application/json",
  }: BaseUrlParams) {
    const fullUrl = this.buildUrlWithParams(url, params);
    config = config || {};
    config.headers = {
      ...(config.headers || {}),
      "Content-Type": contentType,
    };
    return this.axiosInstance.post<T>(fullUrl, body, config);
  }

  public delete<T>({ url, body, params }: BaseUrlParams) {
    const fullUrl = this.buildUrlWithParams(url, params);
    return this.axiosInstance.delete<T>(fullUrl, body);
  }

  public put<T>({
    url,
    body,
    params,
    config,
    contentType = "application/json",
  }: BaseUrlParams) {
    const fullUrl = this.buildUrlWithParams(url, params);
    config = config || {};
    config.headers = {
      ...(config.headers || {}),
      "Content-Type": contentType,
    };
    return this.axiosInstance.put<T>(fullUrl, body, config);
  }

  public cancelRequest(message?: string): void {
    this.cancelTokenSource.cancel(message);
  }

  private buildUrlWithParams(url: string, params?: object): string {
    if (!params) {
      return url;
    }

    const queryParams = Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    if (url.includes("?")) {
      return `${url}&${queryParams}`;
    } else {
      return `${url}?${queryParams}`;
    }
  }
}

export default BaseAPIClient;
