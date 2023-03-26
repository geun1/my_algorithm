//문제: 18330
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = [input[0], input[1]].map(Number);
  let max = 60 + b;
  if (a < max) console.log(a * 1500);
  else {
    let answer = 0;
    answer += max * 1500;
    answer += (a - max) * 3000;
    console.log(answer);
  }
}
