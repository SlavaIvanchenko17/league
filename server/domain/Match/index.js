'use strict';

class Match {
  constructor(data) {
    const {
      id = null, homeId, guestId, homeName, guestName,
    } = data;
    this.id = id;
    this.homeId = homeId;
    this.guestId = guestId;
    this.homeName = homeName;
    this.guestName = guestName;
  }
}

module.exports = Match;
