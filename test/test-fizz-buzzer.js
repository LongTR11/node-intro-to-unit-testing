const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return fizz', function() {
        let expected = 'fizz';
        let actual = fizzBuzzer(9);
        expect(actual).to.equal(expected);
    });
    it('should return buzz', function() {
        let expected = 'buzz';
        let actual = fizzBuzzer(10);
        expect(actual).to.equal(expected);
    });
    it('should return fizz-buzz', function() {
        let expected = 'fizz-buzz';
        let actual = fizzBuzzer(30);
        expect(actual).to.equal(expected);
    });
    it('should return num must be a number', function() {
        expect(function() {
            fizzBuzzer(false)
        }).to.throw(Error);
    })
    it('should return 17', function() {
        let expected = 17;
        let actual = fizzBuzzer(17);
        expect(actual).to.equal(expected);
    })
});

