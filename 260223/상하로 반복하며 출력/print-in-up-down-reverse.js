const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    const arr = [];

    for (let j = 1; j <= n; j++) {
        if (j % 2 !== 0) {
            arr.push(i);
        }
        if (j % 2 === 0) {
            arr.push(n + 1 - i);
        }
    }

    console.log(arr.join(""));
}