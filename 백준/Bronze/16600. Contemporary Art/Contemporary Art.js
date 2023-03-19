//문제: 15610
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  console.log(parseFloat(Math.sqrt(n) * 4).toFixed(8));
}
