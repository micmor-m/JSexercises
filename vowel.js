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

console.log(vowels("Hi there!"));
console.log(vowels("WHY DO YOU ASK?"));
console.log(vowels("why"));
