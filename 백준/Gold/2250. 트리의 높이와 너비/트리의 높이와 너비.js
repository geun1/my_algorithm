//문제: 2250
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();

  const arr = {};

  // 루트 노드 찾기
  const n_num = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    let [a, b, c] = input[i].split(" ").map(Number);
    n_num[a - 1] += 1;
    n_num[b - 1] += 1;
    n_num[c - 1] += 1;
  }
  const root_node = n_num.indexOf(1) + 1;

  const ak = [root_node];
  for (let i = 0; i < n; i++) {
    let k = input[i].split(" ")[0];
    arr[k] = [input[i].split(" ")[1], input[i].split(" ")[2]];
  }
  // 각 노드당 연결 노드 정리
  const recur = (node) => {
    if (arr[node][0] != "-1") {
      ak.splice(ak.indexOf(node), 0, arr[node][0]);
      recur(arr[node][0]);
    }
    if (arr[node][1] != "-1") {
      ak.splice(ak.indexOf(node) + 1, 0, arr[node][1]);
      recur(arr[node][1]);
    }
  };

  recur(root_node);

  const ak1 = ak.filter((e) => e != "-1").map(Number);

  // 왼쪽노드 루트 노드 오른쪽 노드 순으로 정리
  const level = [
    [root_node],
    arr[root_node.toString()].map(Number).filter((e) => e != "-1"),
  ];

  while (1) {
    const next_level = [];

    level[level.length - 1].forEach((e) => {
      if (e != "-1") {
        next_level.push(...arr[e.toString()].map(Number));
      }
    });
    if (!next_level.length) break;
    level.push(next_level.filter((e) => e != "-1"));
  }
  const answer = [];
  level.pop();
  level.forEach((e, idx) => {
    answer.push([
      ak1.indexOf(e[e.length - 1]) - ak1.indexOf(e[0]) + 1,
      idx + 1,
    ]);
  });
  //   console.log("level: ", level);
  //   console.log("ak1: ", ak1);
  //   console.log("answer: ", answer);
  answer.sort((a, b) => b[0] - a[0]);
  console.log(answer[0][1], answer[0][0]);
}
