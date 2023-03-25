//문제: 17009
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d, e, f] = [
    input[0],
    input[1],
    input[2],
    input[3],
    input[4],
    input[5],
  ].map(Number);
  if (3 * a + 2 * b + c > 3 * d + 2 * e + f) {
    console.log("A");
  } else if (3 * a + 2 * b + c < 3 * d + 2 * e + f) {
    console.log("B");
  } else {
    console.log("T");
  }
}
