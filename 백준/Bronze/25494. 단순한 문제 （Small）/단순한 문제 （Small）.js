//문제: 25494
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  for (let i = 0; i < input.length; i++) {
    const arr = input[i].split(" ").map(Number);
    console.log(Math.min(...arr));
  }
}
