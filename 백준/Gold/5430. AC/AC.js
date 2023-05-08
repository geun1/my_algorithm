//문제: 5430
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let j = +input.shift();
  for (let i = 0; i < j; i++) {
    let check_D = 0;
    let check_R = 0;
    let [p, n, arr] = input.splice(0, 3);
    p.split("").forEach((e) => {
      if (e === "D") check_D += 1;
      if (e === "R") check_R += 1;
    });
    if (check_D > n) {
      console.log("error");
      continue;
    } else {
      const num_list = arr.split("[").join("").split("]").join("").split(",");
      let n = 0;
      let m = 0;
      p.split("R").forEach((e, idx) => {
        if (idx % 2 === 0) n += e.length;
        if (idx % 2 === 1) m += e.length;
      });
      num_list.splice(0, n);
      num_list.reverse().splice(0, m);
      if (check_R % 2 === 1) console.log(`[${num_list.join(",")}]`);
      else console.log(`[${num_list.reverse().join(",")}]`);
    }
  }
}