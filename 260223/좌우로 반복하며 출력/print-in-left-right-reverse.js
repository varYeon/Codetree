const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    const arr = [];

    for (let j = 1; j <= n; j++) {
        arr.push(j);
    }

    if (i % 2 === 0) {
        arr.reverse();
    }
    console.log(arr.join(""));
}