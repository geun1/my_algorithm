// 정수 제곱근 BOJ 2417 송근일 gsong 24살 991206 (곧 생일)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString() * 1;
// 표준 입력으로 받아도 되고 mac 환경에선 input.txt로 받을 수 도 있게 해주는 코드
solution(input);

function solution(input) {
  let left, right, mid;
  left = 0;
  right = input;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    mid * mid < input ? (left = mid + 1) : (right = mid - 1);
  }
  console.log(left);
}
