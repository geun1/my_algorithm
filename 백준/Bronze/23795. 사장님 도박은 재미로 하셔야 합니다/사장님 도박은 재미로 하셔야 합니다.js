//문제: 23795
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer = 0;
  while (1) {
    const line = input.shift();
    if (line === "-1") break;
    answer += +line;
  }
  console.log(answer);
}
