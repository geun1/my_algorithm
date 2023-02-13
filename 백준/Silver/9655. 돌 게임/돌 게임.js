//문제: 9655
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  +input[0] % 2 === 0 ? console.log("CY") : console.log("SK");
}
