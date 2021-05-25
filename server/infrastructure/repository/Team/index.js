'use strict';

const Team = require('../../../domain/Team');
const BaseRepository = require('../BaseRepository');

class TeamRepository extends BaseRepository {
  constructor() {
    super()
    this.model = this.db.models.teams;
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
    const team = await this.model.create(data);
    return new Team(team);
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
