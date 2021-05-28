'use strict';

const getMatches = require('./getMatches');
const getMatchById = require('./getMatchById');
const createMatch = require('./createMatch');
const deleteMatch = require('./deleteMatch');
const updateMatch = require('./updateMatch');
const finishMatch = require('./finishMatch');

module.exports = {
  getMatches,
  getMatchById,
  createMatch,
  deleteMatch,
  updateMatch,
  finishMatch,
};
