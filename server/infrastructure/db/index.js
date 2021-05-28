'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

class Database {
  constructor(options) {
    this.sequelize = new Sequelize(options);
    this.models = {};
    this.loadModels();
    this.models.sequelize = this.sequelize;
    this.models.Sequelize = Sequelize;
  }

  loadModels() {
    const modelsPath = path.join(__dirname, '/models');
    const files = fs.readdirSync(modelsPath);
    for (const fileName of files) {
      if (!fileName.endsWith('.js')) continue;
      const model = require(path.join(modelsPath, fileName))(this.sequelize, Sequelize.DataTypes);
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
