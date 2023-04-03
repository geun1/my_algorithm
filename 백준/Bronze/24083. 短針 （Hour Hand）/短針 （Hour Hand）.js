//문제: 24083
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = (+input[0] + +input[1]) % 12;
  if (n === 0) console.log(12);
  else console.log(n);
}
