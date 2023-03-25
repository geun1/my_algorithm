//문제: 17863
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  if (input[0].slice(0, 3) === "555") {
    console.log("YES");
  } else console.log("NO");
}
