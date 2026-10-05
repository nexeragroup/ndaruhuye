import type { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  name: 'prod',

  production: true,

  siteUrl: 'https://ndaruhuye.nexeragroup.rw',

  indexable: true,

  apiBaseUrl: 'https://api.ndaruhuye.nexeragroup.rw/api/v1',
} as const satisfies AppEnvironment;
