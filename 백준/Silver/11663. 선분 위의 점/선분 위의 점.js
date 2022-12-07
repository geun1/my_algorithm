const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// 표준 입력으로 받아도 되고 mac 환경에선 input.txt로 받을 수 도 있게 해주는 코드
solution(input);

function solution(input) {
  let n = input[0].split(" ")[0] * 1;
  let m = input[0].split(" ")[1] * 1;
  const dotLocation = input[1]
    .split(" ")
    .map((e) => e * 1)
    .sort((a, b) => a - b);
  const lineLocation = [];
  const answer = [];
  for (let i = 0; i < m; i++) {
    lineLocation.push(input[i + 2].split(" ").map((e) => e * 1));
  }

  for (let i = 0; i < m; i++) {
    // 선분 하나하나씩 보면서 선분의 왼쪽 끝 바로 오른쪽에 있는 점, 오른쪽 끝 바로 왼쪽에 있는 점 을 찾으면 두 사이 곗수를 통해 쉽게 구하면 된다. 그러면 그 두 점을 이분탐색을 통해 찾는다.  레츠 고
    // 왼쪽 찾기
    let left_start = 0;
    let left_end = n - 1;
    let left = lineLocation[i][0];
    while (left_start <= left_end) {
      let mid = parseInt((left_start + left_end) / 2);

      dotLocation[mid] < left ? (left_start = mid + 1) : (left_end = mid - 1);
    }

    let right_start = 0;
    let right_end = n - 1;
    let right = lineLocation[i][1];
    while (right_start <= right_end) {
      let mid = parseInt((right_start + right_end) / 2);

      dotLocation[mid] > right
        ? (right_end = mid - 1)
        : (right_start = mid + 1);
    }

    answer.push(right_end - left_end);
  }
  console.log(answer.join("\n"));

  // 완전탐색으로 하는 풀이 -> 시간초과
  // for (let j = 0; j < n; j++) {
  //   let p = 0;
  //   for (let k = 0; k < m; k++) {
  //     if (
  //       lineLocation[j][0] <= dotLocation[k] &&
  //       dotLocation[k] <= lineLocation[j][1]
  //     )
  //       p++;
  //   }
  //   answer.push(p);
  // }
  // for (let i = 0; i < answer.length; i++) {
  //   console.log(answer[i]);
  // }
  // 그래서 이분탐색으로 시간줄여야함
}
