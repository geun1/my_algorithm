const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(Number(input));

function solution(input) {
  let result = 0;
  while (input >= 5 && input != 6 && input != 8) {
    result++;
    input -= 5;
  }
  while (input > 0 && input != 3 && input != 1) {
    result++;
    input -= 2;
  }
  if (input === 3 || input === 1) return console.log(-1);
  console.log(result);
}