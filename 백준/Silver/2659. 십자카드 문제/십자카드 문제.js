//문제: 2659
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split(" ");
  const make_time_num = (arr) => {
    return Math.min(
      arr[0] + arr[1] + arr[2] + arr[3],
      arr[1] + arr[2] + arr[3] + arr[0],
      arr[2] + arr[3] + arr[0] + arr[1],
      arr[3] + arr[0] + arr[1] + arr[2]
    );
  };
  time_arr = new Set();
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      for (let c = 1; c < 10; c++) {
        for (let d = 1; d < 10; d++) {
          time_arr.add(make_time_num([a + "", b + "", c + "", d + ""]));
        }
      }
    }
  }
  const brr = [...time_arr];
  console.log(brr.indexOf(make_time_num(arr)) + 1);
}
