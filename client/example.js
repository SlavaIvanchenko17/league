'use strict';

const league = require('./client');

const client = league.Client('http://localhost:3000');

client
  .orderTeams()
  .then((data) => {
    console.log('=== Tournament table ===');
    console.table(data);
  })
  .catch((e) => {
    console.log(`Problem gettins teams: ${e.message}`);
  });
