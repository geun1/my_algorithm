//문제: 24356
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d] = input[0].split(" ").map(Number);
  let time = 0;
  let e = a * 60 + b;
  let f = c * 60 + d;
  e <= f ? (time += f - e) : (time += 1440 - e + f);
  console.log(time, Math.floor(time / 30));
}
