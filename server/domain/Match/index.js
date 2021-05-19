class Match {
  constructor(data) {
    const { id = null, homeTeam, guestTeam } = data;
    this.id = id;
    this.homeTeam = homeTeam;
    this.guestTeam = guestTeam;
  }
}

module.exports = Match;
