//문제: 19944
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  if (b === 1 || b === 2) console.log("NEWBIE!");
  else if (b <= a) console.log("OLDBIE!");
  else console.log("TLE!");
}
