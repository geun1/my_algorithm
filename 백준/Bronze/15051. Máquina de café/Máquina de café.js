//문제: 15051
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = [input[0], input[1], input[2]].map(Number);
  const [a1, b1, c1] = [2 * b + 4 * c, 2 * a + 2 * c, 4 * a + 2 * b].sort(
    (a, b) => a - b
  );
  console.log(a1);
}
