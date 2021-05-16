'use strict';

const id = require('./id');
const Sequelize = require('sequelize');

module.exports = sequelize => {
    const model = sequelize.define('teams', {
        id,
        'name': { 
            type: Sequelize.STRING, 
            allowNull: false 
        },
        'goalScored': { 
            type: Sequelize.STRING, 
            allowNull: true,
            default: 0 
        },
        'goalСonceded': { 
            type: Sequelize.INTEGER, 
            allowNull: true,
            default: 0,  
        },
        'points': { 
            type: Sequelize.INTEGER, 
            allowNull: true,
            default: 0  
        },
    });

    const associate = models => {
        model.hasMany(models.match, {
            foreignKey: 'homeTeam',

        });
        model.hasMany(models.match, {
            foreignKey: 'guestTeam',
        })
    }

  return { model, associate };
};