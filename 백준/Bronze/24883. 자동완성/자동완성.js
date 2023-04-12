//문제: 24883
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  (input[0] === "N") | (input[0] === "n")
    ? console.log("Naver D2")
    : console.log("Naver Whale");
}
