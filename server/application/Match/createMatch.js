'use strict';

const { Match } = require('../../domain/Match');

/**
 * @module createMatch
 */


/**
 * create match
 * @param {Object} data - req.body
 * @param {Object} MatchRepository - Match repository
 * @return {Object} - match
 */
module.exports = (data, { MatchRepository }) => {
  const match = new Match(data);
  return MatchRepository.create(match);
};
