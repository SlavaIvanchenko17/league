'use strict';

const app = require('fastify')({
  logger: true,
});

const routes = require('./interfaces/routes');
const { serverPort } = require('./infrastructure/config');
const createServer = require('./interfaces/server');

createServer(serverPort, app, routes);
