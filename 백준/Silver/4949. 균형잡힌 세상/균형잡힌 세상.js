//문제: 4949
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    if (e === ".") return;
    const stack = [];
    for (let i = 0; i < e.length; i++) {
      if (e[i] === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else stack.push(e[i]);
      } else if (e[i] === "]") {
        if (stack[stack.length - 1] === "[") stack.pop();
        else stack.push(e[i]);
      } else if (e[i] === "(" || e[i] === "[") stack.push(e[i]);
    }
    stack.length ? console.log("no") : console.log("yes");
  });
}
