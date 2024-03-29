// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polyEncode = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52,
    l: 13, m: 23, n: 33, o: 43, p: 53,
    q: 14, r: 24, s: 34, t: 44, u: 54,
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }
  const polyDecode = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  }

  function polybius(input, encode = true) {
    let lowerInput = input.toLowerCase();
    let newInput = "";

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let letter = lowerInput[i];
        if (!polyEncode[letter]) {
          newInput += letter;
          continue;
        }
        newInput += polyEncode[letter];
      }
    }

    if (!encode) {
      let spacesRemoved = input.replace(" ", "")
      if (spacesRemoved.length % 2 !== 0) return false;

      let spacesIndex = [];
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          spacesIndex.push(Math.floor(i / 2));
          i--;
          continue;
        }
        let twoNumbers = `${input[i]}${input[i + 1]}`;
        newInput += polyDecode[twoNumbers];
      }

      for (let i = 0; i < spacesIndex.length; i++) {
        newInput = newInput.slice(0, spacesIndex[i]) + " " + newInput.slice(spacesIndex[i]);
      }
    }

    return newInput;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
