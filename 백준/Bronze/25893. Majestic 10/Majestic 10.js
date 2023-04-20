//문제: 25893
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  let answer = "";
  input.forEach((e) => {
    answer += e;
    answer += "\n";
    let n = 0;
    e.split(" ").forEach((k) => {
      if (k >= 10) n++;
    });
    if (n === 0) answer += "zilch";
    if (n === 1) answer += "double";
    if (n === 2) answer += "double-double";
    if (n === 3) answer += "triple-double";
    answer += "\n\n";
  });
  console.log(answer.trim());
}