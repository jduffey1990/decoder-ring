const caesarModule = (function () {
  const alphabet = {
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

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    if (encode === false) {
      shift = -shift;
    }

    let lowerInput = input.toLowerCase();
    let newInput = "";

    for (let i = 0; i < input.length; i++) {
      let letter = lowerInput[i];
      if (!alphabet[letter]) {
        newInput += letter;
        continue;
      }

      let newTotal = alphabet[letter] + shift;

      if (newTotal > 26) {
        newTotal -= 26;
      } else if (newTotal < 1) {
        newTotal += 26;
      }

      newInput += Object.keys(alphabet)[newTotal - 1];
    }
    return newInput;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

