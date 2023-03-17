//문제: 15552
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  let answer = "";
  input.forEach((e) => {
    answer += `${e
      .split(" ")
      .map(Number)
      .reduce((acc, now) => acc + +now, 0)}\n`;
  });
  console.log(answer.trim());
}
