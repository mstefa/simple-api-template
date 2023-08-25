import dotenv from 'dotenv';

dotenv.config();

const config = {
  app: {
    name: 'test-api'
  },
  server: {
    port: process.env.SERVER_PORT || '3000',
    host: process.env.SERVER_HOST as string
  },
  bd: {
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    pass: process.env.BD_PWD
  }
};

export default config;
