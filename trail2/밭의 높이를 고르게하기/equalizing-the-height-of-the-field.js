const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
// n번 중 연속 t번 이상 h 높이 -> 최소 비용
const arr = input[1].split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n - t; i++) {
    let price = 0;

    // 연속, t번 이상, 높이, 최소 비용
    // 높이고 낮추고 -> 비용이 드는건 같음 (절댓값)
    // => 0번부터 t개씩 범위 잡아서, 절댓값차로 비용 계산해서, min

    for (let j = i; j < i + t; j++) {
        const onePrice = Math.abs(arr[j] - h);
        price += onePrice;
    }

    min = Math.min(min, price);
}

console.log(min);
