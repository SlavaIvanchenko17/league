// Require the framework and instantiate it
const app = require('fastify')({
    logger: true
})


const service = require('../../../services/Team/getTeamById');
const repo = require('../../../infrastructure/repository');

const get = async (req, reply) => {
    const id = Number(req.params.id)
   const data = await service(id, repo);
   console.log('ff');
   return data;
};

const routes = [{
    method: 'GET',
    url: '/api/blogs/:id',
    handler: get,
}];

// Declare a route
app.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
})

// Register routes to handle blog posts

routes.forEach((route) => {
    app.route(route)
})

// Run the server!
app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})
