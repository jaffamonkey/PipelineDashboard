import { Config } from './config.model';

export const environment: Config = {
  production: false,
  api: 'http://localhost:3000',
  web: 'http://localhost:4200',
  whitelist: new Array(new RegExp('^null$')),
  version: 'x.x.x',

  auth: {
    clientID: 'ZA6c3uT9rQk2PkE0L48CxBaqcZYQBZqu',
    domain: 'dashboardhub-dev.eu.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
  }
};
