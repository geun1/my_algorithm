const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  const matrix = [];

  for (let i = 1; i <= a; i++) {
    matrix.push(input[i].split(" "));
  }

  let nine_num = 0;
  let max = 0;

  // 각 행에 대해 9의 개수 계산
  for (let i = 0; i < a; i++) {
    const row = matrix[i].join(""); // 문자열 연결
    // console.log(row);
    const row_except_nines = row.split("9").join(""); // 9의 개수 계산
    // console.log(row_except_nines);
    let row_nines = row.length - row_except_nines.length;
    nine_num += row_nines;
    max = Math.max(max, row_nines);
  }

  // 각 열에 대해 9의 개수 계산
  for (let j = 0; j < b; j++) {
    let col_nines = 0;
    let line = "";
    for (let i = 0; i < a; i++) {
      line += matrix[i][j];
    }
    line_except_nines = line.split("9").join("");
    let line_nines = line.length - line_except_nines.length;
    max = Math.max(max, line_nines);
  }

  console.log(nine_num - max);
}

solution(input);