const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  console.log(((100 / (+input[0] * 1.609344)) * 3.785411784).toFixed(6));
});
