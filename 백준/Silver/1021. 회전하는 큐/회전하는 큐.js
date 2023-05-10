//문제: 1021
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = [];
  let answer = 0;
  for (let i = 1; i <= input[0].split(" ")[0]; i++) {
    arr.push(i);
  }
  input[1].split(" ").forEach((e) => {
    let way = arr.indexOf(+e);
    if (way > arr.length / 2) {
      way = arr.length - way;
      for (let i = 0; i < way; i++) {
        arr.splice(0, 0, arr.splice(arr.length - 1, 1)[0]);
        answer++;
      }
    } else {
      for (let i = 0; i < way; i++) {
        arr.push(arr.splice(0, 1)[0]);

        answer++;
      }
    }
    arr.splice(0, 1)[0];
  });
  console.log(answer);
}
