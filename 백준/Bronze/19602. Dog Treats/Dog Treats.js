//문제: 19602
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  1 * +input[0] + 2 * +input[1] + 3 * +input[2] < 10
    ? console.log("sad")
    : console.log("happy");
}
