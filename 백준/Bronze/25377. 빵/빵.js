//문제: 25377
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = [];

  input.shift();
  for (let i = 0; i < input.length; i++) {
    if (+input[i].split(" ")[0] < +input[i].split(" ")[1])
      arr.push(input[i].split(" ")[1]);
  }
  if (arr.length) console.log(Math.min(...arr));
  else console.log(-1);
}
