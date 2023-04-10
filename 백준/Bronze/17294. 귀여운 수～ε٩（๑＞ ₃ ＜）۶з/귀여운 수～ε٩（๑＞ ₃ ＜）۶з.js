//문제: 17294
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split("").map(Number);
  let a;
  for (let i = 0; i < arr.length - 1; i++) {
    let n = arr[i] - arr[i + 1];
    if (i === 0) a = n;
    else if (n !== a) return console.log("흥칫뿡!! <(￣ ﹌ ￣)>");
  }
  return console.log("◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!");
}
