//문제: 20839
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [x, y, z] = input[0].split(" ").map(Number);
  const [a, b, c] = input[1].split(" ").map(Number);
  if (b < y / 2) console.log("E");
  else if (b >= y / 2 && b < y) console.log("D");
  else if (b === y && a < x / 2) console.log("C");
  else if (b === y && a >= x / 2 && a < x) console.log("B");
  else console.log("A");
}
