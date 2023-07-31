//문제: 2577
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input.map(Number);
  let a = arr[0] * arr[1] * arr[2] + "";
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < a.length; i++) {
    answer[+a[i]] += 1;
  }
  console.log(answer.join("\n"));
}
