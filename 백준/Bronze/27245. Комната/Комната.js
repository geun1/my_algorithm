//문제: 27245
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  answer = "good";
  const [a, b, c] = [+input[0], +input[1], +input[2]];

  if (a / b > 2 || a / b < 0.5) answer = "bad";
  if (Math.min(a, b) / c < 2) answer = "bad";
  console.log(answer);
}
