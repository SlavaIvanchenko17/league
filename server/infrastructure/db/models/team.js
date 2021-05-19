const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Teams extends Model {
    static associate(models) {
      Teams.hasMany(models.matches, {
        foreignKey: 'homeTeam',
      });
      Teams.hasMany(models.matches, {
        foreignKey: 'guestTeam',
      });
    }
  }
  Teams.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goalScored: {
      type: DataTypes.STRING,
      allowNull: true,
      default: 0,
    },
    goalСonceded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
  }, {
    sequelize,
    modelName: 'teams',
  });
  return Teams;
};
