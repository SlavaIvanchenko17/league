'use strict';
/**
 * @module deleteMatch
 */

/**
 * delete match
 * @param {number} id - id of match
 * @param {Object} MatchRepository - Match repository
 */
module.exports = (id, { MatchRepository }) => MatchRepository.delete(id);;
