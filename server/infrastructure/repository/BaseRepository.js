'use strict';

const Database = require('../db');
const config = require('../config');

/**
 * Class to create abstract class
 */
class BaseRepository {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    if (proto.constructor === BaseRepository) {
      throw new Error('Abstract class');
    }
    /**
     * @property {Object} db - database
     */
    this.db = new Database(config.db);
  }

  read() {
    throw new Error('Metod is not implement');
  }

  readById(id) {
    throw new Error('Metod is not implement');
  }

  order(order) {
    throw new Error('Metod is not implement');
  }

  create(data) {
    throw new Error('Metod is not implement');
  }

  delete(id) {
    throw new Error('Metod is not implement');
  }

  update(id, data) {
    throw new Error('Metod is not implement');
  }
}

module.exports = BaseRepository;
