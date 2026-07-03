const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let t = 0; //sum
let newArr = [];
let min = s;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {

        newArr = arr.filter((_, idx) => idx !== i && idx !== j);

        t = newArr.reduce((acc, current) => acc + current, 0);

        const divide = Math.abs(t - s);
        min = Math.min(min, divide);
    }
}

console.log(min);
