const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  result = [];
  input.splice(0, 1);
  for (let i = 0; i < input.length; i++) {
    input.splice(i, 1, Number(input[i]));
  }

  input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    result.push(input[i] * (input.length - i));
  }
  console.log(Math.max.apply(null, result));
}
