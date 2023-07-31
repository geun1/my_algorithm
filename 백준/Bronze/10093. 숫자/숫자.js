//문제: 10093
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, m] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (n === m) {
    console.log(0);
    return;
  }
  answer = "";
  answer += m - n - 1;
  answer += "\n";
  for (let i = n + 1; i < m; i++) {
    answer += i;
    answer += " ";
  }
  console.log(answer.trim());
}
