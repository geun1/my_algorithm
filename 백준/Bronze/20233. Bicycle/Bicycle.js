//문제: 20233
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d, T] = [
    input[0],
    input[1],
    input[2],
    input[3],
    input[4],
  ].map(Number);
  let resultA = 0;
  let resultB = 0;
  resultA += a;
  resultB += c;
  if (T > 30) resultA += (T - 30) * b * 21;
  if (T > 45) resultB += (T - 45) * d * 21;
  console.log(`${resultA} ${resultB}`);
}
