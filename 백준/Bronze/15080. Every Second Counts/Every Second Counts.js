//문제: 15080
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const start = input[0].split(" : ").map(Number);
  const end = input[1].split(" : ").map(Number);
  let start_sec = start[0] * 3600 + start[1] * 60 + start[2];
  let end_sec = end[0] * 3600 + end[1] * 60 + end[2];
  start_sec < end_sec
    ? console.log(end_sec - start_sec)
    : console.log(end_sec - start_sec + 86400);
}
