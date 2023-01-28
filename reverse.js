function reverseAlphabet(originalString) {
  let reversedAlphabet = "";
  let finalString = "";
  let n = originalString.length;
  for (let i = 0; i < n; i++) {
    let c = originalString[i];
    if (c >= "A" && c <= "Z") {
      reversedAlphabet += c;
    } else if (c >= "a" && c <= "z") {
      reversedAlphabet += c.toUpperCase();
    } else {
      finalString += c;
    }
  }
  finalString = reversedAlphabet.split("").reverse().join("") + finalString;
  return finalString;
}
console.log(reverseAlphabet("NEGIE1")); //output : "EIGEN1"
