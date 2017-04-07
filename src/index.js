var uniqueRandomArray = require('unique-random-array');
var nollyWoodNames = require('./nollywood-names.json');
var getRandomItem = uniqueRandomArray(nollyWoodNames);

module.exports = {
    all: nollyWoodNames,
    random: random,
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    }else{
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());            
        }
        return randomItems;
    }
}