//문제: 17288
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer = 0;
  const arr = input[0].split("").map(Number);
  const a = [];
  arr.forEach((e, idx) => {
    if (e === arr[idx + 1] - 1) a.push(e);
    else a.push(0);
  });
  a.join("")
    .split("0")
    .forEach((e) => {
      if (e.length === 2) answer++;
    });
  console.log(answer);
}