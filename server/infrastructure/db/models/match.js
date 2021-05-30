'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    static associate(models) {
      Match.belongsTo(models.teams, {
        foreignKey: 'homeId',
      });
      Match.belongsTo(models.teams, {
        foreignKey: 'guestId',
      });
    }
  }
  Match.init(
    {
      homeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      guestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'matches',
    },
  );
  return Match;
};
