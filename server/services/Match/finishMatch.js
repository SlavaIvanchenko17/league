'use strict';

module.exports = async (id, { homeGoals, guestGoals }, { TeamRepository, MatchRepository }) => {
  const m = await MatchRepository.readById(id);
  const homeTeam = await TeamRepository.readById(m[0].homeId);
  const guestTeam = await TeamRepository.readById(m[0].guestId);
  await TeamRepository.update(homeTeam.id, {
    goalScored: homeTeam.goalScored + homeGoals,
    goalСonceded: homeTeam.goalСonceded + guestGoals,
  });
  await TeamRepository.update(guestTeam.id, {
    goalScored: guestTeam.goalScored + guestGoals,
    goalСonceded: guestTeam.goalСonceded + homeGoals,
  });
  if (homeGoals > guestGoals) {
    await TeamRepository.update(homeTeam.id, {
      points: homeTeam.points + 3,
    });
  } else if (homeGoals < guestGoals) {
    await TeamRepository.update(guestTeam.id, {
      points: guestTeam.points + 3,
    });
  } else {
    await TeamRepository.update(homeTeam.id, {
      points: homeTeam.points + 1,
    });
    await TeamRepository.update(guestTeam.id, {
      points: guestTeam.points + 1,
    });
  }
};
