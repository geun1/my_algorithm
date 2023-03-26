//문제: 18408
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(arr[1]);
}
