//문제: 15680
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  +input[0]
    ? console.log("Leading the Way to the Future")
    : console.log("YONSEI");
}
