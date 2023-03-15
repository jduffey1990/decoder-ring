// Write your
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("Jordan's tests for his code", () => {
    describe("encoding a message", () => {
        it("should encode a message by translating each letter to number pairs", () => {
            const actual = polybiusModule.polybius("thinkful")
            const expected = "4432423352125413"
            expect(actual).to.equal(expected);
        });

        it("should translate both 'i' and 'j' to 42", () => {
            const actual = polybiusModule.polybius("jiggle")
            const expected = "424222221351";
            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const message = "my message";
            const actual = polybiusModule.polybius("Hello world")
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by translating each pair of numbers into a letter", () => {
            const actual = polybiusModule.polybius("23513434112251", false)
            const expected = "message";
            expect(actual).to.equal(expected);
        });

        it("should translate 42 to both 'i' and 'j'", () => {
            const actual = polybiusModule.polybius("424222221351", false);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });

        it("should leave spaces as is", () => {
            const actual = polybiusModule.polybius("3251131343 2543241341", false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });

        it("should return false if the length of all numbers is odd", () => {
            const actual = polybiusModule.polybius("2345 235134341122514", false);
            expect(actual).to.be.false;
        });
    });
});