'use strict';

/**
 * @module getTeamById
 */

/**
 * get team by id
 * @param {number} id - id of team
 * @param {Object} TeamRepository - Team repository
 * @return {Object} - team
 */
module.exports = (id, { TeamRepository }) => TeamRepository.readById(id);
