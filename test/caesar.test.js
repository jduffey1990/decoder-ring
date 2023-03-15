// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
    it("should return false if the shift amount is 0", () => {
        const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!", 0)
        expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
        const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!", 56)
        expect(actual).to.be.false;
    });

    it("should return false if the shift amount is les than -25", () => {
        const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!", 56)
        expect(actual).to.be.false;
    });

    it("should encode a message by shifting the letters", () => {
        const actual = caesarModule.caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.eql(expected);
    });

    it("should leave spaces and other symbols as is", () => {
        const actual = caesarModule.caesar("a & message", 3)
        const expected = "d & phvvdjh"
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters", () => {
        const actual = caesarModule.caesar("A Message", 3)
        const expected = "d phvvdjh"
        expect(actual).to.eql(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
        const actual = caesarModule.caesar("zebra", 3)
        const expected = "cheud"
        expect(actual).to.eql(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
        const actual = caesarModule.caesar("zebra", -3)
        const expected = "wbyox"
        expect(actual).to.eql(expected);
    });

    it("should decode a message by shifting letters in the opposite direction", () => {
        const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.eql(expected);
    });

})

