//문제: 25640
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer = 0;
  let n = input.shift();
  let i = input.shift();
  for (let j = 0; j < i; j++) {
    if (input[j] === n) answer++;
  }
  console.log(answer);
}
