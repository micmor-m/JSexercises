function createObj(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    obj[string[i]] = obj[string[i]] + 1 || 1;
  }
  return obj;
}

function anagrams(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const strB = stringB.replace(/[^\w]/g, "").toLowerCase();

  const objA = createObj(strA);
  const objB = createObj(strB);

  const objALen = Object.keys(objA).length;
  const objBLen = Object.keys(objB).length;

  if (objALen !== objBLen) {
    return false;
  } else {
    for (const ch in objA) {
      if (objA[ch] !== objB[ch]) {
        return false;
      }
    }
  }

  return true;
}

console.log(anagrams("rail safety", "fairy tales")); // true
console.log(anagrams("RAIL! SAFETY!", "fairy tales")); // true
console.log(anagrams("Hi there", "bye there")); // false
