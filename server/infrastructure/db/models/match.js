'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    static associate(models) {
      Match.belongsTo(models.teams, {
        foreignKey: 'homeTeam',
      });
      Match.belongsTo(models.teams, {
        foreignKey: 'guestTeam',
      });
    }
  }
  Match.init(
    {
      homeTeam: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      guestTeam: {
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
