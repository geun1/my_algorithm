const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(".");

let result1 = [];
if (input[0].length === 1) console.log(-1);
else {
  for (let i = 0; i < input.length; i++) {
    result1.push(solution(input[i]));
  }
  result1.includes(1) ? console.log(-1) : console.log(result1.join("."));
  function solution(input) {
    let result = [];
    let len = input.length;
    while (len > 0) {
      if (len === 1 || len === 3) {
        return 1;
      } else if (len > 3) {
        result.push("AAAA");
        len -= 4;
      } else {
        result.push("BB");
        len -= 2;
      }
    }
    return result.join("");
  }
}
