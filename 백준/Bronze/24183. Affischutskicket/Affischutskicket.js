//문제: 24183
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [c4, a3, a4] = input[0].split(" ").map(Number);
  console.log(
    (
      0.229 * 0.324 * c4 * 2 +
      0.297 * 0.42 * 2 * a3 +
      0.21 * 0.297 * a4
    ).toFixed(6)
  );
}
