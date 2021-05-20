'use strict';

const Team = require('../../../domain/Team');
const DB = require('../../db/models');

class TeamRepository {
  constructor() {
    this.db = DB;
    this.model = this.db.teams;
  }

  async read() {
    const teams = await this.model.findAll({
      raw: true,
    });
    return teams.map((team) => new Team(team));
  }

  async readById(id) {
    const team = await this.model.findByPk(id, {
      raw: true,
    });
    return new Team(team);
  }

  async order(order) {
    const teams = await this.model.findAll({
      order: [[order, 'DESC']],
      raw: true,
    });
    return teams.map((team) => new Team(team));
  }

  async create(data) {
    return this.model.create(data);
  }

  async delete(id) {
    return this.model.destroy({
      where: { id },
    });
  }

  async update(id, data) {
    return this.model.update(data, {
      where: { id },
    });
  }
}

module.exports = TeamRepository;
