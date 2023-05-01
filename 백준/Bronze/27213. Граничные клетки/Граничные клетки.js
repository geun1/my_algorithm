//문제: 27213
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = [+input[0], +input[1]];
  if (a === 1 && b === 1) console.log(1);
  else if (a === 1) console.log(b);
  else if (b === 1) console.log(a);
  else console.log(2 * a + 2 * b - 4);
}
