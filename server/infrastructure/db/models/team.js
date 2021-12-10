'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Teams extends Model {
    static associate(models) {
      Teams.hasMany(models.matches, {
        foreignKey: 'homeId',
      });
      Teams.hasMany(models.matches, {
        foreignKey: 'guestId',
      });
    }
  }
  Teams.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      goalScored: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0,
      },
      goalConceded: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0,
      },
    },
    {
      sequelize,
      modelName: 'teams',
    },
  );
  return Teams;
};
