// Require the framework and instantiate it
const app = require('fastify')({
  logger: true,
});

const routes = require('./interfaces/routes');

// Register routes to handle blog posts

routes.forEach((route) => {
  app.route(route);
});

// Run the server!
app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
