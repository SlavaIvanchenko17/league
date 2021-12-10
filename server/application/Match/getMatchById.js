'use strict';

/**
 * @module getMatchById
 */

/**
 * get match by id
 * @param {number} id - id
 * @param {Object} MatchRepository - Match repository
 * @return {Object} - match
 */
module.exports = (id, { MatchRepository }) => MatchRepository.readById(id);
