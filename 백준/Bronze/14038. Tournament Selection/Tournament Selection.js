//문제: 14038
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let num = 0;
  input.forEach((e) => {
    if (e === "W") num++;
  });
  if (num === 5 || num === 6) console.log(1);
  if (num === 3 || num === 4) console.log(2);
  if (num === 1 || num === 2) console.log(3);
  if (num === 0) console.log(-1);
}
