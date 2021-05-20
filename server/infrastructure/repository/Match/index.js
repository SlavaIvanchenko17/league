'use strict';

const Match = require('../../../domain/Match');
const DB = require('../../db/models');
const sql = require('../../constants/sql');

class MatchRepository {
  constructor() {
    this.db = DB;
    this.model = this.db.matches;
  }

  async read() {
    const matches = await this.db.sequelize.query(sql, {
      raw: true,
    });
    return matches[0].map((match) => new Match(match));
  }

  async readById(id) {
    const match = await this.db.sequelize.query(
      `${sql} WHERE Matches.Id = ${id}`, {
        raw: true,
      },
    );
    return new Match(match[0]);
  }

  async order(order) {
    const matches = await this.db.sequelize.query(
      `${sql} ORDER BY ${order}`, {
        raw: true,
      },
    );
    return matches[0].map((match) => new Match(match));
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

module.exports = MatchRepository;