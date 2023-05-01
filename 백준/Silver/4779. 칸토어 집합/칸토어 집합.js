//문제: 4779
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = ["-", "- -"];
  for (let j = 1; j <= 12; j++) {
    let str = "";
    for (let i = 0; i < arr[j].length; i++) {
      str += " ";
    }
    arr.push(arr[j] + str + arr[j]);
  }
  //   console.log(arr[0]);
  //   console.log(arr[1]);
  //   console.log(arr[2]);
  //   console.log(arr[3]);
  //   console.log(arr[4]);
  //   console.log(arr[5]);
  //   console.log(arr[6]);

  input.forEach((e) => {
    console.log(arr[+e]);
  });
}
