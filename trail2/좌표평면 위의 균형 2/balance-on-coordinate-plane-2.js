const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// const arr = input[1].trim().split(' ').map(Number);

/**
 * 1. grid를 만들어 점을 찍고, 구역별로 모든 칸을 돌면서 점 세기 -> X, 최소 101X101 개를 다 뒤져야 함
 * 2. grid를 만들지 않고, arr을 순회하면서 점을 기준으로 어떤 구역에 속하는지 세기 -> V
 */

let minDots = Number.MAX_SAFE_INTEGER;

// x축/y축 평행선 긋기 (짝수만)
for (let lineX = 0; lineX <= 100; lineX += 2) {
    for (let lineY = 0; lineY <= 100; lineY += 2) {
        let a = 0, b = 0, c = 0, d = 0;
        let dots = 0;

        for (let i = 1; i <= n; i++) {
            const [x, y] = input[i].split(' ').map(Number);

            if (x < lineX && y < lineY) a++;
            else if (x > lineX && y < lineY) b++;
            else if (x < lineX && y > lineY) c++;
            else if (x > lineX && y > lineY) d++;
        }

        dots = Math.max(a, b, c, d);
        minDots = Math.min(minDots, dots);
    }
}

console.log(minDots);
