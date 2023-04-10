//문제: 17283
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let l = +input[0];
  let r = +input[1];
  let answer = 0;
  let dim = 1;
  while (Math.floor((l * r) / 100) > 5) {
    answer += Math.pow(2, dim++) * Math.floor((l * r) / 100);

    l = Math.floor((l * r) / 100);
  }
  console.log(answer);
}