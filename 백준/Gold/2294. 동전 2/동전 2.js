//문제: 2294
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, target] = input.shift().split(" ").map(Number);
  const input_set = new Set(input);
  const input_arr = [...input_set].map(Number);
  //   console.log(input_arr);
  const dp = new Array(target + 1);
  dp[0] = -1;

  for (let i = 0; i <= target; i++) {
    const temp_list = [];
    if (i < Math.min(...input_arr)) dp[i] = -1;
    else {
      if (input_arr.includes(i)) dp[i] = 1;
      else {
        for (let num of input_arr) {
          if (i > num && dp[i - num] !== -1) temp_list.push(dp[i - num]);
        }
        // const temp_list_set = new Set(temp_list);
        // const temp_arr = [...temp_list_set];
        dp[i] = Math.min(...temp_list) + 1;
        // console.log(i, temp_list, dp);
      }
    }
  }
  dp[target] === Infinity ? console.log(-1) : console.log(dp[target]);
  //   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
  //   1 2 3 4 1 2 3 4 5 2  3  1  2  3  3
}
