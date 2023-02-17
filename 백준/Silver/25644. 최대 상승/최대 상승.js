//문제: 25644
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  const arr = input[1].split(" ").map(Number);
  let benefit = 0;
  let result = 0;

  for (let i = n - 1; i >= 0; i--) {
    benefit = Math.max(benefit, arr[i]);
    result = Math.max(result, benefit - arr[i]);
  }
  console.log(result);
}
