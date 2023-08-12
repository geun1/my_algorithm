//문제: 28290
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  function findWord(word, str) {
    return RegExp("\\b" + word + "\\b").test(str);
  }
  answer = 0;

  if (input[0].includes("asdf")) answer += 1;
  if (input[0].includes("fdsa")) answer += 5;
  if (input[0].includes("jkl;")) answer += 10;
  if (input[0].includes(";lkj")) answer += 100;
  if (answer === 11) console.log("stairs");
  else if (answer === 101) console.log("out-in");
  else if (answer === 15) console.log("in-out");
  else if (answer === 105) console.log("reverse");
  else console.log("molu");
}
