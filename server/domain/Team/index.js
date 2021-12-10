'use strict';

/**
 * Class to create a new Team
 */
class Team {
  /**
   * @param {Object} data - info of team
   */
  constructor(data) {
    const { id = null, name, goalScored = 0, goalConceded = 0, points = 0 } = data;
    /**
     * @property {Object|number} id - id
     */
    this.id = id;
    /**
     * @property {string} name - team name
     */
    this.name = name;
    /**
     * @property {number} goalScored - goal scored
     */
    this.goalScored = goalScored;
    /**
     * @property {number} goalConceded - goal conceded
     */
    this.goalConceded = goalConceded;
    /**
     * @property {number} points - points in season
     */
    this.points = points;
  }
}

module.exports = Team;
