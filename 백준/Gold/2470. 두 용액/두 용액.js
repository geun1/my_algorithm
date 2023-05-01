//문제: 2470
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  //   console.log(arr);
  let front = 0;
  let back = arr.length - 1;
  let a;
  let b;
  let min = Math.abs(arr[front] + arr[back]);
  while (front < back) {
    if (min >= Math.abs(arr[front] + arr[back])) {
      a = front;
      b = back;
      min = Math.abs(arr[front] + arr[back]);
    }
    if (
      Math.abs(arr[front + 1] + arr[back]) <
      Math.abs(arr[front] + arr[back - 1])
    )
      front++;
    else back--;
  }
  console.log(arr[a], arr[b]);
}