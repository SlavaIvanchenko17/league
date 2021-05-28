'use strict';

const app = require('fastify')({
  logger: true,
});

const routes = require('./interfaces/routes');
const createServer = require('./interfaces/server');

createServer(app, 3000, routes);
