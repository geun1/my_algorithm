const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const n = input[0];
  const lst = [];
  let result = 0;
  const data = input[1]
    .split(" ")
    .map((v) => BigInt(v))
    .sort((a, b) => (a < b ? -1 : 1));
  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      lst.push(data[i] + data[n - i - 1]);
    }
  } else {
    lst.push(data[n - 1]);

    for (let i = 0; i < n / 2 - 1; i++) {
      lst.push(data[i] + data[n - i - 2]);
    }
  }
  lst.sort((a, b) => (a < b ? 1 : -1));
  console.log(String(lst[0]));
}