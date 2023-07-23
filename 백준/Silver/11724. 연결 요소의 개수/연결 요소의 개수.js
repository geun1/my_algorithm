//문제: 11724
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const check = Array.from({ length: N + 1 }, () => false);
  const connect = Array.from({ length: N + 1 }, () => []);
  input.forEach((e) => {
    const [a, b] = e.split(" ").map(Number);
    connect[a].push(b);
    connect[b].push(a);
  });

  const dfs = (v) => {
    if (check[v] === true) return;
    check[v] = true;
    for (let i = 0; i < connect[v].length; i++) {
      if (check[connect[v][i]] === false) {
        dfs(connect[v][i]);
      }
    }
  };
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    if (!check[i]) {
      dfs(i);
      cnt++;
    }
  }
  console.log(cnt);
}
