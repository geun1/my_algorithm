//문제: 2444
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  let answer = "";
  for (let i = n; i >= 1; i--) {
    answer += " ".repeat(n - i);
    answer += "*".repeat(i * 2 - 1);
    answer += " ";
    if (i != 1) answer += "\n";
  }
  console.log(answer);
}
