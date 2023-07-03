//문제: 7785
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer = [];
  input.shift();
  const hash = new Object();
  input.forEach((e) => {
    let [name, state] = e.split(" ");
    hash[name] = state;
  });
  Object.keys(hash).forEach((e) => {
    if (hash[e] === "enter") answer.push(e);
  });
  answer.sort((a, b) => (a > b ? -1 : 1));
  console.log(answer.join("\n"));
}
