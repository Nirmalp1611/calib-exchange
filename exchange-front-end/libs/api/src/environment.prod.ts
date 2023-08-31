import { Injectable } from '@angular/core';
import { Environment } from '@terareum-web/types';

//TODO Need to replace the below testin urls after the production setup
export let environment: Environment = {
  production: true,
  apiBase: 'https://api.terareum.com/api',
  streamApiBase: 'https://api.terareum.com/api/market',
  exchangeApiSocketBase: 'https://api.terareum.com/ws/user/orders',
  exchangeStreamSocketBase: 'https://api.terareum.com/ws/market/stream',
  nestSocketBase: 'https://api.terareum.com/socket',
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
