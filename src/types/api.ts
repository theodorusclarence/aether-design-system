export type ApiReturn<T> = {
  code: string;
  data: T;
};

export type ApiError = {
  message: string;
};

export type UninterceptedApiError = {
  message: string | Record<string, string[]>;
};
