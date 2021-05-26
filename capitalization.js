function capitalize(str) {
  let strArr = str.split(" ");
  strArr = strArr.map((word) => word[0].toUpperCase() + word.slice(1));
  return strArr.join(" ");
}

console.log(capitalize("a short sentence"));
console.log(capitalize("a lazy fox"));
console.log(capitalize("look, it is working!"));
