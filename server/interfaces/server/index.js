'use strict';

const swagger = require('../../infrastructure/swagger');


/**
 * @function createServer
 * @param {number} port - port
 * @param {Object} server - fastify-server
 * @param {Array} routes - routes
 * @return {void}
 */
const createServer = async (port, server, routes) => {
  server.register(require('fastify-swagger'), swagger.options);

  routes.forEach((route) => server.route(route));

  server.listen(port, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`server listening on ${address}`);
  });
};

module.exports = createServer;
