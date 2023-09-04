import { Injectable } from '@angular/core';
import { Environment } from '@exchange-front-end/types';

//TODO Need to replace the below testin urls after the preproduction setup
export let environment: Environment = {
  production: true,
  apiBase: 'https://api-preprod.terax.in/api',
  streamApiBase: 'https://api-preprod.terax.in/api/market',
  exchangeApiSocketBase: 'https://api-preprod.terax.in/ws/user/orders',
  exchangeStreamSocketBase: 'https://api-preprod.terax.in/ws/market/stream',
  nestSocketBase: 'https://api-preprod.terax.in/socket',
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
