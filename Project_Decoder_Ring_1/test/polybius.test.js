// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;


describe("polybius", () => {
    it("should return polybius coordinate from the given message string.", () => {
        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input)
        expect(actual).to.eql(expected);
    });
    it("should return polybius coordinate from the given statement with characters other than the alphabet intact.(capital alphabets not required in retrun)", () => {
        const input = "Hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.eql(expected);
    });
    it("should return the decoded message from the given coordinate with characters other than the alphabet intact.", () => {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const actual = polybius(input, false);
        expect(actual).to.eql(expected);
    });
    it("should return the decoded statement and include i/j.", () => {
        const input = "4432423352125413";
        const expected = "th(i/j)nkful";
        const actual = polybius(input, false);
        expect(actual).to.eql(expected);
    });
    it("should return false if the number of characters in the string excluding spaces are not even ", () => {
        const input = "44324233521254134";
        const expected = false;
        const actual = polybius(input, false);
        expect(actual).to.eql(expected);
    });
});