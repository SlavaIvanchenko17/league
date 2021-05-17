const Sequelize = require('sequelize');
const id = require('./id');

module.exports = (sequelize) => {
  const model = sequelize.define('matches', {
    id,
    homeTeam: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    guestTeam: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  const associate = (models) => {
    model.belongsTo(models.team, {
      foreignKey: 'homeTeam',
    });
    model.belongsTo(models.team, {
      foreignKey: 'guestTeam',
    });
  };

  return { model, associate };
};