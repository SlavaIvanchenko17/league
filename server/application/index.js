const TeamServices = require('./Team');
const MatchSevices = require('./Match');

module.exports = {
    ...TeamServices,
    ...MatchSevices,
}