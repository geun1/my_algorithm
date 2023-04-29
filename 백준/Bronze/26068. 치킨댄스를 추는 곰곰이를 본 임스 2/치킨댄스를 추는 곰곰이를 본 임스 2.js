//문제: 26068
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  let answer = 0;
  input.forEach((e) => {
    if (+e.split("-")[1] <= 90) answer++;
  });
  console.log(answer);
}
