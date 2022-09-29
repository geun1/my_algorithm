const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let result = 0;
solution(input);

function solution(input) {
  const n = input[0];
  let target = input[1];
  //   console.log(n, target);
  if (target % 10 === 1) {
    target = Math.floor(target / 10);
    result++;
  } else if (
    target % 10 === 3 ||
    target % 10 === 5 ||
    target % 10 === 7 ||
    target % 10 === 9 ||
    target < n
  ) {
    return console.log(-1);
  } else {
    target = target / 2;
    result++;
  }
  target === n ? console.log(result + 1) : solution([n, target]);
}
