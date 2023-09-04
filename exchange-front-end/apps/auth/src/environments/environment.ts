import { Injectable } from '@angular/core';
import { Environment } from '@exchange-front-end/types';

export let environment: Environment = {
  production: false,
  apiBase: 'http://localhost:3000/api',
  streamApiBase: 'http://localhost:3000/api/market',
  exchangeApiSocketBase: 'ws://localhost:6005/ws/user/orders',
  exchangeStreamSocketBase: 'ws://localhost:6007/ws/market/stream',
  nestSocketBase: 'ws://localhost:3002/socket',
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
