//문제: 7576
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// M: 가로 칸 N: 세로 칸 2<= M,N <= 1000
solution(input);
function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);

  const dnList = [1, -1, 0, 0];
  const dmList = [0, 0, 1, -1]; // bfs로 이동시킬 dx,dy
  let tomatoCount = N * M,
    ripeCount = 0;
  let preRipeList = [];
  const box = input.map((line, m) =>
    line.split(" ").map((state, n) => {
      if (state * 1 === -1) tomatoCount--;
      if (state * 1 === 1) {
        preRipeList.push(`${m} ${n}`);
        ripeCount++;
      }
      return state * 1;
    })
  );

  let cnt = 0;
  const newRipeSet = new Set();
  while (1) {
    preRipeList.forEach((pos) => {
      const [m, n] = pos.split(" ").map(Number);
      dmList.forEach((dm, i) => {
        const dn = dnList[i],
          nextM = m + dm,
          nextN = n + dn;
        if (
          nextM < 0 ||
          nextM >= M ||
          nextN < 0 ||
          nextN >= N ||
          box[nextM][nextN] !== 0
        )
          return;
        box[nextM][nextN] = 1;
        newRipeSet.add(`${nextM} ${nextN}`);
      });
    });
    if (newRipeSet.size === 0) break;
    cnt++;
    ripeCount += newRipeSet.size;
    preRipeList = Array.from(newRipeSet);
    newRipeSet.clear();
  }

  console.log(ripeCount === tomatoCount ? cnt : -1);
}
