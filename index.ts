import Server from './src/server';
import config from './src/Shared/config/appConfig';
import { Logger } from './src/Shared/infrastructure/logger/Logger';
const port = config.server.port;

try {
  const server = new Server(port);
  server.start();
} catch (e) {
  console.error(e);
  Logger.error(e as Error);
  process.exit(1);
}
