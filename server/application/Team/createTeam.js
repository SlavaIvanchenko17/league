'use strict';

const Team = require('../../domain/Team');

/**
 * @module createTeam
 */

/**
 * create team
 * @param {Object} data - req.body
 * @param {Object} TeamRepository - Team repository
 * @return {Object} - team
 */
module.exports = (data, { TeamRepository }) => {
  const team = new Team(data);
  return TeamRepository.create(team);
};
