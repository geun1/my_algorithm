//문제: 21633
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  let a = 25 + n / 100;
  if (a < 100) console.log("100.00");
  else if (a > 2000) console.log("2000.00");
  else console.log(a.toFixed(2));
}
