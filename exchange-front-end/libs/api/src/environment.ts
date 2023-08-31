import { Injectable } from '@angular/core';
import { Environment } from '@exchange-front-end/types';

export let environment: Environment = {
  production: false,
  apiBase: 'http://localhost:4200/api',
  streamApiBase: 'http://localhost:4200/api/market',
  exchangeApiSocketBase: 'http://localhost:4201/ws/user/orders',
  exchangeStreamSocketBase: 'http://localhost:4201/ws/market/stream',
  nestSocketBase: 'ws://localhost:4201/socket',
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
