const Match = require('../../../domain/Match');
const DB = require('../../db/models');

class MatchRepository {
  constructor() {
    this.db = DB;
    this.model = this.db.matches;
  }

  async read(id) {
    let sql = `SELECT Matches.Id,
    t1.name as "homeTeam",
    t2.name as "guestTeam" 
    FROM Matches
    INNER JOIN Teams as t1
    ON "homeTeam" = t1.Id
    INNER JOIN Teams as t2
    ON "guestTeam" = t2.Id`;
    if (id) {
      sql += ` WHERE Matches.Id = ${id}`;
    }
    const results = await this.db.sequelize.query(sql, { raw: true });
    return results[0].map((team) => new Match(team));
  }

  async create(data) {
    return this.model.create(data);
  }

  async delete(id) {
    return this.model.destroy({ where: { id } });
  }

  async update(id, data) {
    return this.model.update(data, { where: { id } });
  }
}

module.exports = MatchRepository;
