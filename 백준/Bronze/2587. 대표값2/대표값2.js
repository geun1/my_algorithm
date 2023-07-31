//문제: 2587
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input.map(Number);
  let avg = arr.reduce((acc, n) => acc + n) / arr.length;
  console.log(avg);
  console.log(arr.sort((a, b) => a - b)[2]);
}
