//문제: 2490
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    let a = 0;
    e.split(" ").forEach((e) => {
      if (e === "1") a++;
    });
    if (a === 0) console.log("D");
    if (a === 1) console.log("C");
    if (a === 2) console.log("B");
    if (a === 3) console.log("A");
    if (a === 4) console.log("E");
  });
}
