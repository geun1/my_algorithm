//문제: 28281
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  let answer = 2001;
  for (let i = 0; i < n - 1; i++) {
    if (answer > arr[i] + arr[i + 1]) answer = arr[i] + arr[i + 1];
  }
  console.log(answer * m);
}
