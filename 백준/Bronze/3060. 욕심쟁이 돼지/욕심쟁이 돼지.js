// //문제: 3060
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// solution(input);
// function solution(input) {
//   let n = +input.shift();
//   for (let i = 1; i <= n; i++) {
//     let answer = 1;
//     let limit = +input[2 * (i - 1)];
//     const pig_arr = input[2 * (i - 1) + 1].split(" ").map(Number);
//     while (1) {
//       let pig_sum = pig_arr.reduce((acc, cur) => acc + cur, 0);
//       //   console.log(pig_arr);
//       //   console.log(pig_sum);
//       if (pig_sum > limit) break;
//       answer++;
//       const new_arr = [
//         pig_sum - pig_arr[4] - pig_arr[2],
//         pig_sum - pig_arr[5] - pig_arr[3],
//         pig_sum - pig_arr[0] - pig_arr[4],
//         pig_sum - pig_arr[1] - pig_arr[5],
//         pig_sum - pig_arr[2] - pig_arr[0],
//         pig_sum - pig_arr[3] - pig_arr[1],
//       ];
//       for (let i = 0; i < 6; i++) {
//         pig_arr[i] = new_arr[i];
//       }
//     }
//     console.log(answer);
//   }
// }
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
//   console.log(input);
  let n = +input[0];
  for (let i = 1; i <= n; i++) {
    let answer = 1;
    let limit = +input[2 * i - 1];
    const pig_arr = input[2 * i].split(" ").map(Number);
    while (1) {
      let pig_sum = pig_arr.reduce((acc, cur) => acc + cur, 0);
      //   console.log(pig_arr);
      //   console.log(pig_sum);
      if (pig_sum > limit) break;
      answer++;
      const new_arr = [
        pig_sum - pig_arr[4] - pig_arr[2],
        pig_sum - pig_arr[5] - pig_arr[3],
        pig_sum - pig_arr[0] - pig_arr[4],
        pig_sum - pig_arr[1] - pig_arr[5],
        pig_sum - pig_arr[2] - pig_arr[0],
        pig_sum - pig_arr[3] - pig_arr[1],
      ];
      for (let i = 0; i < 6; i++) {
        pig_arr[i] = new_arr[i];
      }
    }
    console.log(answer);
  }
});
