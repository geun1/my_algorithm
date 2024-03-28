const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const [n, w, L] = input[0].split(" ").map(Number); // Number로 변환
  const trucks = input[1].split(" ").map(Number);
  const bridge = new Array(w).fill(0);
  let totalWeightOnBridge = 0;
  let time = 0;

  while (trucks.length > 0 || totalWeightOnBridge > 0) {
    totalWeightOnBridge -= bridge.shift(); // 다리를 빠져나가는 트럭의 무게를 뺌
    if (trucks.length > 0) {
      if (totalWeightOnBridge + trucks[0] <= L) {
        let truck = trucks.shift();
        bridge.push(truck);
        totalWeightOnBridge += truck;
      } else {
        bridge.push(0); // 다리에 트럭을 추가하지 않고, 시간만 증가시킴
      }
    } else {
      bridge.push(0); // 남은 트럭이 없으면 0을 추가
    }
    time++;
  }
  console.log(time);
}
