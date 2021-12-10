'use strict';

/**
 * @module updateMatch
 */

/**
 * update match
 * @param {number} id - id of match
 * @param {Object} data - req.body
 * @param {Object} MatchRepository - Match repository
 */
module.exports = (id, data, { MatchRepository }) => MatchRepository.update(id, data);
