'use strict';

const sql = `SELECT Matches.Id,
"homeTeam" as "homeId",
"guestTeam" as "guestId",
t1.name as "homeName",
t2.name as "guestName" 
FROM Matches
INNER JOIN Teams as t1
ON "homeTeam" = t1.Id
INNER JOIN Teams as t2
ON "guestTeam" = t2.Id`;

module.exports = sql;
