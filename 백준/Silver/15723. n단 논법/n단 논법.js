const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const n = input[0] * 1;
  const arr = [];
  for (let i = 1; i <= n; i++) {
    inputarr = input[i].split(" ");
    arr[inputarr[0].charCodeAt(0) - 97] = inputarr[2].charCodeAt(0) - 97;
  }
  //   console.log(arr);
  const m = input[n + 1] * 1;
  let footprint = [];
  for (let i = 2; i <= m + 1; i++) {
    footprint = [];
    inputarr2 = input[n + i].split(" ");
    let start = inputarr2[0].charCodeAt(0) - 97;
    const end = inputarr2[2].charCodeAt(0) - 97;

    while (1) {
      let k = arr[start];
      footprint.push(k);
      //   console.log(start, k, arr[k]);
      //   console.log(footprint);
      if (footprint.indexOf(arr[k]) === -1) start = k;
      else break;
    }
    footprint.indexOf(end) !== -1 ? console.log("T") : console.log("F");
  }
}