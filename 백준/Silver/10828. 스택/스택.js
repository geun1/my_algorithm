const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  lst = [];
  result = [];
  let lstLen = 0;
  for (let i = 1; i <= parseInt(input[0]); i++) {
    if (input[i].startsWith("push")) {
      lst.push(input[i].substring(5));
      lstLen++;
    }
    switch (input[i]) {
      case "pop":
        if (lstLen === 0) result.push(-1);
        else {
          result.push(Number(lst.pop()));
          lstLen--;
        }
        break;
      case "size":
        result.push(lstLen);
        break;
      case "empty":
        lstLen === 0 ? result.push(1) : result.push(0);
        break;
      case "top":
        lstLen === 0 ? result.push(-1) : result.push(Number(lst[lstLen - 1]));
        break;
    }
  }
  console.log(result.join("\n"));
}
