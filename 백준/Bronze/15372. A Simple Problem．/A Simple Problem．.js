//문제: 15372
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  let answer = "";
  input.forEach((e) => {
    answer += `${e * e}\n`;
  });
  console.log(answer.trim());
}
