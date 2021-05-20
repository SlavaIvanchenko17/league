'use strict';

const Match = require('../../domain/Match');

module.exports = (data, { MatchRepository }) => {
  const match = new Match(data);
  return MatchRepository.create(match);
};
