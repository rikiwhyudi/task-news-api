function countWords(input, query) {
  let output = [];
  for (let i = 0; i < query.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (query[i] === input[j]) {
        count++;
      }
    }
    output.push(count);
  }
  return output;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(countWords(INPUT, QUERY)); //output : [ 1, 0, 2 ]
