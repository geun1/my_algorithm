//문제: 5347
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();

  const is_sosu = Array.from({ length: 1000000 }, () => true);
  is_sosu[0] = false;
  is_sosu[1] = false;
  for (let i = 2; i * i < 1000000; i++) {
    if (is_sosu[i]) {
      for (let j = i * i; j < 1000000; j += i) {
        is_sosu[j] = false;
      }
    }
  }
  //   console.log(is_sosu);
  input.forEach((e) => {
    let [a, b] = e.split(" ").map(Number);
    if (a === b) {
      console.log(a);
    } else {
      const sosu = [];
      for (let i = 1; i < Math.min(a, b); i++) {
        if (is_sosu[i] && a % i === 0 && b % i === 0) {
          sosu.push(i);
          a /= i;
          b /= i;
        }
      }
      let answer = 1;
      sosu.forEach((e) => (answer *= e));
      console.log(a * b * answer);
    }
  });
}
