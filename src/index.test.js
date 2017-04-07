var expect = require('chai').expect;
var nollyWood =  require('./index');

describe('nollywood-names', function(){
    describe('all api', function(){
        it('should be an array of strings', function(){
            expect(nollyWood.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item === 'string';
                })
            }
        });

        it('should contain James Agwa', function(){
            expect(nollyWood.all).to.include('James Agwa');
        });
    })

    describe('random api', function(){
        it('should return a random item from the nollyWood.all', function(){
            var randomItem = nollyWood.random();
            expect(nollyWood.all).to.include(randomItem);
        });

        it("should return an array of random items if passed a number", function(){
            var randomItems = nollyWood.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item){
                expect(nollyWood.all).to.include(item);
            })
        });
    });
});