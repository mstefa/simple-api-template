const swaggerAutogen = require('swagger-autogen')()
const glob = require('glob');

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};
const routes = glob.sync(`${__dirname}/src/**/*.route.*`);
routes.push(`${__dirname}/src/server.ts`)
console.log(routes)
const outputFile = './docs/swagger-output.json';
const endpointsFiles = ['./src/server.ts', './src/BlogPost/routes/BlogPost.route.ts'];

swaggerAutogen(outputFile, routes, doc);gs