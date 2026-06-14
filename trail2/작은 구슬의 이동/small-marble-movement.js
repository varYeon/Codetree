const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
let x = Number(r);
let y = Number(c);

const dx = [0, 1, -1, 0], dy = [1, 0, 0, -1];

const mapper = {
    'R': 0,
    'D': 1,
    'U': 2,
    'L': 3
};
let direction = mapper[d];

function inRange(x, y) {
    return x >= 1 && x <= n && y >= 1 && y <= n;
}

for (let i = 0; i < t; i++) {
    let nx = x + dx[direction];
    let ny = y + dy[direction];

    if (!inRange(nx, ny)) {
        direction = 3 - direction;
        continue;
    }

    x = nx;
    y = ny;
}

console.log(x, y);
