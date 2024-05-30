import { envs } from './config/envs';
import { ServerApp } from './presentation/server-app';

(() => {
  main();
})();

function main(): void {
  const server = new ServerApp({
    port: envs.PORT,
    publicPath: envs.PUBLIIC_PATH,
  });
  void server.start();
}
