const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);

let a = n;
let b = m;

function changePring(a, b) {
    // a = m; // 복사본이 변한 것
    // b = n;
    return [b, a];
}

[a, b] = changePring(a, b);

console.log(a, b);