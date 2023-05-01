//문제: 7562
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input.shift();
  const make_move = (x, y, depth, chess, chess_len) => {
    if (x >= 2 && y < chess_len - 1 && chess[x - 2][y + 1] === 0)
      chess[x - 2][y + 1] = depth + 1;
    if (x >= 1 && y < chess_len - 2 && chess[x - 1][y + 2] === 0)
      chess[x - 1][y + 2] = depth + 1;
    if (x >= 2 && y >= 1 && chess[x - 2][y - 1] === 0)
      chess[x - 2][y - 1] = depth + 1;
    if (x >= 1 && y >= 2 && chess[x - 1][y - 2] === 0)
      chess[x - 1][y - 2] = depth + 1;
    if (x < chess_len - 1 && y >= 2 && chess[x + 1][y - 2] === 0)
      chess[x + 1][y - 2] = depth + 1;
    if (x < chess_len - 2 && y >= 1 && chess[x + 2][y - 1] === 0)
      chess[x + 2][y - 1] = depth + 1;
    if (x < chess_len - 1 && y < chess_len - 2 && chess[x + 1][y + 2] === 0)
      chess[x + 1][y + 2] = depth + 1;
    if (x < chess_len - 2 && y < chess_len - 1 && chess[x + 2][y + 1] === 0)
      chess[x + 2][y + 1] = depth + 1;
    return chess;
  };
  for (let i = 0; i < n; i++) {
    const arr = input.splice(0, 3);
    let chess_len = +arr[0];
    const [start_x, start_y] = arr[1].split(" ").map(Number);
    const [target_x, target_y] = arr[2].split(" ").map(Number);
    const chess = [];
    // 체스판 만들기
    for (let i = 0; i < chess_len; i++) {
      const new_array = [];
      for (let j = 0; j < chess_len; j++) {
        new_array.push(0);
      }
      chess.push(new_array);
    }
    chess[start_x][start_y] = -1;
    make_move(start_x, start_y, 0, chess, chess_len);
    let depth = 1;
    if (start_x === target_x && start_y === target_y) {
      console.log(0);
      continue;
    }
    while (chess[target_x][target_y] === 0) {
      for (let i = 0; i < chess_len; i++) {
        for (let j = 0; j < chess_len; j++) {
          if (chess[i][j] === depth) make_move(i, j, depth, chess, chess_len);
        }
      }
      depth++;
    }
    // console.table(chess);
    console.log(chess[target_x][target_y]);
  }
}
