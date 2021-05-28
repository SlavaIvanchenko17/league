'use strict';

const { Match, MatchTeam } = require('../../../domain/Match');
const BaseRepository = require('../BaseRepository');
const sql = require('../../constants/sql');

class MatchRepository extends BaseRepository {
  constructor() {
    super();
    this.model = this.db.models.matches;
  }

  async read() {
    const matches = await this.db.sequelize.query(sql, {
      raw: true,
    });
    return matches[0].map((match) => new MatchTeam(match));
  }

  async readById(id) {
    const match = await this.db.sequelize.query(
      `${sql} WHERE Matches.Id = ${id}`, {
        raw: true,
      },
    );
    return new MatchTeam(match[0]);
  }

  async order(order) {
    const matches = await this.db.sequelize.query(
      `${sql} ORDER BY ${order}`, {
        raw: true,
      },
    );
    return matches[0].map((match) => new MatchTeam(match));
  }

  async create(data) {
    const match = await this.model.create(data);
    return new Match(match);
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

module.exports = MatchRepository;
