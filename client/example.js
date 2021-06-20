'use strict';

const api = require('./client');

const client = api('http://localhost:3000');

client
  .getTeamById(4)
  .then((data) => {
    console.log('=== Tournament table ===');
    console.table(data);
  })
  .catch((e) => {
    console.log(`Problem gettins teams: ${e.message}`);
  });
