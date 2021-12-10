'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

/**
 * Class to create a new Team
 */
class Database {
  /**
   * @param {Object} options - db config
   */
  constructor(options) {
    this.sequelize = new Sequelize(options);
    this.sequelize.sync({force: false});
    this.models = {};
    this.loadModels();
  }

  /**
   * @property {function} loadModels - load models
   * @return {void}
   */
  loadModels() {
    const modelsPath = path.join(__dirname, '/models');
    const files = fs.readdirSync(modelsPath);
    for (const fileName of files) {
      if (!fileName.endsWith('.js')) continue;
      const model = require(path.join(modelsPath, fileName))(
        this.sequelize,
        Sequelize.DataTypes,
      );
      this.models[model.name] = model;
    }

    Object.keys(this.models).forEach((modelName) => {
      if (this.models[modelName].associate) {
        this.models[modelName].associate(this.models);
      }
    });
  }
}

module.exports = Database;
