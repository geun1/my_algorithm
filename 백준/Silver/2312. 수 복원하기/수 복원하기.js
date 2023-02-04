const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

solution(input);

function solution(input) {
  input.shift();
  for (let i = 0; i < input.length; i++) {
    let value = +input[i];
    for (let j = 2; j <= value; j++) {
      let count = 0;
      while (value % j === 0) {
        value /= j;
        count++;
      }
      if (count !== 0) {
        console.log(j, count);
      }
    }
  }
}