import { Injectable } from '@angular/core';
import { Environment } from '@exchange-front-end/types';

export let environment: Environment = {
  production: true,
  apiBase: 'https://api-pl1.terareum.com/api',
  streamApiBase: 'https://api-pl1.terareum.com/api/market',
  exchangeApiSocketBase: 'https://api-pl1.terareum.com/ws/user/orders',
  exchangeStreamSocketBase: 'https://api-pl1.terareum.com/ws/market/stream',
  nestSocketBase: 'https://api-pl1.terareum.com/socket',
  s3ImageUrlBase: 'https://media.terareum.com/assets/images',
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
