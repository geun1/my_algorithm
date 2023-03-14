//문제: 14470
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d, e] = [
    input[0],
    input[1],
    input[2],
    input[3],
    input[4],
  ].map(Number);
  let result = 0;
  if (a < 0) {
    result += c * (a * -1);
    result += d;
    result += b * e;
  } else {
    result += (b - a) * e;
  }
  console.log(result);
}
