'use strict';

/**
 * @module getMatches
 */

/**
 * get matches
 * @param {Object} MatchRepository - Match repository
 * @return {Array} - matches
 */
module.exports = ({ MatchRepository }) => MatchRepository.read();
