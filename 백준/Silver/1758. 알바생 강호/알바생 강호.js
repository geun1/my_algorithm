const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

solution(input);
function solution(input) {
  n = input[0];
  input.splice(0, 1);
  input.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    input[i] - i < 0 ? (input[i] = 0) : input.splice(i, 1, input[i] - i);
  }
  result = input.reduce((a, b) => a + b, 0);
  console.log(result);
}
