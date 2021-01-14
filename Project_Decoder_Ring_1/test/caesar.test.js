// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar", () => {
    it("should return decoded message string from the cipher string.", () => {
        const input = "wklqnixo"
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.eql(expected);
    });
    it("should return a cipher string from the given message string.", () => {
        const input = "thinkful";
        const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3);
        expect(actual).to.eql(expected);
    });
    it("should return the cipher statement with the space and other characters, apart from alphabets, intact.", () => {
        const input = "This is a secret message!";
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar(input, 8);
        expect(actual).to.eql(expected);
    });
    it("should return the decoded statement with the space and other characters, apart from alphabets, intact.", () => {
        const input = "bpqa qa i amkzmb umaaiom!";
        const expected = "this is a secret message!";
        const actual = caesar(input, 8, false);
        expect(actual).to.eql(expected);
    });
    it("should return false if the shift value is 0, or less than -25 or greater than 25.", () => {
        const input = "thinkful";
        const expected = false;
        const actual = caesar(input, 0);
        expect(actual).to.eql(expected);
    });
});