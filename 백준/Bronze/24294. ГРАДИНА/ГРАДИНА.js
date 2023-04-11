//문제: 24294
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [w1, h1, w2, h2] = [input[0], input[1], input[2], input[3]].map(Number);
  let answer = 0;
  answer += h1 * 2;
  answer += h2 * 2;
  w1 > w2 ? (answer += w1 * 2) : (answer += w2 * 2);
  answer += 4;
  console.log(answer);
}
