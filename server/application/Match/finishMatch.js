'use strict';

/**
 * @module finishMatch
 */

/**
 * finish match
 * @param {number} id - id of match
 * @param {number} homeGoals - goals of home team
 * @param {number} guestGoals - goals of guest team
 * @param {Object} TeamRepository - Team Repository
 * @param {Object} MatchRepository - Match Repository
 */
module.exports = async (
    id,
    { homeGoals, guestGoals },
    { TeamRepository, MatchRepository },
) => {
  const match = await MatchRepository.readById(id);
  const [homeTeam, guestTeam] = await Promise.all([
    TeamRepository.readById(match[0].homeId),
    TeamRepository.readById(match[0].guestId),
  ]);

  TeamRepository.update(homeTeam.id, {
    goalScored: homeTeam.goalScored + homeGoals,
    goalConceded: homeTeam.goalConceded + guestGoals,
  });
  TeamRepository.update(guestTeam.id, {
    goalScored: guestTeam.goalScored + guestGoals,
    goalConceded: guestTeam.goalConceded + homeGoals,
  });
  const updatePoints = (team, points) => {
    TeamRepository.update(team.id, {
      points: team.points + points,
    });
  };
  if (homeGoals > guestGoals) {
    updatePoints(homeTeam, 3);
  } else if (homeGoals < guestGoals) {
    updatePoints(guestTeam, 3);
  } else {
    updatePoints(homeTeam, 1);
    updatePoints(guestTeam, 1);
  }
  return MatchRepository.delete(id);
};
