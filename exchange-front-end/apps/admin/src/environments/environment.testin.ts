import { Injectable } from '@angular/core';
import { Environment } from '@exchange-front-end/types';

export let environment: Environment = {
  production: true,
  apiBase: 'https://testin.terax.in/api',
  streamApiBase: 'https://testin.terax.in/api/market',
  exchangeApiSocketBase: 'https://testin.terax.in/ws/user/orders',
  exchangeStreamSocketBase: 'https://testin.terax.in/ws/market/stream',
  nestSocketBase: 'https://testin.terax.in/socket',
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
