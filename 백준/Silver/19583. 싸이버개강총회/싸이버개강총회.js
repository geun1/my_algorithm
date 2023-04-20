//문제: 19563
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [start, end, st_end] = input
    .shift()
    .split(" ")
    .map((e) => +e.split(":")[0] * 60 + +e.split(":")[1]);
  //   console.log(start, end, st_end);
  const start_arr = new Set();
  const answer = new Set();

  input.forEach((e) => {
    const [time_t, name] = e.split(" ");
    let time = time_t.split(":")[0] * 60 + time_t.split(":")[1] * 1;

    if (time > st_end) return;
    if (time <= start) start_arr.add(name);
    else if (time >= end && start_arr.has(name)) answer.add(name);
  });
  console.log(answer.size);
}
