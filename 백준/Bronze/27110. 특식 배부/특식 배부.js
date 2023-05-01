//문제: 27110
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  const [a, b, c] = input[1].split(" ").map(Number);
  let answer = 0;
  a >= n ? (answer += n) : (answer += a);
  b >= n ? (answer += n) : (answer += b);
  c >= n ? (answer += n) : (answer += c);
  console.log(answer);
}
