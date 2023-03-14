//문제: 13118
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split(" ");
  let answer = 0;
  arr.forEach((e, idx) => {
    if (e === input[1].split(" ")[0]) answer = idx + 1;
  });
  console.log(answer);
}
