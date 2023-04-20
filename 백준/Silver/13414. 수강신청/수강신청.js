//문제: 13414
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [k, l] = input[0].split(" ").map(Number);
  const rev_set = new Set([...input.reverse()]);
  const new_arr = [...rev_set].reverse();
  new_arr.shift();
  console.log(new_arr.splice(0, k).join("\n"));
}
