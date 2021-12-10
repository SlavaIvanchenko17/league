'use strict';

/**
 * Class to create a new Match
 */
class Match {
  /**
   * @param {Object} data - info of match
   */
  constructor(data) {
    const { id = null, homeId, guestId } = data;
    /**
     * @property {Object|number} id - id
     */
    this.id = id;
    /**
     * @property {number} homeId - home team id
     */
    this.homeId = homeId;
    /**
     * @property {number} guestId - guest team id
     */
    this.guestId = guestId;
  }
}

/**
 * Class to create a new Match(with team names)
 * @extends Match
 */
class MatchTeam extends Match {
  /**
   * @param {Object} data - info of match
   */
  constructor(data) {
    const { id, homeId, guestId, homeName, guestName } = data;
    super({ id, homeId, guestId });
    /**
     * @property {string} homeName - name of home team
     */
    this.homeName = homeName;
    /**
     * @property {string} guestName - name of guest team
     */
    this.guestName = guestName;
  }
}

module.exports = {
  Match,
  MatchTeam,
};
