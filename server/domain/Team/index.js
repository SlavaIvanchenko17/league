'use strict';

class Team {
  constructor(data) {
    const { id = null, name, goalScored = 0, goalСonceded = 0, points = 0 } = data;
    this.id = id;
    this.name = name;
    this.goalScored = goalScored;
    this.goalСonceded = goalСonceded;
    this.points = points;
  }
}

module.exports = Team;
