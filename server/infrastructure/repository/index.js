'use strict';

const TeamRepo = require('./Team');
const MatchRepo = require('./Match');

const TeamRepository = new TeamRepo();
const MatchRepository = new MatchRepo();

module.exports = {
  TeamRepository,
  MatchRepository,
};
