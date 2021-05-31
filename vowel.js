function vowels(str) {
  let counter = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (const ch of str.toLowerCase()) {
    if (vowel.includes(ch)) {
      counter++;
    }
  }
  return counter;
}

// With reg expression
function vowelsRegExpr(str) {
  const matches = str.match(/[aeiou]/gi); // g is for dont stop at the first match but keep looking in all string
  // i is key insensitive to compare capital and small letters
  return matches ? matches.length : 0;
}

console.log(vowels("Hi there!"));
console.log(vowels("WHY DO YOU ASK?"));
console.log(vowels("why"));

console.log(vowelsRegExpr("Hi there!"));
console.log(vowelsRegExpr("WHY DO YOU ASK?"));
console.log(vowelsRegExpr("why"));
