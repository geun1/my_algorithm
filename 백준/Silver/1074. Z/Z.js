//문제: 1074
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let [n, x, y] = input[0].split(" ").map(Number);
  four_base = "";
  let n_num = Math.pow(2, n) / 2;
  for (let i = 0; i < n; i++) {
    if (x / n_num >= 1 && y / n_num >= 1) four_base += "3";
    else if (x / n_num >= 1 && y / n_num < 1) four_base += "2";
    else if (x / n_num < 1 && y / n_num >= 1) four_base += "1";
    else if (x / n_num < 1 && y / n_num < 1) four_base += "0";
    x = x % n_num;
    y = y % n_num;
    n_num /= 2;
  }
  let answer = 0;
  const four_base_arr = four_base.split("").reverse();
  four_base_arr.forEach((e, idx) => (answer += Math.pow(4, idx) * e));
  console.log(answer);
}
