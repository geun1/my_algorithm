//문제: 14489
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let m = input[0]
    .split(" ")
    .map(Number)
    .reduce((acc, now) => acc + now, 0);
  m >= input[1] * 2 ? console.log(m - input[1] * 2) : console.log(m);
}
