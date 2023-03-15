// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const regAlphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    if (alphabet === undefined || alphabet.length !== 26) return false
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] == alphabet[j]) {
          return false
        }
      }
    }
    let returnPhrase = ""
    let subAlph = {}
    if (encode) {
      for (let i = 0; i < alphabet.length; i++) {
        subAlph[i + 1] = alphabet[i]
      }

      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (!regAlphabet[char]) {
          returnPhrase += char;
          continue;
        }
        if (regAlphabet[char]) {
          returnPhrase += subAlph[regAlphabet[char]]
        } else {
          returnPhrase += char;
        }
      }
    }
    if (!encode) {
      const flipAlpha = Object.fromEntries(Object.entries(regAlphabet).map(([k, v]) => [v, k]))
      for (let i = 0; i < alphabet.length; i++) {
        subAlph[alphabet[i]] = i + 1
      }

      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (subAlph[char]) {
          returnPhrase += flipAlpha[subAlph[char]]
        } else {
          returnPhrase += char;
        }
      }
    }
    return returnPhrase
  }

  return {
    substitution,
  };

})();

module.exports = { substitution: substitutionModule.substitution };
