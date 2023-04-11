//문제: 24751
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(`${100 / +input[0]}\n${100 / (100 - +input[0])}`);
}
