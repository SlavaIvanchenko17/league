'use strict';

class Match {
  constructor(data) {
    const {
      id = null, homeId, guestId
    } = data;
    this.id = id;
    this.homeId = homeId;
    this.guestId = guestId;
  }
}

class MatchTeam extends Match {
  constructor(data) {
    const {
      id, homeId, guestId, homeName, guestName,
    } = data;
    super({id, homeId, guestId});
    this.homeName = homeName;
    this.guestName = guestName;
  }
}

module.exports = {
  Match,
  MatchTeam
};
