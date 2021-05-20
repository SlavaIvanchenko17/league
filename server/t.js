const repository = require('./infrastructure/repository');
const services = require('./services/Match/finishMatch');

services(1, { homeGoals: 2, guestGoals: 2 }, repository);
