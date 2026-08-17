const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(inputs[0]);

for (let i = 1; i <= n; i++) {
    const [a, b] = inputs[i].split(' ').map((a) => Number(a));
    let sum = 0;

    for (let j = a; j <= b; j++) {
        if (j % 2 === 0) sum += j;
    }

    console.log(sum);
}
