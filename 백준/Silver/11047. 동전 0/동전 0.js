const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let result = 0;

  const _ = input[0].split(" ");
  const n = +_[0];
  let price = +_[1];

  input.splice(0, 1);
  input = input.map((v) => +v);
  while (price > 0) {
    for (let i = n - 1; i >= 0; i--) {
      while (price >= input[i]) {
        price -= input[i];
        result++;
      }
    }
  }
  console.log(result);
}
