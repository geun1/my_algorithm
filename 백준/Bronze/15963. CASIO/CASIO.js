//문제: 15963
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  if (input[0].split(" ")[0] === input[0].split(" ")[1]) console.log(1);
  else console.log(0);
}
