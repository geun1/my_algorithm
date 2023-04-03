//문제: 24079
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  if (+input[0] + +input[1] <= +input[2]) console.log(1);
  else console.log(0);
}