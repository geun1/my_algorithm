//문제: 21638
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [t1, v1] = input[0].split(" ").map(Number);
  const [t2, v2] = input[1].split(" ").map(Number);
  if (t2 < 0 && v2 >= 10)
    console.log(
      "A storm warning for tomorrow! Be careful and stay home if possible!"
    );
  else if (t1 > t2)
    console.log("MCHS warns! Low temperature is expected tomorrow.");
  else if (v1 < v2)
    console.log("MCHS warns! Strong wind is expected tomorrow.");
  else console.log("No message");
}
