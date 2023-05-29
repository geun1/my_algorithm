//문제: 14891
const { dir } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input.splice(0, 4).map((e) => e.split("").map(Number));
  let n = +input.shift();
  const heyjeon = (tob, direction) => {
    if (direction === -1) tob.push(tob.splice(0, 1)[0]); //반시계
    else if (direction === 1) tob.splice(0, 0, tob.pop()); // 시계
  };

  input.forEach((e) => {
    const [n_tob, direction] = e.split(" ").map(Number);
    // heyjeon(arr[n_tob - 1], direction);
    const [one_right, two_left, two_right, three_left, three_right, four_left] =
      [arr[0][2], arr[1][6], arr[1][2], arr[2][6], arr[2][2], arr[3][6]];

    const yungeul = [];
    one_right !== two_left ? yungeul.push(true) : yungeul.push(false);
    two_right !== three_left ? yungeul.push(true) : yungeul.push(false);
    three_right !== four_left ? yungeul.push(true) : yungeul.push(false);

    if (n_tob === 1) {
      heyjeon(arr[0], direction);
      if (yungeul[0]) {
        heyjeon(arr[1], direction * -1);
        if (yungeul[1]) {
          heyjeon(arr[2], direction);
          if (yungeul[2]) {
            heyjeon(arr[3], direction * -1);
          }
        }
      }
    }
    if (n_tob === 2) {
      heyjeon(arr[1], direction);
      if (yungeul[0]) heyjeon(arr[0], direction * -1);
      if (yungeul[1]) {
        heyjeon(arr[2], direction * -1);
        if (yungeul[2]) {
          heyjeon(arr[3], direction);
        }
      }
    }
    if (n_tob === 3) {
      heyjeon(arr[2], direction);
      if (yungeul[2]) heyjeon(arr[3], direction * -1);
      if (yungeul[1]) {
        heyjeon(arr[1], direction * -1);
        if (yungeul[0]) heyjeon(arr[0], direction);
      }
    }
    if (n_tob === 4) {
      heyjeon(arr[3], direction);
      if (yungeul[2]) {
        heyjeon(arr[2], direction * -1);
        if (yungeul[1]) {
          heyjeon(arr[1], direction);
          if (yungeul[0]) heyjeon(arr[0], direction * -1);
        }
      }
    }
  });
  let answer = 0;
  if (arr[0][0]) answer += 1;
  if (arr[1][0]) answer += 2;
  if (arr[2][0]) answer += 4;
  if (arr[3][0]) answer += 8;
  console.log(answer);
}
