//문제: 10610
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split("").map(Number);
  if (!arr.includes(0)) console.log(-1);
  else {
    arr.splice(arr.indexOf(0), 1);
    let n = arr.reduce((acc, now) => acc + now, 0);
    if (!(n % 3 === 0)) console.log(-1);
    else {
      console.log(arr.sort((a, b) => b - a).join("") + "0");
    }
  }
}
