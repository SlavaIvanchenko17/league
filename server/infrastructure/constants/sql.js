'use strict';

const sql = `SELECT Matches.Id,
"homeId", "guestId",
t1.name as "homeName",
t2.name as "guestName" 
FROM Matches
INNER JOIN Teams as t1
ON "homeId" = t1.Id
INNER JOIN Teams as t2
ON "guestId" = t2.Id`;

module.exports = sql;
