'use strict';

const getTeams = require('./getTeams');
const getTeamById = require('./getTeamById');
const orderTeams = require('./orderTeams');
const createTeam = require('./createTeam');
const deleteTeam = require('./deleteTeam');
const updateTeam = require('./updateTeam');

module.exports = {
  getTeams,
  getTeamById,
  orderTeams,
  createTeam,
  deleteTeam,
  updateTeam,
};
