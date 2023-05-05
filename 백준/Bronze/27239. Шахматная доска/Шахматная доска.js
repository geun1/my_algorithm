//문제: 27239
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer = "";
  const arr = ["h", "a", "b", "c", "d", "e", "f", "g"];
  answer += arr[+input[0] % 8];
  answer += parseInt((+input[0] - 1) / 8) + 1;
  console.log(answer);
}
