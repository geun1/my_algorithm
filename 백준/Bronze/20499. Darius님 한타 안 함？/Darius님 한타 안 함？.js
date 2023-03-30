//문제: 20499
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [k, d, a] = input[0].split("/").map(Number);
  if (k + a < d || d === 0) console.log("hasu");
  else console.log("gosu");
}
