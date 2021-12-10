'use strict';

const Team = require('../../../domain/Team');
const BaseRepository = require('../BaseRepository');

/**
 * Class to create a new TeamRepository
 * @extends BaseRepository
 */
class TeamRepository extends BaseRepository {
  constructor() {
    super();
    /**
     * @property {Object} model - model of team
     */
    this.model = this.db.models.teams;
  }

  /**
   * @property {function} read - read teams
   * @return {Array} - teams
   */
  async read() {
    const teams = await this.model.findAll({
      raw: true,
    });
    return teams.map((team) => new Team(team));
  }

  /**
   * @property {function} readById - read team
   * @param {number} id - id of team
   * @return {Object} - team
   */
  async readById(id) {
    const team = await this.model.findByPk(id, {
      raw: true,
    });
    return team;
  }

  /**
   * @property {function} order - order teams
   * @param {string} order - column
   * @return {Array} - teams
   */
  async order(order) {
    const teams = await this.model.findAll({
      order: [[order, 'DESC']],
      raw: true,
    });
    return teams.map((team) => new Team(team));
  }

  /**
   * @property {function} create - create team
   * @param {Object} data - data of team
   * @return {Object} - team
   */
  async create(data) {
    const team = await this.model.create(data);
    return new Team(team);
  }

  /**
   * @property {function} delete - delete team
   * @param {number} id - id of team
   */
  async delete(id) {
    return this.model.destroy({
      where: { id },
    });
  }

  /**
   * @property {function} update - update team
   * @param {number} id - id of team
   * @param {Object} data - data of team
   */
  async update(id, data) {
    return this.model.update(data, {
      where: { id },
    });
  }
}

module.exports = TeamRepository;
