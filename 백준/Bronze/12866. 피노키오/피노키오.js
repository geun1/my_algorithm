//문제: 12866
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = [0, 0, 0, 0];
  let a = 1n;
  input[1].split("").forEach((e) => {
    if (e === "A") arr[0]++;
    if (e === "C") arr[1]++;
    if (e === "G") arr[2]++;
    if (e === "T") arr[3]++;
  });
  for (let i = 0; i < 4; i++) {
    if (arr[i]) a *= BigInt(arr[i]);
  }
  if (!(arr[0] > 0 && arr[1] > 0 && arr[2] > 0 && arr[3] > 0)) console.log(0);
  else console.log((a % 1000000007n).toString());
}
