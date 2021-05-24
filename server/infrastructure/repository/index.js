'use strict';

const TeamRepository = require('./Team');
const MatchRepository = require('./Match');

module.exports = {
  TeamRepository : new TeamRepository(),
  MatchRepository : new MatchRepository(),
};
