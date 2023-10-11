import Server from './src/server';
import { config } from './src/shared-d/config/appConfig';
import { Logger } from './src/shared-d/infrastructure/logger/Logger';

const port = config.server.port;

try {
  const server = new Server(port);
  server.start();

  // Graceful shutdown
  process.on('SIGINT', () => {
    server.stop();
  });

  process.on('SIGTERM', () => {
    server.stop();
  });
} catch (e) {
  Logger.error(e);
  process.exit(1);
}
