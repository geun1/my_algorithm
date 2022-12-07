// 나무자르기 BOJ 2805 송근일 gsong 24살 991206 (곧 생일)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// 표준 입력으로 받아도 되고 mac 환경에선 input.txt로 받을 수 도 있게 해주는 코드
solution(input);

function solution(input) {
  let treeNum = input[0].split(" ")[0] * 1;
  let targetLength = input[0].split(" ")[1] * 1;

  const treeArr = input[1]
    .split(" ")
    .map((e) => e * 1)
    .sort((a, b) => a - b);
  //[ 10, 15, 17, 20 ]
  let left, right, mid;
  left = 0;
  right = treeArr[treeNum - 1];
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    let caculateLength = 0;
    treeArr.forEach((e) => {
      if (e > mid) caculateLength += e - mid;
    });

    caculateLength >= targetLength ? (left = mid + 1) : (right = mid - 1);
  }
  console.log(right);
}