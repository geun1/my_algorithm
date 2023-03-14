//문제: 10797
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  let answer = 0;
  input[1].split(" ").forEach((e) => {
    if (+e === n) answer++;
  });
  console.log(answer);
}
