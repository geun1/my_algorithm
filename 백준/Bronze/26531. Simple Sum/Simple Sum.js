//문제: 26531
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split(" ");
  if (+arr[0] + +arr[2] === +arr[4]) console.log("YES");
  else console.log("NO");
}
