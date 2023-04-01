//문제: 21612
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let a = +input[0];
  let b = 5 * a - 400;
  console.log(b);
  if (b > 100) console.log(-1);
  else if (b === 100) console.log(0);
  else console.log(1);
}
