'use strict';
/**
 * @module deleteTeam
 */

/**
 * delete team
 * @param {number} id - id of team
 * @param {Object} TeamRepository - Team repository
 */
module.exports = (id, { TeamRepository }) => TeamRepository.delete(id);
