const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// 표준 입력으로 받아도 되고 mac 환경에선 input.txt로 받을 수 도 있게 해주는 코드
solution(input);

function solution(input) {
  let n, nlist, m, mlist;
  const result = [];
  n = input[0] * 1;
  nlist = input[1]
    .split(" ")
    .map((e) => e * 1)
    .sort((a, b) => a - b);
  m = input[2] * 1;
  mlist = input[3].split(" ").map((e) => e * 1);

  const nlistSet = new Set(nlist);
  for (let i = 0; i < m; i++) {
    if (nlistSet.has(mlist[i])) {
      result.push("1");
    } else result.push("0");
  }
  console.log(result.join(" "));
}
