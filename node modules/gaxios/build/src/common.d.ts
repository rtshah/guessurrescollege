/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { Agent } from 'http';
import { URL } from 'url';
/**
 * Support `instanceof` operator for `GaxiosError`s in different versions of this library.
 *
 * @see {@link GaxiosError[Symbol.hasInstance]}
 */
export declare const GAXIOS_ERROR_SYMBOL: unique symbol;
export declare class GaxiosError<T = any> extends Error {
    config: GaxiosOptions;
    response?: GaxiosResponse<T> | undefined;
    error?: Error | NodeJS.ErrnoException | undefined;
    /**
     * An Error code.
     * See {@link https://nodejs.org/api/errors.html#errorcode error.code}
     *
     * @example
     * 'ECONNRESET'
     */
    code?: string;
    /**
     * An HTTP Status code.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Response/status Response: status property}
     *
     * @example
     * 500
     */
    status?: number;
    /**
     * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
     *
     * @see {@link GAXIOS_ERROR_SYMBOL}
     * @see {@link GaxiosError[Symbol.hasInstance]}
     * @see {@link https://github.com/microsoft/TypeScript/issues/13965#issuecomment-278570200}
     * @see {@link https://stackoverflow.com/questions/46618852/require-and-instanceof}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance#reverting_to_default_instanceof_behavior}
     */
    [GAXIOS_ERROR_SYMBOL]: string;
    /**
     * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
     *
     * @see {@link GAXIOS_ERROR_SYMBOL}
     * @see {@link GaxiosError[GAXIOS_ERROR_SYMBOL]}
     */
    static [Symbol.hasInstance](instance: unknown): boolean;
    constructor(message: string, config: GaxiosOptions, response?: GaxiosResponse<T> | undefined, error?: Error | NodeJS.ErrnoException | undefined);
}
export interface Headers {
    [index: string]: any;
}
export type GaxiosPromise<T = any> = Promise<GaxiosResponse<T>>;
export interface GaxiosXMLHttpRequest {
    responseURL: string;
}
export interface GaxiosResponse<T = any> {
    config: GaxiosOptions;
    data: T;
    status: number;
    statusText: string;
    headers: Headers;
    request: GaxiosXMLHttpRequest;
}
/**
 * Request options that are used to form the request.
 */
export interface GaxiosOptions {
    /**
     * Optional method to override making the actual HTTP request. Useful
     * for writing tests.
     */
    adapter?: <T = any>(options: GaxiosOptions, defaultAdapter: (options: GaxiosOptions) => GaxiosPromise<T>) => GaxiosPromise<T>;
    url?: string | URL;
    /**
     * @deprecated
     */
    baseUrl?: string;
    baseURL?: string | URL;
    method?: 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'PUT' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    headers?: Headers;
    data?: any;
    body?: any;
    /**
     * The maximum size of the http response content in bytes allowed.
     */
    maxContentLength?: number;
    /**
     * The maximum number of redirects to follow. Defaults to 20.
     */
    maxRedirects?: number;
    follow?: number;
    params?: any;
    paramsSerializer?: (params: {
        [index: string]: string | number;
    }) => string;
    timeout?: number;
    /**
     * @deprecated ignored
     */
    onUploadProgress?: (progressEvent: any) => void;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text' | 'stream' | 'unknown';
    agent?: Agent | ((parsedUrl: URL) => Agent);
    validateStatus?: (status: number) => boolean;
    retryConfig?: RetryConfig;
    retry?: boolean;
    signal?: any;
    size?: number;
    /**
     * Implementation of `fetch` to use when making the API call. By default,
     * will use the browser context if available, and fall back to `node-fetch`
     * in node.js otherwise.
     */
    fetchImplementation?: FetchImplementation;
    cert?: string;
    key?: string;
    /**
     * An experimental error redactor.
     *
     * @experimental
     */
    errorRedactor?: typeof defaultErrorRedactor | false;
}
/**
 * A partial object of `GaxiosResponse` with only redactable keys
 *
 * @experimental
 */
export type RedactableGaxiosOptions = Pick<GaxiosOptions, 'body' | 'data' | 'headers' | 'url'>;
/**
 * A partial object of `GaxiosResponse` with only redactable keys
 *
 * @experimental
 */
export type RedactableGaxiosResponse<T = any> = Pick<GaxiosResponse<T>, 'config' | 'data' | 'headers'>;
/**
 * Configuration for the Gaxios `request` method.
 */
export interface RetryConfig {
    /**
     * The number of times to retry the request.  Defaults to 3.
     */
    retry?: number;
    /**
     * The number of retries already attempted.
     */
    currentRetryAttempt?: number;
    /**
     * The amount of time to initially delay the retry, in ms.  Defaults to 100ms.
     */
    retryDelay?: number;
    /**
     * The HTTP Methods that will be automatically retried.
     * Defaults to ['GET','PUT','HEAD','OPTIONS','DELETE']
     */
    httpMethodsToRetry?: string[];
    /**
     * The HTTP response status codes that will automatically be retried.
     * Defaults to: [[100, 199], [429, 429], [500, 599]]
     */
    statusCodesToRetry?: number[][];
    /**
     * Function to invoke when a retry attempt is made.
     */
    onRetryAttempt?: (err: GaxiosError) => Promise<void> | void;
    /**
     * Function to invoke which determines if you should retry
     */
    shouldRetry?: (err: GaxiosError) => Promise<boolean> | boolean;
    /**
     * When there is no response, the number of retries to attempt. Defaults to 2.
     */
    noResponseRetries?: number;
    /**
     * Function to invoke which returns a promise. After the promise resolves,
     * the retry will be triggered. If provided, this will be used in-place of
     * the `retryDelay`
     */
    retryBackoff?: (err: GaxiosError, defaultBackoffMs: number) => Promise<void>;
}
export type FetchImplementation = (input: FetchRequestInfo, init?: FetchRequestInit) => Promise<FetchResponse>;
export type FetchRequestInfo = any;
export interface FetchResponse {
    readonly status: number;
    readonly statusText: string;
    readonly url: string;
    readonly body: unknown | null;
    arrayBuffer(): Promise<unknown>;
    blob(): Promise<unknown>;
    readonly headers: FetchHeaders;
    json(): Promise<any>;
    text(): Promise<string>;
}
export interface FetchRequestInit {
    method?: string;
}
export interface FetchHeaders {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string) => void, thisArg?: any): void;
}
/**
 * An experimental error redactor.
 *
 * @param config Config to potentially redact properties of
 * @param response Config to potentially redact properties of
 *
 * @experimental
 */
export declare function defaultErrorRedactor<T = any>(data: {
    config?: RedactableGaxiosOptions;
    response?: RedactableGaxiosResponse<T>;
}): {
    config?: RedactableGaxiosOptions | undefined;
    response?: RedactableGaxiosResponse<T> | undefined;
};
