//문제: 16199
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const birth = input[0].split(" ").map(Number);
  const now = input[1].split(" ").map(Number);

  birth[1] * 30 + birth[2] <= now[1] * 30 + now[2]
    ? console.log(now[0] - birth[0])
    : console.log(now[0] - birth[0] - 1);
  console.log(now[0] - birth[0] + 1);
  console.log(now[0] - birth[0]);
}
