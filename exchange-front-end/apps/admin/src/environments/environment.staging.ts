import { Injectable } from '@angular/core';
import { Environment } from '@exchange-front-end/types';

export let environment: Environment = {
  production: true,
  apiBase: 'https://stagein.terax.in/api',
  streamApiBase: 'https://stagein.terax.in/api/market',
  exchangeApiSocketBase: 'wss://stagein.terax.in/ws/user/orders',
  exchangeStreamSocketBase: 'wss://stagein.terax.in/ws/market/stream',
  nestSocketBase: 'https://stagein.terax.in/socket',
  s3ImageUrlBase: 'https://te-assets.s3.ap-south-1.amazonaws.com/assets/images',
};

@Injectable({
  providedIn: 'root',
})
export class EnvironmentServices {
  setEnvironment(env: Environment): void {
    environment = env;
  }

  getEnvironment(): Environment {
    return environment;
  }
}
