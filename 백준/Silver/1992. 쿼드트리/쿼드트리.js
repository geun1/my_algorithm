//문제: 1992
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const is_clear = (arr) => {
    let first = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[0].length; j++) {
        if (arr[i][j] !== first) return -2;
      }
    }
    return first;
  };
  let answer = "";
  const divide = (arr) => {
    const ret = [
      arr.slice(0, arr.length / 2).map((e) => e.splice(0, arr.length / 2)),
      arr.slice(0, arr.length / 2).map((e) => e.splice(0, arr.length / 2)),
      arr
        .slice(arr.length / 2, arr.length)
        .map((e) => e.splice(0, arr.length / 2)),
      arr
        .slice(arr.length / 2, arr.length)
        .map((e) => e.splice(0, arr.length / 2)),
    ];
    return ret;
  };

  let n = input.shift();
  const arr = input.map((e) => e.split("").map(Number));

  const recursion = (arr) => {
    let check = is_clear(arr);
    if (check === -2) {
      answer += "(";
      divide(arr).forEach((e) => {
        recursion(e);
      });
      answer += ")";
    } else if (check === 1) answer += "1";
    else if (check === 0) answer += "0";
  };

  recursion(arr);
  console.log(answer);
}
