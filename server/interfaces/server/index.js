'use strict';

const createServer = async (port, server, routes) => {
  routes.forEach((route) => {
    server.route(route);
  });
  server.listen(port, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`server listening on ${address}`);
  });
};

module.exports = createServer;
