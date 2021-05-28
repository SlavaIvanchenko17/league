'use strict';

const controller = require('../controllers');
const service = require('../../application');

const routes = [{
  method: 'GET',
  url: '/teams',
  handler: controller(service.getTeams),
},
{
  method: 'GET',
  url: '/teams/:id',
  handler: controller(service.getTeamById),
},
{
  method: 'GET',
  url: '/teams/order',
  handler: controller(service.orderTeams),
},
{
  method: 'POST',
  url: '/teams',
  handler: controller(service.createTeam),
},
{
  method: 'DELETE',
  url: '/teams/:id',
  handler: controller(service.deleteTeam),
},
{
  method: 'PUT',
  url: '/teams/:id',
  handler: controller(service.updateTeam),
},
{
  method: 'GET',
  url: '/matches',
  handler: controller(service.getMatches),
},
{
  method: 'GET',
  url: '/matches/:id',
  handler: controller(service.getMatchById),
},
{
  method: 'POST',
  url: '/matches',
  handler: controller(service.createMatch),
},
{
  method: 'DELETE',
  url: '/matches/:id',
  handler: controller(service.deleteMatch),
},
{
  method: 'DELETE',
  url: '/matches/finish/:id',
  handler: controller(service.finishMatch),
},
{
  method: 'PUT',
  url: '/matches/:id',
  handler: controller(service.updateMatch),
}];

module.exports = routes;
