export interface Environment {
  production: boolean;
  apiBase: string;
  streamApiBase: string;
  exchangeApiSocketBase: string;
  exchangeStreamSocketBase: string;
  nestSocketBase: string;
  s3ImageUrlBase: string;
}
