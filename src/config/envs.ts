import { get } from 'env-var';

process.loadEnvFile();

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  PUBLIIC_PATH: get('PUBLIC_PATH').default('public').asString(),
};
