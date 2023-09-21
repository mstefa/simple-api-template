import dotenv from 'dotenv';

dotenv.config();

interface AppConfig {
  app: {
    name: string;
    env: string;
  };
  server: {
    port: number;
    host?: string;
  };
  db: {
    host: string;
    user: string;
    pass: string;
  };
}

const config: AppConfig = {
  app: {
    name: 'test-api',
    env: process.env.NODE_ENV || 'prod'
  },
  server: {
    port: parseInt(process.env.SERVER_PORT || '3000'),
    host: process.env.SERVER_HOST as string
  },
  db: {
    host: process.env.BD_HOST || 'mongodb://0.0.0.0:27017',
    user: process.env.BD_USER || '',
    pass: process.env.BD_PWD || '',
  }
};

export { AppConfig, config };
