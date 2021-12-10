'use strict';

/**
 * @module orderTeams
 */

/**
 * order teams(tournament table)
 * @param {Object} TeamRepository - Team repository
 * @return {Array} - teams
 */
module.exports = ({ TeamRepository }) => TeamRepository.order('points');
