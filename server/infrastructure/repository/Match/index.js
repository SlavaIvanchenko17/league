'use strict';

const { Match, MatchTeam } = require('../../../domain/Match');
const BaseRepository = require('../BaseRepository');
const sql = require('../../constants/sql');

/**
 * Class to create a new MatchRepository
 * @extends BaseRepository
 */
class MatchRepository extends BaseRepository {
  constructor() {
    super();
    /**
     * @property {Object} model - model of match
     */
    this.model = this.db.models.matches;
  }

  /**
   * @property {function} read - read matches
   * @return {Array} - matches
   */
  async read() {
    const matches = await this.db.sequelize.query(sql, {
      raw: true,
    });
    return matches[0].map((match) => new MatchTeam(match));
  }

  /**
   * @property {function} readById - read match
   * @param {number} id - id of match
   * @return {Object} - match
   */
  async readById(id) {
    const match = await this.db.sequelize.query(`${sql} WHERE Matches.Id = ${id}`, {
      raw: true,
    });
    return match[0];
  }

  /**
   * @property {function} order - order matches
   * @param {string} order - column
   * @return {Array} - matches
   */
  async order(order) {
    const matches = await this.db.sequelize.query(`${sql} ORDER BY ${order}`, {
      raw: true,
    });
    return matches[0].map((match) => new MatchTeam(match));
  }

  /**
   * @property {function} create - create match
   * @param {Object} data - data of match
   * @return {Object} - match
   */
  async create(data) {
    const match = await this.model.create(data);
    return new Match(match);
  }

  /**
   * @property {function} delete - delete match
   * @param {number} id - id of match
   */
  async delete(id) {
    return this.model.destroy({
      where: { id },
    });
  }

  /**
   * @property {function} update - update match
   * @param {number} id - id of match
   * @param {Object} data - data of match
   */
  async update(id, data) {
    return this.model.update(data, {
      where: { id },
    });
  }
}

module.exports = MatchRepository;
