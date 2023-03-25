//문제: 16727
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  const [c, d] = input[1].split(" ").map(Number);
  let Persepolis = a + d;
  let Esteghlal = b + c;
  if (Persepolis > Esteghlal) {
    console.log("Persepolis");
  } else if (Persepolis < Esteghlal) {
    console.log("Esteghlal");
  } else {
    if (b > d) {
      console.log("Esteghlal");
    } else if (b < d) {
      console.log("Persepolis");
    } else console.log("Penalty");
  }
}
