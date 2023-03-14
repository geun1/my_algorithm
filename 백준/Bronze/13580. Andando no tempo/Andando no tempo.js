//문제: 13580
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const set = new Set([...arr]);
  if (set.size < 3) console.log("S");
  else if (arr[0] + arr[1] === arr[2]) console.log("S");
  else console.log("N");
}
