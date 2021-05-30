'use strict';

module.exports = async (
  id,
  { homeGoals, guestGoals },
  { TeamRepository, MatchRepository },
) => {
  const match = await MatchRepository.readById(id);
  const homeTeam = await TeamRepository.readById(match.homeId);
  const guestTeam = await TeamRepository.readById(match.guestId);
  TeamRepository.update(homeTeam.id, {
    goalScored: homeTeam.goalScored + homeGoals,
    goalСonceded: homeTeam.goalСonceded + guestGoals,
  });
  TeamRepository.update(guestTeam.id, {
    goalScored: guestTeam.goalScored + guestGoals,
    goalСonceded: guestTeam.goalСonceded + homeGoals,
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
