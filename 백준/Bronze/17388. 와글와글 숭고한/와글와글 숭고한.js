//문제: 17388
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = input[0].split(" ").map(Number);
  if (a + b + c < 100) {
    if (a < b && a < c) console.log("Soongsil");
    else if (b < a && b < c) console.log("Korea");
    else if (c < a && c < b) console.log("Hanyang");
  } else {
    console.log("OK");
  }
}
