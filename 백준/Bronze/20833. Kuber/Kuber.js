//문제: 20833
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let num = +input[0];
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    answer += i * i * i;
  }
  console.log(answer);
}
