var uniqueRandomArray = require('unique-random-array');
var nollyWoodNames = require('./nollywood-names.json');

module.exports = {
    all: nollyWoodNames,
    random: uniqueRandomArray(nollyWoodNames),
};