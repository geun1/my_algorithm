//문제: 2003
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, target] = input.shift().split(" ").map(Number);
  const arr = input[0].split(" ").map(Number);
  let result = 0;
  let left = 0;
  let right = 0;
  let sum = arr[left];
  while (left < n && right < n) {
    if (sum === target) {
      result++;
      sum += arr[++right];
    } else if (sum < target) {
      sum += arr[++right];
    } else if (sum > target) {
      sum -= arr[left++];
    }
  }
  console.log(result);
}
