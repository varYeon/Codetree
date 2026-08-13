const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);

    let multipl = 1;
    for (let j = a; j <= b; j++) {
        multipl *= j;
    }

    console.log(multipl);
}
