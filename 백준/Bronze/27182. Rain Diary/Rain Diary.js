//문제: 27182
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);

  if (n < 14) {
    let month = m + 14 - n;
    if (m + 7 > month) console.log(m + 7 - month);
    else console.log(m + 7);
  } else console.log(n - 7);
}
