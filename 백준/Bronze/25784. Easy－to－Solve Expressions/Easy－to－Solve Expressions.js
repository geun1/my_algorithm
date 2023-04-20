//문제: 25784
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (arr[0] + arr[1] === arr[2]) console.log(1);
  else if (arr[0] * arr[1] === arr[2]) console.log(2);
  else console.log(3);
}
