//문제: 25600
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  answer = [];
  input.forEach((e) => {
    const [a, b, c] = e.split(" ").map(Number);
    if (a === b + c) answer.push(2 * a * (b + c));
    else answer.push(a * (b + c));
  });
  console.log(Math.max(...answer));
}
