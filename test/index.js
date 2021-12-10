'use strict';

const api = require('../client/client');

const client = api('http://localhost:3000');

//create teams
{
    client
        .addTeam('Barcelona')
        .then((team) => {
            console.log(`Create team: ${team.name}`);
        })
        .catch((e) => {
            console.log(`Problem creating team: ${e.message}`);
        });

    client
        .addTeam('Real Madrid')
        .then((team) => {
            console.log(`Create team: ${team.name}`);
        })
        .catch((e) => {
            console.log(`Problem creating team: ${e.message}`);
        });
}

//create match
{
    client
        .addMatch(1, 2)
        .then((match) => {
            console.log('Create match:', match);
        })
        .catch((e) => {
            console.log(`Problem creating match: ${e.message}`);
        });
}

//get teams
{
    client
        .getTeams()
        .then((teams) => {
            console.log('===All teams===');
            console.table(teams);
        })
        .catch((e) => {
            console.log(`Problem getting teams: ${e.message}`);
        });
}

//tournament table
{
    client
        .orderTeams()
        .then((teams) => {
            console.log('===Tournament table===');
            console.table(teams);
        })
        .catch((e) => {
            console.log(`Problem getting teams: ${e.message}`);
        });
}

//get team by id
{
    client
        .getTeamById(1)
        .then((team) => {
            console.log('Team:', team);
        })
        .catch((e) => {
            console.log(`Problem getting team: ${e.message}`);
        });
}

//get match by id
{
    client
        .getMatchById(1)
        .then((match) => {
            console.log('Match:', match);
        })
        .catch((e) => {
            console.log(`Problem getting match: ${e.message}`);
        });
}

//get matches
{
    client
        .getMatches()
        .then((matches) => {
            console.log('===All matches==')
            console.table(matches);
        })
        .catch((e) => {
            console.log(`Problem getting matches: ${e.message}`);
        });
}

//delete team
{
    client
        .deleteTeam(3)
        .then((res) => {
            if (res) console.log(`Team is deleted`);
            else console.log(`No team with this id`)
        })
        .catch((e) => {
            console.log(`Problem deleting team: ${e.message}`);
        });
}

//delete match
{
    client
        .deleteMatch(2)
        .then((res) => {
            if (res) console.log(`Match is deleted`);
            else console.log(`No match with this id`)
        })
        .catch((e) => {
            console.log(`Problem deleting match: ${e.message}`);
        });
}

//finish match
{
    client
        .finishMatch(4, 3, 0)
        .then((res) => {
            console.log(`Match is finished`);
        })
        .catch((e) => {
            console.log(`Problem finishing match: ${e.message}`);
        });
}

//update team
{
    client
        .updateTeam(1, {name: 'Dynamo'})
        .then((res) => {
            console.log(`update team`);
        })
        .catch((e) => {
            console.log(`Problem updating team: ${e.message}`);
        });
}

//update match
{
    client
        .updateMatch(1, {homeId: 10})
        .then((res) => {
            console.log(`update match`);
        })
        .catch((e) => {
            console.log(`Problem updating match: ${e.message}`);
        });
}

