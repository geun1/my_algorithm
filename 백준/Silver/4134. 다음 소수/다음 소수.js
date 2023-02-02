//문제: 4134
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  function nextPrime(n) {
    if (n < 2) return 2;
    let i, j, isPrime;
    for (i = n; i <= 4000000007; i++) {
      isPrime = true;
      for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return i;
      }
    }
  }
  let i = input.shift() * 1;
  input.forEach((e) => {
    console.log(nextPrime(+e).toString());
  });
}
