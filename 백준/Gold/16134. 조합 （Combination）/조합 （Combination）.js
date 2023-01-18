//문제: 16134
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, k] = input[0].split(" ").map(Number);
  const combination = (n, k) => {
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result = (result * (n - (k - i))) / i;
    }
    return result;
  };
  console.log(combination(n, k) % 1000000007);
}