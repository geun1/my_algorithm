//문제: 17903
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split(" ").map(Number);

  arr[0] < 8 ? console.log("unsatisfactory") : console.log("satisfactory");
}
