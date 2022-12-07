const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  let num = input[0];
  input.splice(0, 1);
  const result = [];
  for (let i = 0; i < input[0].length; i++) {
    let char = input[0][i];
    for (let j = 1; j < num; j++) {
      if (input[j][i] !== char) char = "?";
    }
    result.push(char);
  }
  console.log(result.join(""));
}
