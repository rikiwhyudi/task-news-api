function longest(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";
  let longestLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestWord = words[i];
      longestLength = words[i].length;
    }
  }

  return `${longestWord}: ${longestLength} characters`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence)); // output mengerjakan: 11 character
