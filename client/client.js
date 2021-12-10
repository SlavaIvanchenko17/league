'use strict';

const common = require('./common');

const api = (baseUrl) => {
  const client = common(baseUrl);

  return {
    getTeams: () => client.get(`/teams`),
    getTeamById: (id) => client.get(`/teams/${id}`),
    orderTeams: () => client.get(`/teams/order`),
    addTeam: (name) => client.post(`/teams`, { name }),
    deleteTeam: (id) => client.delete(`/teams/${id}`),
    updateTeam: (id, data) => client.put(`/teams/${id}`, data),
    getMatches: () => client.get(`/matches`),
    getMatchById: (id) => client.get(`/matches/${id}`),
    addMatch: (homeId, guestId) => client.post(`/matches`, { homeId, guestId }),
    deleteMatch: (id) => client.delete(`/matches/${id}`),
    updateMatch: (id, data) => client.put(`/matches/${id}`, data),
    finishMatch: (id, homeGoals, guestGoals) =>
      client.delete(`/matches/finish/${id}`, { homeGoals, guestGoals }),
  };
};

module.exports = api;
