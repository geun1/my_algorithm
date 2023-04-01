//문제: 21631
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [white, black] = input[0].split(" ").map(BigInt);
  if (black <= white) console.log(black.toString());
  else console.log((white + 1n).toString());
}
