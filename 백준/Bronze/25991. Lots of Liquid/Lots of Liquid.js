//문제: 25991
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  let n = 0;
  const arr = input[0].split(" ");
  arr.forEach((e) => {
    n += Math.pow(e, 3);
  });
  console.log(Math.pow(n, 1 / 3).toFixed(6));
}
