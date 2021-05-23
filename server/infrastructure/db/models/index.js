'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/db');

class Database{
  constructor(options){
    this.sequelize = new Sequelize(options);
    this.setting = {};
    this.loadModels();
    this.setting.sequelize = this.sequelize;
    this.setting.Sequelize = Sequelize;
  }

  loadModels(){
    fs.readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(this.sequelize, Sequelize.DataTypes);
      this.setting[model.name] = model;
    });
    
    Object.keys(this.setting).forEach((modelName) => {
      if (this.setting[modelName].associate) {
        this.setting[modelName].associate(this.setting);
      }
    });
  }
}

module.exports = Database;
