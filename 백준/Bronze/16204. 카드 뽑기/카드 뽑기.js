//문제: 16204
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(a - b + c);
}
