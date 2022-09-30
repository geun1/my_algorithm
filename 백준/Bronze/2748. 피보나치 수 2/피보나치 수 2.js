const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim() * 1;

solution(input);

function solution(input) {
  if (input < 3) return console.log(1);
  let lst = [0n, 1n, 1n];
  for (let i = 3; i <= input; i++) {
    lst.push(BigInt(lst[i - 2] + lst[i - 1]));
  }
  console.log(lst[input].toString());
}
