// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;


describe("substitution", () => {
    it("should return cipher string from the given message string.", () => {
        const input = "thinkful";
        const expected = "jrufscpw";
        const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });
    it("should return the decoded statement string from the given cipher string", () => {
        const input = "message";
        const expected = "y&ii$r&";
        const actual = substitution(input, "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.eql(expected);
    });
    it("should return a decoded message string from the given cipher string.", () => {
        const input = "jrufscpw";
        const expected = "thinkful";
        const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
    });
    it("should return the cipher statement string from the given statement string.", () => {
        const input = "You are an excellent spy";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });
    it("should return the decoded statement string from the given cipher string.(capital alphabets not required in retrun)", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const expected = "you are an excellent spy";
        const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
    });
    it("should return false if the alphabet parameter doesn't have 26 unique characters", () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input, "short");
        expect(actual).to.eql(expected);
    });
    it("should return false if the alphabet parameter doesn't have 26 unique characters", () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input, "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.eql(expected);
    });
});