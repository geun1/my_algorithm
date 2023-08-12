//문제: 28097
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = (+input[0] - 1) * 8;

  input[1]
    .split(" ")
    .map(Number)
    .forEach((e) => {
      n += e;
    });

  console.log(`${Math.floor(n / 24)} ${n % 24}`);
}
