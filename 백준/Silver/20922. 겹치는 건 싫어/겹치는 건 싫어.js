//문제: 20922
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [N, K] = input.shift().split(" ").map(Number);
  const arr = input[0].split(" ").map(Number);
  const intMap = {};
  let maxLength = 0;
  let i = 0;
  let j = 0;

  while (i <= j && j < N) {
    while (intMap[arr[j]] === K) {
      intMap[arr[i]]--;
      i++;
    }
    maxLength = Math.max(maxLength, j - i + 1);
    intMap[arr[j]] = (intMap[arr[j]] ?? 0) + 1;
    j++;
  }

  console.log(maxLength);
}
