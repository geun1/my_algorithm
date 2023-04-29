//문제: 26532
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(
    Math.ceil((+input[0].split(" ")[0] * +input[0].split(" ")[1]) / 4840 / 5)
  );
}
