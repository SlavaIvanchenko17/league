'use strict';

/**
 * @module updateTeam
 */

/**
 * update team
 * @param {number} id - id of team
 * @param {Object} data - req.body
 * @param {Object} TeamRepository - Team repository
 */
module.exports = (id, data, { TeamRepository }) => TeamRepository.update(id, data);
