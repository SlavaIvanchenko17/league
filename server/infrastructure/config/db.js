'use strict';

module.exports = {
  db: {
    database: 'test',
    username: 'slava',
    password: '12345',
    dialect: 'postgres',
    define: {
      timestamps: false,
    },

    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
  },
};
