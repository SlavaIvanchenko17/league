'use strict';

const Team = require('../../domain/Team');

module.exports = (data, { TeamRepository }) => {
  const team = new Team(data);
  return TeamRepository.create(team);
};
