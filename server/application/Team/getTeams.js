'use strict';

/**
 * @module getTeams
 */

/**
 * get teams
 * @param {Object} TeamRepository - Team repository
 * @return {Array} - teams
 */
module.exports = ({ TeamRepository }) => TeamRepository.read();
