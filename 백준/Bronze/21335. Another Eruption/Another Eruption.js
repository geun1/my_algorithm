//문제: 21335
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(Math.sqrt(+input[0] / Math.PI) * 2 * Math.PI);
}
